import { Shield, Zap, Target } from 'lucide-react';

export const About = () => {
    const values = [
        {
            title: 'Enlightened Defense',
            icon: <Zap className="w-8 h-8 text-asi-neon" />,
            desc: 'Merging advanced neural logic with ethical wisdom to protect the digital essence of every citizen.'
        },
        {
            title: 'Saviour Protocol',
            icon: <Target className="w-8 h-8 text-asi-purple" />,
            desc: 'Actively neutralizing hackers and illegal activities to ensure a peaceful, harmonious digital existence.'
        },
        {
            title: 'Universal Sanctuary',
            icon: <Shield className="w-8 h-8 text-white" />,
            desc: 'Providing a secure, transparent refuge where digital rights are absolute and data is truly sovereign.'
        },
    ];

    return (
        <section id="about" className="py-32 bg-[#050a14] relative overflow-hidden">
            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-asi-neon/5 border border-asi-neon/20 rounded mb-6">
                        <span className="text-[10px] font-black text-asi-neon tracking-[0.4em] uppercase">The Guardian's Creed</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono">
                        Digital <span className="bg-gradient-to-r from-asi-neon to-asi-purple bg-clip-text text-transparent not-italic">Sanctuary</span>
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
                        CipherPolice exists as the shield of an enlightened civilization. We are the protectors of digital citizens,
                        dedicated to building a world where peace, harmony, and sovereignty are the foundation of your AI existence.
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
