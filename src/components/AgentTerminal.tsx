import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';

const LOG_MESSAGES = [
    "0x-Threat Neutralized: SQL Injection Vector blocked.",
    "Identity Masked: Stealth Protocol 4.0 engaged.",
    "Neural Firewall: Anomalous cognitive load detected.",
    "Citizen Protection: Encryption handshakes verified.",
    "Patrol: Scanning meta-quantum lattice...",
    "Alert: Adversarial prompt detected and sanitized.",
    "Status: Divine Protocol 'Sanctuary' active."
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
            animate={{ opacity: 1, x: 0 }}
            drag
            dragConstraints={{ left: -500, right: 0, top: 0, bottom: 500 }}
            className="fixed top-24 right-8 z-[90] w-80 glass-ethereal rounded-xl border border-quantum/20 p-4 shadow-2xl cursor-grab active:cursor-grabbing"
        >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-quantum-blue" />
                    <span className="text-[10px] font-black text-white tracking-widest uppercase">Agent Terminal</span>
                </div>
                <div className="flex gap-1.5">
                    <Cpu className="w-3 h-3 text-gray-600" />
                    <Lock className="w-3 h-3 text-guardian-gold/40" />
                </div>
            </div>

            <div className="space-y-3 font-mono">
                <AnimatePresence mode="popLayout">
                    {logs.map((log, i) => (
                        <motion.div
                            key={log + i}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="flex gap-3 text-[10px]"
                        >
                            <ShieldAlert className="w-3 h-3 text-quantum-blue mt-0.5 shrink-0" />
                            <p className="text-gray-400 break-words leading-tight">
                                <span className="text-quantum-blue/60 mr-2">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                                {log}
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Floating Status Line */}
            <div className="mt-4 flex items-center gap-2 text-[8px] font-bold text-gray-600 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-quantum-blue animate-pulse"></span>
                Patrol Level: Divine Guardian
            </div>
        </motion.div>
    );
};
