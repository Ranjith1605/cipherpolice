import React from 'react';
import { ShieldCheck, UserCheck, EyeOff, Scale } from 'lucide-react';

const DataEthics: React.FC = () => {
    const principles = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-asi-neon" />,
            title: 'Local-Only Processing',
            desc: 'All behavioral analysis—including neural patterns and tab switching—is processed entirely on your hardware. Zero-knowledge by design.'
        },
        {
            icon: <EyeOff className="w-8 h-8 text-asi-purple" />,
            title: 'Minimal Metadata',
            desc: 'We only collect metadata required for cognitive load state. We never record keystrokes, screen contents, or private messaging data.'
        },
        {
            icon: <UserCheck className="w-8 h-8 text-asi-neon" />,
            title: 'Sovereign Control',
            desc: 'Absolute authority over monitoring levels. Features can be toggled instantly, and all local history is purged with one cryptographic command.'
        },
        {
            icon: <Scale className="w-8 h-8 text-asi-purple" />,
            title: 'GDPR Prosecution',
            desc: 'Our architecture enforces GDPR principles at the protocol level: data minimization, purpose limitation, and absolute integrity.'
        },
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-asi-dark">
            <div className="container-vision relative z-10 px-4">
                {/* Header Section */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1 border border-white/10 bg-white/5 rounded-full mb-8">
                        <span className="text-[10px] font-black text-gray-500 tracking-[0.4em] uppercase">Ethical Protocol V2.1</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 italic">
                        Digital <span className="bg-gradient-to-r from-asi-neon to-asi-purple bg-clip-text text-transparent not-italic">Sovereignty</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                        At CipherPolice, we believe your cognitive footprint is the most sacred information you possess.
                        Our "Elite Force" narrative isn't just a theme—it's a commitment to protecting your mind from
                        attention-harvesting algorithms and digital exploitation.
                    </p>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {principles.map((p, idx) => (
                        <div key={idx} className="holographic-card p-10 group relative transition-all duration-500 hover:scale-[1.02]">
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-asi-neon transition-all duration-500">
                                    {p.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-asi-neon transition-colors">
                                        {p.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {p.desc}
                                    </p>
                                </div>
                            </div>
                            {/* Decorative Cryptic Code Line */}
                            <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-20 transition-opacity font-mono text-[8px] text-asi-neon truncate w-1/2">
                                [PROTECT_USER_ID] :: HASH_VERIFIED :: ZERO_TRANSMISSION_PROTOCOL
                            </div>
                        </div>
                    ))}
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24"></div>

                {/* Commitment Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h4 className="text-3xl font-black text-white italic">Our <span className="text-asi-neon not-italic underline decoration-asi-neon/50">Commitment</span></h4>
                        <p className="text-gray-400 font-medium leading-relaxed">
                            CipherPolice is a statement about human-centric AI design. We protect users
                            not only from external threats but from internal cognitive exhaustion.
                        </p>
                        <div className="space-y-6">
                            {[
                                { t: 'Zero Dark Patterns', d: 'We never use manipulative UI to keep you engaged or harvested.' },
                                { t: 'Encryption by Force', d: 'We use elite security protocols to block trackers others ignore.' },
                                { t: 'Open Methodology', d: 'Our AI logic is transparent, research-backed, and peer-reviewed.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center group">
                                    <div className="w-2 h-2 rounded-full bg-asi-neon shadow-[0_0_10px_var(--asi-neon)]"></div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-black text-sm uppercase tracking-widest">{item.t}</span>
                                        <span className="text-gray-500 text-xs mt-1">{item.d}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Visual Graphic Mockup */}
                    <div className="relative aspect-square glass-premium border border-asi-neon/20 flex items-center justify-center group overflow-hidden">
                        <div className="absolute inset-0 bg-cyber-grid opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-asi-neon opacity-50">SHIELD_STATUS: MAX</div>
                        <div className="relative">
                            <ShieldCheck className="w-40 h-40 text-asi-neon drop-shadow-[0_0_30px_rgba(0,243,255,0.4)] animate-float" />
                            <div className="absolute -inset-10 border border-asi-neon/20 rounded-full animate-pulse-slow"></div>
                            <div className="absolute -inset-20 border border-asi-neon/5 rounded-full animate-ping opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataEthics;
