
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
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-asi-neon/5 border border-asi-neon/20 rounded mb-6">
                        <span className="text-[10px] font-black text-asi-neon tracking-[0.4em] uppercase">Tactical Advantage</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono">
                        Elite <span className="bg-gradient-to-r from-asi-neon to-asi-purple bg-clip-text text-transparent not-italic">Capabilities</span>
                    </h2>
                    <p className="text-gray-500 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
                        Defending the meta-quantum frontier with high-fidelity behavioral analysis and autonomous threat mitigation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {capabilities.map((feature, index) => (
                        <div
                            key={index}
                            className="holographic-card p-10 group relative transition-all duration-500 hover:scale-[1.02]"
                        >
                            <div className="relative z-10">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-asi-neon transition-all duration-500 w-fit mb-8">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-black mb-4 text-white group-hover:text-asi-neon transition-colors duration-300 tracking-tight uppercase font-mono">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
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
