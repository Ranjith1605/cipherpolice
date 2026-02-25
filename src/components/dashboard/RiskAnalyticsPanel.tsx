import React, { useEffect, useState } from 'react';

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
        { label: 'Attention Depth', value: 67, color: '#00f3ff', glow: 'rgba(0,243,255,0.4)' },
        { label: 'Decision Clarity', value: 82, color: '#bc13fe', glow: 'rgba(188,19,254,0.4)' },
        { label: 'Cognitive Friction', value: 41, color: '#f59e0b', glow: 'rgba(245,158,11,0.4)' },
        { label: 'Context Pressure', value: 58, color: '#ef4444', glow: 'rgba(239,68,68,0.4)' },
    ]);

    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimated(true), 200);
        return () => clearTimeout(timer);
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
        if (val >= 80) return '#00f3ff';
        if (val >= 60) return '#f59e0b';
        return '#ef4444';
    };

    const maxEfficiency = Math.max(...weeklyData.map(d => d.efficiency));

    return (
        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="text-purple-400">📊</span> Risk Analytics
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">Cognitive Profiling & Baseline</p>
                </div>
                <span className="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-1 rounded-full font-mono">
                    LIVE
                </span>
            </div>

            {/* Metric Bars */}
            <div className="space-y-4 mb-6">
                {metrics.map((metric) => (
                    <div key={metric.label}>
                        <div className="flex justify-between mb-1.5">
                            <span className="text-xs text-gray-400">{metric.label}</span>
                            <span className="text-xs font-mono font-bold" style={{ color: metric.color }}>
                                {Math.round(metric.value)}%
                            </span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-700 ease-out"
                                style={{
                                    width: animated ? `${metric.value}%` : '0%',
                                    background: `linear-gradient(90deg, ${metric.color}99, ${metric.color})`,
                                    boxShadow: animated ? `0 0 8px ${metric.glow}` : 'none',
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Weekly Efficiency Chart */}
            <div>
                <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-widest">Weekly Efficiency Trend</p>
                <div className="flex items-end gap-2 h-20">
                    {weeklyData.map((d) => (
                        <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                            <div
                                className="w-full rounded-t-sm transition-all duration-1000 ease-out"
                                style={{
                                    height: animated ? `${(d.efficiency / maxEfficiency) * 100}%` : '0%',
                                    background: `linear-gradient(180deg, ${getEfficiencyColor(d.efficiency)}, ${getEfficiencyColor(d.efficiency)}55)`,
                                    boxShadow: animated ? `0 0 6px ${getEfficiencyColor(d.efficiency)}66` : 'none',
                                    minHeight: '4px',
                                }}
                            />
                            <span className="text-xs text-gray-600">{d.day}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RiskAnalyticsPanel;
