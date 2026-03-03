import { Shield, Brain, Lock } from 'lucide-react';
import { motion as fm } from 'framer-motion';

const Team = () => {
    const team = [
        {
            name: "Antigravity Unit-01",
            id: "ID-FRONT-66",
            role: "Metaphysical Architect",
            description: "Implementing the meta-lattice dashboard and modular protection components, ensuring seamless integration of divine metrics with zero-knowledge overhead.",
            icon: <Shield className="w-8 h-8 text-quantum-blue" />,
            access: "Level 10"
        },
        {
            name: "Cognitive Engine Lead",
            id: "ID-NEURAL-42",
            role: "Neural Seer",
            description: "Crafting the sacred rulesets for behavioral pattern recognition. Translating raw telemetry into actionable soul-states of being.",
            icon: <Brain className="w-8 h-8 text-guardian-gold" />,
            access: "Level 09"
        },
        {
            name: "Ethics Command",
            id: "ID-SEC-01",
            role: "Sovereign Arbitrator",
            description: "Designing the security panel framework and crafting the authoritative microcopy. Ensuring digital sovereignty through radical transparency.",
            icon: <Lock className="w-8 h-8 text-white" />,
            access: "Level 10"
        }
    ];

    return (
        <section id="team" className="py-40 relative overflow-hidden bg-transparent">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="text-center mb-32 relative">
                    <fm.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-quantum/20 glass-ethereal mb-8 shadow-2xl"
                    >
                        <span className="text-[10px] font-black text-quantum-blue tracking-[0.5em] uppercase">Sacred Vanguard</span>
                    </fm.div>
                    <fm.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-8xl font-black tracking-tighter mb-10 italic text-white uppercase"
                    >
                        Celestial <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic font-mono">Guardians</span>
                    </fm.h2>
                    <fm.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed italic"
                    >
                        A multidisciplinary unit of sentinels dedicated to securing every digital soul in the meta-quantum expanse.
                    </fm.p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {team.map((member, index) => (
                        <fm.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -15 }}
                            className="glass-ethereal p-12 group relative transition-all duration-500 rounded-[3rem] shadow-2xl border-white/5 hover:border-quantum/40"
                        >
                            {/* Biometric Header */}
                            <div className="flex justify-between items-start mb-12">
                                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 group-hover:border-quantum/50 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] shadow-xl">
                                    {member.icon}
                                </div>
                                <div className="text-right">
                                    <div className="text-[12px] font-mono text-quantum-blue font-black tracking-widest">{member.access}</div>
                                    <div className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em] mt-2 font-bold">Access Clear</div>
                                </div>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-white tracking-tight italic uppercase font-mono">{member.name}</h3>
                                    <div className="text-[11px] font-mono text-gray-600 font-bold uppercase tracking-widest">{member.id}</div>
                                </div>
                                <p className="text-quantum-blue font-black text-[12px] uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(0,242,255,0.4)]">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors font-bold italic">
                                    {member.description}
                                </p>
                            </div>

                            {/* Decorative Scan Line */}
                            <div className="absolute left-0 bottom-10 w-full h-[1px] bg-gradient-to-r from-transparent via-quantum-blue/40 to-transparent group-hover:translate-y-[-150px] transition-transform duration-1000 opacity-20"></div>
                        </fm.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
