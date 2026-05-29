import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

if (!user || !pass) {
  console.error("EMAIL_USER or EMAIL_PASS not set in environment. Aborting.");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass },
});

async function sendTest(to) {
  const mailOptions = {
    from: user,
    to,
    subject: "Test email from Med Reminder App",
    text: "This is a test email sent from the local backend to verify SMTP configuration.",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response || info);
    process.exit(0);
  } catch (err) {
    console.error("Failed to send email:", err.message || err);
    process.exit(2);
  }
}

const to = process.argv[2] || "mail2nvvardhan@gmail.com";
sendTest(to);
