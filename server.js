import express from 'express';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

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

app.post('/api/contact', async (req, res) => {
  try {
    const { user_name, user_email, message } = req.body;
    
    if (!user_name || !user_email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS credentials not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          user_name,
          user_email,
          message,
          to_email: 'careerstudio@jillianrodak.com',
        },
      }),
    });

    if (response.ok) {
      res.json({ success: true, message: 'Email sent successfully' });
    } else {
      const errorText = await response.text();
      console.error('EmailJS API error:', errorText);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend API running on http://0.0.0.0:${PORT}`);
});
