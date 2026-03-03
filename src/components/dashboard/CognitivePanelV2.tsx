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
        <div className="glass-ethereal border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl h-full shadow-2xl">
            {/* Header + Persona Toggle */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase italic font-mono">
                        <Brain className="w-6 h-6 text-quantum-blue" />
                        Soul Firewall
                    </h3>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-[0.3em] font-bold italic">Metaphysical Harmony Monitor</p>
                </div>
                {/* Persona Toggle */}
                <div className="flex gap-2 glass-ethereal p-1.5 rounded-2xl border border-white/5">
                    <button
                        onClick={() => setPersona('focused')}
                        className={`px-4 py-1.5 text-[10px] rounded-xl font-black transition-all duration-300 uppercase tracking-widest ${persona === 'focused'
                            ? 'bg-quantum-blue text-obsidian shadow-[0_0_15px_rgba(0,242,255,0.3)]'
                            : 'text-gray-600 hover:text-gray-400'
                            }`}
                    >
                        Ascended
                    </button>
                    <button
                        onClick={() => setPersona('fragmented')}
                        className={`px-4 py-1.5 text-[10px] rounded-xl font-black transition-all duration-300 uppercase tracking-widest ${persona === 'fragmented'
                            ? 'bg-red-500/20 text-red-500 border border-red-500/30'
                            : 'text-gray-600 hover:text-gray-400'
                            }`}
                    >
                        Void-Torn
                    </button>
                </div>
            </div>

            {/* Load Score Ring + Stats Row */}
            <div className="flex items-center gap-10 mb-8">
                {/* Ring */}
                <div className="relative w-32 h-32 flex-shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 84 84">
                        <circle cx="42" cy="42" r="38" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="6" />
                        <fm.circle
                            cx="42" cy="42" r="38"
                            fill="none"
                            stroke={loadColor}
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            animate={{ strokeDashoffset: circumference - (loadScore / 100) * circumference }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            style={{ filter: `drop-shadow(0 0 10px ${loadColor})` }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <fm.span
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-2xl font-black font-mono"
                            style={{ color: loadColor }}
                        >
                            {Math.round(loadScore)}
                        </fm.span>
                        <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Soul Load</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 flex-1">
                    {stats.map(s => (
                        <div key={s.label} className="glass-ethereal rounded-2xl p-4 border border-white/5 hover:border-quantum/20 transition-all">
                            <p className="text-[9px] text-gray-600 mb-1 uppercase tracking-widest font-black">{s.label}</p>
                            <p className="font-black text-white font-mono text-sm tracking-tighter">{s.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* State Badge */}
            <div className="mb-6 flex items-center gap-3">
                <fm.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: data.stateColor, boxShadow: `0 0 12px ${data.stateGlow}` }}
                />
                <span className="text-sm font-black uppercase tracking-[0.2em] italic" style={{ color: data.stateColor }}>
                    {data.state}
                </span>
                <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">— Metaphysical State</span>
            </div>

            {/* Insight */}
            <div className="glass-ethereal border border-white/5 rounded-2xl p-5 mb-6 text-[11px] text-gray-500 leading-relaxed italic font-medium">
                {data.explanation}
            </div>

            {/* Recommendations */}
            <div>
                <p className="text-[10px] text-gray-600 mb-4 uppercase tracking-[0.4em] font-black italic">✧ Forensic Vows</p>
                <div className="space-y-3">
                    {data.recommendations.map((r, i) => (
                        <fm.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-quantum/20 transition-all"
                        >
                            <Zap style={{ color: data.stateColor }} className="w-3 h-3 mt-0.5 group-hover:scale-125 transition-transform" />
                            <div>
                                <span className="text-[11px] text-white font-black uppercase italic tracking-widest">{r.label}</span>
                                <p className="text-[10px] text-gray-600 mt-1 italic font-medium">— {r.why}</p>
                            </div>
                        </fm.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CognitivePanelV2;
