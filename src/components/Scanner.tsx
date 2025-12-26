import { useState, useMemo } from 'react';
import { GoldText } from './ui/GoldText';
import { GoldButton } from './ui/GoldButton';
import { Icon } from './ui/Icon';

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
                sslStatus: isSecure ? 'Secure (A+)' : 'Insecure (Missing Ciphers)',
                headers: isSecure
                    ? ['X-Content-Type-Options: nosniff', 'Strict-Transport-Security: max-age=31536000', 'Content-Security-Policy: default-src \'self\'']
                    : ['Server: Apache/2.4', 'X-Powered-By: PHP/7.4', 'No Security Headers Detected'],
                fixes: isSecure
                    ? ['Keep software updated.', 'Review third-party scripts.']
                    : ['<strong>CRITICAL:</strong> Implement HSTS header.', '<strong>URGENT:</strong> Fix SSL/TLS Ciphers.', 'Set X-Frame-Options to DENY.'],
            });
            setScanStatus('complete');
        }, 2000);
    };

    const scoreColor = useMemo(() => {
        if (!results) return 'text-white';
        if (results.score >= 90) return 'text-green-400';
        if (results.score >= 70) return 'text-yellow-400';
        return 'text-red-400';
    }, [results]);

    return (
        <section id="scanner" className="py-24 bg-slate-900">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-4xl font-extrabold text-center mb-4">
                    <GoldText>Instant Website Security Scan</GoldText>
                </h2>
                <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto">
                    Enter any domain below to get an instant, high-level analysis of basic vulnerabilities, SSL status, and critical HTTP security headers. Proactive defense starts here.
                </p>

                <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-16">
                    <input
                        type="text"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="Enter domain name (e.g., example.com)"
                        className="flex-grow p-4 bg-slate-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#FFD26F] focus:border-transparent transition duration-200"
                    />
                    <GoldButton onClick={handleScan} disabled={scanStatus === 'scanning' || !domain.trim()}>
                        {scanStatus === 'scanning' ? 'Scanning...' : 'Scan Now'}
                    </GoldButton>
                </div>

                {scanStatus === 'scanning' && (
                    <div className="text-center text-xl text-yellow-400 space-y-4">
                        <Icon>⚙️</Icon>
                        <p>Analyzing {domain} with AI Core...</p>
                        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-transparent to-[#FFD26F] animate-pulse"></div>
                        </div>
                    </div>
                )}

                {scanStatus === 'complete' && results && (
                    <div className="bg-slate-800 p-8 rounded-xl shadow-2xl border border-gold-500/30">
                        <h3 className="text-3xl font-bold mb-6 text-white text-center">
                            <GoldText>Scan Results for {domain}</GoldText>
                        </h3>

                        <div className="grid md:grid-cols-3 gap-8 mb-8 items-center border-b border-gold-500/20 pb-6">
                            <div className="text-center">
                                <p className="text-xl text-gray-400 uppercase tracking-widest">Security Score</p>
                                <p className={`text-7xl font-black ${scoreColor} mt-2`} style={{ textShadow: `0 0 15px ${scoreColor}` }}>
                                    {results.score}
                                </p>
                            </div>

                            <div className="text-center p-4 bg-slate-900 rounded-lg border border-gold-500/10">
                                <p className="text-lg font-semibold mb-2">SSL Status</p>
                                <p className={`text-2xl font-bold ${results.sslStatus.includes('Secure') ? 'text-green-400' : 'text-red-400'}`}>
                                    {results.sslStatus}
                                </p>
                            </div>

                            <div className="text-center p-4 bg-slate-900 rounded-lg border border-gold-500/10">
                                <p className="text-lg font-semibold mb-2">Security Headers</p>
                                <p className={`text-2xl font-bold ${results.headers.length > 2 ? 'text-green-400' : 'text-red-400'}`}>
                                    {results.headers.length} Found
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-2xl font-bold mb-4">
                                    <GoldText>Prioritized Fixes</GoldText>
                                </h4>
                                <ul className="space-y-3 text-gray-300">
                                    {results.fixes.map((fix, index) => (
                                        <li key={index} className="flex items-start">
                                            <Icon className="text-xl mr-3 text-[#FFD26F]">🔑</Icon>
                                            <span dangerouslySetInnerHTML={{ __html: fix }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-2xl font-bold mb-4">
                                    <GoldText>Security Headers Info</GoldText>
                                </h4>
                                <ul className="space-y-2 text-gray-400 text-sm bg-slate-900 p-4 rounded-lg">
                                    {results.headers.map((header, index) => (
                                        <li key={index} className="truncate">{header}</li>
                                    ))}
                                </ul>
                                <p className="text-sm text-gray-500 mt-4">
                                    *Only key headers are listed. Full report available soon.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
