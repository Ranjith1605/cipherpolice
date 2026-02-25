

import { Zap, Repeat, Shield } from 'lucide-react';

export const Methodology = () => {
    const methods = [
        {
            title: "Rapid Deployment (RDC)",
            icon: <Zap className="w-8 h-8 text-asi-neon" />,
            desc: "Iterative progression through collaborative strike teams. We adapt to neural threats in real-time.",
            color: "border-asi-neon"
        },
        {
            title: "Quantum Sprints",
            icon: <Repeat className="w-8 h-8 text-asi-purple" />,
            desc: "Structured operational cycles allow us to ship security patches faster than vectors can evolve.",
            color: "border-asi-purple"
        },
        {
            title: "Integrated Defense",
            icon: <Shield className="w-8 h-8 text-white" />,
            desc: "Security is not an afterthought—it is the core DNA of every operational phase.",
            color: "border-white"
        }
    ];

    return (
        <section id="methodology" className="py-32 relative overflow-hidden bg-asi-dark">
            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-asi-neon/30 bg-asi-neon/5 mb-4 text-[10px] font-black text-asi-neon tracking-[0.4em] uppercase">
                        Operational Excellence
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-white">
                        Force <span className="bg-gradient-to-r from-asi-neon to-asi-purple bg-clip-text text-transparent not-italic">Protocols</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        Engineered with advanced software principles to ensure zero-latency reliability and tactical adaptability.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {methods.map((method, index) => (
                        <div key={index} className="holographic-card p-10 group relative transition-all duration-500 hover:scale-[1.02]">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-asi-neon transition-all duration-500 w-fit mb-8">
                                {method.icon}
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-asi-neon transition-colors">
                                {method.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                {method.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 glass-premium border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-asi-neon animate-spin-slow flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-asi-neon"></div>
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-white uppercase tracking-tight">CI/CD Pipeline: ACTIVE</h3>
                            <p className="text-gray-500 text-xs">Autonomous security patching synchronized with meta-quantum clock.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-5 py-2.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-asi-neon tracking-wider uppercase">
                            git push force --main
                        </div>
                        <div className="px-5 py-2.5 rounded bg-asi-neon/10 border border-asi-neon/30 text-[10px] font-mono text-asi-neon font-black tracking-widest uppercase animate-pulse">
                            Ready for Deployment
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
