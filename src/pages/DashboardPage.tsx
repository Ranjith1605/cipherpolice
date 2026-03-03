import React, { useEffect, useState } from 'react';
import SecurityPanelV2 from '../components/dashboard/SecurityPanelV2';
import CognitivePanelV2 from '../components/dashboard/CognitivePanelV2';
import RiskAnalyticsPanel from '../components/dashboard/RiskAnalyticsPanel';
import DefenseGridPanel from '../components/dashboard/DefenseGridPanel';
import DeepFocusPanel from '../components/dashboard/DeepFocusPanel';
import { motion as fm, AnimatePresence } from 'framer-motion';

type Tab = 'overview' | 'security' | 'defense' | 'cognitive' | 'analytics' | 'focus';

const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: '👁️' },
    { id: 'security', label: 'Sacred Sec', icon: '🛡️' },
    { id: 'defense', label: 'Ethereal Def', icon: '⚔️' },
    { id: 'cognitive', label: 'Soul Firewall', icon: '🧠' },
    { id: 'analytics', label: 'Metaphysics', icon: '📊' },
    { id: 'focus', label: 'Deep Vow', icon: '🧘' },
];

const LiveTicker: React.FC = () => {
    const alerts = [
        'MISSION: Neural perimeter active · SCANNING',
        'JUDGMENT: 3 manipulation vectors purged',
        'VOW: Confidence 98.4% · BIOMETRIC HARMONY',
        'ALERT: Void injection attempt neutralized',
        'SACRED: Load balancing at 64% · ASCENDED',
        'PROTOCOL: Meta-quantum encryption verified',
    ];
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIdx(i => (i + 1) % alerts.length), 4000);
        return () => clearInterval(t);
    }, []);

    return (
        <fm.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-ethereal border border-quantum/20 px-8 py-5 flex items-center gap-6 mb-12 overflow-hidden relative rounded-3xl shadow-2xl"
        >
            <div className="absolute top-0 left-0 h-full w-1.5 bg-quantum-blue shadow-[0_0_15px_var(--quantum-blue)]"></div>
            <span className="flex-shrink-0 w-3 h-3 rounded-full bg-quantum-blue animate-ping" />
            <span className="text-[11px] font-black text-quantum-blue tracking-[0.5em] flex-shrink-0 uppercase font-mono">LIVE_SACRED_FEED</span>
            <div className="flex-1 overflow-hidden">
                <AnimatePresence mode="wait">
                    <fm.p
                        key={idx}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="text-sm font-mono text-white/90 tracking-tight italic"
                    >
                        {alerts[idx]}
                    </fm.p>
                </AnimatePresence>
            </div>
            <span className="text-[10px] font-mono text-gray-600 flex-shrink-0 uppercase font-bold tracking-widest">{new Date().toLocaleTimeString()}</span>
        </fm.div>
    );
};

const OverviewGrid: React.FC = () => {
    const [stats, setStats] = useState([
        { label: 'Threats Purged', value: 147, color: '#00f2ff', icon: '⚔️', delta: '+3' },
        { label: 'Deep Vow Time', value: 4.5, color: '#ffca28', icon: '🎯', delta: '+0.5h' },
        { label: 'Neural Harmony', value: 74, color: '#ffffff', icon: '🧠', delta: '-2%' },
        { label: 'Confidence Vow', value: 97.2, color: '#00f2ff', icon: '🔐', delta: 'STABLE' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((s, i) => (
                <fm.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-ethereal p-8 group overflow-hidden relative rounded-[2.5rem] shadow-2xl border-white/5 hover:border-quantum/40 transition-all"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                        <span className="text-4xl">{s.icon}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase italic">{s.label}</span>
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-full bg-white/5 tracking-widest ${s.delta.startsWith('+') ? 'text-quantum-blue' : 'text-guardian-gold'}`}>
                            {s.delta}
                        </span>
                    </div>
                    <div className="text-5xl font-black font-mono tracking-tighter drop-shadow-[0_0_15px_rgba(0,242,255,0.2)]" style={{ color: s.color }}>
                        {typeof s.value === 'number' ? s.value.toFixed(s.value % 1 !== 0 ? 1 : 0) : s.value}
                    </div>
                </fm.div>
            ))}
        </div>
    );
};

const DashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('overview');

    return (
        <section id="dashboard" className="py-40 relative overflow-hidden bg-transparent">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>

            <div className="container-vision relative z-10 px-4">
                {/* Header HUD */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <fm.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-quantum/30 glass-ethereal mb-6 shadow-xl">
                            <span className="text-[10px] font-black text-quantum-blue tracking-[0.5em] uppercase">Sacred Vanguard Hub</span>
                        </div>
                        <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white uppercase italic">
                            Ascended <span className="bg-gradient-to-r from-quantum-blue via-white to-guardian-gold bg-clip-text text-transparent not-italic font-mono">Command</span>
                        </h2>
                    </fm.div>
                    <fm.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:flex flex-col items-end"
                    >
                        <span className="text-[11px] font-black text-gray-500 tracking-[0.5em] uppercase italic font-mono">Soul Latency: 4ms</span>
                        <div className="flex gap-2 mt-3">
                            {[1, 2, 3, 4, 5].map(i => (
                                <fm.div
                                    key={i}
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                    className={`w-4 h-1.5 rounded-full ${i < 4 ? 'bg-quantum-blue shadow-[0_0_10px_var(--quantum-blue)]' : 'bg-white/10'}`}
                                ></fm.div>
                            ))}
                        </div>
                    </fm.div>
                </div>

                {/* Dashboard HUD Components */}
                <LiveTicker />
                <OverviewGrid />

                {/* Navigation HUD */}
                <fm.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 p-2.5 glass-ethereal border border-white/5 mb-16 overflow-x-auto scrollbar-hide rounded-[2.5rem] shadow-2xl"
                >
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-4 px-8 py-5 rounded-[2rem] text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500 whitespace-nowrap italic font-mono ${activeTab === tab.id
                                ? 'bg-quantum-blue text-obsidian shadow-[0_0_30px_rgba(0,242,255,0.4)] scale-105'
                                : 'text-gray-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <span className="text-2xl">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </fm.div>

                {/* Main Display Area */}
                <div className="animate-fade-in min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <fm.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {activeTab === 'overview' && (
                                <div className="grid lg:grid-cols-2 gap-12">
                                    <SecurityPanelV2 />
                                    <DefenseGridPanel />
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
                                <div className="max-w-5xl mx-auto">
                                    <SecurityPanelV2 />
                                </div>
                            )}
                            {activeTab === 'defense' && (
                                <div className="max-w-5xl mx-auto">
                                    <DefenseGridPanel />
                                </div>
                            )}
                            {activeTab === 'cognitive' && (
                                <div className="max-w-5xl mx-auto">
                                    <CognitivePanelV2 />
                                </div>
                            )}
                            {activeTab === 'analytics' && (
                                <div className="max-w-5xl mx-auto">
                                    <RiskAnalyticsPanel />
                                </div>
                            )}
                            {activeTab === 'focus' && (
                                <div className="max-w-5xl mx-auto">
                                    <DeepFocusPanel />
                                </div>
                            )}
                        </fm.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default DashboardPage;
