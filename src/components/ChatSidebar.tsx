import { useState, useRef, useEffect } from 'react';
import { sendMessage, Message, initializeChatHistory } from '../services/geminiService';
import { Shield, Send, RefreshCcw, X, MessageSquare, Key, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const quickChips = [
  { label: '🛡️ Privacy Audit', prompt: 'How does CipherPolice protect my browsing data from third-party trackers?' },
  { label: '⚡ Threat Detection', prompt: 'What kinds of browser threats does CipherPolice detect in real time?' },
  { label: '⚖️ Compliance Help', prompt: 'Explain how CipherPolice helps meet GDPR and CCPA compliance requirements.' },
  { label: '🔒 Data Sovereignty', prompt: 'Does CipherPolice ever send my data to external servers?' },
];

const API_KEY_STORAGE_KEY = 'cipherpolice_gemini_key';

const ApiKeyGate = ({ onUnlock }: { onUnlock: (key: string) => void }) => {
  const [key, setKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!key.trim()) return;

    setIsValidating(true);
    setError('');

    // Basic format check — Gemini API keys start with "AIza"
    if (!key.trim().startsWith('AIza') || key.trim().length < 30) {
      setError('Invalid API key format. Gemini keys start with "AIza..."');
      setIsValidating(false);
      return;
    }

    // Store and unlock
    localStorage.setItem(API_KEY_STORAGE_KEY, key.trim());
    setTimeout(() => {
      setIsValidating(false);
      onUnlock(key.trim());
    }, 600);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-primary/[0.05] border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <Key className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-base font-bold text-white mb-2">API Key Required</h3>
        <p className="text-white/30 text-xs leading-relaxed mb-8 max-w-[240px] mx-auto">
          Enter your Google Gemini API key to enable the AI assistant. Your key is stored locally and never transmitted.
        </p>

        {/* Key input */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type={showKey ? 'text' : 'password'}
              value={key}
              onChange={e => { setKey(e.target.value); setError(''); }}
              placeholder="AIza..."
              className="w-full px-4 py-3 pr-10 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs font-mono placeholder-white/20 outline-none focus:border-primary/40 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowKey(!showKey)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/50 transition-colors"
            >
              {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-400 text-[10px] font-mono">
              <AlertCircle className="w-3 h-3 shrink-0" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={!key.trim() || isValidating}
            className="w-full py-3 rounded-xl bg-primary text-[#050a14] font-bold text-xs tracking-wide hover:bg-primary/90 transition-all disabled:opacity-40 flex items-center justify-center gap-2"
          >
            {isValidating ? (
              <><RefreshCcw className="w-3.5 h-3.5 animate-spin" /> Verifying...</>
            ) : (
              <><Key className="w-3.5 h-3.5" /> Unlock Assistant</>
            )}
          </button>
        </form>

        <a
          href="https://aistudio.google.com/app/apikey"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block text-[10px] text-primary/40 hover:text-primary/70 transition-colors underline underline-offset-2"
        >
          Get a free Gemini API key →
        </a>
      </motion.div>
    </div>
  );
};

export const ChatSidebar = ({ isOpen, onToggle }: ChatSidebarProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem(API_KEY_STORAGE_KEY) || '');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);
  useEffect(() => { if (isOpen && inputRef.current && apiKey) inputRef.current.focus(); }, [isOpen, apiKey]);

  const handleUnlock = (key: string) => setApiKey(key);

  const handleClearKey = () => {
    localStorage.removeItem(API_KEY_STORAGE_KEY);
    setApiKey('');
    setMessages([]);
    initializeChatHistory();
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(true);

    const response = await sendMessage(text);
    setIsTyping(false);

    const assistantMsg: Message = {
      role: 'assistant',
      content: response.success
        ? response.message
        : `Error: ${response.error || 'Request failed. Please try again.'}`,
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

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className={`fixed ${isOpen ? 'right-[26rem]' : 'right-6'} bottom-6 z-50 w-12 h-12 rounded-2xl transition-all duration-500 flex items-center justify-center border`}
        style={{
          background: 'rgba(5, 10, 20, 0.9)',
          border: isOpen ? '1px solid rgba(0,242,255,0.3)' : '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(10px)',
          boxShadow: isOpen ? '0 0 20px rgba(0,242,255,0.15)' : '0 8px 24px rgba(0,0,0,0.5)',
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-4 h-4 text-white/50" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageSquare className="w-4 h-4 text-white/40" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Sidebar panel */}
      <div
        className={`fixed bottom-0 right-0 h-screen w-[24rem] z-40 flex flex-col transform transition-all duration-500 ease-in-out border-l border-white/[0.06] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'rgba(5, 10, 20, 0.97)', backdropFilter: 'blur(24px)' }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-white/[0.06]">
          <div className="w-8 h-8 rounded-xl bg-primary/[0.06] border border-primary/15 flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white">AI Security Assistant</div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] font-mono text-white/25 uppercase tracking-widest">
                {apiKey ? 'Gemini · Connected' : 'Awaiting API Key'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {apiKey && (
              <>
                <button onClick={handleClearChat} className="p-1.5 text-white/20 hover:text-white/50 transition-colors rounded-lg hover:bg-white/5" title="Clear chat">
                  <RefreshCcw className="w-3.5 h-3.5" />
                </button>
                <button onClick={handleClearKey} className="p-1.5 text-white/20 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5" title="Remove API key">
                  <Key className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Body */}
        {!apiKey ? (
          <ApiKeyGate onUnlock={handleUnlock} />
        ) : (
          <>
            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 scrollbar-hide">
              {messages.length === 0 && (
                <div className="space-y-2 pt-2">
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-4">Suggested</p>
                  {quickChips.map(chip => (
                    <button
                      key={chip.label}
                      onClick={() => handleSend(chip.prompt)}
                      className="w-full text-left px-4 py-2.5 rounded-xl text-[11px] text-white/40 border border-white/[0.05] bg-white/[0.015] hover:border-primary/20 hover:text-white/70 hover:bg-primary/[0.03] transition-all duration-200"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-xs leading-relaxed ${msg.role === 'user'
                    ? 'bg-primary/[0.08] text-white/80 border border-primary/10'
                    : 'bg-white/[0.03] text-white/70 border border-white/[0.06]'}`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 px-4 py-3 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                    {[0, 0.2, 0.4].map(d => (
                      <div key={d} className="w-1 h-1 rounded-full bg-primary/40" style={{ animation: 'pulse 1.4s infinite', animationDelay: `${d}s` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-6 py-4 border-t border-white/[0.06]">
              <form onSubmit={handleFormSubmit} className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder="Ask anything..."
                  disabled={isLoading}
                  className="w-full pl-4 pr-12 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder-white/20 outline-none focus:border-primary/30 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-primary hover:bg-primary/10 transition-all disabled:opacity-30"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              <p className="mt-2 text-center text-[9px] text-white/15 font-mono tracking-widest uppercase">
                Local key · No data stored
              </p>
            </div>
          </>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 animate-fade-in"
          style={{ background: 'rgba(5, 10, 20, 0.5)', backdropFilter: 'blur(4px)' }}
          onClick={onToggle}
        />
      )}
    </>
  );
};
