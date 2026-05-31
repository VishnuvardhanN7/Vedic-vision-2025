import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cron from "node-cron";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import { buildMedicalResponse } from "./medicalModel.js";
import User from "./models/User.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGO_URI ||
  process.env.MONGODB_URI ||
  "mongodb://127.0.0.1:27017/vedic_vision_2026";

let transporter;
let usingEthereal = false;
const emailReady = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);

async function initTransporter() {
  if (emailReady) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    transporter.verify(async (err) => {
      if (err) {
        console.error("❌ SMTP verification failed:", err.message || err);
        // fallback to Ethereal for development/debugging
        try {
          const testAccount = await nodemailer.createTestAccount();
          transporter = nodemailer.createTransport({
            host: testAccount.smtp.host,
            port: testAccount.smtp.port,
            secure: testAccount.smtp.secure,
            auth: { user: testAccount.user, pass: testAccount.pass },
          });
          usingEthereal = true;
          console.warn("⚠️ Falling back to Ethereal test account due to SMTP verification failure.");
          console.log(`Ethereal test account user=${testAccount.user} pass=${testAccount.pass}`);
        } catch (fallErr) {
          console.error("❌ Failed to create Ethereal test account:", fallErr);
        }
      } else {
        console.log("✅ SMTP transporter verified and ready to send emails.");
      }
    });
  } else {
    // create ethereal test account for local debugging
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: { user: testAccount.user, pass: testAccount.pass },
      });
      usingEthereal = true;
      console.warn("⚠️ EMAIL_USER/EMAIL_PASS not set — using Ethereal test account for email preview.");
      console.log(`Ethereal test account user=${testAccount.user} pass=${testAccount.pass}`);
    } catch (err) {
      console.error("❌ Failed to create Ethereal test account:", err);
    }
  }
}

// Initialize transporter now
initTransporter();

// Endpoint to trigger an immediate test email (useful for debugging credentials)
app.post("/send-test-email", async (req, res) => {
  const to = req.body?.to || req.query?.to || process.env.EMAIL_TEST_TO;
  if (!transporter) {
    return res.status(500).json({ error: "Email transporter not initialized" });
  }
  if (!to) return res.status(400).json({ error: "Recipient email required as 'to' in body or query" });

  const mailOptions = {
    from: process.env.EMAIL_USER || "no-reply@example.com",
    to,
    subject: "[Test] Medication Reminder - Test Email",
    text: "This is a test email from the Med Reminder backend to verify SMTP configuration.",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("📧 Test email sent:", info.response || info);
    const preview = usingEthereal ? nodemailer.getTestMessageUrl(info) : null;
    res.json({ success: true, info: info.response || info, preview });
  } catch (err) {
    console.error("❌ Test email failed:", err);
    res.status(500).json({ error: err.message || err });
  }
});

console.log("📧 Email config:", {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS ? "****" : "MISSING",
});

console.log("✅ Local medical model loaded successfully.");

const scheduledEmails = [];

app.post("/api/gpt", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ answer: "Query required" });
  }

  try {
    const result = buildMedicalResponse(query);
    console.log(`Query received for local model: "${query}" → ${result.category}`);
    res.json(result);
  } catch (error) {
    console.error("❌ Local model error:", error.response?.data || error.message || error);
    res.status(500).json({
      answer: "Unable to generate a response right now.",
      fallback: true,
    });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const normalizedEmail = String(email).toLowerCase().trim();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await new User({ name, email: normalizedEmail, password: hashedPassword }).save();

    res.json({ message: "✅ User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const normalizedEmail = String(email).toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "dev-secret", {
      expiresIn: "1h",
    });

    res.json({ message: "✅ Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/schedule-email", (req, res) => {
  const { tabletName, time, email, duration } = req.body;

  if (!tabletName || !time || !email) {
    return res.status(400).json({ error: "Tablet name, time, and email are required" });
  }

  if (!emailReady) {
    return res.status(500).json({
      error: "Email service is not configured. Set EMAIL_USER and EMAIL_PASS in backend/.env.",
    });
  }

  const [hour, minute] = time.split(":");
  if (isNaN(Number(hour)) || isNaN(Number(minute))) {
    return res.status(400).json({ error: "Invalid time format. Use HH:MM." });
  }

  const cronExpression = `${minute} ${hour} * * *`;
  let daysLeft = duration || 1;

  const job = cron.schedule(
    cronExpression,
    () => {
      if (daysLeft <= 0) {
        job.stop();
        return;
      }

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Tablet Reminder: ${tabletName}`,
        text: `Hello!\n\nThis is a reminder to take your tablet: ${tabletName}.\nScheduled Time: ${time}\n\nStay healthy!\n\n- Your Med Reminder App`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error("❌ Email error:", err);
        } else {
          console.log(`📧 Reminder email sent to ${email}:`, info.response);
        }
      });

      daysLeft--;
    },
    { scheduled: true, timezone: "Asia/Kolkata" }
  );

  scheduledEmails.push(job);
  console.log(
    `🕒 Scheduled email job for ${email} at ${time} (cron: ${cronExpression}). Total scheduled: ${scheduledEmails.length}`
  );

  res.json({
    success: true,
    scheduledFor: time,
    to: email,
    tablet: tabletName,
    duration,
  });
});

// Development helper: list users (omit passwords)
app.get("/debug-users", async (req, res) => {
  try {
    const users = await User.find({}, { password: 0, __v: 0 });
    res.json({ count: users.length, users });
  } catch (err) {
    console.error("❌ /debug-users error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected");
    console.log(`🗄️ Using database: ${mongoose.connection.name}`);
  } catch (error) {
    console.warn(
      "⚠️ MongoDB connection failed; starting server without DB:",
      error.message
    );
  } finally {
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });
  }
};

startServer();