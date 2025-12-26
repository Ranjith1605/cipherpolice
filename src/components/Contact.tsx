import { useState } from 'react';
import { GoldText } from './ui/GoldText';
import { GoldButton } from './ui/GoldButton';

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
        setStatus('Transmitting...');

        setTimeout(() => {
            console.log('Form Data:', formData);
            setIsSending(false);
            setStatus('Message successfully transmitted! We will be in touch.');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-slate-900">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-4xl font-extrabold text-center mb-10">
                    <GoldText>Get in Touch</GoldText>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-4 bg-slate-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#FFD26F] focus:border-transparent transition duration-200"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email Address"
                        required
                        className="w-full p-4 bg-slate-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#FFD26F] focus:border-transparent transition duration-200"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="w-full p-4 bg-slate-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#FFD26F] focus:border-transparent transition duration-200"
                    ></textarea>

                    <div className="flex flex-col items-center space-y-4">
                        <GoldButton type="submit" disabled={isSending}>
                            {isSending ? 'Transmitting...' : 'Transmit Message'}
                        </GoldButton>
                        {status && (
                            <p className={`text-sm font-medium ${status.includes('successfully') ? 'text-green-400' : 'text-yellow-400'}`}>
                                {status}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};
