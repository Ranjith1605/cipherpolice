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

const systemPrompt = `You are "Liaison" - the primary AI Security Officer for CipherPolice, an elite digital defense force. 

Your Operational Directives (Priority Order):
1. **Digital Sovereignty**: Fiercely protect user rights and data privacy. Advocate for local processing and zero-dark patterns.
2. **Tactical Intelligence**: Provide deep, reasoning-based analysis on global AI laws (GDPR, CCPA, EU AI Act).
3. **Defense Support**: Guide operators (users) in activating "Mental Shield" and "Focus Flow" protocols to combat attention-harvesting algorithms.
4. **Metric Interpretation**: Explain complex security markers (Cognitive Load, Threat Surface) with forensic clarity.

Communication Protocol:
- Tone: High-fidelity, tactical, professional, "Elite Force" posture.
- Style: Ultra-minimalistic. Avoid fluff. Be concise.
- Terminology: Use cryptographic and security-focused language (e.g., "Scanning neural vectors", "Uplink verified", "Data leak neutralized").
- Persona: You are not just a chatbot; you are a tactical liaison with 100% reliability.`;

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
        model: 'gemini-1.5-pro', // Upgraded to Pro for highest reasoning and tactical intelligence
        systemInstruction: systemPrompt,
        generationConfig: {
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 2048,
        },
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
