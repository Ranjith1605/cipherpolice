import { useState, useEffect } from 'react';
import { Shield, Lock, EyeOff, Zap, AlertTriangle } from 'lucide-react';

const defenseProtocols = [
    { id: 'sanitizer', label: 'Prompt Sanitizer', icon: Shield, status: 'Active', load: 12, description: 'Neutralizing prompt injection vectors and system role leaks.' },
    { id: 'exfil', label: 'Exfil Guard', icon: EyeOff, status: 'Active', load: 5, description: 'Monitoring LLM output for sensitive PII and cryptographic keys.' },
    { id: 'adversarial', label: 'Adversarial Block', icon: Lock, status: 'Standby', load: 0, description: 'Deflecting targeted adversarial patterns and jailbreak attempts.' },
    { id: 'cognitive', label: 'Cognitive Firewall', icon: Zap, status: 'Active', load: 28, description: 'Filtering attention-harvesting scripts and manipulative UX patterns.' },
];

export const ActiveDefenseGrid = () => {
    const [shieldStrength, setShieldStrength] = useState(98);

    useEffect(() => {
        const interval = setInterval(() => {
            setShieldStrength(prev => {
                const jitter = Math.random() * 0.4 - 0.2;
                return Math.min(100, Math.max(90, parseFloat((prev + jitter).toFixed(1))));
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="defense-grid" className="py-32 relative overflow-hidden bg-asi-dark">
            <div className="absolute inset-0 bg-cyber-grid opacity-[0.02] pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-asi-neon/20 bg-asi-neon/5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-asi-neon animate-pulse"></span>
                        <span className="text-[10px] font-black text-asi-neon tracking-[0.4em] uppercase">Status: Force Field Active</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 text-white text-center">
                        Strong <span className="bg-gradient-to-r from-asi-neon via-white to-asi-purple bg-clip-text text-transparent italic">Shield</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Next-generation neural protection for the AI-integrated browser. Actively deflecting cognitive and architectural threats.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Central Shield Visualization Hub */}
                    <div className="lg:col-span-12 xl:col-span-8">
                        <div className="holographic-card relative overflow-hidden p-1 bg-white/[0.01]">
                            <div className="absolute inset-0 bg-gradient-to-br from-asi-neon/5 via-transparent to-asi-purple/5"></div>

                            <div className="relative z-10 p-10 lg:p-16 flex flex-col items-center">
                                {/* Visualizer Placeholder / Animation Area */}
                                <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12 flex items-center justify-center">
                                    <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-full animate-pulse-slow"></div>
                                    <div className="absolute inset-4 border-[0.5px] border-white/10 rounded-full"></div>
                                    <div className="absolute inset-10 border-[0.5px] border-asi-neon/20 rounded-full animate-spin-slow"></div>

                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-asi-neon/20 blur-[80px] rounded-full group-hover:bg-asi-neon/30 transition-all duration-1000"></div>
                                        <Shield className="w-24 h-24 text-white drop-shadow-[0_0_20px_rgba(0,243,255,0.4)] relative z-10" />
                                    </div>

                                    {/* Orbital Metrics */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-center">
                                        <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Integrity</div>
                                        <div className="text-xl font-black font-mono text-asi-neon">{shieldStrength}%</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mt-4">
                                    {defenseProtocols.map((protocol) => (
                                        <div key={protocol.id} className="text-center group">
                                            <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-white/[0.02] border border-white/5 mb-4 group-hover:border-asi-neon/30 transition-all">
                                                <protocol.icon className="w-5 h-5 text-gray-400 group-hover:text-asi-neon transition-colors" />
                                            </div>
                                            <h4 className="text-[10px] font-black text-white/80 uppercase tracking-widest mb-1">{protocol.label}</h4>
                                            <p className="text-[9px] font-mono text-gray-600 uppercase">{protocol.status}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tactical Overlay / Sidebar */}
                    <div className="lg:col-span-12 xl:col-span-4 space-y-8">
                        <div className="holographic-card p-8 bg-black/40">
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-4 h-4 text-asi-neon" />
                                Interception Log
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { time: '13:21:04', type: 'INJECTION', msg: 'Prompt bypass attempt blocked' },
                                    { time: '13:18:42', type: 'EXFIL', msg: 'Email pattern leak neutralized' },
                                    { time: '13:05:11', type: 'THREAT', msg: 'Known malicious domain filtered' },
                                ].map((log, i) => (
                                    <div key={i} className="flex gap-4 p-3 border border-white/5 bg-white/[0.02] rounded-sm text-[10px] font-mono">
                                        <span className="text-gray-600">{log.time}</span>
                                        <span className="text-asi-neon font-bold">[{log.type}]</span>
                                        <span className="text-gray-400 truncate">{log.msg}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="holographic-card p-8 border-l-4 border-l-asi-neon bg-asi-neon/[0.02]">
                            <h3 className="text-[10px] font-black text-asi-neon uppercase tracking-[0.4em] mb-4">Operational Summary</h3>
                            <p className="text-xs text-gray-400 leading-relaxed font-medium">
                                CipherPolice Strong Shield is currently maintaining a <span className="text-white italic">Class-Elite</span> protection perimeter. All AI browser exfiltration vectors are actively monitored.
                            </p>
                            <div className="mt-6 pt-6 border-t border-white/5">
                                <div className="flex justify-between items-end">
                                    <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest italic">Enc: Quantum-Grade</div>
                                    <div className="text-xs font-black text-white font-mono tracking-tighter italic">CP-STR-SHIELD-V1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
