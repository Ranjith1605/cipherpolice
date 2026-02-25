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
        <section id="browser-monitor" className="py-32 relative overflow-hidden bg-asi-dark">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

            <div className="container-vision relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 animate-fade-in px-4">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-asi-neon/30 bg-asi-neon/5 mb-8 neon-border-beam">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-asi-neon opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-asi-neon"></span>
                        </span>
                        <span className="text-asi-neon font-black font-mono text-[10px] tracking-[0.4em] uppercase">Quantum Perimeter Scanner Active</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">
                        <span className="bg-gradient-to-r from-asi-neon via-white to-asi-purple bg-clip-text text-transparent">
                            Neural Monitor Display
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                        CipherPolice actively enforces security protocols across the meta-quantum frontier. Real-time monitoring of browser-level LLM exfiltration and cognitive scripts.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 px-4">
                    {/* Left: Quantum Radar HUD */}
                    <div className="lg:col-span-4 holographic-card p-10 flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-asi-neon/40 to-transparent"></div>

                        <div className="relative mb-10">
                            <div className="absolute inset-0 bg-asi-neon/10 blur-[60px] rounded-full group-hover:bg-asi-neon/20 transition-all duration-700"></div>
                            <canvas ref={canvasRef} width={280} height={280} className="relative z-10 drop-shadow-[0_0_15px_rgba(0,243,255,0.2)]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-asi-neon/10 rounded-full animate-pulse-slow"></div>
                        </div>

                        <div className="text-center relative z-10">
                            <div className="text-7xl font-black font-mono tracking-tighter mb-2 italic" style={{ color: hColor, textShadow: `0 0 30px ${hColor}44` }}>
                                {healthScore}<span className="text-2xl not-italic ml-1 opacity-50 font-sans">%</span>
                            </div>
                            <div className="text-xs font-black text-asi-neon tracking-[0.3em] uppercase opacity-70">Neural Integrity Index</div>
                        </div>

                        {/* Scanner Status Bar */}
                        <div className="w-full mt-10 p-4 border border-white/5 bg-white/5 rounded-xl">
                            <div className="flex justify-between text-[10px] font-black text-gray-500 mb-3 uppercase tracking-widest">
                                <span>Perimeter Depth</span>
                                <span className="text-asi-neon">{Math.round(scanProgress)}%</span>
                            </div>
                            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-300 relative"
                                    style={{
                                        width: `${scanProgress}%`,
                                        background: 'linear-gradient(90deg, #00f3ff, #bc13fe)',
                                        boxShadow: '0 0 10px rgba(0,243,255,0.5)',
                                    }}
                                >
                                    <div className="absolute top-0 right-0 w-2 h-full bg-white animate-shine opacity-50"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Metrics & Tactical Feed */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 gap-6">
                            {metrics.map((m, idx) => (
                                <div
                                    key={m.label}
                                    className="holographic-card p-8 group hover:border-asi-neon/30 animate-slide-up"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-asi-dark border border-white/10 flex items-center justify-center text-xl group-hover:border-asi-neon transition-colors">
                                                {m.icon}
                                            </div>
                                            <span className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">{m.label}</span>
                                        </div>
                                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: m.color, boxShadow: `0 0 8px ${m.color}` }}></div>
                                    </div>
                                    <div className="text-4xl font-black font-mono tracking-tighter" style={{ color: m.color }}>
                                        {m.label === 'Threat Surface' ? m.value : m.value.toFixed(1)}
                                        <span className="text-sm ml-2 font-black text-gray-600 uppercase tracking-widest">{m.unit}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tactical Security Feed */}
                        <div className="holographic-card p-8 flex flex-col relative overflow-hidden group">
                            <div className="absolute inset-0 bg-asi-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                                    <span className="text-xs font-black text-asi-neon tracking-[0.4em] uppercase">Tactical Feed</span>
                                    <span className="text-[10px] font-mono text-gray-500">UID: CP-100-PRO</span>
                                </div>

                                <div className="space-y-4 flex-1">
                                    {SCAN_CHECKS.map((check, i) => {
                                        const isActive = i === activeLine;
                                        return (
                                            <div
                                                key={i}
                                                className={`flex items-center gap-4 py-2 px-3 rounded-lg text-[11px] font-mono transition-all duration-300 ${isActive ? 'bg-asi-neon/10 border-l-2 border-asi-neon' : 'opacity-40'}`}
                                            >
                                                <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                                                    {isActive ? (
                                                        <span className="w-2 h-2 rounded-full bg-asi-neon animate-ping" />
                                                    ) : check.status === 'ok' ? (
                                                        <span className="text-green-500">●</span>
                                                    ) : check.status === 'warning' ? (
                                                        <span className="text-yellow-500">●</span>
                                                    ) : (
                                                        <span className="text-asi-neon">●</span>
                                                    )}
                                                </div>
                                                <span className={`${isActive ? 'text-white font-bold' : 'text-gray-400'}`}>
                                                    {check.text}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-6 h-6 rounded-full bg-asi-slate border border-asi-dark"></div>
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-black text-gray-500 tracking-widest uppercase italic">Encryption: Active Elite Force</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowserMonitorSection;
