import React, { useEffect, useState } from 'react';
import { motion as fm } from 'framer-motion';
import { BarChart3, TrendingUp, Layers } from 'lucide-react';

interface MetricBar {
    label: string;
    value: number; // 0-100
    color: string;
    glow: string;
}

interface WeeklyTrend {
    day: string;
    efficiency: number;
}

const weeklyData: WeeklyTrend[] = [
    { day: 'Mon', efficiency: 72 },
    { day: 'Tue', efficiency: 85 },
    { day: 'Wed', efficiency: 61 },
    { day: 'Thu', efficiency: 78 },
    { day: 'Fri', efficiency: 90 },
    { day: 'Sat', efficiency: 55 },
    { day: 'Sun', efficiency: 68 },
];

const RiskAnalyticsPanel: React.FC = () => {
    const [metrics, setMetrics] = useState<MetricBar[]>([
        { label: 'Attention Depth', value: 67, color: 'var(--primary)', glow: 'rgba(0,242,255,0.4)' },
        { label: 'Decision Clarity', value: 82, color: 'var(--secondary)', glow: 'rgba(255,202,40,0.4)' },
        { label: 'Soul Friction', value: 41, color: 'var(--secondary)', glow: 'rgba(255,202,40,0.4)' },
        { label: 'Context Pressure', value: 58, color: '#ef4444', glow: 'rgba(239,68,68,0.4)' },
    ]);



    useEffect(() => {
    }, []);

    // Simulate live updates
    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => prev.map(m => ({
                ...m,
                value: Math.max(10, Math.min(99, m.value + (Math.random() * 10 - 5)))
            })));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getEfficiencyColor = (val: number) => {
        if (val >= 80) return 'var(--primary)';
        if (val >= 60) return 'var(--secondary)';
        return '#ef4444';
    };

    const maxEfficiency = Math.max(...weeklyData.map(d => d.efficiency));

    return (
        <div className="glass-ethereal border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl h-full shadow-2xl">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase italic font-mono">
                        <BarChart3 className="w-6 h-6 text-quantum-blue" />
                        Metaphysics
                    </h3>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-[0.3em] font-bold italic">Soul Baseline & Profiling</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-quantum-blue/5 border border-quantum/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-quantum-blue animate-pulse shadow-[0_0_8px_var(--quantum-blue)]" />
                    <span className="text-[9px] text-quantum-blue font-black tracking-widest font-mono uppercase">LIVE</span>
                </div>
            </div>

            {/* Metric Bars */}
            <div className="space-y-6 mb-10">
                {metrics.map((metric) => (
                    <div key={metric.label}>
                        <div className="flex justify-between mb-2">
                            <span className="text-[11px] text-gray-500 font-black uppercase tracking-widest flex items-center gap-2">
                                <Layers className="w-3 h-3 text-gray-700" />
                                {metric.label}
                            </span>
                            <span className="text-xs font-black font-mono tracking-tighter" style={{ color: metric.color }}>
                                {Math.round(metric.value)}%
                            </span>
                        </div>
                        <div className="h-2.5 bg-white/[0.03] rounded-full overflow-hidden border border-white/5 shadow-inner">
                            <fm.div
                                initial={{ width: 0 }}
                                animate={{ width: `${metric.value}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full rounded-full relative"
                                style={{
                                    background: `linear-gradient(90deg, ${metric.color}99, ${metric.color})`,
                                    boxShadow: `0 0 10px ${metric.glow}`,
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                            </fm.div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Weekly Efficiency Chart */}
            <div>
                <p className="text-[10px] text-gray-500 mb-6 font-black uppercase tracking-[0.4em] italic flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    ✧ Weekly Harmony Trend
                </p>
                <div className="flex items-end gap-3 h-28 px-2">
                    {weeklyData.map((d) => (
                        <div key={d.day} className="flex-1 flex flex-col items-center gap-3 group">
                            <div className="relative w-full flex flex-col items-center justify-end h-full">
                                <fm.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${(d.efficiency / maxEfficiency) * 100}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="w-full rounded-t-xl transition-all duration-500 group-hover:brightness-125"
                                    style={{
                                        background: `linear-gradient(180deg, ${getEfficiencyColor(d.efficiency)}, ${getEfficiencyColor(d.efficiency)}44)`,
                                        boxShadow: `0 0 15px ${getEfficiencyColor(d.efficiency)}33`,
                                        minHeight: '6px',
                                    }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-white/20 rounded-t-xl"></div>
                                </fm.div>
                            </div>
                            <span className="text-[10px] text-gray-700 font-mono font-bold uppercase tracking-widest">{d.day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RiskAnalyticsPanel;
