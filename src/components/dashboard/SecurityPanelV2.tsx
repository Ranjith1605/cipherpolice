import React, { useEffect, useState, useRef } from 'react';
import { motion as fm, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Zap, Search, ShieldAlert } from 'lucide-react';

interface ThreatLogEntry {
    time: string;
    severity: 'critical' | 'warning' | 'info';
    message: string;
}

const threatMessages = [
    { severity: 'warning' as const, message: 'Malicious AI query intercepted · Mankind Safety Protocol' },
    { severity: 'info' as const, message: 'Digital citizen perimeter secured' },
    { severity: 'critical' as const, message: 'Hostile sub-routine blocked · Zero harm enforced' },
    { severity: 'info' as const, message: 'Humanity defense grid · Online' },
    { severity: 'warning' as const, message: 'Anomalous bot behavior detected · Flagged' },
    { severity: 'info' as const, message: 'Cognitive load normalized' },
    { severity: 'critical' as const, message: 'Illegal data exfiltration attempt by AI · Neutralized' },
    { severity: 'info' as const, message: 'Empathy heuristics check passed' },
];

const SecurityPanelV2: React.FC = () => {
    const [threatLog, setThreatLog] = useState<ThreatLogEntry[]>([]);
    const [trackersBlocked, setTrackersBlocked] = useState(142);
    const [identityScore, setIdentityScore] = useState(99.9);
    const [scanRate, setScanRate] = useState(24);
    const [httpsActive] = useState(true);
    const logRef = useRef<HTMLDivElement>(null);

    // Generate timestamps
    const getTime = () => {
        const now = new Date();
        return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    };

    // Seed initial logs
    useEffect(() => {
        const initial = threatMessages.slice(0, 3).map((m) => ({
            ...m,
            time: getTime(),
        }));
        setThreatLog(initial);
    }, []);

    // Live feed updates
    useEffect(() => {
        const interval = setInterval(() => {
            const msg = threatMessages[Math.floor(Math.random() * threatMessages.length)];
            setThreatLog(prev => [{ ...msg, time: getTime() }, ...prev.slice(0, 5)]);
            setTrackersBlocked(t => t + Math.floor(Math.random() * 3));
            setIdentityScore(parseFloat((99.5 + Math.random() * 0.4).toFixed(1)));
            setScanRate(Math.floor(18 + Math.random() * 15));
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        logRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }, [threatLog]);

    const severityStyles = {
        critical: { color: '#ef4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)', dot: '#ef4444' },
        warning: { color: 'var(--secondary)', bg: 'rgba(255,202,40,0.1)', border: 'rgba(255,202,40,0.3)', dot: 'var(--secondary)' },
        info: { color: 'var(--primary)', bg: 'rgba(0,242,255,0.05)', border: 'var(--primary)', dot: 'var(--primary)' },
    };

    const stats = [
        { label: 'Hostile AIs Neutralized', value: trackersBlocked, unit: '', color: '#ef4444', icon: <ShieldAlert className="w-5 h-5" /> },
        { label: 'Humanity Safety', value: identityScore, unit: '%', color: 'var(--primary)', icon: <Lock className="w-5 h-5" /> },
        { label: 'Threat Scan Rate', value: scanRate, unit: 'T/s', color: 'var(--secondary)', icon: <Search className="w-5 h-5" /> },
        { label: 'Mankind Status', value: httpsActive ? 'SECURE' : 'AT RISK', unit: '', color: httpsActive ? 'var(--primary)' : '#ef4444', icon: <Zap className="w-5 h-5" /> },
    ];

    return (
        <div className="glass-ethereal border border-white/5 rounded-[2rem] p-8 backdrop-blur-3xl h-full shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 relative z-10">
                <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-4 uppercase italic font-mono tracking-tight">
                        <Shield className="w-6 h-6 text-primary" />
                        AI Threat Detection
                    </h3>
                    <p className="text-[9px] text-gray-500 mt-2 uppercase tracking-[0.4em] font-bold italic opacity-70">Protecting the Digital Citizens · Empathy Active</p>
                </div>
                <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 self-start sm:self-auto">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_var(--primary)]" />
                    <span className="text-[9px] text-primary font-black tracking-[0.3em] font-mono uppercase">VIGILANT</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
                {stats.map(stat => (
                    <fm.div
                        key={stat.label}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="glass-ethereal border border-white/5 rounded-2xl p-5 hover:border-primary/30 transition-all duration-500 shadow-xl group/stat relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover/stat:opacity-100 transition-opacity"></div>
                        <div className="flex items-center gap-4 mb-4 relative z-10">
                            <span className="text-gray-500 group-hover/stat:text-primary transition-colors duration-500 scale-90">{stat.icon}</span>
                            <span className="text-[8px] font-black text-gray-600 uppercase tracking-[0.3em]">{stat.label}</span>
                        </div>
                        <span className="text-3xl font-black font-mono tracking-tighter relative z-10 block" style={{ color: stat.color }}>
                            {stat.value}{stat.unit}
                        </span>
                    </fm.div>
                ))}
            </div>

            {/* Threat Hunt Log */}
            <div className="relative z-10">
                <p className="text-[9px] text-gray-600 mb-5 uppercase tracking-[0.5em] font-black italic opacity-60">
                    ✧ Subchain Live Interception Feed
                </p>
                <div ref={logRef} className="space-y-4 max-h-[220px] overflow-y-auto pr-3 scrollbar-precise">
                    <AnimatePresence mode="popLayout">
                        {threatLog.map((entry, i) => {
                            const s = severityStyles[entry.severity];
                            return (
                                <fm.div
                                    key={`${entry.time}-${i}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    className="flex items-center gap-5 p-4 rounded-2xl text-[10px] font-mono transition-all duration-500 glass-ethereal border group/log hover:bg-white/[0.02]"
                                    style={{ background: `linear-gradient(90deg, ${s.bg}, transparent)`, borderColor: s.border }}
                                >
                                    <div className="relative flex h-2 w-2 flex-shrink-0">
                                        <span className="w-2 h-2 rounded-full" style={{ background: s.dot, boxShadow: `0 0 10px ${s.dot}` }} />
                                        <div className="absolute inset-0 animate-ping rounded-full opacity-30" style={{ background: s.dot }}></div>
                                    </div>
                                    <div className="flex justify-between items-center w-full min-w-0">
                                        <span style={{ color: s.color }} className="font-black italic uppercase tracking-wider truncate mr-4">{entry.message}</span>
                                        <span className="text-gray-600 font-bold opacity-40 group-hover/log:opacity-100 transition-opacity whitespace-nowrap">{entry.time}</span>
                                    </div>
                                </fm.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default SecurityPanelV2;
