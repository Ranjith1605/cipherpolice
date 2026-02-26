import React from 'react';
import { Quote, Heart, Sparkles, ShieldCheck } from 'lucide-react';

const quotes = [
    {
        text: "True security is not just the absence of threats, but the presence of peace in every digital interaction.",
        author: "The Protector's Mandate"
    },
    {
        text: "We build not a wall, but a sanctuary—where technology serves the spirit and guards the human essence.",
        author: "Universal Guardian Protocol"
    },
    {
        text: "In the digital age, a saviour is one who restores sovereignty to the citizen and harmony to the connection.",
        author: "Enlightened Civilization Directive"
    }
];

export const GuardianCreed: React.FC = () => {
    return (
        <section id="creed" className="py-32 relative overflow-hidden bg-asi-dark">
            <div className="absolute inset-0 bg-enlightened-grid opacity-20 pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/5 border border-yellow-500/20 rounded mb-6">
                            <Sparkles className="w-3 h-3 text-yellow-500" />
                            <span className="text-[10px] font-black text-yellow-500 tracking-[0.4em] uppercase">The Guardian's Creed</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono">
                            Voices of <span className="text-enlightened not-italic">Protection</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {quotes.map((q, idx) => (
                            <div key={idx} className="holographic-card p-10 group relative transition-all duration-500 hover:scale-[1.02] border-yellow-500/10 hover:border-yellow-500/30">
                                <div className="absolute top-4 right-6 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <Quote className="w-12 h-12 text-yellow-500" />
                                </div>

                                <div className="relative z-10 space-y-8">
                                    <div className="flex gap-1">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-1 h-1 rounded-full bg-yellow-500/40" />
                                        ))}
                                    </div>

                                    <p className="text-gray-300 text-lg font-medium leading-relaxed italic">
                                        "{q.text}"
                                    </p>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-[10px] font-black text-yellow-500/60 uppercase tracking-widest">
                                            {q.author}
                                        </span>
                                        <Heart className="w-3 h-3 text-asi-purple opacity-40" />
                                    </div>
                                </div>

                                {/* Subtle Enlightenment Glow */}
                                <div className="absolute inset-0 bg-yellow-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                            </div>
                        ))}
                    </div>

                    {/* Final Call to Peace */}
                    <div className="mt-24 text-center">
                        <div className="inline-flex items-center gap-6 p-8 glass-premium border border-white/5 rounded-2xl relative group overflow-hidden">
                            <div className="absolute inset-0 bg-yellow-500/[0.01] group-hover:bg-yellow-500/[0.03] transition-colors" />
                            <ShieldCheck className="w-12 h-12 text-yellow-500 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]" />
                            <div className="text-left">
                                <h4 className="text-xl font-black text-white italic">A World of <span className="text-yellow-500 not-italic">Harmony</span></h4>
                                <p className="text-gray-500 text-sm font-medium">Protecting your digital rights is our path to a peaceful civilization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
