import { useState, useEffect } from 'react';
import { Shield, Lock, EyeOff, Zap, AlertTriangle } from 'lucide-react';
import { motion as fm, AnimatePresence } from 'framer-motion';

const defenseProtocols = [
    { id: 'sanitizer', label: 'Sacred Sanitizer', icon: Shield, status: 'Active', load: 12, description: 'Neutralizing prompt injection vectors and system role leaks with divine precision.' },
    { id: 'exfil', label: 'Spirit Guard', icon: EyeOff, status: 'Active', load: 5, description: 'Monitoring meta-quantum output for sensitive soul-data and keys.' },
    { id: 'adversarial', label: 'Void Block', icon: Lock, status: 'Standby', load: 0, description: 'Deflecting targeted void-patterns and jailbreak attempts.' },
    { id: 'cognitive', label: 'Soul Firewall', icon: Zap, status: 'Active', load: 28, description: 'Filtering attention-harvesting scripts and manipulative dark-UX patterns.' },
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
        <section id="defense-grid" className="py-32 relative overflow-hidden bg-transparent">
            <div className="absolute inset-0 bg-cyber-grid opacity-[0.03] pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-24">
                    <fm.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-quantum/30 glass-ethereal mb-8 shadow-2xl"
                    >
                        <span className="w-2 h-2 rounded-full bg-quantum-blue animate-pulse shadow-[0_0_10px_var(--quantum-blue)]"></span>
                        <span className="text-[10px] font-black text-quantum-blue tracking-[0.4em] uppercase">Aura of Protection Active</span>
                    </fm.div>
                    <fm.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-8xl font-black tracking-tighter mb-8 text-white text-center uppercase italic"
                    >
                        Celestial <span className="bg-gradient-to-r from-quantum-blue via-white to-guardian-gold bg-clip-text text-transparent not-italic">Shield</span>
                    </fm.h2>
                    <fm.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed italic"
                    >
                        Next-generation neural protection for the meta-quantum browser.
                        Deflecting the dark arts of the digital frontier.
                    </fm.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Central Shield Visualization Hub */}
                    <fm.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-12 xl:col-span-8"
                    >
                        <div className="glass-ethereal relative overflow-hidden p-1 bg-white/[0.01] rounded-[3.5rem] shadow-2xl border border-white/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/5 via-transparent to-guardian-gold/5"></div>

                            <div className="relative z-10 p-10 lg:p-20 flex flex-col items-center">
                                {/* Visualizer Placeholder / Animation Area */}
                                <div className="relative w-72 h-72 md:w-96 md:h-96 mb-16 flex items-center justify-center">
                                    <fm.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border-[0.5px] border-white/5 rounded-full"
                                    ></fm.div>
                                    <fm.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-6 border-[0.5px] border-white/10 rounded-full"
                                    ></fm.div>
                                    <fm.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-14 border-[1px] border-quantum/20 rounded-full"
                                    ></fm.div>

                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-quantum-blue/20 blur-[100px] rounded-full group-hover:bg-quantum-blue/30 transition-all duration-1000"></div>
                                        <fm.div
                                            animate={{ y: [0, -15, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <Shield className="w-32 h-32 text-white drop-shadow-[0_0_30px_rgba(0,242,255,0.6)] relative z-10" />
                                        </fm.div>
                                    </div>

                                    {/* Orbital Metrics */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-center">
                                        <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2 font-mono">Sacred Integrity</div>
                                        <div className="text-4xl font-black font-mono text-quantum-blue drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">{shieldStrength}%</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full mt-4">
                                    {defenseProtocols.map((protocol) => (
                                        <div key={protocol.id} className="text-center group">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/10 mb-6 group-hover:border-quantum/50 group-hover:bg-quantum-blue/5 transition-all shadow-xl">
                                                <protocol.icon className="w-7 h-7 text-gray-400 group-hover:text-quantum-blue transition-colors" />
                                            </div>
                                            <h4 className="text-[11px] font-black text-white/90 uppercase tracking-[0.2em] mb-2 italic">{protocol.label}</h4>
                                            <div className="flex items-center justify-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-quantum-blue animate-pulse"></span>
                                                <p className="text-[10px] font-mono text-gray-600 uppercase font-bold">{protocol.status}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </fm.div>

                    {/* Tactical Overlay / Sidebar */}
                    <div className="lg:col-span-12 xl:col-span-4 space-y-10">
                        <fm.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-ethereal p-10 bg-obsidian/40 rounded-[2.5rem] shadow-2xl border border-white/5"
                        >
                            <h3 className="text-sm font-black text-white uppercase tracking-[0.4em] mb-10 flex items-center gap-4 italic">
                                <AlertTriangle className="w-5 h-5 text-guardian-gold" />
                                Sacred Interception
                            </h3>
                            <div className="space-y-5">
                                {[
                                    { time: '13:21:04', type: 'VOID', msg: 'Dark pattern bypass neutralized' },
                                    { time: '13:18:42', type: 'SPIRIT', msg: 'Soul-data leak protocol active' },
                                    { time: '13:05:11', type: 'SACRED', msg: 'Malicious domain purged' },
                                ].map((log, i) => (
                                    <div key={i} className="flex gap-5 p-4 border border-white/5 bg-white/[0.02] rounded-xl text-[11px] font-mono group hover:border-quantum/30 transition-colors">
                                        <span className="text-gray-600 font-bold">{log.time}</span>
                                        <span className="text-quantum-blue font-black">[{log.type}]</span>
                                        <span className="text-gray-400 truncate font-medium group-hover:text-gray-200 transition-colors">{log.msg}</span>
                                    </div>
                                ))}
                            </div>
                        </fm.div>

                        <fm.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-ethereal p-10 border-l-4 border-l-quantum-blue bg-quantum-blue/[0.02] rounded-[2.5rem] shadow-2xl"
                        >
                            <h3 className="text-[11px] font-black text-quantum-blue uppercase tracking-[0.5em] mb-6 italic">Celestial Summary</h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-bold italic">
                                CipherPolice Celestial Shield is currently maintaining an <span className="text-white">Ascended Protection</span> perimeter.
                                All digital souls under our care are sequestered from the void.
                            </p>
                            <div className="mt-8 pt-8 border-t border-white/5">
                                <div className="flex justify-between items-end">
                                    <div className="text-[9px] font-black text-gray-600 uppercase tracking-[0.3em] font-mono">Enc: Metaphysical-Grade</div>
                                    <div className="text-xs font-black text-white font-mono tracking-tighter italic drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">CP-DIVINE-SHIELD</div>
                                </div>
                            </div>
                        </fm.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
