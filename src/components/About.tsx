import { Shield, Zap, Target } from 'lucide-react';

export const About = () => {
    const values = [
        {
            title: 'Proactive Intelligence',
            icon: <Zap className="w-8 h-8 text-asi-neon" />,
            desc: 'Leveraging neural algorithms to identify and mitigate risks before they evolve into vectors.'
        },
        {
            title: 'Sovereign Experience',
            icon: <Target className="w-8 h-8 text-asi-purple" />,
            desc: 'Eliminating complexity. Security should be intuitive, elegant, and controlled by the individual.'
        },
        {
            title: 'Unified Shield Core',
            icon: <Shield className="w-8 h-8 text-white" />,
            desc: 'A central, trustworthy platform where all your digital security needs are managed with zero-knowledge protocols.'
        },
    ];

    return (
        <section id="about" className="py-32 bg-[#050a14] relative overflow-hidden">
            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-asi-neon/5 border border-asi-neon/20 rounded mb-6">
                        <span className="text-[10px] font-black text-asi-neon tracking-[0.4em] uppercase">Core Mandate</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono">
                        Mission <span className="bg-gradient-to-r from-asi-neon to-asi-purple bg-clip-text text-transparent not-italic">Briefing</span>
                    </h2>
                    <p className="text-gray-500 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
                        CipherPolice was founded to bridge the gap between complex enterprise-grade protocols and everyday digital existence.
                        We simplify the defense process, ensuring robust, intelligent protection is within reach for every digital citizen.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="holographic-card p-10 group relative transition-all duration-500 hover:scale-[1.02]">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-asi-neon transition-all duration-500 w-fit mb-8">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-asi-neon transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
