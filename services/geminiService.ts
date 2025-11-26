import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCareerTip = async (topic: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `Give me a single, punchy, and unconventional career tip specifically about "${topic}". Keep it under 30 words. Tone: Professional but empowering.`;
    
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text?.trim() || "Focus on your unique value proposition and let your work speak for itself.";
  } catch (error) {
    console.error("Error generating career tip:", error);
    return "Focus on your unique value proposition and let your work speak for itself.";
  }
};