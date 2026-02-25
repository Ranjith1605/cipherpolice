import { Shield, Brain, Lock } from 'lucide-react';

const Team = () => {
    const team = [
        {
            name: "Antigravity Unit-01",
            id: "ID-FRONT-66",
            role: "Architecture & Frontend Force",
            description: "Implementing the web dashboard and modular extension components, ensuring seamless integration of real-time metrics with zero-latency overhead.",
            icon: <Shield className="w-8 h-8 text-asi-neon" />,
            access: "Level 10"
        },
        {
            name: "Cognitive Engine Lead",
            id: "ID-NEURAL-42",
            role: "Logic Engine & Data Science",
            description: "Crafting the proprietary rulesets for behavioral pattern recognition. Translating raw telemetry into actionable cognitive load states.",
            icon: <Brain className="w-8 h-8 text-asi-purple" />,
            access: "Level 09"
        },
        {
            name: "Ethics Command",
            id: "ID-SEC-01",
            role: "Strategy & Transparancy Force",
            description: "Designing the security panel framework and crafting the plain-language microcopy. Ensuring digital sovereignty through radical transparency.",
            icon: <Lock className="w-8 h-8 text-white" />,
            access: "Level 10"
        }
    ];

    return (
        <section id="team" className="py-32 relative overflow-hidden bg-asi-slate/10">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-24 animate-fade-in relative">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 mb-6">
                        <span className="text-[10px] font-black text-gray-500 tracking-[0.4em] uppercase">Human-Centric Collective</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 italic text-white">
                        Specialized <span className="bg-gradient-to-r from-asi-neon to-asi-purple bg-clip-text text-transparent not-italic">Force</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                        A multidisciplinary unit dedicated to securing digital citizens in the meta-quantum world.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="holographic-card p-10 group relative transition-all duration-500 hover:scale-[1.05] animate-slide-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Biometric Header */}
                            <div className="flex justify-between items-start mb-10">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-asi-neon transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                                    {member.icon}
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-mono text-asi-neon font-black">{member.access}</div>
                                    <div className="text-[8px] font-mono text-gray-600 uppercase tracking-widest mt-1">Access Clear</div>
                                </div>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-black text-white tracking-tight">{member.name}</h3>
                                    <div className="text-[10px] font-mono text-gray-500">{member.id}</div>
                                </div>
                                <p className="text-asi-neon font-black text-[11px] uppercase tracking-[0.2em]">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {member.description}
                                </p>
                            </div>

                            {/* Decorative Scan Line */}
                            <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-asi-neon/40 to-transparent group-hover:translate-y-[-100px] transition-transform duration-1000"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
