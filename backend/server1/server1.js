import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

// --- Load environment variables ---
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- Ensure OPENAI_API_KEY is loaded ---
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ ERROR: OPENAI_API_KEY is NOT loaded. Check your .env file!");
  process.exit(1);
} else {
  console.log("✅ OPENAI_API_KEY loaded successfully.");
}

// --- Initialize OpenAI client ---
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// --- Optional: Test OpenAI key on startup ---
const testOpenAIKey = async () => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "Hello" }],
      max_tokens: 10,
    });
    console.log("✅ OpenAI key works. Test response:", response.choices?.[0]?.message?.content);
  } catch (error) {
    console.error("❌ OpenAI key test failed:", error.response?.data || error.message || error);
  }
};

testOpenAIKey();

// --- General ChatGPT Route ---
app.post("/api/gpt", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ answer: "Query required" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // cheaper/faster, or use "gpt-4o"
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: query },
      ],
      max_tokens: 500,
    });

    const answer = response.choices?.[0]?.message?.content || "No response";
    console.log(`Query: "${query}" → Response: ${answer}`);

    res.json({ answer });
  } catch (error) {
    console.error("❌ OpenAI API error:", error.response?.data || error.message || error);
    res.status(500).json({ answer: "Error fetching from OpenAI" });
  }
});

// --- Symptom Checker Route ---
app.post("/api/symptoms", async (req, res) => {
  const { symptoms } = req.body;

  if (!symptoms) {
    return res.status(400).json({ error: "Symptoms are required" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a medical assistant that provides safe, non-diagnostic health advice." },
        { role: "user", content: `These are the symptoms: ${symptoms}. What advice can you give?` },
      ],
      max_tokens: 300,
    });

    const advice = response.choices[0].message.content;
    res.json({ advice });
  } catch (error) {
    console.error("❌ OpenAI API error:", error.message);
    res.status(500).json({ error: "Error fetching from OpenAI" });
  }
});

// --- Start server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server1 running on http://localhost:${PORT}`)
);
