import React from 'react';
import { ShieldCheck, EyeOff, UserCheck, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const principles = [
    {
        icon: <ShieldCheck className="w-5 h-5 text-primary" />,
        title: 'Local Processing',
        desc: 'All analysis happens on your device. Zero data is sent to any server, ever.'
    },
    {
        icon: <EyeOff className="w-5 h-5 text-secondary" />,
        title: 'Data Minimization',
        desc: 'We collect only what is needed. No keystrokes. No screen recording. No messages.'
    },
    {
        icon: <UserCheck className="w-5 h-5 text-white" />,
        title: 'Full User Control',
        desc: 'Toggle any feature instantly. Wipe all local history with a single action.'
    },
    {
        icon: <Scale className="w-5 h-5 text-primary" />,
        title: 'Compliance by Design',
        desc: 'GDPR and CCPA principles are enforced at the architecture level, not just policy.'
    },
];

const DataEthics: React.FC = () => {
    return (
        <section id="ethics" className="py-24 relative border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[11px] text-primary/60 font-bold tracking-[0.4em] uppercase mb-4"
                    >
                        Our Ethics
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tight"
                    >
                        Trust requires <span className="text-primary">proof.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-white/40 text-base max-w-md mx-auto leading-relaxed"
                    >
                        We don't ask you to take our word for it. These are the technical commitments we make.
                    </motion.p>
                </div>

                {/* Principles grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {principles.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-5 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                                {p.icon}
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust statement */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 p-8 rounded-2xl border border-primary/15 bg-primary/[0.03] text-center"
                >
                    <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto">
                        Like any trust-based relationship, CipherPolice works because you choose to rely on it — and we work every day to deserve that reliance. Our code is auditable. Our logic is open.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default DataEthics;
