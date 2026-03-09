import { Shield, Eye, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Eye className="w-6 h-6 text-primary" />,
        title: 'Privacy Enforcement',
        desc: 'Automatically blocks trackers, third-party cookies, and browser fingerprinting scripts before they ever run.'
    },
    {
        icon: <Shield className="w-6 h-6 text-secondary" />,
        title: 'Threat Detection',
        desc: 'An AI model running locally identifies dark patterns, consent violations, and manipulation attempts in real time.'
    },
    {
        icon: <Lock className="w-6 h-6 text-white" />,
        title: 'Data Sovereignty',
        desc: 'All analysis runs on your device. Nothing is sent to our servers. You remain in full control at all times.'
    },
];

export const Features = () => {
    return (
        <section id="features" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[11px] text-primary/60 font-bold tracking-[0.4em] uppercase mb-4"
                    >
                        How It Works
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tight"
                    >
                        Built around <span className="text-primary">your rights.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-white/40 text-base max-w-md mx-auto leading-relaxed"
                    >
                        Three modules. One purpose: keeping your data private.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6">
                                {f.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
