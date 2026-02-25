import React, { useEffect, useState, useRef } from 'react';

interface BrowserMetric {
    label: string;
    value: number;
    unit: string;
    icon: string;
    color: string;
}

interface ScanLine {
    text: string;
    status: 'ok' | 'warning' | 'scanning';
}

const SCAN_CHECKS: ScanLine[] = [
    { text: 'AI inference engine integrity', status: 'ok' },
    { text: 'Browser extension sandbox', status: 'ok' },
    { text: 'LLM API data exfiltration vectors', status: 'ok' },
    { text: 'Model prompt injection patterns', status: 'warning' },
    { text: 'WebGPU memory isolation', status: 'ok' },
    { text: 'AI browser fingerprint resistance', status: 'ok' },
    { text: 'Cognitive manipulation scripts', status: 'warning' },
    { text: 'Neural interface protocol integrity', status: 'scanning' },
];

const BrowserMonitorSection: React.FC = () => {
    const [healthScore, setHealthScore] = useState(0);
    const [targetScore] = useState(84);
    const [scanProgress, setScanProgress] = useState(0);
    const [activeLine, setActiveLine] = useState(0);
    const [metrics, setMetrics] = useState<BrowserMetric[]>([
        { label: 'AI Health Score', value: 84, unit: '%', icon: '🤖', color: '#00f3ff' },
        { label: 'Identity Confidence', value: 97.2, unit: '%', icon: '🔐', color: '#22c55e' },
        { label: 'Threat Surface', value: 2, unit: 'active', icon: '⚠️', color: '#f59e0b' },
        { label: 'Perimeter Status', value: 100, unit: '%', icon: '🛡️', color: '#bc13fe' },
    ]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Animate health score
    useEffect(() => {
        const ramp = setInterval(() => {
            setHealthScore(h => {
                if (h >= targetScore) { clearInterval(ramp); return targetScore; }
                return h + 1;
            });
        }, 18);
        return () => clearInterval(ramp);
    }, [targetScore]);

    // Animate scan progress (loops)
    useEffect(() => {
        const ramp = setInterval(() => {
            setScanProgress(p => p >= 100 ? 0 : p + 0.5);
        }, 25);
        return () => clearInterval(ramp);
    }, []);

    // Advance scan line
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLine(l => (l + 1) % SCAN_CHECKS.length);
        }, 1400);
        return () => clearInterval(interval);
    }, []);

    // Radar canvas animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let angle = 0;
        let frameId: number;

        const draw = () => {
            const W = canvas.width, H = canvas.height;
            const cx = W / 2, cy = H / 2;
            const r = Math.min(W, H) / 2 - 8;

            ctx.clearRect(0, 0, W, H);

            // Rings
            [0.25, 0.5, 0.75, 1].forEach(factor => {
                ctx.beginPath();
                ctx.arc(cx, cy, r * factor, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(0,243,255,0.1)';
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            // Spokes
            for (let i = 0; i < 8; i++) {
                const a = (i / 8) * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
                ctx.strokeStyle = 'rgba(0,243,255,0.06)';
                ctx.stroke();
            }

            // Sweep sector (linear gradient fallback)
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(angle);
            const sweepGrad = ctx.createLinearGradient(0, 0, r, 0);
            sweepGrad.addColorStop(0, 'rgba(0,243,255,0.4)');
            sweepGrad.addColorStop(1, 'rgba(0,243,255,0)');
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, r, 0, Math.PI / 3);
            ctx.closePath();
            ctx.fillStyle = sweepGrad;
            ctx.fill();
            ctx.restore();

            // Sweep line
            ctx.save();
            ctx.translate(cx, cy);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
            ctx.strokeStyle = 'rgba(0,243,255,0.8)';
            ctx.lineWidth = 1.5;
            ctx.shadowColor = '#00f3ff';
            ctx.shadowBlur = 6;
            ctx.stroke();
            ctx.restore();

            // Blips
            const blips = [
                { a: 0.8, d: 0.55 },
                { a: 2.1, d: 0.72 },
                { a: 3.7, d: 0.38 },
                { a: 5.0, d: 0.65 },
            ];
            blips.forEach(b => {
                const bx = cx + Math.cos(b.a) * r * b.d;
                const by = cy + Math.sin(b.a) * r * b.d;
                const fadeAngle = (angle - b.a + 2 * Math.PI) % (2 * Math.PI);
                const alpha = fadeAngle < Math.PI / 3 ? 1 - fadeAngle / (Math.PI / 3) : 0.15;
                ctx.beginPath();
                ctx.arc(bx, by, 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,243,255,${alpha})`;
                ctx.shadowColor = '#00f3ff';
                ctx.shadowBlur = alpha > 0.5 ? 8 : 2;
                ctx.fill();
            });

            angle = (angle + 0.018) % (Math.PI * 2);
            frameId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(frameId);
    }, []);

    // Live metric jitter
    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => prev.map(m => ({
                ...m,
                value: m.label === 'Threat Surface'
                    ? m.value
                    : parseFloat((m.value + (Math.random() * 2 - 1)).toFixed(1))
            })));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getHealthColor = (s: number) => {
        if (s >= 75) return '#00f3ff';
        if (s >= 50) return '#f59e0b';
        return '#ef4444';
    };

    const hColor = getHealthColor(healthScore);

    return (
        <section id="browser-monitor" className="py-20 bg-[#050a14] relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(0,243,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,243,255,0.03) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ boxShadow: '0 0 6px #00f3ff' }} />
                        <span className="text-cyan-400 font-mono text-xs tracking-widest">AI BROWSER SECURITY · LIVE</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                            AI Browser Monitor
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Real-time security posture of your AI-augmented browser. CipherPolice actively scans for cognitive manipulation, data exfiltration, and neural interface threats.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Radar Display */}
                    <div className="lg:col-span-1 bg-slate-900/80 border border-cyan-500/20 rounded-2xl p-6 flex flex-col items-center backdrop-blur-sm">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Perimeter Radar</p>
                        <canvas ref={canvasRef} width={200} height={200} className="mb-4" />
                        {/* Health Score */}
                        <div className="text-center">
                            <div className="text-5xl font-black font-mono mb-1" style={{ color: hColor, textShadow: `0 0 20px ${hColor}` }}>
                                {healthScore}
                            </div>
                            <div className="text-xs text-gray-500">AI Health Score</div>
                        </div>
                        {/* Scan Progress */}
                        <div className="w-full mt-4">
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Perimeter Scan</span>
                                <span>{Math.round(scanProgress)}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-100"
                                    style={{
                                        width: `${scanProgress}%`,
                                        background: 'linear-gradient(90deg, #00f3ff, #bc13fe)',
                                        boxShadow: '0 0 8px rgba(0,243,255,0.5)',
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Metrics + Scan Log */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        {/* Metric Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {metrics.map(m => (
                                <div key={m.label} className="bg-slate-900/80 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-lg">{m.icon}</span>
                                        <span className="text-xs text-gray-500">{m.label}</span>
                                    </div>
                                    <div className="text-2xl font-black font-mono" style={{ color: m.color }}>
                                        {m.label === 'Threat Surface' ? m.value : m.value.toFixed(1)}
                                        <span className="text-sm ml-1 font-normal text-gray-500">{m.unit}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Live Scan Checks */}
                        <div className="bg-slate-900/80 border border-white/10 rounded-xl p-5 backdrop-blur-sm flex-1">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
                                Active Security Scan
                            </p>
                            <div className="space-y-2">
                                {SCAN_CHECKS.map((check, i) => {
                                    const isActive = i === activeLine;
                                    const statusColor = {
                                        ok: '#22c55e',
                                        warning: '#f59e0b',
                                        scanning: '#00f3ff',
                                    };
                                    return (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 py-1.5 px-2 rounded-lg text-xs font-mono transition-all duration-300"
                                            style={{
                                                background: isActive ? 'rgba(0,243,255,0.04)' : 'transparent',
                                                borderLeft: isActive ? '2px solid rgba(0,243,255,0.4)' : '2px solid transparent',
                                            }}
                                        >
                                            <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                                                {isActive ? (
                                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                                                ) : check.status === 'ok' ? (
                                                    <span style={{ color: '#22c55e' }}>✓</span>
                                                ) : check.status === 'warning' ? (
                                                    <span style={{ color: '#f59e0b' }}>⚠</span>
                                                ) : (
                                                    <span style={{ color: '#00f3ff' }}>…</span>
                                                )}
                                            </span>
                                            <span style={{
                                                color: isActive ? '#00f3ff' : check.status === 'warning' ? '#f59e0b' : '#6b7280'
                                            }}>
                                                {check.text}
                                            </span>
                                            {!isActive && (
                                                <span className="ml-auto text-xs" style={{ color: statusColor[check.status] }}>
                                                    {check.status.toUpperCase()}
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowserMonitorSection;
