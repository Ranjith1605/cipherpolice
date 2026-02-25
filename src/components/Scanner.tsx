import { useState, useMemo } from 'react';
import { Search, ShieldAlert, Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';

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
                sslStatus: isSecure ? 'A+ [SECURE]' : 'F [VULNERABLE]',
                headers: isSecure
                    ? ['X-Content-Type-Options: nosniff', 'Strict-Transport-Security: max-age=31536000', 'Content-Security-Policy: default-src \'self\'']
                    : ['Server: Apache/2.4', 'X-Powered-By: PHP/7.4', 'No Security Headers Detected'],
                fixes: isSecure
                    ? ['Neural baseline maintained.', 'Monitor 3rd party script injection.']
                    : ['CRITICAL: Implement HSTS header immediately.', 'URGENT: Deprecated SSL Ciphers detected.', 'BLOCK: Neural manipulation vectors found.'],
            });
            setScanStatus('complete');
        }, 2500);
    };

    const scoreColor = useMemo(() => {
        if (!results) return 'text-white';
        if (results.score >= 90) return 'text-asi-neon';
        if (results.score >= 70) return 'text-yellow-400';
        return 'text-red-500';
    }, [results]);

    return (
        <section id="scanner" className="py-32 bg-[#050a14] relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-asi-neon/5 border border-asi-neon/20 rounded mb-6">
                        <Cpu className="w-3 h-3 text-asi-neon animate-pulse" />
                        <span className="text-[10px] font-black text-asi-neon tracking-[0.3em] uppercase">Neural Threat Engine</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-white tracking-tighter">
                        Tactical <span className="bg-gradient-to-r from-asi-neon to-asi-purple bg-clip-text text-transparent not-italic underline decoration-white/10 underline-offset-8">Scan</span>
                    </h2>
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">
                        Execute a high-fidelity audit of basic vulnerabilities, SSL integrity, and cryptographic headers.
                        Proactive neural defense starts with absolute visibility.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto relative mb-24">
                    <div className="absolute inset-0 bg-asi-neon/5 blur-2xl rounded-full animate-pulse"></div>
                    <div className="relative flex flex-col sm:flex-row gap-2">
                        <div className="relative flex-grow group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className="w-5 h-5 text-gray-500 group-focus-within:text-asi-neon transition-colors" />
                            </div>
                            <input
                                type="text"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                placeholder="TARGET DOMAIN (e.g., example.com)"
                                className="w-full pl-12 pr-6 py-5 bg-white/5 border border-white/10 rounded-sm text-white font-mono placeholder-gray-700 outline-none focus:border-asi-neon focus:bg-white/10 transition-all text-xs tracking-widest uppercase"
                            />
                        </div>
                        <button
                            onClick={handleScan}
                            disabled={scanStatus === 'scanning' || !domain.trim()}
                            className="px-10 py-5 bg-asi-neon text-asi-dark font-black text-[11px] uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all disabled:opacity-50 active:scale-95"
                        >
                            {scanStatus === 'scanning' ? 'ANALYZING...' : 'INITIATE SCAN'}
                        </button>
                    </div>
                </div>

                {scanStatus === 'scanning' && (
                    <div className="max-w-2xl mx-auto text-center space-y-10 animate-pulse">
                        <div className="relative inline-block">
                            <div className="absolute -inset-4 border border-asi-neon/20 rounded-full animate-ping"></div>
                            <div className="p-8 rounded-full bg-asi-neon/5 border border-asi-neon">
                                <ShieldAlert className="w-16 h-16 text-asi-neon" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <p className="text-white font-black tracking-[0.4em] uppercase text-xs">Decrypting {domain}...</p>
                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-asi-neon animate-loading-bar shadow-[0_0_15px_var(--asi-neon)]"></div>
                            </div>
                        </div>
                    </div>
                )}

                {scanStatus === 'complete' && results && (
                    <div className="animate-fade-in space-y-8">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="holographic-card p-10 flex flex-col items-center justify-center text-center group border-asi-neon/20">
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Neural Affinity</p>
                                <div className={`text-8xl font-black font-mono tracking-tighter italic ${scoreColor} drop-shadow-[0_0_30px_currentColor]`}>
                                    {results.score}
                                </div>
                            </div>

                            <div className="holographic-card p-10 flex flex-col justify-center group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-white/5 rounded border border-white/10">
                                        <ShieldCheck className="w-5 h-5 text-asi-neon" />
                                    </div>
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">SSL Integrity</p>
                                </div>
                                <div className={`text-4xl font-black font-mono ${results.sslStatus.includes('SECURE') ? 'text-asi-neon' : 'text-red-500'}`}>
                                    {results.sslStatus}
                                </div>
                            </div>

                            <div className="holographic-card p-10 flex flex-col justify-center group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-white/5 rounded border border-white/10">
                                        <CheckCircle2 className="w-5 h-5 text-asi-purple" />
                                    </div>
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Header Count</p>
                                </div>
                                <div className="text-4xl font-black font-mono text-white">
                                    {results.headers.length} / 03 <span className="text-xs text-gray-600">IDENTIFIED</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="glass-premium p-10 border border-white/5">
                                <h4 className="text-xl font-black text-white italic mb-8 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-asi-neon animate-ping"></div>
                                    Tactical Corrections
                                </h4>
                                <ul className="space-y-4">
                                    {results.fixes.map((fix, index) => (
                                        <li key={index} className="flex gap-4 items-start text-sm">
                                            <span className="text-xs font-mono text-asi-neon">[0{index + 1}]</span>
                                            <span className="text-gray-400 font-medium leading-relaxed">{fix}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="glass-premium p-10 border border-white/5 bg-asi-dark/40">
                                <h4 className="text-xl font-black text-white italic mb-8">Header Analysis</h4>
                                <div className="bg-black/50 p-6 rounded border border-white/5 font-mono text-[11px] text-gray-500 space-y-3">
                                    {results.headers.map((header, index) => (
                                        <div key={index} className="flex gap-3">
                                            <span className="text-asi-neon/40">{'>>'}</span>
                                            <span className="truncate">{header}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[9px] font-mono text-gray-600 mt-6 uppercase tracking-widest">
                                    *Analysis strictly restricted to neural baseline protocols.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
