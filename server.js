import express from 'express';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/career-tip', async (req, res) => {
  try {
    const { topic } = req.body;
    
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    const model = "gemini-2.5-flash";
    const prompt = `Give me a single, punchy, and unconventional career tip specifically about "${topic}". Keep it under 30 words. Tone: Professional but empowering.`;
    
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    const tip = response.text?.trim() || "Focus on your unique value proposition and let your work speak for itself.";
    
    res.json({ tip });
  } catch (error) {
    console.error("Error generating career tip:", error);
    res.status(500).json({ 
      error: 'Failed to generate career tip',
      tip: "Focus on your unique value proposition and let your work speak for itself."
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend API running on http://0.0.0.0:${PORT}`);
});
