import { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, Radio, RefreshCcw } from 'lucide-react';
import { motion as fm, AnimatePresence } from 'framer-motion';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setStatus('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setStatus('ENCRYPTING_SOUL_PACKETS...');

        setTimeout(() => {
            console.log('Form Data:', formData);
            setIsSending(false);
            setStatus('CELESTIAL_UPLINK_SUCCESS :: Vow Transmitted');
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <section id="contact" className="py-40 bg-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4 max-w-3xl mx-auto">
                <fm.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <fm.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-6 py-2 bg-guardian-gold/5 border border-guardian-gold/20 glass-ethereal rounded-full mb-10 shadow-2xl"
                    >
                        <Radio className="w-4 h-4 text-guardian-gold animate-pulse" />
                        <span className="text-[10px] font-black text-guardian-gold tracking-[0.5em] uppercase">Celestial Frequency</span>
                    </fm.div>
                    <h2 className="text-4xl md:text-7xl font-black mb-10 italic text-white tracking-tighter uppercase font-mono">
                        Divine <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic underline decoration-white/10 underline-offset-8">Uplink</span>
                    </h2>
                    <p className="text-gray-500 text-xl font-medium italic">Establish a secure connection with the High Command.</p>
                </fm.div>

                <fm.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6 glass-ethereal p-12 rounded-[3.5rem] border-white/5 shadow-2xl"
                >
                    <div className="relative group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="CITIZEN NAME"
                            required
                            className="w-full p-6 bg-white/[0.02] border border-white/10 rounded-2xl text-xs font-mono text-white placeholder-gray-800 outline-none focus:border-quantum/50 focus:bg-white/5 transition-all tracking-[0.3em] uppercase italic font-bold"
                        />
                    </div>
                    <div className="relative group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="SACRED_UPLINK@SOUL.DOM"
                            required
                            className="w-full p-6 bg-white/[0.02] border border-white/10 rounded-2xl text-xs font-mono text-white placeholder-gray-800 outline-none focus:border-quantum/50 focus:bg-white/5 transition-all tracking-[0.3em] uppercase italic font-bold"
                        />
                    </div>
                    <div className="relative group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="CELESTIAL TRANSMISSION CONTENT..."
                            rows={6}
                            required
                            className="w-full p-6 bg-white/[0.02] border border-white/10 rounded-2xl text-xs font-mono text-white placeholder-gray-800 outline-none focus:border-quantum/50 focus:bg-white/5 transition-all tracking-[0.3em] uppercase italic resize-none font-bold"
                        ></textarea>
                    </div>

                    <div className="flex flex-col items-center gap-8 pt-6">
                        <fm.button
                            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0,242,255,0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSending}
                            className="w-full py-6 bg-quantum-blue text-obsidian font-black text-sm uppercase tracking-[0.5em] rounded-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-4 italic shadow-2xl"
                        >
                            {isSending ? (
                                <>
                                    <RefreshCcw className="w-5 h-5 animate-spin" />
                                    TRANSMITTING...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    INITIALIZE CELESTIAL UPLINK
                                </>
                            )}
                        </fm.button>

                        <AnimatePresence>
                            {status && (
                                <fm.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className={`flex items-center gap-4 px-8 py-4 rounded-full border bg-obsidian/60 glass-ethereal font-mono text-[11px] tracking-[0.2em] uppercase shadow-2xl ${status.includes('SUCCESS') ? 'border-quantum/40 text-quantum-blue shadow-[0_0_25px_rgba(0,242,255,0.2)]' : 'border-guardian-gold/40 text-guardian-gold'
                                        }`}>
                                    {status.includes('SUCCESS') ? <CheckCircle2 className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4 animate-pulse" />}
                                    {status}
                                </fm.div>
                            )}
                        </AnimatePresence>
                    </div>
                </fm.form>

                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-20">
                    <div className="text-[11px] font-mono text-gray-500 tracking-[0.4em] uppercase font-bold italic">Encryption: Metaphysical-Grade</div>
                    <div className="text-[11px] font-mono text-gray-500 tracking-[0.4em] uppercase font-bold italic">Signal: Ascended [100%]</div>
                </div>
            </div>
        </section>
    );
};

