import React, { useEffect, useState } from 'react';

type Persona = 'focused' | 'fragmented';

interface CognitivePanelV2Props {
    defaultPersona?: Persona;
}

const CognitivePanelV2: React.FC<CognitivePanelV2Props> = ({ defaultPersona = 'fragmented' }) => {
    const [persona, setPersona] = useState<Persona>(defaultPersona);
    const [loadScore, setLoadScore] = useState(0);

    const personaData = {
        focused: {
            state: 'Stable',
            stateColor: '#22c55e',
            stateGlow: 'rgba(34,197,94,0.3)',
            loadTarget: 28,
            tabsOpen: 4,
            switchesPerMin: 1,
            sessionLength: '1h 20m',
            notifications: false,
            explanation: '"Focused Flow" posture detected. Identity confidence is high. Cognitive perimeter is intact with minimal intrusion risk. You are operating at peak processing efficiency.',
            recommendations: [
                { label: 'Extend Deep Focus', why: 'Your attention depth is optimal' },
                { label: 'Batch communications', why: 'Preserve current flow state' },
            ],
        },
        fragmented: {
            state: 'Over-capacity',
            stateColor: '#ef4444',
            stateGlow: 'rgba(239,68,68,0.3)',
            loadTarget: 87,
            tabsOpen: 22,
            switchesPerMin: 11,
            sessionLength: '3h 42m',
            notifications: true,
            explanation: '"Fragmented Load" posture detected. Critical attention fragmentation across 22 tabs. Context switching at 11×/min is compressing cognitive resources. Intervention required.',
            recommendations: [
                { label: 'Engage Mental Shield', why: 'Critical fragmentation detected' },
                { label: 'Close 17 tabs now', why: 'Reducing below 5 restores flow' },
                { label: 'Take 10-min micro-rest', why: 'Resets hippocampal encoding' },
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
        if (score < 40) return '#22c55e';
        if (score < 65) return '#f59e0b';
        return '#ef4444';
    };

    const loadColor = getLoadColor(loadScore);
    const circumference = 2 * Math.PI * 38;

    const stats = [
        { label: 'Tabs Open', value: data.tabsOpen },
        { label: 'Switches/min', value: data.switchesPerMin },
        { label: 'Session', value: data.sessionLength },
        { label: 'Alerts', value: data.notifications ? 'ON' : 'OFF' },
    ];

    return (
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm h-full">
            {/* Header + Persona Toggle */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span>🧠</span> Cognitive Firewall
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">Real-time behavioral monitoring</p>
                </div>
                {/* Persona Toggle */}
                <div className="flex gap-1 bg-slate-800/80 p-1 rounded-lg border border-white/5">
                    <button
                        onClick={() => setPersona('focused')}
                        className={`px-2.5 py-1 text-xs rounded-md font-bold transition-all duration-200 ${persona === 'focused'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'text-gray-600 hover:text-gray-400'
                            }`}
                    >
                        Focused
                    </button>
                    <button
                        onClick={() => setPersona('fragmented')}
                        className={`px-2.5 py-1 text-xs rounded-md font-bold transition-all duration-200 ${persona === 'fragmented'
                            ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                            : 'text-gray-600 hover:text-gray-400'
                            }`}
                    >
                        Fragmented
                    </button>
                </div>
            </div>

            {/* Load Score Ring + Stats Row */}
            <div className="flex items-center gap-5 mb-5">
                {/* Ring */}
                <div className="relative w-24 h-24 flex-shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 84 84">
                        <circle cx="42" cy="42" r="38" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                        <circle
                            cx="42" cy="42" r="38"
                            fill="none"
                            stroke={loadColor}
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference - (loadScore / 100) * circumference}
                            style={{ transition: 'stroke-dashoffset 0.5s ease, stroke 0.5s ease', filter: `drop-shadow(0 0 6px ${loadColor})` }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-lg font-black font-mono" style={{ color: loadColor }}>{Math.round(loadScore)}</span>
                        <span className="text-xs text-gray-500">Load</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 flex-1">
                    {stats.map(s => (
                        <div key={s.label} className="bg-slate-800/60 rounded-lg p-2 border border-white/5">
                            <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                            <p className="font-bold text-white font-mono text-sm">{s.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* State Badge */}
            <div className="mb-4 flex items-center gap-2">
                <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse"
                    style={{ background: data.stateColor, boxShadow: `0 0 8px ${data.stateGlow}` }}
                />
                <span className="text-sm font-bold" style={{ color: data.stateColor }}>
                    {data.state}
                </span>
                <span className="text-xs text-gray-500">— Cognitive State</span>
            </div>

            {/* Insight */}
            <div className="bg-slate-800/40 border border-white/5 rounded-xl p-3 mb-4 text-xs text-gray-400 leading-relaxed">
                {data.explanation}
            </div>

            {/* Recommendations */}
            <div>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Forensic Recommendations</p>
                <div className="space-y-1.5">
                    {data.recommendations.map((r, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span style={{ color: data.stateColor }} className="mt-0.5 text-xs">▶</span>
                            <div>
                                <span className="text-xs text-white font-medium">{r.label}</span>
                                <span className="text-xs text-gray-500 ml-2 italic">— {r.why}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CognitivePanelV2;
