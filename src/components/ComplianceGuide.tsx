import { Globe, ShieldCheck, Scale, Binary } from 'lucide-react';
import { motion } from 'framer-motion';

const regulations = [
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    title: 'GDPR',
    region: 'European Union',
    desc: 'Full compliance with EU data protection regulation — consent, erasure, portability, and privacy by design.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
    title: 'CCPA',
    region: 'California, USA',
    desc: 'Meets California consumer privacy requirements — right to know, delete, and opt out of data sale.'
  },
  {
    icon: <Scale className="w-5 h-5 text-white" />,
    title: 'PIPEDA',
    region: 'Canada',
    desc: 'Aligns with Canadian personal information protection standards for accountability and limited retention.'
  },
  {
    icon: <Binary className="w-5 h-5 text-primary" />,
    title: 'EU AI Act',
    region: 'European Union',
    desc: 'Built under the EU AI Act framework — transparent model logic, bias mitigation, and human oversight.'
  },
];

const ComplianceGuide = () => {
  return (
    <section id="compliance" className="py-24 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] text-primary/60 font-bold tracking-[0.4em] uppercase mb-4"
          >
            Legal Standards
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Compliant <span className="text-primary">everywhere.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/40 text-base max-w-md mx-auto leading-relaxed"
          >
            We meet the strictest privacy regulations across four jurisdictions.
          </motion.p>
        </div>

        {/* Regulation cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regulations.map((reg, i) => (
            <motion.div
              key={reg.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                {reg.icon}
              </div>
              <div>
                <div className="text-xl font-black text-white">{reg.title}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium mt-0.5">{reg.region}</div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">{reg.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceGuide;
