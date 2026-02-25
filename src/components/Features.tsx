
import { Radar, Sword, Shield, Scale } from 'lucide-react';

export const Features = () => {
    const capabilities = [
        {
            icon: <Radar className="w-8 h-8 text-asi-neon" />,
            title: 'Neural Surveillance',
            desc: 'Real-time cognitive monitoring of the AI browser, detecting patterns of manipulation before they infiltrate your flow.'
        },
        {
            icon: <Sword className="w-8 h-8 text-asi-purple" />,
            title: 'Elite Prosecution',
            desc: 'Autonomous enforcement protocols that isolate and neutralize quantum-level threats with forensic precision.'
        },
        {
            icon: <Shield className="w-8 h-8 text-white" />,
            title: 'Defender Legacy',
            desc: 'The next evolution of OS-level protection. Born from the legacy of Windows Defender, built for the Meta-Quantum era.'
        },
        {
            icon: <Scale className="w-8 h-8 text-asi-neon" />,
            title: 'Digital Sovereignty',
            desc: 'Protecting the rights of digital citizens against dark patterns and attention-harvesting algorithms.'
        },
    ];

    return (
        <section id="features" className="py-32 relative overflow-hidden bg-asi-dark/30 border-y border-white/5">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none fade-mask-t"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/5 rounded mb-6">
                        <span className="text-[9px] font-bold text-gray-500 tracking-[0.3em] uppercase">Core Directives</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono">
                        Elite <span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent not-italic">Shield</span>
                    </h2>
                    <p className="text-gray-500 max-w-3xl mx-auto text-base font-medium leading-relaxed">
                        Precision-engineered behavioral analysis modules designed to neutralize meta-quantum threats.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((feature, index) => (
                        <div
                            key={index}
                            className="holographic-card p-8 group relative transition-all duration-500"
                        >
                            <div className="relative z-10">
                                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-asi-neon/30 transition-all duration-500 w-fit mb-6">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg font-black mb-3 text-white group-hover:text-asi-neon transition-colors duration-300 tracking-tight uppercase font-mono">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-500 text-[13px] leading-relaxed group-hover:text-gray-400 transition-colors duration-300 font-medium">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
