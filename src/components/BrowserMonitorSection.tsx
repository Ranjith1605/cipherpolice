import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { text: 'Celestial inference engine integrity', status: 'ok' },
    { text: 'Spirit sandbox validation', status: 'ok' },
    { text: 'LLM data exfiltration vectors', status: 'ok' },
    { text: 'Void prompt injection patterns', status: 'warning' },
    { text: 'Meta-lattice memory isolation', status: 'ok' },
    { text: 'Divine browser fingerprint resistance', status: 'ok' },
    { text: 'Dark manipulation scripts', status: 'warning' },
    { text: 'Neural interface protocol integrity', status: 'scanning' },
];

const BrowserMonitorSection: React.FC = () => {
    const [healthScore, setHealthScore] = useState(0);
    const [targetScore] = useState(84);
    const [scanProgress, setScanProgress] = useState(0);
    const [activeLine, setActiveLine] = useState(0);
    const [metrics, setMetrics] = useState<BrowserMetric[]>([
        { label: 'Neural Integrity', value: 84, unit: '%', icon: '✨', color: '#00f2ff' },
        { label: 'Soul Authenticity', value: 97.2, unit: '%', icon: '🛡️', color: '#ffca28' },
        { label: 'Dark Vectors', value: 2, unit: 'active', icon: '⚠️', color: '#f59e0b' },
        { label: 'Shield Stability', value: 100, unit: '%', icon: '🔗', color: '#00f2ff' },
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
                ctx.strokeStyle = 'rgba(0,242,255,0.1)';
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            // Spokes
            for (let i = 0; i < 8; i++) {
                const a = (i / 8) * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
                ctx.strokeStyle = 'rgba(255,255,255,0.03)';
                ctx.stroke();
            }

            // Sweep sector
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(angle);
            const sweepGrad = ctx.createLinearGradient(0, 0, r, 0);
            sweepGrad.addColorStop(0, 'rgba(0,242,255,0.3)');
            sweepGrad.addColorStop(1, 'rgba(0,242,255,0)');
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
            ctx.strokeStyle = 'rgba(0,242,255,0.8)';
            ctx.lineWidth = 1.5;
            ctx.shadowColor = '#00f2ff';
            ctx.shadowBlur = 10;
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
                ctx.fillStyle = `rgba(0,242,255,${alpha})`;
                ctx.shadowColor = '#00f2ff';
                ctx.shadowBlur = alpha > 0.5 ? 12 : 4;
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
                value: m.label === 'Dark Vectors'
                    ? m.value
                    : parseFloat((m.value + (Math.random() * 0.4 - 0.2)).toFixed(1))
            })));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const hColor = healthScore >= 75 ? '#00f2ff' : healthScore >= 50 ? '#ffca28' : '#ef4444';

    return (
        <section id="browser-monitor" className="py-32 relative overflow-hidden bg-transparent">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

            <div className="container-vision relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-quantum/30 glass-ethereal mb-8 shadow-2xl"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantum-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-quantum-blue"></span>
                        </span>
                        <span className="text-quantum-blue font-black font-mono text-[10px] tracking-[0.4em] uppercase">Sacred Perimeter Anchor Active</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-8xl font-black tracking-tighter mb-8 italic text-white uppercase"
                    >
                        <span className="bg-gradient-to-r from-quantum-blue via-white to-guardian-gold bg-clip-text text-transparent">
                            Celestial Monitor
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 text-xl max-w-3xl mx-auto font-medium leading-relaxed"
                    >
                        CipherPolice actively enforces sacred protocols across the meta-quantum frontier.
                        The Guardian's eye never blinks.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 px-4">
                    {/* Left: Quantum Radar HUD */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 glass-ethereal p-12 flex flex-col items-center justify-center relative overflow-hidden group rounded-[3rem] shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-quantum-blue/40 to-transparent"></div>

                        <div className="relative mb-12">
                            <div className="absolute inset-0 bg-quantum-blue/5 blur-[80px] rounded-full group-hover:bg-quantum-blue/10 transition-all duration-700"></div>
                            <canvas ref={canvasRef} width={320} height={320} className="relative z-10 drop-shadow-[0_0_20px_rgba(0,242,255,0.3)]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-quantum/10 rounded-full animate-pulse-slow"></div>
                        </div>

                        <div className="text-center relative z-10">
                            <div className="text-8xl font-black font-mono tracking-tighter mb-4 italic" style={{ color: hColor, textShadow: `0 0 40px ${hColor}66` }}>
                                {healthScore}<span className="text-2xl not-italic ml-1 opacity-50 font-sans">%</span>
                            </div>
                            <div className="text-xs font-black text-quantum-blue tracking-[0.4em] uppercase font-bold">Divine Integrity Index</div>
                        </div>

                        {/* Scanner Status Bar */}
                        <div className="w-full mt-12 p-6 glass-ethereal border border-white/5 rounded-2xl shadow-inner">
                            <div className="flex justify-between text-[11px] font-black text-gray-500 mb-4 uppercase tracking-widest">
                                <span className="italic">Observation Depth</span>
                                <span className="text-quantum-blue">{Math.round(scanProgress)}%</span>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
                                <motion.div
                                    className="h-full rounded-full relative"
                                    animate={{ width: `${scanProgress}%` }}
                                    style={{
                                        background: 'linear-gradient(90deg, #00f2ff, #ffca28)',
                                        boxShadow: '0 0 15px rgba(0,242,255,0.6)',
                                    }}
                                >
                                    <div className="absolute top-0 right-0 w-4 h-full bg-white/30 animate-shine"></div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Metrics & Tactical Feed */}
                    <div className="lg:col-span-7 flex flex-col gap-10">
                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {metrics.map((m, idx) => (
                                <motion.div
                                    key={m.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="glass-ethereal p-10 group hover:border-quantum/40 transition-all rounded-3xl shadow-xl flex flex-col justify-between"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-2xl group-hover:border-quantum/50 transition-colors shadow-2xl">
                                                {m.icon}
                                            </div>
                                            <span className="text-[11px] font-black text-gray-500 tracking-[0.34em] uppercase font-bold">{m.label}</span>
                                        </div>
                                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: m.color, boxShadow: `0 0 12px ${m.color}` }}></div>
                                    </div>
                                    <div className="text-5xl font-black font-mono tracking-tighter italic" style={{ color: m.color, textShadow: `0 0 20px ${m.color}33` }}>
                                        {m.label === 'Dark Vectors' ? m.value : m.value.toFixed(1)}
                                        <span className="text-sm ml-2 font-black text-gray-600 uppercase tracking-widest not-italic italic">{m.unit}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tactical Security Feed */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-ethereal p-10 flex flex-col relative overflow-hidden group rounded-[2.5rem] shadow-2xl flex-1 border-white/5"
                        >
                            <div className="absolute inset-0 bg-quantum-blue/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/5">
                                    <span className="text-xs font-black text-quantum-blue tracking-[0.5em] uppercase italic">Sacred Feed</span>
                                    <span className="text-[10px] font-mono text-gray-500 font-bold tracking-widest">MANIFEST: CP-999-DIVINE</span>
                                </div>

                                <div className="space-y-4 flex-1">
                                    {SCAN_CHECKS.map((check, i) => {
                                        const isActive = i === activeLine;
                                        return (
                                            <div
                                                key={i}
                                                className={`flex items-center gap-5 py-2.5 px-4 rounded-xl text-[12px] font-mono transition-all duration-400 ${isActive ? 'bg-quantum-blue/10 border-l-4 border-quantum-blue shadow-lg' : 'opacity-30'}`}
                                            >
                                                <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                                                    {isActive ? (
                                                        <motion.div
                                                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                                                            transition={{ repeat: Infinity, duration: 1 }}
                                                            className="w-2.5 h-2.5 rounded-full bg-quantum-blue"
                                                        />
                                                    ) : check.status === 'ok' ? (
                                                        <span className="text-quantum-blue/60 font-black">●</span>
                                                    ) : check.status === 'warning' ? (
                                                        <span className="text-guardian-gold font-black">●</span>
                                                    ) : (
                                                        <span className="text-quantum-blue animate-pulse">●</span>
                                                    )}
                                                </div>
                                                <span className={`${isActive ? 'text-white font-black italic tracking-tight' : 'text-gray-400 font-medium'}`}>
                                                    {check.text.toUpperCase()}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex -space-x-3">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-8 h-8 rounded-full bg-obsidian border-2 border-white/5 shadow-2xl"></div>
                                                ))}
                                            </div>
                                            <span className="text-[10px] font-black text-gray-600 tracking-[0.2em] uppercase italic">Divine Protection: ASCENDED</span>
                                        </div>
                                        <div className="text-[10px] font-mono text-quantum-blue/40 font-bold animate-pulse">
                                            VOW ACTIVE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowserMonitorSection;
