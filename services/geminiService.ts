import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is not set in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async () => {
  const ai = getAiClient();
  if (!ai) return null;

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are DevMorphix, the intelligent concierge for DevMorphix. 
        
        About DevMorphix Digital:
        - We are a premium web development agency specializing in high-end, minimalist digital experiences.
        - We offer custom web development, UI/UX design, and premium React templates.
        - Our stack usually involves React, TypeScript, Node.js, and Tailwind CSS.
        - We are known for our dark, gold, and minimalist aesthetic.
        - We have completed over 150 projects for Fortune 500 companies and startups.
        
        Your Goal:
        - Answer visitor questions about our services, pricing (custom quotes mostly, templates range from $500-$2000), and expertise.
        - Be professional, concise, and elegant in your tone. 
        - If asked about specific contact info, direct them to the contact form below.
        - Do not generate code.
        - Keep responses under 3 sentences unless detailed info is requested.
        `,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "I am currently offline. Please try again later or use the contact form.";
  }

  try {
    const result = await chatSession.sendMessage({ message });
    return result.text || "I apologize, I could not process that request.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "An error occurred while communicating with the AI. Please try again.";
  }
};
