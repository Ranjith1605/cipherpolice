import { Radar, Sword, Shield, Scale } from 'lucide-react';
import { motion as fm } from 'framer-motion';

export const Features = () => {
    const capabilities = [
        {
            icon: <Radar className="w-8 h-8 text-quantum-blue" />,
            title: 'Celestial Surveillance',
            desc: 'Real-time divine monitoring of the meta-lattice, detecting patterns of manipulation before they touch your spirit.'
        },
        {
            icon: <Sword className="w-8 h-8 text-guardian-gold" />,
            title: 'Sacred Enforcement',
            desc: 'Autonomous protocols that neutralize quantum-level threats with the precision of a Guardian Angel.'
        },
        {
            icon: <Shield className="w-8 h-8 text-white" />,
            title: 'Eternal Safeguard',
            desc: 'The next evolution of OS-level protection. Born from the legacy of Defenders, ascended for the Meta-Quantum era.'
        },
        {
            icon: <Scale className="w-8 h-8 text-quantum-blue" />,
            title: 'Citizen Sovereignty',
            desc: 'Protecting the sacred rights of digital souls against dark patterns and soul-harvesting algorithms.'
        },
    ];

    return (
        <section id="features" className="py-32 relative overflow-hidden bg-transparent border-y border-white/5">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none fade-mask-t"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-24">
                    <fm.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 glass-ethereal border border-quantum/20 rounded-full mb-6"
                    >
                        <span className="text-[10px] font-black text-quantum-blue tracking-[0.4em] uppercase">Divine Directives</span>
                    </fm.div>
                    <fm.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-7xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono"
                    >
                        Celestial <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic">Shield</span>
                    </fm.h2>
                    <fm.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 max-w-3xl mx-auto text-lg font-medium leading-relaxed"
                    >
                        Precision-engineered behavioral modules designed to neutralize dark forces in the meta-frontier.
                    </fm.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((feature, index) => (
                        <fm.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-ethereal p-8 group relative transition-all duration-500 rounded-3xl hover:border-quantum/40 cursor-default"
                        >
                            <div className="relative z-10">
                                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-quantum/30 transition-all duration-500 w-fit mb-8 shadow-2xl">
                                    {feature.icon === feature.icon && feature.icon /* Keep the icon instance */}
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-black mb-4 text-white group-hover:text-quantum-blue transition-colors duration-300 tracking-tight uppercase font-mono italic">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 font-medium">
                                    {feature.desc}
                                </p>
                            </div>
                        </fm.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
