import React, { useState, useEffect } from 'react';
import { motion as fm, AnimatePresence } from 'framer-motion';
import { Zap, ShieldCheck, ShieldX } from 'lucide-react';

interface ShieldRingProps {
    level: number; // 0-100
    active: boolean;
}

const ShieldRing: React.FC<ShieldRingProps> = ({ level, active }) => {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (level / 100) * circumference;

    return (
        <div className="relative w-48 h-48 mx-auto mb-8">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                {/* Background ring */}
                <circle
                    cx="60" cy="60" r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="8"
                />
                {/* Progress ring */}
                <fm.circle
                    cx="60" cy="60" r={radius}
                    fill="none"
                    stroke={active ? '#00f2ff' : '#1e293b'}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    animate={{ strokeDashoffset: strokeDashoffset }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{
                        filter: active ? `drop-shadow(0 0 12px #00f2ff)` : 'none',
                    }}
                />
                {/* Inner glow ring */}
                {active && (
                    <fm.circle
                        cx="60" cy="60" r={radius - 12}
                        fill="none"
                        stroke="rgba(0,242,255,0.1)"
                        strokeWidth="4"
                        animate={{ scale: [0.98, 1.02, 0.98], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                )}
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <fm.div
                    animate={active ? { y: [0, -5, 0], rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="mb-2"
                >
                    {active ? <ShieldCheck className="w-10 h-10 text-quantum-blue shadow-2xl" /> : <ShieldX className="w-10 h-10 text-gray-700" />}
                </fm.div>
                <span
                    className="text-2xl font-black font-mono tracking-tighter"
                    style={{ color: active ? '#00f2ff' : '#475569' }}
                >
                    {level}%
                </span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{active ? 'Sacred' : 'Void'}</span>
            </div>
        </div>
    );
};

const DeepFocusPanel: React.FC = () => {
    const [active, setActive] = useState(false);
    const [focusLevel, setFocusLevel] = useState(0);
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        if (active) {
            // Ramp up focus level
            const ramp = setInterval(() => {
                setFocusLevel(prev => Math.min(prev + 2, 94));
            }, 80);
            return () => clearInterval(ramp);
        } else {
            const ramp = setInterval(() => {
                setFocusLevel(prev => Math.max(prev - 3, 0));
            }, 60);
            return () => clearInterval(ramp);
        }
    }, [active]);

    useEffect(() => {
        if (active && countdown === 0) {
            setCountdown(25 * 60); // 25 min Pomodoro session
        }
        if (!active) {
            setCountdown(0);
        }
    }, [active]);

    useEffect(() => {
        if (!active || countdown <= 0) return;
        const timer = setInterval(() => setCountdown(c => c - 1), 1000);
        return () => clearInterval(timer);
    }, [active, countdown]);

    const formatTime = (s: number) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    };

    const policies = [
        { label: 'Purge social media', active: true },
        { label: 'Silence void-notifications', active: true },
        { label: 'Limit soul-vessels to 5', active: false },
        { label: 'Enforce Sacred-Uplink only', active: true },
    ];

    return (
        <div className="glass-ethereal border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl h-full shadow-2xl">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase italic font-mono">
                        <Zap className="w-6 h-6 text-quantum-blue" />
                        Deep Vow
                    </h3>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-[0.3em] font-bold italic">Sacred Shield Activation</p>
                </div>
                <AnimatePresence>
                    {active && (
                        <fm.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-[10px] bg-quantum-blue/10 text-quantum-blue border border-quantum/30 px-3 py-1 rounded-full font-black tracking-widest font-mono shadow-[0_0_15px_rgba(0,242,255,0.2)]"
                        >
                            SHIELDED
                        </fm.span>
                    )}
                </AnimatePresence>
            </div>

            {/* Shield Gauge */}
            <ShieldRing level={focusLevel} active={active} />

            {/* Timer */}
            <AnimatePresence>
                {active && (
                    <fm.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-center mb-6"
                    >
                        <span className="font-mono text-3xl font-black text-quantum-blue drop-shadow-[0_0_10px_rgba(0,242,255,0.4)]">
                            {formatTime(countdown)}
                        </span>
                        <p className="text-[10px] text-gray-600 mt-2 font-black uppercase tracking-widest italic">Sacred Vow Remaining</p>
                    </fm.div>
                )}
            </AnimatePresence>

            {/* Activate Button */}
            <div className="text-center mb-8">
                <fm.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActive(!active)}
                    className={`w-full py-5 rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] transition-all duration-500 italic shadow-2xl ${active
                        ? 'bg-red-500/10 border border-red-500/40 text-red-500 hover:bg-red-500/20'
                        : 'bg-quantum-blue text-obsidian shadow-[0_0_30px_rgba(0,242,255,0.3)]'
                        }`}
                >
                    {active ? '⛔ Disengage Shield' : '🛡️ Engage Sacred Shield'}
                </fm.button>
            </div>

            {/* Policies */}
            <div>
                <p className="text-[10px] text-gray-600 mb-4 uppercase tracking-[0.4em] font-black italic">✧ Firewall Vows</p>
                <div className="space-y-3">
                    {policies.map((p) => (
                        <div key={p.label} className="flex items-center gap-3 p-3 glass-ethereal rounded-xl border border-white/5">
                            <fm.div
                                animate={p.active && active ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
                                transition={{ duration: 2, repeat: Infinity }}
                                className={`w-2 h-2 rounded-full ${p.active && active ? 'bg-quantum-blue shadow-[0_0_10px_var(--quantum-blue)]' : 'bg-slate-700'}`}
                            />
                            <span className={`text-[11px] font-bold tracking-widest uppercase italic ${p.active && active ? 'text-gray-300' : 'text-gray-700'}`}>
                                {p.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeepFocusPanel;
