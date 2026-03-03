import React, { useEffect, useState, useRef } from 'react';
import { motion as fm, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Zap, Search, ShieldAlert } from 'lucide-react';

interface ThreatLogEntry {
    time: string;
    severity: 'critical' | 'warning' | 'info';
    message: string;
}

const threatMessages = [
    { severity: 'warning' as const, message: 'Dark pattern intercepted · soul.ads.io' },
    { severity: 'info' as const, message: 'Identity confidence verified · 98.4%' },
    { severity: 'critical' as const, message: 'Void leak detected · redirection blocked' },
    { severity: 'info' as const, message: 'Sacred perimeter check passed' },
    { severity: 'warning' as const, message: 'Spirit drift detected · pattern anomaly' },
    { severity: 'info' as const, message: 'Soul load normalized' },
    { severity: 'critical' as const, message: 'Fingerprinting purge · canvas API call' },
    { severity: 'info' as const, message: 'Perimeter scan complete · void secure' },
];

const SecurityPanelV2: React.FC = () => {
    const [threatLog, setThreatLog] = useState<ThreatLogEntry[]>([]);
    const [trackersBlocked, setTrackersBlocked] = useState(47);
    const [identityScore, setIdentityScore] = useState(97.2);
    const [scanRate, setScanRate] = useState(12);
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
            setIdentityScore(parseFloat((95 + Math.random() * 4).toFixed(1)));
            setScanRate(Math.floor(8 + Math.random() * 10));
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        logRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }, [threatLog]);

    const severityStyles = {
        critical: { color: '#ef4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)', dot: '#ef4444' },
        warning: { color: '#ffca28', bg: 'rgba(255,202,40,0.1)', border: 'rgba(255,202,40,0.3)', dot: '#ffca28' },
        info: { color: '#00f2ff', bg: 'rgba(0,242,255,0.05)', border: 'rgba(0,242,255,0.2)', dot: '#00f2ff' },
    };

    const stats = [
        { label: 'Voids Purged', value: trackersBlocked, unit: '', color: '#ef4444', icon: <ShieldAlert className="w-5 h-5" /> },
        { label: 'Soul Identity', value: identityScore, unit: '%', color: '#00f2ff', icon: <Lock className="w-5 h-5" /> },
        { label: 'Scan Depth', value: scanRate, unit: '/s', color: '#ffca28', icon: <Search className="w-5 h-5" /> },
        { label: 'HTTPS_VOW', value: httpsActive ? 'SACRED' : 'VOID', unit: '', color: httpsActive ? '#00f2ff' : '#ef4444', icon: <Zap className="w-5 h-5" /> },
    ];

    return (
        <div className="glass-ethereal border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl h-full shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase italic font-mono">
                        <Shield className="w-6 h-6 text-quantum-blue" />
                        Sacred Security
                    </h3>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-[0.3em] font-bold italic">Spirit Biometrics · Celestial Perimeter</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-quantum-blue/5 border border-quantum/20">
                    <span className="w-2 h-2 rounded-full bg-quantum-blue animate-pulse shadow-[0_0_8px_var(--quantum-blue)]" />
                    <span className="text-[10px] text-quantum-blue font-black tracking-widest font-mono uppercase">SCANNING</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map(stat => (
                    <fm.div
                        key={stat.label}
                        whileHover={{ scale: 1.02 }}
                        className="glass-ethereal border border-white/5 rounded-2xl p-5 hover:border-quantum/30 transition-all shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-gray-400 group-hover:text-quantum-blue transition-colors">{stat.icon}</span>
                            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{stat.label}</span>
                        </div>
                        <span className="text-2xl font-black font-mono tracking-tighter" style={{ color: stat.color }}>
                            {stat.value}{stat.unit}
                        </span>
                    </fm.div>
                ))}
            </div>

            {/* Threat Hunt Log */}
            <div>
                <p className="text-[10px] text-gray-500 mb-4 uppercase tracking-[0.4em] font-black italic">
                    ✧ Divine Interception Log
                </p>
                <div ref={logRef} className="space-y-3 max-h-48 overflow-y-auto pr-2 scrollbar-hide">
                    <AnimatePresence>
                        {threatLog.map((entry, i) => {
                            const s = severityStyles[entry.severity];
                            return (
                                <fm.div
                                    key={`${entry.time}-${i}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl text-[11px] font-mono transition-all duration-300 glass-ethereal border shadow-lg"
                                    style={{ background: s.bg, borderColor: s.border }}
                                >
                                    <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.dot, boxShadow: `0 0 10px ${s.dot}` }} />
                                    <div className="flex-1 min-w-0">
                                        <span className="text-gray-600 mr-2 font-bold">{entry.time}</span>
                                        <span style={{ color: s.color }} className="font-bold italic uppercase">{entry.message}</span>
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
