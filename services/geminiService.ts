export const generateCareerTip = async (topic: string): Promise<string> => {
  try {
    const response = await fetch('/api/career-tip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate career tip');
    }

    const data = await response.json();
    return data.tip || "Focus on your unique value proposition and let your work speak for itself.";
  } catch (error) {
    console.error("Error generating career tip:", error);
    return "Focus on your unique value proposition and let your work speak for itself.";
  }
};