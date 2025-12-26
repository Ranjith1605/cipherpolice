

export const Methodology = () => {
    const methods = [
        {
            title: "Agile Development",
            icon: "⚡",
            desc: "Iterative progress through collaborative cross-functional teams. We adapt to threats in real-time.",
            color: "border-asi-neon"
        },
        {
            title: "Scrum Framework",
            icon: "🔄",
            desc: "Structured sprints allow us to ship security updates faster than vulnerabilities can evolve.",
            color: "border-asi-purple"
        },
        {
            title: "DevSecOps",
            icon: "🛡️",
            desc: "Security is not an afterthought. It is integrated into every phase of our development lifecycle.",
            color: "border-blue-500"
        }
    ];

    return (
        <section id="methodology" className="py-24 bg-asi-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-asi-purple/5 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-asi-neon/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        <span className="bg-gradient-to-r from-white via-asi-silver to-gray-400 bg-clip-text text-transparent">
                            Development Methodology
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Built using advanced software engineering principles to ensure reliability, speed, and adaptability.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {methods.map((method, index) => (
                        <div key={index} className={`group p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border ${method.color}/30 hover:border-${method.color} transition-all duration-300 hover:-translate-y-2`}>
                            <div className="text-4xl mb-6 bg-slate-800 w-16 h-16 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                {method.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {method.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Continuous Integration & Deployment</h3>
                        <p className="text-gray-400">Our systems automatically test and deploy patches 24/7.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 rounded bg-slate-800 border border-white/5 text-sm font-mono text-asi-neon">
                            git push origin master
                        </div>
                        <div className="px-4 py-2 rounded bg-slate-800 border border-white/5 text-sm font-mono text-green-400">
                            Build Passing
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
