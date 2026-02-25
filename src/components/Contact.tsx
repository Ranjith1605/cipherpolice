import { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, Radio, RefreshCcw } from 'lucide-react';

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
        setStatus('ENCRYPTING_PACKETS...');

        setTimeout(() => {
            console.log('Form Data:', formData);
            setIsSending(false);
            setStatus('UPLINK_SUCCESS :: MESSAGE_TRANSMITTED');
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <section id="contact" className="py-32 bg-asi-dark relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

            <div className="container-vision relative z-10 px-4 max-w-2xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-asi-purple/5 border border-asi-purple/20 rounded mb-6">
                        <Radio className="w-3 h-3 text-asi-purple animate-pulse" />
                        <span className="text-[10px] font-black text-asi-purple tracking-[0.4em] uppercase">Emergency Frequency</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono">
                        Secure <span className="bg-gradient-to-r from-asi-neon to-asi-purple bg-clip-text text-transparent not-italic underline decoration-white/10 underline-offset-8">Channel</span>
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="OPERATOR NAME"
                            required
                            className="w-full p-5 bg-white/5 border border-white/10 rounded-sm text-xs font-mono text-white placeholder-gray-700 outline-none focus:border-asi-neon/40 focus:bg-white/10 transition-all tracking-widest uppercase"
                        />
                    </div>
                    <div className="relative group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="SECURE_UPLINK@DOMAIN.COM"
                            required
                            className="w-full p-5 bg-white/5 border border-white/10 rounded-sm text-xs font-mono text-white placeholder-gray-700 outline-none focus:border-asi-neon/40 focus:bg-white/10 transition-all tracking-widest uppercase"
                        />
                    </div>
                    <div className="relative group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="TRANSMISSION CONTENT..."
                            rows={5}
                            required
                            className="w-full p-5 bg-white/5 border border-white/10 rounded-sm text-xs font-mono text-white placeholder-gray-700 outline-none focus:border-asi-neon/40 focus:bg-white/10 transition-all tracking-widest uppercase resize-none"
                        ></textarea>
                    </div>

                    <div className="flex flex-col items-center gap-6 pt-4">
                        <button
                            type="submit"
                            disabled={isSending}
                            className="w-full py-5 bg-asi-neon text-asi-dark font-black text-xs uppercase tracking-[0.3em] hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] transition-all disabled:opacity-50 active:scale-95 flex items-center justify-center gap-3"
                        >
                            {isSending ? (
                                <>
                                    <RefreshCcw className="w-4 h-4 animate-spin" />
                                    TRANSMITTING...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    INITIALIZE UPLINK
                                </>
                            )}
                        </button>

                        {status && (
                            <div className={`flex items-center gap-3 px-6 py-3 rounded-full border bg-black/40 font-mono text-[10px] tracking-widest uppercase animate-slide-up ${status.includes('SUCCESS') ? 'border-asi-neon/30 text-asi-neon shadow-[0_0_15px_rgba(0,243,255,0.1)]' : 'border-asi-purple/30 text-asi-purple'
                                }`}>
                                {status.includes('SUCCESS') ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3 animate-pulse" />}
                                {status}
                            </div>
                        )}
                    </div>
                </form>

                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
                    <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Encryption: PQ-End-to-End</div>
                    <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Signal Strength: Optimal [98%]</div>
                </div>
            </div>
        </section>
    );
};

