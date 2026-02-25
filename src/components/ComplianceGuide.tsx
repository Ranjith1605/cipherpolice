import { ShieldCheck, Scale, Globe, Binary, Check, Cpu, Lock, UserCheck } from 'lucide-react';

const ComplianceGuide = () => {
  const regulations = [
    {
      title: 'GDPR (EU)',
      icon: <Globe className="w-8 h-8 text-asi-neon" />,
      desc: 'General Data Protection Regulation',
      key_points: [
        'Explicit Neural Consent',
        'Right to Erasure (Zero-Link)',
        'Data Portability Protocols',
        'Privacy by Design Mandatory',
        'Rapid Breach Intelligence',
      ],
    },
    {
      title: 'CCPA (US)',
      icon: <ShieldCheck className="w-8 h-8 text-asi-purple" />,
      desc: 'California Consumer Privacy Act',
      key_points: [
        'Right to Know Data Vectors',
        'Right to Delete Persona Info',
        'Opt-Out of Data Liquidation',
        'Non-Discrimination Assurance',
        'Behavioral Privacy Guard',
      ],
    },
    {
      title: 'PIPEDA (CA)',
      icon: <Scale className="w-8 h-8 text-white" />,
      desc: 'Persona Info Protection Act',
      key_points: [
        'Accountability Cascades',
        'Purpose Identification',
        'Strict Consent Handshakes',
        'Limited Lifecycle Retention',
        'Verification Audits',
      ],
    },
    {
      title: 'AI Act (EU)',
      icon: <Binary className="w-8 h-8 text-asi-neon" />,
      desc: 'Comprehensive AI Regulation',
      key_points: [
        'Risk-Based Classification',
        'Neural Transparency',
        'Human Oversight Override',
        'Bias Mitigation Logic',
        'Model Sovereignty',
      ],
    },
  ];

  const aiEthics = [
    {
      title: 'Transparency',
      icon: <Cpu className="w-6 h-6 text-asi-neon" />,
      desc: 'Neural clarity on all AI interaction vectors.'
    },
    {
      title: 'Fairness',
      icon: <Scale className="w-6 h-6 text-asi-purple" />,
      desc: 'Algorithmic neutrality for all digital citizens.'
    },
    {
      title: 'Accountability',
      icon: <UserCheck className="w-6 h-6 text-white" />,
      desc: 'Organization-level liability for AI outcomes.'
    },
    {
      title: 'Security',
      icon: <Lock className="w-6 h-6 text-asi-neon" />,
      desc: 'Hardened defense against neural manipulation.'
    },
  ];

  return (
    <section id="compliance" className="py-32 relative overflow-hidden bg-asi-dark">
      <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

      <div className="container-vision relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-asi-neon/5 border border-asi-neon/20 rounded mb-6">
            <span className="text-[10px] font-black text-asi-neon tracking-[0.4em] uppercase">Legal Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono">
            Regulatory <span className="bg-gradient-to-r from-asi-neon to-asi-purple bg-clip-text text-transparent not-italic underline decoration-white/10 underline-offset-8">Protocols</span>
          </h2>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            Navigating the complex multi-jurisdictional landscape of meta-quantum data protection.
            We ensure tactical compliance with international AI standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {regulations.map((reg, idx) => (
            <div
              key={idx}
              className="holographic-card p-8 group transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-asi-neon transition-colors w-fit">
                {reg.icon}
              </div>
              <h3 className="text-xl font-black mb-1 text-white uppercase tracking-tight group-hover:text-asi-neon transition-colors">{reg.title}</h3>
              <p className="text-[10px] font-mono text-gray-600 mb-6 uppercase tracking-widest">{reg.desc}</p>
              <ul className="space-y-3">
                {reg.key_points.map((point, i) => (
                  <li key={i} className="text-[10px] text-gray-400 flex items-start gap-3 group-hover:text-gray-300">
                    <Check className="w-3 h-3 text-asi-neon mt-0.5" />
                    <span className="font-medium tracking-wide">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-premium p-12 border border-white/5 mb-16 relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-asi-neon to-asi-purple"></div>
          <h3 className="text-2xl font-black mb-12 text-center text-white italic uppercase tracking-widest">
            AI Ethics <span className="not-italic text-asi-neon">&</span> Responsibility Logic
          </h3>
          <div className="grid md:grid-cols-4 gap-12">
            {aiEthics.map((item, idx) => (
              <div key={idx} className="text-center group-hover:translate-y-[-4px] transition-transform duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="mx-auto w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-asi-neon transition-all">
                  {item.icon}
                </div>
                <h4 className="font-black mb-3 text-white uppercase text-xs tracking-[0.2em]">{item.title}</h4>
                <p className="text-gray-500 text-[10px] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-premium p-10 border border-white/5 bg-asi-dark/40">
            <h4 className="text-lg font-black text-asi-neon mb-8 uppercase tracking-[0.3em]">Consumer Sovereignty</h4>
            <ul className="space-y-4">
              {[
                'Right to access neural data streams',
                'Right to correct algorithmic bias',
                'Right to absolute erasure',
                'Right to processing restriction',
                'Right to data portability protocol',
                'Right to lodge judicial complaints'
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <div className="w-1 h-1 rounded-full bg-asi-neon"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-premium p-10 border border-white/5 bg-asi-dark/40">
            <h4 className="text-lg font-black text-asi-purple mb-8 uppercase tracking-[0.3em]">Operational Readiness</h4>
            <ul className="space-y-4">
              {[
                'Privacy-by-Design implementation',
                'Bi-annual security neural audits',
                'Immutable consent ledger records',
                'Real-time incident response strike-teams',
                'Force-wide compliance training',
                'Quantum-level data encryption'
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <div className="w-1 h-1 rounded-full bg-asi-purple"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceGuide;
