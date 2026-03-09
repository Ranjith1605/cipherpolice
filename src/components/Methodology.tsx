import { Zap, Repeat, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const Methodology = () => {
    const methods = [
        {
            title: "Agile Deployment",
            icon: <Zap className="w-8 h-8 text-quantum-blue" />,
            desc: "Iterative delivery through focused sprint teams. We ship security updates and feature patches on a continuous release cycle, adapting to emerging threats in real time.",
        },
        {
            title: "Sprint Cycles",
            icon: <Repeat className="w-8 h-8 text-guardian-gold" />,
            desc: "Two-week structured development cycles with retrospectives and security reviews, enabling faster iteration without compromising stability or test coverage.",
        },
        {
            title: "Security-First Build",
            icon: <Shield className="w-8 h-8 text-white" />,
            desc: "Security is baked into our architecture from day one — not bolted on at the end. Every module undergoes threat modeling, static analysis, and penetration testing before release.",
        }
    ];

    return (
        <section id="methodology" className="py-40 relative overflow-hidden bg-transparent border-t border-white/5">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none fade-mask-t"></div>

            <div className="container-vision relative z-10 px-6">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 glass-ethereal border border-guardian/30 rounded-full mb-8 shadow-2xl"
                    >
                        <span className="text-[10px] font-black text-guardian-gold tracking-[0.5em] uppercase italic">Engineering Approach</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black mb-10 italic text-white tracking-tighter uppercase font-mono leading-none"
                    >
                        Build <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic">Methodology</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed italic"
                    >
                        Engineered with modern DevSecOps principles to ensure zero-latency reliability, continuous delivery, and long-term maintainability.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {methods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="glass-ethereal p-12 group relative transition-all duration-700 rounded-[2.5rem] hover:border-quantum/40 cursor-default shadow-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div className="relative z-10">
                                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-quantum/40 transition-all duration-500 w-fit mb-10 shadow-2xl">
                                    <div className="group-hover:scale-110 transition-transform duration-700">
                                        {method.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-5 tracking-tight group-hover:text-quantum-blue transition-colors duration-500 uppercase italic font-mono">
                                    {method.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500 font-medium">
                                    {method.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 glass-ethereal border border-white/5 p-12 flex flex-col md:flex-row items-center justify-between gap-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-quantum-blue/[0.01] pointer-events-none group-hover:bg-quantum-blue/[0.02] transition-colors duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-r from-quantum-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="flex items-center gap-10 relative z-10">
                        <div className="w-16 h-16 rounded-full border-4 border-dashed border-quantum-blue animate-spin-slow flex items-center justify-center shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                            <div className="w-4 h-4 rounded-full bg-quantum-blue animate-pulse shadow-[0_0_15px_var(--quantum-blue)]"></div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic font-mono mb-2">CI/CD Pipeline: <span className="text-quantum-blue not-italic">Running</span></h3>
                            <p className="text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase opacity-70">Automated security tests and builds are deployed continuously across all release branches.</p>
                        </div>
                    </div>

                    <div className="flex gap-6 relative z-10">
                        <div className="px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/10 text-[10px] font-mono text-quantum-blue/60 tracking-[0.3em] uppercase shadow-inner hover:border-quantum/40 transition-colors">
                            run --mode=production
                        </div>
                        <div className="px-8 py-4 rounded-2xl bg-quantum-blue/10 border border-quantum/30 text-[10px] font-mono text-quantum-blue font-black tracking-[0.4em] uppercase animate-pulse shadow-2xl">
                            Pipeline Active
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
