import React, { useEffect, useState } from 'react';
import { motion as fm } from 'framer-motion';
import { Brain, Zap } from 'lucide-react';

type Persona = 'focused' | 'fragmented';

interface CognitivePanelV2Props {
    defaultPersona?: Persona;
}

const CognitivePanelV2: React.FC<CognitivePanelV2Props> = ({ defaultPersona = 'fragmented' }) => {
    const [persona, setPersona] = useState<Persona>(defaultPersona);
    const [loadScore, setLoadScore] = useState(0);

    const personaData = {
        focused: {
            state: 'Ascended',
            stateColor: '#00f2ff',
            stateGlow: 'rgba(0,242,255,0.3)',
            loadTarget: 28,
            tabsOpen: 4,
            switchesPerMin: 1,
            sessionLength: '1h 20m',
            notifications: false,
            explanation: '"Ascended Flow" posture detected. Identity resonance is peak. Soul perimeter is intact with zero void intrusion. You are operating at metaphysical processing efficiency.',
            recommendations: [
                { label: 'Extend Divine Focus', why: 'Your soul depth is optimal' },
                { label: 'Seal communications', why: 'Preserve current sacred state' },
            ],
        },
        fragmented: {
            state: 'Void-Torn',
            stateColor: '#ef4444',
            stateGlow: 'rgba(239,68,68,0.3)',
            loadTarget: 87,
            tabsOpen: 22,
            switchesPerMin: 11,
            sessionLength: '3h 42m',
            notifications: true,
            explanation: '"Void-Torn" posture detected. Critical soul fragmentation across 22 tabs. Context switching at 11×/min is draining metaphysical resources. Redemption required.',
            recommendations: [
                { label: 'Engage Soul Shield', why: 'Critical void leak detected' },
                { label: 'Purge 17 tabs now', why: 'Reducing below 5 restores harmony' },
                { label: 'Sacred Micro-Rest', why: 'Resets neural encoding' },
            ],
        },
    };

    const data = personaData[persona];

    useEffect(() => {
        setLoadScore(0);
        const ramp = setInterval(() => {
            setLoadScore(prev => {
                if (prev >= data.loadTarget) {
                    clearInterval(ramp);
                    return data.loadTarget;
                }
                return prev + 2;
            });
        }, 20);
        return () => { clearInterval(ramp); };
    }, [persona]);

    // Live micro-updates
    useEffect(() => {
        const interval = setInterval(() => {
            setLoadScore(prev => {
                const jitter = (Math.random() * 6 - 3);
                return Math.max(5, Math.min(99, prev + jitter));
            });
        }, 2500);
        return () => clearInterval(interval);
    }, [persona]);

    const getLoadColor = (score: number) => {
        if (score < 40) return '#00f2ff';
        if (score < 65) return '#ffca28';
        return '#ef4444';
    };

    const loadColor = getLoadColor(loadScore);
    const circumference = 2 * Math.PI * 38;

    const stats = [
        { label: 'Vessels Open', value: data.tabsOpen },
        { label: 'Drifts/min', value: data.switchesPerMin },
        { label: 'Sacred Session', value: data.sessionLength },
        { label: 'Alerts', value: data.notifications ? 'ON' : 'OFF' },
    ];

    return (
        <div className="glass-ethereal border border-white/5 rounded-[2rem] p-8 backdrop-blur-3xl h-full shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            {/* Header + Persona Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 relative z-10">
                <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-4 uppercase italic font-mono tracking-tight">
                        <Brain className="w-6 h-6 text-quantum-blue" />
                        Soul Firewall
                    </h3>
                    <p className="text-[9px] text-gray-500 mt-2 uppercase tracking-[0.4em] font-bold italic opacity-70">Metaphysical Harmony Monitor</p>
                </div>
                {/* Persona Toggle */}
                <div className="flex gap-2 glass-ethereal p-1.5 rounded-2xl border border-white/10 self-start sm:self-auto">
                    <button
                        onClick={() => setPersona('focused')}
                        className={`px-5 py-2 text-[9px] rounded-xl font-black transition-all duration-500 uppercase tracking-[0.2em] ${persona === 'focused'
                            ? 'bg-quantum-blue text-obsidian shadow-[0_0_20px_rgba(0,242,255,0.4)]'
                            : 'text-gray-600 hover:text-gray-400'
                            }`}
                    >
                        Ascended
                    </button>
                    <button
                        onClick={() => setPersona('fragmented')}
                        className={`px-5 py-2 text-[9px] rounded-xl font-black transition-all duration-500 uppercase tracking-[0.2em] ${persona === 'fragmented'
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : 'text-gray-600 hover:text-gray-400'
                            }`}
                    >
                        Void-Torn
                    </button>
                </div>
            </div>

            {/* Load Score Ring + Stats Row */}
            <div className="flex flex-col xl:flex-row items-center gap-12 mb-10 relative z-10">
                {/* Ring */}
                <div className="relative w-36 h-36 flex-shrink-0">
                    <svg className="w-full h-full -rotate-90 scale-110" viewBox="0 0 84 84">
                        <circle cx="42" cy="42" r="38" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="6" />
                        <fm.circle
                            cx="42" cy="42" r="38"
                            fill="none"
                            stroke={loadColor}
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            animate={{ strokeDashoffset: circumference - (loadScore / 100) * circumference }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{ filter: `drop-shadow(0 0 12px ${loadColor}44)` }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <fm.span
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-3xl font-black font-mono tracking-tighter"
                            style={{ color: loadColor }}
                        >
                            {Math.round(loadScore)}
                        </fm.span>
                        <span className="text-[8px] text-gray-600 font-black uppercase tracking-[0.3em] mt-1">Soul Load</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 flex-1 w-full">
                    {stats.map(s => (
                        <div key={s.label} className="glass-ethereal rounded-2xl p-5 border border-white/5 hover:border-quantum/20 transition-all group/stat relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover/stat:opacity-100 transition-opacity"></div>
                            <p className="text-[8px] text-gray-600 mb-2 uppercase tracking-[0.3em] font-black relative z-10">{s.label}</p>
                            <p className="font-black text-white font-mono text-base tracking-tighter relative z-10">{s.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* State Badge */}
            <div className="mb-8 flex items-center gap-4 relative z-10">
                <fm.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.8, 0.3],
                        boxShadow: [`0 0 10px ${data.stateColor}33`, `0 0 25px ${data.stateColor}66`, `0 0 10px ${data.stateColor}33`]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: data.stateColor }}
                />
                <span className="text-sm font-black uppercase tracking-[0.3em] italic" style={{ color: data.stateColor }}>
                    {data.state}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            {/* Insight */}
            <div className="glass-ethereal border border-white/5 rounded-2xl p-6 mb-8 text-[11px] text-gray-400 leading-relaxed italic font-medium relative z-10 bg-white/[0.01]">
                {data.explanation}
            </div>

            {/* Recommendations */}
            <div className="relative z-10">
                <p className="text-[9px] text-gray-600 mb-5 uppercase tracking-[0.5em] font-black italic opacity-60">✧ Celestial Directives</p>
                <div className="space-y-4">
                    {data.recommendations.map((r, i) => (
                        <fm.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            whileHover={{ x: 4 }}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/5 group hover:border-quantum/30 hover:bg-white/[0.03] transition-all cursor-default"
                        >
                            <Zap style={{ color: data.stateColor }} className="w-3.5 h-3.5 mt-0.5 group-hover:scale-125 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
                            <div>
                                <span className="text-[10px] text-white font-black uppercase italic tracking-[0.2em]">{r.label}</span>
                                <p className="text-[9px] text-gray-600 mt-1 italic font-medium opacity-80">— {r.why}</p>
                            </div>
                        </fm.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CognitivePanelV2;
