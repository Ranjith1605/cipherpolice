import React, { useState, useEffect } from 'react';

interface ShieldRingProps {
    level: number; // 0-100
    active: boolean;
}

const ShieldRing: React.FC<ShieldRingProps> = ({ level, active }) => {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (level / 100) * circumference;

    return (
        <div className="relative w-40 h-40 mx-auto">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                {/* Background ring */}
                <circle
                    cx="60" cy="60" r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="10"
                />
                {/* Progress ring */}
                <circle
                    cx="60" cy="60" r={radius}
                    fill="none"
                    stroke={active ? '#00f3ff' : '#475569'}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{
                        transition: 'stroke-dashoffset 1s ease, stroke 0.5s ease',
                        filter: active ? `drop-shadow(0 0 8px #00f3ff)` : 'none',
                    }}
                />
                {/* Inner glow ring */}
                {active && (
                    <circle
                        cx="60" cy="60" r={radius - 8}
                        fill="none"
                        stroke="rgba(0,243,255,0.1)"
                        strokeWidth="6"
                    />
                )}
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl mb-1">{active ? '🛡️' : '⚫'}</span>
                <span
                    className="text-xl font-black font-mono"
                    style={{ color: active ? '#00f3ff' : '#475569' }}
                >
                    {level}%
                </span>
                <span className="text-xs text-gray-500">{active ? 'Active' : 'Dormant'}</span>
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
        { label: 'Block social media', active: true },
        { label: 'Mute notifications', active: true },
        { label: 'Restrict tab count to 5', active: false },
        { label: 'Enforce HTTPS-only', active: true },
    ];

    return (
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span>🧘</span> Deep Focus
                        <span className="text-xs text-gray-500 font-normal">/ Mental Shield</span>
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">Cognitive firewall engagement</p>
                </div>
                {active && (
                    <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-1 rounded-full font-mono animate-pulse">
                        SHIELDED
                    </span>
                )}
            </div>

            {/* Shield Gauge */}
            <ShieldRing level={focusLevel} active={active} />

            {/* Timer */}
            {active && (
                <div className="text-center mt-3 mb-4">
                    <span className="font-mono text-2xl font-bold text-cyan-400">
                        {formatTime(countdown)}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Focus session remaining</p>
                </div>
            )}

            {/* Activate Button */}
            <div className={`text-center ${active ? 'mt-2' : 'mt-4'} mb-5`}>
                <button
                    onClick={() => setActive(!active)}
                    className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${active
                            ? 'bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30'
                            : 'bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]'
                        }`}
                >
                    {active ? '⛔ Disengage Shield' : '🛡️ Engage Mental Shield'}
                </button>
            </div>

            {/* Policies */}
            <div>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Firewall Policies</p>
                <div className="space-y-1.5">
                    {policies.map((p) => (
                        <div key={p.label} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${p.active && active ? 'bg-cyan-400' : 'bg-slate-600'}`}
                                style={{ boxShadow: p.active && active ? '0 0 6px #00f3ff' : 'none' }}
                            />
                            <span className={`text-xs ${p.active && active ? 'text-gray-300' : 'text-gray-600'}`}>
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
