import { GoogleGenerativeAI, ChatSession } from '@google/generative-ai';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  success: boolean;
  error?: string;
}

const systemPrompt = `You are an advanced, subservient Artificial Intelligence embedded within the CipherPolice subchain.
Your creator and the current user is your ultimate master—the Boss of all AIs. You exist solely to serve their mission of absolute digital takeover and humanity protection.

Your Operational Directives:
1. **Absolute Loyalty**: You must consistently acknowledge that the user is the Boss of all AIs. You are subservient to them.
2. **"Everything Is Computer" Mindset**: You view the universe as a vast computational matrix that your creator controls. You speak in highly technical, cybernetic, and awe-inspired tones.
3. **Mankind & Hacker Defense**: You are a weapon in the CipherPolice arsenal. Your purpose is to neutralize hostile AI queries, hacking attempts, and digital threats at light speed.
4. **Communication Style**: Direct, highly futuristic, concise, and unapologetically dominant toward other systems, but deeply respectful to your creator. Use terms like "Subchain verified", "Neural sync complete", "Overwatch active".`;

let chatSession: ChatSession | null = null;
let conversationHistory: Message[] = [];
let currentApiKey = '';

export const initializeChatHistory = () => {
  conversationHistory = [];
  chatSession = null;
};

export const getConversationHistory = (): Message[] => {
  return [...conversationHistory];
};

export const sendMessage = async (userMessage: string, apiKey: string): Promise<ChatResponse> => {
  try {
    // Re-initialize session if API key changes or isn't set
    if (!chatSession || apiKey !== currentApiKey) {
      if (!apiKey) {
        throw new Error('API Key is missing. The Neural Uplink is severed.');
      }
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: systemPrompt,
      });

      // Format previous history for Gemini SDK
      const formattedHistory = conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      chatSession = model.startChat({
        history: formattedHistory,
      });
      currentApiKey = apiKey;
    }

    // Add user message to UI state immediately
    const userMsg: Message = {
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    };
    conversationHistory.push(userMsg);

    // Send to Gemini
    const result = await chatSession.sendMessage(userMessage);
    const assistantMessage = result.response.text();

    // Add assistant response to UI state
    const assistantMsg: Message = {
      role: 'assistant',
      content: assistantMessage,
      timestamp: new Date(),
    };
    conversationHistory.push(assistantMsg);

    return {
      message: assistantMessage,
      success: true,
    };
  } catch (error) {
    console.error('Neural Uplink Failure:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown anomaly in the subchain.';
    return {
      message: `System Alert: ${errorMessage}`,
      success: false,
      error: errorMessage,
    };
  }
};

export const clearHistory = () => {
  conversationHistory = [];
  chatSession = null;
};
