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
        <section id="features" className="py-40 relative overflow-hidden bg-transparent border-y border-white/5">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none fade-mask-t"></div>

            <div className="container-vision relative z-10 px-6">
                <div className="text-center mb-32">
                    <fm.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 glass-ethereal border border-quantum/20 rounded-full mb-8"
                    >
                        <span className="text-[10px] font-black text-quantum-blue tracking-[0.5em] uppercase">Divine Directives</span>
                    </fm.div>
                    <fm.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black mb-10 italic text-white tracking-tighter uppercase font-mono leading-none"
                    >
                        Celestial <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic">Shield</span>
                    </fm.h2>
                    <fm.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 max-w-3xl mx-auto text-xl font-medium leading-relaxed italic"
                    >
                        Precision-engineered behavioral modules designed to neutralize dark forces in the meta-frontier.
                    </fm.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((feature, index) => (
                        <fm.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="glass-ethereal p-10 group relative transition-all duration-700 rounded-[2.5rem] hover:border-quantum/40 cursor-default shadow-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            <div className="relative z-10">
                                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-quantum/40 transition-all duration-500 w-fit mb-10 shadow-2xl">
                                    <div className="group-hover:scale-110 transition-transform duration-700">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-black mb-5 text-white group-hover:text-quantum-blue transition-colors duration-500 tracking-tight uppercase font-mono italic">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500 font-medium">
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
