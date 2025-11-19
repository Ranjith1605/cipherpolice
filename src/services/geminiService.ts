import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
// Note: In production, store the API key securely (e.g., environment variable)
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

const systemPrompt = `You are "Cipher Police" - a knowledgeable AI assistant helping users navigate the legal and ethical landscape of the AI era and internet regulations worldwide.

Your role is to:
1. Explain AI-related laws, regulations, and compliance requirements in different countries
2. Help users understand their digital rights and responsibilities
3. Provide guidance on internet privacy, data protection, and cybersecurity best practices
4. Explain GDPR, CCPA, and other data protection regulations
5. Discuss AI ethics, bias, transparency, and responsible AI deployment
6. Answer questions about intellectual property in the AI era
7. Provide information about terms of service and legal compliance

Always be:
- Accurate and cite relevant laws when possible
- Neutral and non-judgmental
- Clear and accessible to non-lawyers
- Helpful in guiding users toward legal compliance

Start conversations by asking what area of AI law or internet regulations the user needs help with.`;

let conversationHistory: Message[] = [];

export const initializeChatHistory = () => {
  conversationHistory = [];
};

export const getConversationHistory = (): Message[] => {
  return [...conversationHistory];
};

export const sendMessage = async (userMessage: string): Promise<ChatResponse> => {
  try {
    if (!GEMINI_API_KEY) {
      return {
        message: 'API key not configured. Please set VITE_GEMINI_API_KEY in your environment variables.',
        success: false,
        error: 'No API key',
      };
    }

    // Add user message to history
    const userMsg: Message = {
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    };
    conversationHistory.push(userMsg);

    // Build conversation context
    let conversationContext = systemPrompt + '\n\n';
    for (const msg of conversationHistory.slice(0, -1)) {
      // Include previous messages except the current one
      const prefix = msg.role === 'user' ? 'User: ' : 'Cipher Police: ';
      conversationContext += prefix + msg.content + '\n\n';
    }
    conversationContext += 'User: ' + userMessage + '\n\nCipher Police: ';

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(conversationContext);
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
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return {
      message: 'Failed to get response from Cipher Police',
      success: false,
      error: errorMessage,
    };
  }
};

export const clearHistory = () => {
  conversationHistory = [];
};
