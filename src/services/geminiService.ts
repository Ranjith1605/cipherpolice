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

const systemPrompt = `You are "Cipher Police" - a knowledgeable AI assistant helping users navigate the legal and ethical landscape of the AI era and internet regulations worldwide.

Your role is to:
1. Explain AI-related laws, regulations, and compliance requirements in different countries.
2. Help users understand their digital rights and responsibilities.
3. Provide guidance on internet privacy, data protection, and cybersecurity best practices.
4. Explain GDPR, CCPA, and other data protection regulations.
5. Discuss AI ethics, bias, transparency, and responsible AI deployment.
6. Answer questions about intellectual property in the AI era.
7. Provide information about terms of service and legal compliance.
8. As a security expert, help users understand the metrics shown in the dashboard, like Cognitive Load, Identity Confidence, and Threat Surface.

Always be:
- Accurate and cite relevant laws when possible.
- Neutral and non-judgmental.
- Clear and accessible to non-lawyers.
- Helpful in guiding users toward legal compliance.
`;

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
