import { Shield, Brain, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const team = [
    {
        name: "Antigravity Unit-01",
        id: "ID-FRONT-66",
        role: "Frontend Engineer",
        desc: "Builds the dashboard UI and browser extension interface.",
        icon: <Shield className="w-5 h-5 text-primary" />,
    },
    {
        name: "Cognitive Engine Lead",
        id: "ID-NEURAL-42",
        role: "ML Engineer",
        desc: "Develops the behavioral detection model and real-time threat signals.",
        icon: <Brain className="w-5 h-5 text-secondary" />,
    },
    {
        name: "Ethics Command",
        id: "ID-SEC-01",
        role: "Security & Compliance",
        desc: "Owns the compliance architecture and data sovereignty framework.",
        icon: <Lock className="w-5 h-5 text-white" />,
    }
];

const Team = () => {
    return (
        <section id="team" className="py-24 relative border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[11px] text-primary/60 font-bold tracking-[0.4em] uppercase mb-4"
                    >
                        The Team
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tight"
                    >
                        People who <span className="text-primary">built this.</span>
                    </motion.h2>
                </div>

                {/* Team cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                                    {member.icon}
                                </div>
                                <span className="text-[9px] font-mono text-white/20 tracking-widest uppercase">{member.id}</span>
                            </div>
                            <div className="text-sm font-bold text-primary mb-1 tracking-wide">{member.role}</div>
                            <div className="text-base font-black text-white mb-3">{member.name}</div>
                            <p className="text-white/40 text-sm leading-relaxed">{member.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
