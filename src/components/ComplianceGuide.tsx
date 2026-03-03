import { ShieldCheck, Globe, Binary, Check, Cpu, Lock, UserCheck, Scale } from 'lucide-react';
import { motion as fm } from 'framer-motion';

const ComplianceGuide = () => {
  const regulations = [
    {
      title: 'Divine GDPR (EU)',
      icon: <Globe className="w-8 h-8 text-quantum-blue" />,
      desc: 'Sacred Data Protection Mandate',
      key_points: [
        'Explicit Soul Consent',
        'Right to Erasure (Void-Link)',
        'Spirit Portability Protocols',
        'Privacy by Design (Creation)',
        'Rapid Breach Intervention',
      ],
    },
    {
      title: 'Guardian CCPA (US)',
      icon: <ShieldCheck className="w-8 h-8 text-guardian-gold" />,
      desc: 'Sovereign Consumer Privacy Act',
      key_points: [
        'Right to Know Divine Vectors',
        'Right to Delete Persona Essense',
        'Opt-Out of Data Harvest',
        'Non-Discrimination Assurance',
        'Behavioral Guardian Guard',
      ],
    },
    {
      title: 'PIPEDA (CA)',
      icon: <Scale className="w-8 h-8 text-white" />,
      desc: 'Persona Info Protection Vow',
      key_points: [
        'Accountability Cascades',
        'Purpose Identification',
        'Sacred Consent Handshakes',
        'Limited Lifecycle Retention',
        'Verification Holy Audits',
      ],
    },
    {
      title: 'Celestial AI Act',
      icon: <Binary className="w-8 h-8 text-quantum-blue" />,
      desc: 'Comprehensive Meta-Regulation',
      key_points: [
        'Risk-Based Classification',
        'Neural Transparency',
        'Divine Oversight Override',
        'Bias Mitigation Logic',
        'Model Sovereignty',
      ],
    },
  ];

  const aiEthics = [
    {
      title: 'Transparency',
      icon: <Cpu className="w-6 h-6 text-quantum-blue" />,
      desc: 'Neural clarity on all divine interaction vectors.'
    },
    {
      title: 'Fairness',
      icon: <Scale className="w-6 h-6 text-guardian-gold" />,
      desc: 'Algorithmic neutrality for all digital souls.'
    },
    {
      title: 'Accountability',
      icon: <UserCheck className="w-6 h-6 text-white" />,
      desc: 'Divine-level liability for all AI outcomes.'
    },
    {
      title: 'Security',
      icon: <Lock className="w-6 h-6 text-quantum-blue" />,
      desc: 'Hardened defense against the dark arts of manipulation.'
    },
  ];

  return (
    <section id="compliance" className="py-32 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none"></div>

      <div className="container-vision relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <fm.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass-ethereal border border-quantum/30 rounded-full mb-6 shadow-2xl"
          >
            <span className="text-[10px] font-black text-quantum-blue tracking-[0.4rem] uppercase">Sacred Jurisprudence</span>
          </fm.div>
          <fm.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-black mb-8 italic text-white tracking-tighter uppercase font-mono"
          >
            Sacred <span className="bg-gradient-to-r from-quantum-blue to-guardian-gold bg-clip-text text-transparent not-italic">Mandates</span>
          </fm.h2>
          <fm.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-xl font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Navigating the multi-jurisdictional lattice of meta-quantum data protection.
            We ensure tactical compliance with Eternal AI standards.
          </fm.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {regulations.map((reg, idx) => (
            <fm.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-ethereal p-10 group transition-all duration-500 rounded-[2.5rem] border-white/5 hover:border-quantum/40 shadow-2xl"
            >
              <div className="mb-8 p-4 bg-white/[0.02] rounded-2xl border border-white/10 group-hover:border-quantum/50 transition-all w-fit shadow-xl">
                {reg.icon}
              </div>
              <h3 className="text-2xl font-black mb-2 text-white uppercase tracking-tight group-hover:text-quantum-blue transition-colors italic">{reg.title}</h3>
              <p className="text-[10px] font-mono text-gray-600 mb-8 uppercase tracking-[0.3rem] font-bold">{reg.desc}</p>
              <ul className="space-y-4">
                {reg.key_points.map((point, i) => (
                  <li key={i} className="text-[11px] text-gray-500 flex items-start gap-3 group-hover:text-gray-300 transition-colors font-medium">
                    <Check className="w-4 h-4 text-quantum-blue mt-0.5 shrink-0" />
                    <span className="tracking-wide uppercase italic text-[9px]">{point}</span>
                  </li>
                ))}
              </ul>
            </fm.div>
          ))}
        </div>

        <fm.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-ethereal p-16 border border-white/5 mb-16 relative overflow-hidden group rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-quantum-blue to-guardian-gold opacity-50"></div>
          <h3 className="text-3xl font-black mb-16 text-center text-white italic uppercase tracking-[0.5rem]">
            Divine Ethics <span className="not-italic text-quantum-blue">&</span> Sacred Responsibility
          </h3>
          <div className="grid md:grid-cols-4 gap-16">
            {aiEthics.map((item, idx) => (
              <fm.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group-hover:translate-y-[-8px] transition-transform duration-500"
              >
                <div className="mx-auto w-20 h-20 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center mb-8 group-hover:border-quantum/50 group-hover:bg-quantum-blue/5 transition-all shadow-2xl">
                  {item.icon}
                </div>
                <h4 className="font-black mb-4 text-white uppercase text-[11px] tracking-[0.3rem] italic">{item.title}</h4>
                <p className="text-gray-500 text-[10px] leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
              </fm.div>
            ))}
          </div>
        </fm.div>

        <div className="grid md:grid-cols-2 gap-10">
          <fm.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-ethereal p-12 border border-white/5 bg-obsidian/40 rounded-[2.5rem] shadow-2xl"
          >
            <h4 className="text-xl font-black text-quantum-blue mb-10 uppercase tracking-[0.4rem] italic">Consumer Sovereignty</h4>
            <ul className="space-y-5">
              {[
                'Right to access neural data streams',
                'Right to correct algorithmic bias',
                'Right to absolute erasure',
                'Right to restrict meta-processing',
                'Right to data portability protocol',
                'Right to lodge celestial complaints'
              ].map((item, i) => (
                <li key={i} className="flex gap-5 items-center text-[10px] font-mono text-gray-500 uppercase tracking-[0.3rem] font-bold group hover:text-gray-300 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-quantum-blue shadow-[0_0_10px_rgba(0,242,255,1)]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </fm.div>

          <fm.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-ethereal p-12 border border-white/5 bg-obsidian/40 rounded-[2.5rem] shadow-2xl"
          >
            <h4 className="text-xl font-black text-guardian-gold mb-10 uppercase tracking-[0.4rem] italic">Operational Readiness</h4>
            <ul className="space-y-5">
              {[
                'Privacy-by-Creation implementation',
                'Bi-annual sacred neural audits',
                'Immutable consent ledger records',
                'Real-time incident response strike-teams',
                'Force-wide mandate training',
                'Meta-Quantum level data encryption'
              ].map((item, i) => (
                <li key={i} className="flex gap-5 items-center text-[10px] font-mono text-gray-500 uppercase tracking-[0.3rem] font-bold group hover:text-gray-300 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-guardian-gold shadow-[0_0_10px_rgba(255,202,40,1)]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </fm.div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceGuide;
