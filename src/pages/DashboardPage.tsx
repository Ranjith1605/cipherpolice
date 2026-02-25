import React, { useEffect, useState } from 'react';
import SecurityPanelV2 from '../components/dashboard/SecurityPanelV2';
import CognitivePanelV2 from '../components/dashboard/CognitivePanelV2';
import RiskAnalyticsPanel from '../components/dashboard/RiskAnalyticsPanel';
import DeepFocusPanel from '../components/dashboard/DeepFocusPanel';

type Tab = 'overview' | 'security' | 'cognitive' | 'analytics' | 'focus';

const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: '🖥️' },
    { id: 'security', label: 'Security Center', icon: '🛡️' },
    { id: 'cognitive', label: 'Cognitive Fire.', icon: '🧠' },
    { id: 'analytics', label: 'Risk Analytics', icon: '📊' },
    { id: 'focus', label: 'Deep Focus', icon: '🧘' },
];

const LiveTicker: React.FC = () => {
    const alerts = [
        'SYSTEM: Neural perimeter active · SCANNING',
        'PROSECUTION: 3 manipulation vectors isolated',
        'IDENTITY: Confidence 98.4% · BIOMETRIC MATCH',
        'ALERT: Prompt injection attempt from [REDACTED]',
        'COGNITIVE: Load balancing at 64% · OPTIMAL',
        'NETWORK: Quantum-level encryption verified',
    ];
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIdx(i => (i + 1) % alerts.length), 4000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="glass-premium border border-asi-neon/20 px-6 py-3 flex items-center gap-4 mb-10 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-1 bg-asi-neon shadow-[0_0_10px_var(--asi-neon)]"></div>
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-asi-neon animate-ping" />
            <span className="text-[10px] font-black text-asi-neon tracking-[0.3em] flex-shrink-0">LIVE SEC_FEED</span>
            <div className="flex-1 overflow-hidden">
                <p key={idx} className="text-xs font-mono text-white/80 animate-slide-up tracking-tight">
                    {alerts[idx]}
                </p>
            </div>
            <span className="text-[10px] font-mono text-gray-500 flex-shrink-0 uppercase">{new Date().toLocaleTimeString()}</span>
        </div>
    );
};

const OverviewGrid: React.FC = () => {
    const [stats, setStats] = useState([
        { label: 'Threats Neutralized', value: 147, color: '#ef4444', icon: '⚔️', delta: '+3' },
        { label: 'Deep Focus Time', value: 4.5, color: '#00f3ff', icon: '🎯', delta: '+0.5h' },
        { label: 'Neural Stability', value: 74, color: '#bc13fe', icon: '🧠', delta: '-2%' },
        { label: 'Confidence Index', value: 97.2, color: '#10b981', icon: '🔐', delta: 'STABLE' },
    ]);

    useEffect(() => {
        const t = setInterval(() => {
            setStats(prev => prev.map((s, i) => i === 3 ? s : ({
                ...s,
                value: typeof s.value === 'number' ? parseFloat((s.value + (Math.random() * 0.4 - 0.2)).toFixed(1)) : s.value
            })));
        }, 5000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map(s => (
                <div key={s.label} className="holographic-card p-6 group hover:border-asi-neon/30 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                        <span className="text-3xl">{s.icon}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] font-black text-gray-500 tracking-widest uppercase">{s.label}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/5 ${s.delta.startsWith('+') ? 'text-green-400' : 'text-yellow-400'}`}>
                            {s.delta}
                        </span>
                    </div>
                    <div className="text-4xl font-black font-mono tracking-tighter" style={{ color: s.color }}>
                        {typeof s.value === 'number' ? s.value.toFixed(s.value % 1 !== 0 ? 1 : 0) : s.value}
                    </div>
                </div>
            ))}
        </div>
    );
};

const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('overview');

    return (
        <section id="dashboard" className="py-32 relative overflow-hidden bg-asi-dark">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>

            <div className="container-vision relative z-10 px-4">
                {/* Header HUD */}
                <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-asi-neon/30 bg-asi-neon/5 mb-4">
                            <span className="text-[10px] font-black text-asi-neon tracking-[0.4em] uppercase">Tactical Operations Center</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                            Center <span className="bg-gradient-to-r from-asi-neon via-white to-asi-purple bg-clip-text text-transparent italic">Monitor</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase">System Latency: 4ms</span>
                        <div className="flex gap-1 mt-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className={`w-3 h-1 rounded-full ${i < 4 ? 'bg-asi-neon' : 'bg-white/10'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dashboard HUD Components */}
                <LiveTicker />
                <OverviewGrid />

                {/* Navigation HUD */}
                <div className="flex gap-2 p-1.5 glass-premium border border-white/5 mb-10 overflow-x-auto scrollbar-hide">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                                ? 'bg-asi-neon text-asi-dark shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                                : 'text-gray-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span className="text-lg">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Main Display Area */}
                <div className="animate-fade-in">
                    {activeTab === 'overview' && (
                        <div className="grid lg:grid-cols-2 gap-8">
                            <SecurityPanelV2 />
                            <CognitivePanelV2 />
                            <div className="lg:col-span-1">
                                <RiskAnalyticsPanel />
                            </div>
                            <div className="lg:col-span-1">
                                <DeepFocusPanel />
                            </div>
                        </div>
                    )}
                    {activeTab === 'security' && (
                        <div className="max-w-4xl mx-auto">
                            <SecurityPanelV2 />
                        </div>
                    )}
                    {activeTab === 'cognitive' && (
                        <div className="max-w-4xl mx-auto">
                            <CognitivePanelV2 />
                        </div>
                    )}
                    {activeTab === 'analytics' && (
                        <div className="max-w-4xl mx-auto">
                            <RiskAnalyticsPanel />
                        </div>
                    )}
                    {activeTab === 'focus' && (
                        <div className="max-w-4xl mx-auto">
                            <DeepFocusPanel />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DashboardPage;
