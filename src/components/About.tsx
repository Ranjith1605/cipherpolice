import { GoldText } from './ui/GoldText';
import { Icon } from './ui/Icon';

export const About = () => {
    const values = [
        { title: 'Proactive Intelligence', icon: '⚡', desc: 'Leveraging AI algorithms to identify and mitigate risks before they evolve into threats.' },
        { title: 'Simple User Experience', icon: '✨', desc: 'Eliminating complexity. Security should be intuitive, elegant, and accessible to everyone.' },
        { title: 'Unified Security Core', icon: '🛡️', desc: 'A central, trustworthy platform where all your digital security needs are managed seamlessly.' },
    ];

    return (
        <section id="about" className="py-24 bg-slate-800 border-t border-b border-gray-700">
            <div className="container mx-auto px-4 max-w-7xl">
                <h2 className="text-4xl font-extrabold text-center mb-4">
                    <GoldText>A New Era of AI Security</GoldText>
                </h2>
                <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
                    CipherPolice was founded to bridge the gap between complex enterprise security and everyday digital life. We simplify the defense process, ensuring robust, intelligent protection is within reach for small businesses and individuals alike.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="bg-slate-900 p-8 rounded-xl border border-gold-500/10 shadow-xl transition duration-300 hover:border-gold-500/30">
                            <Icon className="text-6xl mb-4">{value.icon}</Icon>
                            <h3 className="text-2xl font-bold mb-3">
                                <GoldText>{value.title}</GoldText>
                            </h3>
                            <p className="text-gray-400">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
