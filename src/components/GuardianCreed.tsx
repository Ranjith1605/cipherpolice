import React from 'react';
import { Quote, ShieldCheck, Lock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const principles = [
    {
        text: "Privacy is not a feature — it is a fundamental user right. Every line of code we ship is a commitment to that right.",
        author: "Core Engineering Principle"
    },
    {
        text: "We stand between your device and the network, blocking unauthorized data extraction at the browser layer before it reaches any server.",
        author: "Protocol: Active Defense"
    },
    {
        text: "Data sovereignty means you decide what is collected, processed, and shared. This is enforced at the protocol level, not by policy alone.",
        author: "Data Sovereignty Directive"
    }
];

export const GuardianCreed: React.FC = () => {
    return (
        <section id="creed" className="py-32 relative overflow-hidden bg-transparent">
            {/* Background Grid Layer */}
            <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 glass-ethereal border border-guardian/30 rounded-full mb-6 shadow-2xl"
                        >
                            <Lock className="w-3 h-3 text-guardian-gold" />
                            <span className="text-[10px] font-black text-guardian-gold tracking-[0.4em] uppercase">Core Principles</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono"
                        >
                            Our <span className="text-guardian-gold not-italic">Mission</span>
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {principles.map((q, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="glass-ethereal p-12 group relative transition-all duration-500 hover:scale-[1.05] border-white/5 hover:border-quantum/40 rounded-3xl"
                            >
                                <div className="absolute top-4 right-8 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <Quote className="w-16 h-16 text-quantum-blue" />
                                </div>

                                <div className="relative z-10 space-y-10">
                                    <div className="flex gap-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-quantum-blue/40" />
                                        ))}
                                    </div>

                                    <p className="text-gray-300 text-xl font-medium leading-relaxed italic">
                                        "{q.text}"
                                    </p>

                                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-[10px] font-black text-guardian-gold/60 uppercase tracking-[0.3em]">
                                            {q.author}
                                        </span>
                                        <ShieldCheck className="w-4 h-4 text-guardian-gold/40 group-hover:text-guardian-gold transition-colors" />
                                    </div>
                                </div>

                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-quantum-blue/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none shadow-inner" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Zero-Trust commitment banner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-24 text-center"
                    >
                        <div className="inline-flex flex-col md:flex-row items-center gap-10 p-12 glass-ethereal border border-white/10 rounded-[2.5rem] relative group overflow-hidden max-w-4xl mx-auto shadow-2xl">
                            <div className="absolute inset-0 bg-guardian-gold/[0.01] group-hover:bg-guardian-gold/[0.03] transition-all duration-700" />
                            <div className="relative">
                                <ShieldCheck className="w-20 h-20 text-guardian-gold drop-shadow-[0_0_25px_rgba(255,202,40,0.5)] animate-pulse" />
                            </div>
                            <div className="text-left space-y-4">
                                <h4 className="text-3xl font-black text-white italic">Zero-Trust <span className="text-guardian-gold not-italic uppercase tracking-tighter">Architecture</span></h4>
                                <p className="text-gray-400 text-lg font-medium leading-relaxed">
                                    CipherPolice trusts no network, no server, no third party by default. All data processing happens locally on your device. Nothing leaves without your explicit consent.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
