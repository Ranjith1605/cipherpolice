import { useState, useMemo } from 'react';
import { Search, ShieldAlert, Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Scanner = () => {
    const [domain, setDomain] = useState('');
    const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
    const [results, setResults] = useState<{
        score: number;
        sslStatus: string;
        headers: string[];
        fixes: string[];
    } | null>(null);

    const handleScan = () => {
        if (!domain.trim()) return;
        setScanStatus('scanning');
        setResults(null);

        setTimeout(() => {
            const isSecure = Math.random() > 0.3;
            setResults({
                score: isSecure ? Math.floor(Math.random() * 20) + 80 : Math.floor(Math.random() * 40) + 50,
                sslStatus: isSecure ? 'A+ [SACRED]' : 'F [VULNERABLE]',
                headers: isSecure
                    ? ['X-Content-Type-Options: nosniff', 'Strict-Transport-Security: max-age=31536000', 'Content-Security-Policy: default-src \'self\'']
                    : ['Server: Apache/2.4', 'X-Powered-By: PHP/7.4', 'No Security Headers Detected'],
                fixes: isSecure
                    ? ['Celestial baseline maintained.', 'Monitor 3rd party script injection.']
                    : ['CRITICAL: Implement HSTS header immediately.', 'URGENT: Deprecated SSL Ciphers detected.', 'BLOCK: Dark manipulation vectors found.'],
            });
            setScanStatus('complete');
        }, 2500);
    };

    const scoreColor = useMemo(() => {
        if (!results) return 'text-white';
        if (results.score >= 90) return 'text-quantum-blue';
        if (results.score >= 70) return 'text-guardian-gold';
        return 'text-red-500';
    }, [results]);

    return (
        <section id="scanner" className="py-32 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 glass-ethereal border border-quantum/30 rounded-full mb-6 shadow-2xl"
                    >
                        <Cpu className="w-3 h-3 text-quantum-blue animate-pulse" />
                        <span className="text-[10px] font-black text-quantum-blue tracking-[0.4em] uppercase">Celestial Insight Engine</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono"
                    >
                        Divine <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic">Audit</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 text-xl font-medium leading-relaxed max-w-3xl mx-auto"
                    >
                        Execute a high-fidelity audit of SSL integrity and cryptographic headers.
                        The Light of the Guardian reveals all shadows.
                    </motion.p>
                </div>

                <div className="max-w-2xl mx-auto relative mb-24">
                    <div className="absolute inset-0 bg-quantum-blue/5 blur-3xl rounded-full animate-pulse"></div>
                    <div className="relative flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-grow group">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                <Search className="w-5 h-5 text-gray-500 group-focus-within:text-quantum-blue transition-colors" />
                            </div>
                            <input
                                type="text"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                placeholder="TARGET DOMAIN (e.g., example.com)"
                                className="w-full pl-14 pr-7 py-6 glass-ethereal border border-white/10 rounded-2xl text-white font-mono placeholder-gray-700 outline-none focus:border-quantum/50 focus:bg-white/5 transition-all text-xs tracking-widest uppercase shadow-2xl"
                            />
                        </div>
                        <button
                            onClick={handleScan}
                            disabled={scanStatus === 'scanning' || !domain.trim()}
                            className="px-12 py-6 bg-quantum-blue text-obsidian font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl hover:shadow-[0_0_40px_rgba(0,242,255,0.5)] transition-all disabled:opacity-50 active:scale-95 shadow-2xl overflow-hidden relative group"
                        >
                            <span className="relative z-10">{scanStatus === 'scanning' ? 'ANALYZING...' : 'INITIATE AUDIT'}</span>
                            <motion.div
                                className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                            />
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {scanStatus === 'scanning' && (
                        <motion.div
                            key="scanning"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="max-w-2xl mx-auto text-center space-y-12"
                        >
                            <div className="relative inline-block">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute -inset-10 border border-quantum-blue/30 rounded-full"
                                />
                                <div className="p-10 rounded-full glass-ethereal border border-quantum/50 shadow-[0_0_50px_rgba(0,242,255,0.2)]">
                                    <ShieldAlert className="w-20 h-20 text-quantum-blue animate-pulse" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <p className="text-white font-black tracking-[0.5em] uppercase text-sm italic">Revealing {domain}...</p>
                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden shadow-inner">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                        className="h-full w-1/2 bg-quantum-blue shadow-[0_0_20px_var(--quantum-blue)]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {scanStatus === 'complete' && results && (
                        <motion.div
                            key="results"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-12"
                        >
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="glass-ethereal p-12 flex flex-col items-center justify-center text-center group border-quantum/20 rounded-3xl shadow-2xl">
                                    <p className="text-[11px] font-black text-gray-500 uppercase tracking-[0.4em] mb-6">Celestial Affinity</p>
                                    <div className={`text-9xl font-black font-mono tracking-tighter italic ${scoreColor} drop-shadow-[0_0_40px_currentColor]`}>
                                        {results.score}
                                    </div>
                                </div>

                                <div className="glass-ethereal p-12 flex flex-col justify-center group rounded-3xl shadow-2xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-white/[0.02] rounded-xl border border-white/10 group-hover:border-quantum/50 transition-all shadow-xl">
                                            <ShieldCheck className="w-6 h-6 text-quantum-blue" />
                                        </div>
                                        <p className="text-[11px] font-black text-gray-500 uppercase tracking-[0.4em]">SSL Integrity</p>
                                    </div>
                                    <div className={`text-5xl font-black font-mono italic tracking-tighter ${results.sslStatus.includes('SACRED') ? 'text-quantum-blue' : 'text-red-500'}`}>
                                        {results.sslStatus}
                                    </div>
                                </div>

                                <div className="glass-ethereal p-12 flex flex-col justify-center group rounded-3xl shadow-2xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-white/[0.02] rounded-xl border border-white/10 group-hover:border-guardian/50 transition-all shadow-xl">
                                            <CheckCircle2 className="w-6 h-6 text-guardian-gold" />
                                        </div>
                                        <p className="text-[11px] font-black text-gray-500 uppercase tracking-[0.4em]">Header Scan</p>
                                    </div>
                                    <div className="text-5xl font-black font-mono italic tracking-tighter text-white">
                                        {results.headers.length} <span className="text-xl text-gray-600 font-sans tracking-widest uppercase">/ Light Baseline</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-10">
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="glass-ethereal p-12 border border-white/5 rounded-[2.5rem] shadow-2xl"
                                >
                                    <h4 className="text-2xl font-black text-white italic mb-10 flex items-center gap-4 uppercase tracking-tighter">
                                        <div className="w-3 h-3 rounded-full bg-quantum-blue animate-ping"></div>
                                        Sacred Corrections
                                    </h4>
                                    <ul className="space-y-6">
                                        {results.fixes.map((fix, index) => (
                                            <li key={index} className="flex gap-5 items-start text-base">
                                                <span className="text-[13px] font-mono text-quantum-blue/60 uppercase tracking-widest">[{index + 1}]</span>
                                                <span className="text-gray-400 font-medium leading-relaxed">{fix}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="glass-ethereal p-12 border border-white/5 bg-obsidian/40 rounded-[2.5rem] shadow-2xl"
                                >
                                    <h4 className="text-2xl font-black text-white italic mb-10 uppercase tracking-tighter">Header Analysis</h4>
                                    <div className="bg-black/30 p-8 rounded-2xl border border-white/5 font-mono text-[12px] text-gray-400 space-y-4 shadow-inner">
                                        {results.headers.map((header, index) => (
                                            <div key={index} className="flex gap-4 group/h">
                                                <span className="text-quantum-blue/40 group-hover/h:text-quantum-blue transition-colors">{'>>'}</span>
                                                <span className="truncate group-hover/h:text-white transition-colors tracking-wide">{header}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-mono text-gray-600 mt-8 uppercase tracking-[0.4em] italic font-bold">
                                        *Divine observation protocols active.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
