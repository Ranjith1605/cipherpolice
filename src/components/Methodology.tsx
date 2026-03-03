import { Zap, Repeat, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const Methodology = () => {
    const methods = [
        {
            title: "Divine Deployment",
            icon: <Zap className="w-8 h-8 text-quantum-blue" />,
            desc: "Iterative progression through sacred strike teams. We adapt to meta-quantum threats in real-time.",
        },
        {
            title: "Quantum Sprints",
            icon: <Repeat className="w-8 h-8 text-guardian-gold" />,
            desc: "Structured metaphysical cycles allowing us to manifest protection faster than the void can expand.",
        },
        {
            title: "Absolute Defense",
            icon: <Shield className="w-8 h-8 text-white" />,
            desc: "Security is the core DNA of our existence. Every particle of our code is a vow of protection.",
        }
    ];

    return (
        <section id="methodology" className="py-32 relative overflow-hidden bg-transparent">
            {/* Background Grid Layer */}
            <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 glass-ethereal border border-guardian/30 rounded-full mb-6 shadow-2xl"
                    >
                        <span className="text-[10px] font-black text-guardian-gold tracking-[0.4em] uppercase">Metaphysical Operations</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono"
                    >
                        Sacred <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic">Protocols</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed"
                    >
                        Engineered with divine software principles to ensure zero-latency reliability and eternal adaptability.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {methods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-ethereal p-12 group relative transition-all duration-500 hover:scale-[1.05] border-white/5 hover:border-quantum/40 rounded-3xl"
                        >
                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-quantum/50 group-hover:bg-quantum-blue/5 transition-all duration-500 w-fit mb-8 shadow-2xl">
                                {method.icon}
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-quantum-blue transition-colors uppercase italic">
                                {method.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors font-medium">
                                {method.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 glass-ethereal border border-white/5 p-10 flex flex-col md:flex-row items-center justify-between gap-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-quantum-blue/[0.01] pointer-events-none" />

                    <div className="flex items-center gap-8 relative z-10">
                        <div className="w-16 h-16 rounded-full border-4 border-dashed border-quantum-blue animate-spin-slow flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                            <div className="w-3 h-3 rounded-full bg-quantum-blue animate-pulse"></div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Quantum Pipeline: <span className="text-quantum-blue not-italic">ASCENDED</span></h3>
                            <p className="text-gray-500 text-sm font-medium tracking-wide">Autonomous protection manifested across the meta-quantum lattice.</p>
                        </div>
                    </div>

                    <div className="flex gap-6 relative z-10">
                        <div className="px-6 py-3 rounded-xl bg-white/[0.02] border border-white/10 text-[10px] font-mono text-quantum-blue tracking-[0.2em] uppercase shadow-inner">
                            manifest force --divine
                        </div>
                        <div className="px-6 py-3 rounded-xl bg-quantum-blue/10 border border-quantum/30 text-[10px] font-mono text-quantum-blue font-black tracking-[0.3em] uppercase animate-pulse shadow-2xl">
                            Spirit Synchronized
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
