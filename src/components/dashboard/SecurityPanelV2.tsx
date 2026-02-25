import React, { useEffect, useState, useRef } from 'react';

interface ThreatLogEntry {
    time: string;
    severity: 'critical' | 'warning' | 'info';
    message: string;
}

const threatMessages = [
    { severity: 'warning' as const, message: 'Tracker script intercepted · analytics.ads.io' },
    { severity: 'info' as const, message: 'Identity confidence verified · 97.2%' },
    { severity: 'critical' as const, message: 'Focus leak detected · social media redirect blocked' },
    { severity: 'info' as const, message: 'HTTPS perimeter check passed' },
    { severity: 'warning' as const, message: 'Behavioral drift detected · pattern anomaly' },
    { severity: 'info' as const, message: 'Cognitive load normalized' },
    { severity: 'critical' as const, message: 'Fingerprinting script blocked · canvas API call' },
    { severity: 'info' as const, message: 'Perimeter scan complete · boundary secure' },
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
        warning: { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)', dot: '#f59e0b' },
        info: { color: '#00f3ff', bg: 'rgba(0,243,255,0.05)', border: 'rgba(0,243,255,0.2)', dot: '#00f3ff' },
    };

    const stats = [
        { label: 'Trackers Blocked', value: trackersBlocked, unit: '', color: '#ef4444', icon: '🚫' },
        { label: 'Identity Score', value: identityScore, unit: '%', color: '#00f3ff', icon: '🔐' },
        { label: 'Scan Rate', value: scanRate, unit: '/s', color: '#bc13fe', icon: '⚡' },
        { label: 'HTTPS', value: httpsActive ? 'SECURE' : 'RISK', unit: '', color: httpsActive ? '#22c55e' : '#ef4444', icon: '🔒' },
    ];

    return (
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span>🛡️</span> Security Center
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">Behavioral Biometrics · Cognitive Perimeter</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 6px #22c55e' }} />
                    <span className="text-xs text-green-400 font-mono">SCANNING</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
                {stats.map(stat => (
                    <div key={stat.label} className="bg-slate-800/60 border border-white/5 rounded-xl p-3">
                        <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-base">{stat.icon}</span>
                            <span className="text-xs text-gray-500">{stat.label}</span>
                        </div>
                        <span className="text-xl font-black font-mono" style={{ color: stat.color }}>
                            {stat.value}{stat.unit}
                        </span>
                    </div>
                ))}
            </div>

            {/* Threat Hunt Log */}
            <div>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-medium">
                    🔍 Threat Hunt Log
                </p>
                <div ref={logRef} className="space-y-1.5 max-h-36 overflow-y-auto pr-1" style={{ scrollbarWidth: 'none' }}>
                    {threatLog.map((entry, i) => {
                        const s = severityStyles[entry.severity];
                        return (
                            <div
                                key={i}
                                className="flex items-start gap-2 p-2 rounded-lg text-xs font-mono transition-all duration-300"
                                style={{ background: s.bg, border: `1px solid ${s.border}` }}
                            >
                                <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.dot, boxShadow: `0 0 4px ${s.dot}`, marginTop: 4 }} />
                                <div className="flex-1 min-w-0">
                                    <span className="text-gray-400 mr-2">{entry.time}</span>
                                    <span style={{ color: s.color }}>{entry.message}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SecurityPanelV2;
