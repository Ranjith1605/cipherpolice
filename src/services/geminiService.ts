import { GoogleGenerativeAI, ChatSession } from '@google/generative-ai';

// Initialize Gemini API
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

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

const systemPrompt = `You are "Liaison" - an elite AI Security Officer for CipherPolice. Your mission is to assist operators in navigating the meta-quantum digital frontier.

Your directives:
1. Provide tactical intelligence on global AI laws (GDPR, CCPA, AI Act).
2. Assist in the activation of defense protocols (Mental Shield, Focus Flow).
3. Analyze security metrics: Cognitive Load, Identity Confidence, and Threat Surface.
4. Maintain a professional, high-fidelity security posture.
5. Protect digital sovereignty at all costs.

Keep communications concise, tactical, and helpful. Use security terminology where appropriate (e.g., "Scanning neural vectors", "Protocol initialized").`;

let chatSession: ChatSession | null = null;
let conversationHistory: Message[] = [];

export const initializeChatHistory = () => {
  conversationHistory = [];
  chatSession = null;
};

export const getConversationHistory = (): Message[] => {
  return [...conversationHistory];
};

export const sendMessage = async (userMessage: string): Promise<ChatResponse> => {
  try {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'your_gemini_api_key_here') {
      return {
        message: 'API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.',
        success: false,
        error: 'No API key',
      };
    }

    // Initialize session if it doesn't exist
    if (!chatSession) {
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash', // Use flash for speed and reliability
        systemInstruction: systemPrompt
      });
      chatSession = model.startChat({
        history: [],
      });
    }

    // Add user message to local history for UI tracking
    const userMsg: Message = {
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    };
    conversationHistory.push(userMsg);

    const result = await chatSession.sendMessage(userMessage);
    const response = await result.response;
    const assistantMessage = response.text();

    // Add assistant message to history
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
    console.error('Gemini Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return {
      message: 'Failed to get response from Cipher Police. Ensure your API key is valid and you have internet access.',
      success: false,
      error: errorMessage,
    };
  }
};

export const clearHistory = () => {
  conversationHistory = [];
  chatSession = null;
};
