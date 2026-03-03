import React from 'react';
import { ShieldCheck, UserCheck, EyeOff, Scale } from 'lucide-react';
import { motion as fm } from 'framer-motion';

const DataEthics: React.FC = () => {
    const principles = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-quantum-blue" />,
            title: 'Divine Localism',
            desc: 'All behavioral analysis—including neural patterns and tab switching—is processed entirely on your hardware. Zero-knowledge by creation.'
        },
        {
            icon: <EyeOff className="w-8 h-8 text-guardian-gold" />,
            title: 'Sacred Minimization',
            desc: 'We only collect metadata required for cognitive load state. We never record keystrokes, screen contents, or private messaging data.'
        },
        {
            icon: <UserCheck className="w-8 h-8 text-white" />,
            title: 'Spirit Authority',
            desc: 'Absolute authority over monitoring levels. Features can be toggled instantly, and all local history is purged with one metaphysical command.'
        },
        {
            icon: <Scale className="w-8 h-8 text-quantum-blue" />,
            title: 'Eternal Compliance',
            desc: 'Our architecture enforces sacred principles at the protocol level: data minimization, purpose limitation, and absolute integrity.'
        },
    ];

    return (
        <section className="py-40 relative overflow-hidden bg-transparent">
            <div className="container-vision relative z-10 px-4">
                {/* Header Section */}
                <div className="text-center mb-32 max-w-4xl mx-auto">
                    <fm.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 border border-quantum/30 glass-ethereal rounded-full mb-10 shadow-2xl"
                    >
                        <span className="text-[10px] font-black text-quantum-blue tracking-[0.5em] uppercase">Celestial Mandate V7.0</span>
                    </fm.div>
                    <fm.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-8xl font-black tracking-tighter mb-10 italic text-white uppercase"
                    >
                        Sacred <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic font-mono">Sovereignty</span>
                    </fm.h2>
                    <fm.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 text-xl md:text-2xl font-medium leading-relaxed italic"
                    >
                        CipherPolice is the guardian of your digital essence. We stand between you and the void
                        to maintain a harmonious and enlightened digital existence.
                    </fm.p>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
                    {principles.map((p, idx) => (
                        <fm.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-ethereal p-12 group relative transition-all duration-500 rounded-[3rem] shadow-2xl border-white/5 hover:border-quantum/40"
                        >
                            <div className="flex items-start gap-8 relative z-10">
                                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 group-hover:border-quantum/50 transition-all duration-500 shadow-xl">
                                    {p.icon}
                                </div>
                                <div className="space-y-5">
                                    <h3 className="text-3xl font-black tracking-tight text-white group-hover:text-quantum-blue transition-colors uppercase italic font-mono">
                                        {p.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors font-bold italic">
                                        {p.desc}
                                    </p>
                                </div>
                            </div>
                            {/* Decorative Cryptic Code Line */}
                            <div className="absolute bottom-6 right-10 opacity-0 group-hover:opacity-20 transition-opacity font-mono text-[9px] text-quantum-blue tracking-widest uppercase font-black">
                                [SPIRIT_VERIFIED] :: ZERO_TRANSMISSION_VOW
                            </div>
                        </fm.div>
                    ))}
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-32"></div>

                {/* Commitment Section */}
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <fm.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h4 className="text-4xl font-black text-white italic uppercase tracking-wider">Our <span className="text-quantum-blue not-italic underline decoration-quantum/30 underline-offset-8">Vow</span></h4>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed italic">
                            CipherPolice is a testament to divine digital design. We protect users
                            not only from external threats but from internal cognitive corruption.
                        </p>
                        <div className="space-y-8">
                            {[
                                { t: 'Zero Dark Patterns', d: 'We never use manipulative alchemy to harvest your attention.' },
                                { t: 'Encryption by Vow', d: 'We use sacred security protocols to block trackers others ignore.' },
                                { t: 'Open Methodology', d: 'Our AI logic is transparent, research-backed, and divinely audited.' },
                            ].map((item, i) => (
                                <fm.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="flex gap-6 items-center group transition-all"
                                >
                                    <div className="w-3 h-3 rounded-full bg-quantum-blue shadow-[0_0_15px_var(--quantum-blue)]"></div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-black text-base uppercase tracking-[0.2em] italic font-mono">{item.t}</span>
                                        <span className="text-gray-500 text-xs mt-1 font-bold uppercase tracking-widest">{item.d}</span>
                                    </div>
                                </fm.div>
                            ))}
                        </div>
                    </fm.div>

                    {/* Visual Graphic Mockup */}
                    <fm.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square glass-ethereal border border-quantum/20 flex items-center justify-center group overflow-hidden rounded-[4rem] shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-cyber-grid opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        <div className="absolute top-6 right-8 font-mono text-[10px] text-quantum-blue opacity-50 uppercase font-black tracking-widest">Aura_Status: ASCENDED</div>
                        <div className="relative">
                            <fm.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <ShieldCheck className="w-48 h-48 text-white drop-shadow-[0_0_40px_rgba(0,242,255,0.5)] animate-glow" />
                            </fm.div>
                            <div className="absolute -inset-16 border border-quantum/20 rounded-full animate-pulse-slow"></div>
                            <div className="absolute -inset-32 border border-quantum/5 rounded-full animate-ping opacity-20"></div>
                        </div>
                    </fm.div>
                </div>
            </div>
        </section>
    );
};

export default DataEthics;
