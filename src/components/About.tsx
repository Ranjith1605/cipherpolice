import { Shield, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
    const values = [
        {
            title: 'Threat Detection',
            icon: <Zap className="w-8 h-8 text-quantum-blue" />,
            desc: 'Combining AI behavioral analysis with real-time heuristics to detect tracking scripts, fingerprinting attempts, and data harvesting before they execute.'
        },
        {
            title: 'Active Defense',
            icon: <Shield className="w-8 h-8 text-guardian-gold" />,
            desc: 'Continuously monitoring browser activity and automatically neutralizing intrusive elements, malicious redirects, and unauthorized data collection.'
        },
        {
            title: 'Data Isolation',
            icon: <Lock className="w-8 h-8 text-white" />,
            desc: 'Providing an encrypted, sandboxed environment where your browsing data stays on your device with zero third-party transmission.'
        },
    ];

    return (
        <section id="about" className="py-32 bg-transparent relative overflow-hidden">
            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 glass-ethereal border border-quantum/30 rounded-full mb-6"
                    >
                        <span className="text-[10px] font-black text-quantum-blue tracking-[0.4em] uppercase">Core Capabilities</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono"
                    >
                        Security <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic">Architecture</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed"
                    >
                        CipherPolice is a browser security extension built on a <span className="text-guardian-gold">zero-trust architecture</span>. We protect digital citizens by enforcing data rights, blocking dark patterns, and keeping your browsing private by default.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-ethereal p-10 group relative transition-all duration-500 hover:scale-[1.05] hover:border-quantum/40 cursor-default rounded-3xl"
                        >
                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-quantum/50 group-hover:bg-quantum-blue/5 transition-all duration-500 w-fit mb-8 shadow-2xl">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-quantum-blue transition-colors uppercase">
                                {value.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors font-medium">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
