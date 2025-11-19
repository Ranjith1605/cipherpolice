const ComplianceGuide = () => {
  const regulations = [
    {
      title: 'GDPR (EU)',
      emoji: '🇪🇺',
      desc: 'General Data Protection Regulation',
      key_points: [
        'Explicit consent required for data collection',
        'Right to be forgotten',
        'Data portability rights',
        'Privacy by design mandatory',
        '72-hour breach notification',
      ],
    },
    {
      title: 'CCPA (US)',
      emoji: '🇺🇸',
      desc: 'California Consumer Privacy Act',
      key_points: [
        'Consumer right to know what data is collected',
        'Right to delete personal information',
        'Right to opt-out of sale',
        'Non-discrimination for exercising rights',
      ],
    },
    {
      title: 'PIPEDA (Canada)',
      emoji: '🍁',
      desc: 'Personal Information Protection Act',
      key_points: [
        'Accountability principles',
        'Identification of purposes',
        'Consent required',
        'Limited collection, use & retention',
      ],
    },
    {
      title: 'AI Act (EU)',
      emoji: '🤖',
      desc: 'Comprehensive AI Regulation',
      key_points: [
        'Risk-based classification',
        'Transparency requirements',
        'Human oversight mandatory',
        'Bias and discrimination prevention',
      ],
    },
  ];

  const aiEthics = [
    {
      title: 'Transparency',
      icon: '👁️',
      desc: 'Users must know when they interact with AI systems',
    },
    {
      title: 'Fairness',
      icon: '⚖️',
      desc: 'AI systems must not discriminate based on protected characteristics',
    },
    {
      title: 'Accountability',
      icon: '📋',
      desc: 'Organizations must be responsible for AI decisions and outcomes',
    },
    {
      title: 'Security',
      icon: '🔒',
      desc: 'Robust protection against misuse and unauthorized access',
    },
  ];

  return (
    <section id="compliance" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD26F] to-[#C99700]">
            Global AI & Data Protection Laws
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Navigate the complex landscape of data protection and AI regulations across the globe. Stay compliant with international standards and best practices.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regulations.map((reg, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition duration-300"
            >
              <div className="text-4xl mb-3">{reg.emoji}</div>
              <h3 className="text-xl font-bold mb-1 text-white">{reg.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{reg.desc}</p>
              <ul className="space-y-2">
                {reg.key_points.map((point, i) => (
                  <li key={i} className="text-xs text-gray-300 flex items-start">
                    <span className="text-gold-500 mr-2">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 p-8 rounded-xl border border-gold-500/30 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD26F] to-[#C99700]">
              AI Ethics & Responsible Development
            </span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {aiEthics.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-xl border border-gold-500/30">
          <h3 className="text-2xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD26F] to-[#C99700]">
              Digital Rights & Best Practices
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-gold-400">Consumer Rights</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Right to access your personal data</li>
                <li>• Right to correct inaccurate data</li>
                <li>• Right to request deletion</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to lodge complaints</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-gold-400">Best Practices for Businesses</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Implement privacy by design</li>
                <li>• Conduct regular security audits</li>
                <li>• Maintain clear consent records</li>
                <li>• Have incident response plans</li>
                <li>• Train employees on compliance</li>
                <li>• Use encryption for data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceGuide;
