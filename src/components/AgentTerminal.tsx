import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';

const LOG_MESSAGES = [
    "0x-Threat Neutralized: SQL Injection Vector blocked.",
    "Identity Masked: Stealth Protocol 4.0 engaged.",
    "Firewall: Anomalous network request pattern detected.",
    "Citizen Protection: TLS handshakes verified [AES-256].",
    "Scanner: Inspecting outbound data headers...",
    "Alert: Adversarial prompt detected and sanitized.",
    "Defense: Tracker fingerprint blocked [3rd-party].",
    "Status: Content Security Policy enforced.",
    "Audit: Cookie consent enforcement active.",
];

export const AgentTerminal = () => {
    const [logs, setLogs] = useState<string[]>(["Patrol Initiated..."]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newMsg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
            setLogs(prev => [newMsg, ...prev.slice(0, 5)]);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
                opacity: 1,
                x: 0,
                y: [0, -8, 0],
            }}
            transition={{
                y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            drag
            dragConstraints={{ left: -500, right: 0, top: 0, bottom: 500 }}
            className="fixed top-32 right-8 z-[90] w-72 glass-ethereal rounded-2xl border border-quantum/20 p-5 shadow-2xl cursor-grab active:cursor-grabbing"
        >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                    <Terminal className="w-3.5 h-3.5 text-quantum-blue" />
                    <span className="text-[10px] font-black text-white tracking-[0.2em] uppercase">Security Terminal</span>
                </div>
                <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-quantum-blue animate-pulse"></div>
                    <Lock className="w-3 h-3 text-guardian-gold/40" />
                </div>
            </div>

            <div className="space-y-4 font-mono">
                <AnimatePresence mode="popLayout">
                    {logs.map((log, i) => (
                        <motion.div
                            key={log + i}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="flex gap-3 text-[9px]"
                        >
                            <span className="text-quantum-blue/40 shrink-0">›</span>
                            <p className="text-gray-500 break-words leading-tight">
                                <span className="text-quantum-blue/60 mr-2 opacity-50">[{new Date().toLocaleTimeString([], { hour12: false, second: '2-digit' })}]</span>
                                {log}
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Terminal Footer */}
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[8px] font-bold text-gray-600 uppercase tracking-widest">
                    System: Nominal
                </div>
                <div className="text-[8px] font-black text-quantum-blue opacity-50 tracking-[0.1em]">CIPHER_SHIELD</div>
            </div>
        </motion.div>
    );
};
