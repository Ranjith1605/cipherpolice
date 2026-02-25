import { useState, useRef, useEffect } from 'react';
import { sendMessage, Message, initializeChatHistory } from '../services/geminiService';
import { Shield, Send, RefreshCcw, X, MessageSquare } from 'lucide-react';

interface ChatSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const quickChips = [
  { label: '🧠 Neural Risk Audit', prompt: 'Analyze my current cognitive risk vectors and suggest mitigation protocols.' },
  { label: '🛡️ Initiate Mental Shield', prompt: 'How do I activate the CipherPolice Mental Shield / Deep Focus protocol?' },
  { label: '🤖 Threat Intelligence', prompt: 'Provide a summary of the latest AI-driven browser vulnerabilities.' },
  { label: '⚖️ Sovereignty Law', prompt: 'Explain how my digital sovereignty is protected under quantum-GDPR.' },
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

    await new Promise(r => setTimeout(r, 800));
    const response = await sendMessage(text);
    setIsTyping(false);

    const assistantMsg: Message = {
      role: 'assistant',
      content: response.success
        ? response.message
        : `CRITICAL_ERROR: ${response.error || 'Uplink failed. Retrying neural link...'}`,
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
      {/* Tactical Toggle */}
      <button
        onClick={onToggle}
        className={`fixed ${isOpen ? 'right-[27rem]' : 'right-8'} bottom-8 z-50 w-14 h-14 rounded-full transition-all duration-500 hover:scale-105 flex items-center justify-center group overflow-hidden`}
        style={{
          background: 'rgba(5, 10, 20, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: isOpen ? '0 0 30px rgba(239, 68, 68, 0.1)' : '0 10px 30px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div className="absolute inset-0 bg-asi-neon/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? (
          <X className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors" />
        ) : (
          <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-asi-neon transition-colors" />
        )}
      </button>

      {/* Liaison Sidebar */}
      <div
        className={`fixed bottom-0 right-0 h-screen w-[26rem] z-40 flex flex-col transform transition-all duration-500 ease-in-out border-l border-white/5 ${isOpen ? 'translate-x-0' : 'translate-x-full shadow-none'}`}
        style={{
          background: 'rgba(5, 10, 20, 0.98)',
          backdropFilter: 'blur(20px)',
          boxShadow: isOpen ? '-30px 0 60px rgba(0,0,0,0.9)' : 'none',
        }}
      >
        {/* HUD Header */}
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center gap-5">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.02] border border-white/5">
              <Shield className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex-1">
              <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Liaison 02</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[8px] font-mono text-asi-neon/50 uppercase tracking-widest">Link Protocol Active</span>
              </div>
            </div>
            <button
              onClick={handleClearChat}
              className="p-2 text-gray-800 hover:text-gray-400 transition-all"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tactical Feed (Messages) */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8 scrollbar-hide">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-[10px] font-bold text-gray-700 uppercase tracking-[0.5em] mb-12 italic">Neural Link Standby</p>

              <div className="w-full space-y-4">
                {quickChips.map(chip => (
                  <button
                    key={chip.label}
                    onClick={() => handleSend(chip.prompt)}
                    className="w-full text-left px-5 py-4 rounded-sm text-[9px] font-bold uppercase tracking-[0.15em] transition-all duration-300 border border-white/[0.03] bg-white/[0.01] hover:border-asi-neon/20 hover:bg-white/[0.03] text-gray-600 hover:text-gray-300"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
                <div className="max-w-[85%]">
                  <div
                    className={`px-5 py-4 rounded-lg text-[13px] leading-relaxed transition-all duration-300 font-medium ${msg.role === 'user'
                      ? 'bg-white/[0.03] text-gray-300 border border-white/10'
                      : 'bg-asi-neon/5 text-gray-300 border border-asi-neon/10'
                      }`}
                  >
                    {msg.content}
                  </div>
                  <div className={`mt-3 flex items-center gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-[8px] font-bold text-gray-700 uppercase tracking-widest">{msg.role === 'assistant' ? 'Liaison' : 'Operator'}</span>
                    <span className="text-[8px] font-mono text-gray-800">{formatTime(msg.timestamp)}</span>
                  </div>
                </div>
              </div>
            ))
          )}

          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="holographic-card px-5 py-3 rounded-xl rounded-tl-none">
                <div className="flex gap-1.5 items-center">
                  {[0, 0.2, 0.4].map((delay) => (
                    <div
                      key={delay}
                      className="w-1.5 h-1.5 rounded-full bg-asi-neon"
                      style={{
                        animation: 'pulse 1.5s infinite',
                        animationDelay: `${delay}s`,
                        boxShadow: '0 0 8px var(--asi-neon)'
                      }}
                    />
                  ))}
                  <span className="ml-2 text-[10px] font-mono text-asi-neon/60 uppercase tracking-widest">Processing...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Command Input Area */}
        <div className="p-6 border-t border-white/5 bg-black/40">
          <form onSubmit={handleFormSubmit} className="relative group">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Input Command..."
              disabled={isLoading}
              className="w-full pl-5 pr-14 py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-mono placeholder-gray-700 outline-none focus:border-asi-neon/40 focus:bg-white/10 transition-all text-white tracking-widest"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-105 disabled:opacity-40 group-hover:bg-asi-neon/10"
            >
              <Send className={`w-4 h-4 transition-colors ${inputValue.trim() ? 'text-asi-neon' : 'text-gray-700'}`} />
            </button>
          </form>
          <div className="mt-4 flex justify-between items-center px-1">
            <span className="text-[8px] font-mono text-gray-700 uppercase tracking-[0.2em]">Ready For Input</span>
            <span className="text-[8px] font-mono text-gray-700 uppercase tracking-[0.2em] animate-pulse">Encryption: Aes-256</span>
          </div>
        </div>
      </div>

      {/* Neural Mask (Backdrop) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 transition-opacity duration-500 animate-fade-in"
          style={{ background: 'rgba(5, 10, 20, 0.4)', backdropFilter: 'blur(4px)' }}
          onClick={onToggle}
        />
      )}
    </>
  );
};
