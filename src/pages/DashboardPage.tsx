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
        '⚡ 3 trackers neutralized · cipherpolice.io',
        '🔐 Identity confidence: 97.2% · verified',
        '🛡️ AI browser perimeter · SECURE',
        '⚠️ Prompt injection attempt · blocked',
        '🧠 Cognitive load · Elevated (74/100)',
        '🔒 HTTPS enforcement · active globally',
        '✅ WebGPU memory isolation · intact',
    ];
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIdx(i => (i + 1) % alerts.length), 3000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="bg-slate-900/80 border border-cyan-500/20 rounded-xl px-4 py-2.5 flex items-center gap-3 mb-6 backdrop-blur-sm">
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ boxShadow: '0 0 6px #00f3ff' }} />
            <span className="text-xs font-mono text-cyan-400 font-medium uppercase tracking-widest flex-shrink-0">LIVE</span>
            <div className="flex-1 overflow-hidden">
                <p
                    key={idx}
                    className="text-xs text-gray-300 font-mono animate-slide-right"
                >
                    {alerts[idx]}
                </p>
            </div>
            <span className="text-xs text-gray-600 flex-shrink-0 font-mono">{new Date().toLocaleTimeString()}</span>
        </div>
    );
};

const OverviewGrid: React.FC = () => {
    const [stats, setStats] = useState([
        { label: 'Threats Blocked Today', value: 147, color: '#ef4444', icon: '🚫', delta: '+3' },
        { label: 'Focus Time (hrs)', value: 4.5, color: '#22c55e', icon: '🎯', delta: '+0.5h' },
        { label: 'Cognitive Score', value: 74, color: '#f59e0b', icon: '🧠', delta: '-2' },
        { label: 'Identity Confidence', value: 97.2, color: '#00f3ff', icon: '🔐', delta: 'STABLE' },
        { label: 'AI Breach Attempts', value: 12, color: '#bc13fe', icon: '⚡', delta: '+1' },
        { label: 'HTTPS Enforcements', value: 389, color: '#22c55e', icon: '🔒', delta: '+12' },
    ]);

    useEffect(() => {
        const t = setInterval(() => {
            setStats(prev => prev.map(s => ({
                ...s,
                value: typeof s.value === 'number' ? parseFloat((s.value + (Math.random() * 2 - 1)).toFixed(1)) : s.value
            })));
        }, 4000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map(s => (
                <div
                    key={s.label}
                    className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group"
                >
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{s.icon}</span>
                        <span className="text-xs font-mono bg-slate-800 px-2 py-0.5 rounded-full text-gray-400">
                            {s.delta}
                        </span>
                    </div>
                    <div className="text-2xl font-black font-mono mb-1" style={{ color: s.color }}>
                        {typeof s.value === 'number' ? s.value.toFixed(s.value % 1 !== 0 ? 1 : 0) : s.value}
                    </div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                </div>
            ))}
        </div>
    );
};

const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('overview');

    return (
        <section id="dashboard" className="py-16 min-h-screen bg-[#050a14] relative">
            <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(0,243,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.02) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
            }} />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-cyan-400 font-mono text-xs tracking-widest">COGNITIVE COMMAND CENTER</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                        Live <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Dashboard</span>
                    </h2>
                    <p className="text-gray-500 text-lg">Real-time monitoring of your digital environment and cognitive security posture.</p>
                </div>

                {/* Live Ticker */}
                <LiveTicker />

                {/* Tab Navigation */}
                <div className="flex gap-1 bg-slate-900/80 border border-white/10 rounded-xl p-1 mb-6 overflow-x-auto backdrop-blur-sm">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${activeTab === tab.id
                                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-inner'
                                    : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            <span>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div>
                    {activeTab === 'overview' && (
                        <div className="space-y-6">
                            <OverviewGrid />
                            <div className="grid lg:grid-cols-2 gap-6">
                                <SecurityPanelV2 />
                                <CognitivePanelV2 />
                            </div>
                        </div>
                    )}
                    {activeTab === 'security' && (
                        <div className="max-w-3xl mx-auto">
                            <SecurityPanelV2 />
                        </div>
                    )}
                    {activeTab === 'cognitive' && (
                        <div className="max-w-3xl mx-auto">
                            <CognitivePanelV2 />
                        </div>
                    )}
                    {activeTab === 'analytics' && (
                        <div className="max-w-3xl mx-auto">
                            <RiskAnalyticsPanel />
                        </div>
                    )}
                    {activeTab === 'focus' && (
                        <div className="max-w-3xl mx-auto">
                            <DeepFocusPanel />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DashboardPage;
