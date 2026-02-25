import { useState, useRef, useEffect } from 'react';
import { sendMessage, Message, initializeChatHistory } from '../services/geminiService';

interface ChatSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const quickChips = [
  { label: '🧠 My Cognitive Risk', prompt: 'What is my current cognitive risk level and how can I reduce it?' },
  { label: '🛡️ Enable Deep Focus', prompt: 'How does CipherPolice Deep Focus / Mental Shield work?' },
  { label: '🤖 AI Browser Threats', prompt: 'What AI browser threats is CipherPolice currently monitoring for?' },
  { label: '⚖️ GDPR & AI Laws', prompt: 'Explain GDPR compliance requirements for AI systems.' },
];

export const ChatSidebar = ({ isOpen, onToggle }: ChatSidebarProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(true);

    // Simulate typing delay for realism
    await new Promise(r => setTimeout(r, 600));
    const response = await sendMessage(text);
    setIsTyping(false);

    const assistantMsg: Message = {
      role: 'assistant',
      content: response.success
        ? response.message
        : `⚠️ ${response.error || 'Connection to AI failed. Please try again.'}`,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(inputValue);
  };

  const handleClearChat = () => {
    initializeChatHistory();
    setMessages([]);
  };

  const formatTime = (d: Date) =>
    `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed ${isOpen ? 'right-[26rem]' : 'right-6'} bottom-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center`}
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #ef4444, #dc2626)'
            : 'linear-gradient(135deg, #00f3ff22, #050a14)',
          border: isOpen ? '2px solid rgba(239,68,68,0.5)' : '2px solid rgba(0,243,255,0.4)',
          boxShadow: isOpen
            ? '0 0 20px rgba(239,68,68,0.3)'
            : '0 0 20px rgba(0,243,255,0.25)',
        }}
        title={isOpen ? 'Close Agent' : 'Open CipherPolice Agent'}
      >
        {isOpen ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <span className="text-xl">🤖</span>
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed bottom-0 right-0 h-screen w-[26rem] z-40 flex flex-col transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          background: 'linear-gradient(180deg, #0a1628 0%, #050a14 100%)',
          borderLeft: '1px solid rgba(0,243,255,0.15)',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.6)',
        }}
      >
        {/* Header */}
        <div className="p-4 border-b" style={{ borderColor: 'rgba(0,243,255,0.1)', background: 'rgba(0,243,255,0.03)' }}>
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(0,243,255,0.2), rgba(188,19,254,0.2))', border: '1px solid rgba(0,243,255,0.3)' }}>
              <img src="/logo.png" alt="AI Agent" className="w-8 h-8 object-contain" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#050a14]" style={{ boxShadow: '0 0 6px #22c55e' }} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">CipherPolice Agent</h2>
              <p className="text-xs text-cyan-400/70 font-mono">AI Security · Legal · Cognitive Intelligence</p>
            </div>
            <button
              onClick={handleClearChat}
              className="ml-auto text-xs text-gray-600 hover:text-gray-400 transition-colors p-1"
              title="Clear chat"
            >
              🔄
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ scrollbarWidth: 'none' }}>
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center pb-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(0,243,255,0.15), rgba(188,19,254,0.15))', border: '1px solid rgba(0,243,255,0.2)' }}>
                <img src="/logo.png" alt="AI Agent" className="w-12 h-12 object-contain" />
              </div>
              <p className="text-sm text-gray-300 font-medium mb-1">CipherPolice Agent</p>
              <p className="text-xs text-gray-500 max-w-56 leading-relaxed mb-5">
                Your AI expert on security, cognitive load monitoring, and digital rights law.
              </p>
              {/* Quick Chips */}
              <div className="w-full space-y-2">
                {quickChips.map(chip => (
                  <button
                    key={chip.label}
                    onClick={() => handleSend(chip.prompt)}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all duration-200 hover:border-cyan-500/30"
                    style={{
                      background: 'rgba(0,243,255,0.04)',
                      border: '1px solid rgba(0,243,255,0.1)',
                      color: '#9ca3af',
                    }}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 overflow-hidden"
                    style={{ background: 'rgba(0,243,255,0.1)', border: '1px solid rgba(0,243,255,0.2)' }}>
                    <img src="/logo.png" alt="AI Agent" className="w-5 h-5 object-contain" />
                  </div>
                )}
                <div className="max-w-[76%]">
                  <div
                    className="px-3 py-2.5 rounded-2xl text-xs leading-relaxed"
                    style={msg.role === 'user' ? {
                      background: 'linear-gradient(135deg, rgba(0,243,255,0.15), rgba(188,19,254,0.1))',
                      border: '1px solid rgba(0,243,255,0.25)',
                      color: '#e2e8f0',
                      borderBottomRightRadius: 4,
                    } : {
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#cbd5e1',
                      borderBottomLeftRadius: 4,
                    }}
                  >
                    {msg.content}
                  </div>
                  <p className="text-[10px] text-gray-700 mt-1 px-1">{formatTime(msg.timestamp)}</p>
                </div>
              </div>
            ))
          )}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start gap-2">
              <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden"
                style={{ background: 'rgba(0,243,255,0.1)', border: '1px solid rgba(0,243,255,0.2)' }}>
                <img src="/logo.png" alt="AI Agent" className="w-5 h-5 object-contain" />
              </div>
              <div className="px-4 py-3 rounded-2xl rounded-bl-sm"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex gap-1">
                  {[0, 0.2, 0.4].map((delay) => (
                    <span
                      key={delay}
                      className="w-1.5 h-1.5 rounded-full animate-bounce"
                      style={{ background: '#00f3ff', animationDelay: `${delay}s`, boxShadow: '0 0 4px #00f3ff' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t" style={{ borderColor: 'rgba(0,243,255,0.1)', background: 'rgba(0,0,0,0.3)' }}>
          <form onSubmit={handleFormSubmit} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask CipherPolice anything…"
              disabled={isLoading}
              className="flex-1 px-3 py-2.5 rounded-xl text-sm focus:outline-none disabled:opacity-50 transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(0,243,255,0.2)',
                color: '#e2e8f0',
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-105 disabled:opacity-40"
              style={{
                background: 'linear-gradient(135deg, rgba(0,243,255,0.2), rgba(188,19,254,0.2))',
                border: '1px solid rgba(0,243,255,0.4)',
              }}
            >
              <svg className="w-4 h-4" style={{ color: '#00f3ff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(2px)' }}
          onClick={onToggle}
        />
      )}
    </>
  );
};
