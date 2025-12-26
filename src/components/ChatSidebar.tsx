import { useState, useRef, useEffect } from 'react';
import { sendMessage, Message, initializeChatHistory } from '../services/geminiService';
import { GoldText } from './ui/GoldText';

interface ChatSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ChatSidebar = ({ isOpen, onToggle }: ChatSidebarProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const response = await sendMessage(inputValue);

    if (response.success) {
      const assistantMsg: Message = {
        role: 'assistant',
        content: response.message,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } else {
      const errorMsg: Message = {
        role: 'assistant',
        content: `Error: ${response.error || response.message}`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    }

    setIsLoading(false);
  };

  const handleClearChat = () => {
    initializeChatHistory();
    setMessages([]);
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed ${isOpen ? 'right-96' : 'right-8'
          } bottom-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-110
          ${isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-gradient-to-r from-[#FFD26F] to-[#C99700] hover:brightness-110'
          }`}
        title={isOpen ? 'Close Chat' : 'Open Cipher Police Chat'}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V4a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Sidebar Panel */}
      <div
        className={`fixed bottom-0 right-0 h-screen w-96 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl shadow-black/50 z-40 transform transition-transform duration-300 flex flex-col border-l border-gold-500/30 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 border-b border-gold-500/20">
          <h2 className="text-lg font-bold text-center">
            <GoldText>
              Cipher Police
            </GoldText>
          </h2>
          <p className="text-xs text-gray-400 text-center mt-1">AI Legal Compliance Guide</p>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gold-500/30 scrollbar-track-slate-900">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-3">⚖️</div>
              <p className="text-gray-400 text-sm">
                Hi! I'm Cipher Police, your AI guide to AI era laws and digital rights.
              </p>
              <p className="text-gray-500 text-xs mt-3">Ask me about:</p>
              <ul className="text-gray-500 text-xs mt-2 space-y-1">
                <li>• GDPR, CCPA compliance</li>
                <li>• AI ethics & regulations</li>
                <li>• Digital rights & privacy</li>
                <li>• Internet laws worldwide</li>
              </ul>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm ${msg.role === 'user'
                    ? 'bg-gradient-to-r from-[#FFD26F] to-[#C99700] text-slate-900 font-medium'
                    : 'bg-slate-800 text-gray-200 border border-gold-500/20'
                    }`}
                >
                  {msg.content}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 px-4 py-2 rounded-lg border border-gold-500/20">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gold-500/20 p-4 bg-slate-950">
          <form onSubmit={handleSendMessage} className="space-y-3">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Cipher Police..."
              disabled={isLoading}
              className="w-full px-3 py-2 bg-slate-800 border border-gold-500/30 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/30 disabled:opacity-50"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="flex-1 px-3 py-2 bg-gradient-to-r from-[#FFD26F] to-[#C99700] text-slate-900 font-bold rounded-lg hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Send
              </button>
              <button
                type="button"
                onClick={handleClearChat}
                className="px-3 py-2 bg-slate-800 border border-gold-500/30 text-gray-300 rounded-lg hover:bg-slate-700 transition"
                title="Clear chat history"
              >
                🔄
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={onToggle}
        ></div>
      )}
    </>
  );
};
