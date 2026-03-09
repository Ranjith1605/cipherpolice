import { useState } from 'react';
import { Send, CheckCircle2, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            setSent(true);
            setFormData({ name: '', email: '', message: '' });
        }, 1800);
    };

    return (
        <section id="contact" className="py-24 relative border-t border-white/5">
            <div className="max-w-xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[11px] text-primary/60 font-bold tracking-[0.4em] uppercase mb-4"
                    >
                        Contact
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tight"
                    >
                        Get in <span className="text-primary">touch.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-white/40 text-base"
                    >
                        We read every message.
                    </motion.p>
                </div>

                {/* Form or success */}
                <AnimatePresence mode="wait">
                    {sent ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-10 rounded-2xl bg-primary/[0.04] border border-primary/20 text-center"
                        >
                            <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                            <p className="text-white font-bold text-lg mb-1">Message sent.</p>
                            <p className="text-white/40 text-sm">We'll get back to you shortly.</p>
                            <button
                                onClick={() => setSent(false)}
                                className="mt-6 text-[11px] text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest"
                            >
                                Send another
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-white/20 outline-none focus:border-primary/40 transition-colors"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-white/20 outline-none focus:border-primary/40 transition-colors"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                rows={5}
                                required
                                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-white/20 outline-none focus:border-primary/40 transition-colors resize-none"
                            />
                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full py-4 rounded-xl bg-primary text-[#050a14] font-bold text-sm tracking-wide hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                            >
                                {isSending ? (
                                    <><RefreshCcw className="w-4 h-4 animate-spin" /> Sending...</>
                                ) : (
                                    <><Send className="w-4 h-4" /> Send Message</>
                                )}
                            </button>
                            <p className="text-center text-[10px] text-white/20 pt-2 font-mono tracking-widest uppercase">
                                Encrypted in transit · No data stored
                            </p>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
