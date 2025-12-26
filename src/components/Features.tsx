

export const Features = () => {
    const problems = [
        { icon: '🧠', title: 'Artificial Super Intelligence', desc: 'Beyond simple algorithms. Our ASI predicts threats before they manifest in your network.' },
        { icon: '🛡️', title: 'Autonomous Defence', desc: 'Self-healing systems that detect, isolate, and neutralize attacks without human intervention.' },
        { icon: '🔮', title: 'Predictive Security', desc: 'We don\'t just react. We forecast potential vulnerabilities based on global threat patterns.' },
        { icon: '⚡', title: 'Quantum-Ready Encryption', desc: 'Future-proof protection designed to withstand next-generation decryption attacks.' },
    ];

    return (
        <section id="features" className="py-24 bg-slate-900 border-t border-b border-white/5 relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
                    <span className="bg-gradient-to-r from-asi-neon via-white to-asi-purple bg-clip-text text-transparent">
                        Next-Gen Capabilities
                    </span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem, index) => (
                        <div key={index} className="group text-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/5 transition-all duration-300 hover:border-asi-neon/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] hover:-translate-y-2">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-700/50 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-4xl">{problem.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-asi-neon transition-colors">{problem.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{problem.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
