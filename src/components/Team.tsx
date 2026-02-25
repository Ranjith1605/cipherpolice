import { Title, Paragraph } from './ui/Typography';
import { Shield, Brain, Lock } from 'lucide-react';

const Team = () => {
    const team = [
        {
            name: "Dev / Antigravity Lead",
            role: "System Architecture & Frontend Lead",
            description: "Implementing the web dashboard and modular extension components, ensuring seamless integration of real-time metrics.",
            icon: <Shield className="w-8 h-8 text-blue-500" />
        },
        {
            name: "Data Science Lead",
            role: "Cognitive Load Logic & Logic Engine",
            description: "Defining feature sets and clustering behavioral data to derive cognitive load states through advanced rulesets.",
            icon: <Brain className="w-8 h-8 text-purple-500" />
        },
        {
            name: "Security & UX Lead",
            role: "Narrative & Data Ethics Strategy",
            description: "Designing the security panel framework and crafting the plain-language microcopy for maximum user transparency.",
            icon: <Lock className="w-8 h-8 text-green-500" />
        }
    ];

    return (
        <section id="team" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Title level={2} className="mb-6">The CipherPolice Team</Title>
                    <Paragraph className="text-lg opacity-80 text-gray-600">
                        A multidisciplinary collective dedicated to securing both your data and your digital wellbeing.
                    </Paragraph>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {member.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                            <p className="text-blue-600 font-medium text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                            <p className="text-gray-600 leading-relaxed">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
