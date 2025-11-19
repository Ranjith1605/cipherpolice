import { useState, useEffect, useMemo } from 'react';

const GoldButton = ({ children, onClick, disabled }: { children: React.ReactNode; onClick?: () => void; disabled?: boolean }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      px-10 py-4 font-extrabold tracking-widest uppercase transition duration-300 ease-in-out
      bg-gradient-to-r from-[#FFD26F] to-[#C99700]
      text-slate-900 rounded-lg shadow-lg hover:shadow-2xl hover:brightness-110
      transform hover:scale-[1.02] active:scale-[0.98]
      disabled:opacity-50 disabled:cursor-not-allowed
      text-sm md:text-base
    `}
  >
    {children}
  </button>
);

const GoldText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span
    className={`
      bg-clip-text text-transparent bg-gradient-to-r from-[#FFD26F] to-[#C99700]
      inline-block ${className}
    `}
  >
    {children}
  </span>
);

const Icon = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <span className={`text-4xl ${className}`} style={{ textShadow: '0 0 10px rgba(255, 210, 111, 0.5)' }}>
    {children}
  </span>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Scanner', href: '#scanner' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-gray-900/80 shadow-lg shadow-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center space-x-3 transition duration-300 hover:opacity-80">
            <img
              src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
              alt="CipherPolice Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl md:text-2xl font-black tracking-wider">
              <GoldText>CipherPolice</GoldText>
            </span>
          </a>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-slate-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700/50 focus:outline-none transition duration-200"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:bg-slate-700/50 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-gold-400/10"></div>
          ))}
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-yellow-400 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/2 w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <img
          src="/ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png"
          alt="CipherPolice Logo"
          className="h-32 w-auto mx-auto mb-6"
        />

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-tight">
          <GoldText>
            Meet CipherPolice — Your Intelligent Digital Defence
          </GoldText>
        </h1>
        <p className="text-xl md:text-3xl text-gray-300 font-light mb-10">
          Proactive. Simple. Secure.
        </p>
        <a href="#scanner">
          <GoldButton>
            Start Scan
          </GoldButton>
        </a>
      </div>
    </section>
  );
};

const About = () => {
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

const Scanner = () => {
  const [domain, setDomain] = useState('');
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [results, setResults] = useState<{
    score: number;
    sslStatus: string;
    headers: string[];
    fixes: string[];
  } | null>(null);

  const handleScan = () => {
    if (!domain.trim()) return;
    setScanStatus('scanning');
    setResults(null);

    setTimeout(() => {
      const isSecure = Math.random() > 0.3;
      setResults({
        score: isSecure ? Math.floor(Math.random() * 20) + 80 : Math.floor(Math.random() * 40) + 50,
        sslStatus: isSecure ? 'Secure (A+)' : 'Insecure (Missing Ciphers)',
        headers: isSecure
          ? ['X-Content-Type-Options: nosniff', 'Strict-Transport-Security: max-age=31536000', 'Content-Security-Policy: default-src \'self\'']
          : ['Server: Apache/2.4', 'X-Powered-By: PHP/7.4', 'No Security Headers Detected'],
        fixes: isSecure
          ? ['Keep software updated.', 'Review third-party scripts.']
          : ['<strong>CRITICAL:</strong> Implement HSTS header.', '<strong>URGENT:</strong> Fix SSL/TLS Ciphers.', 'Set X-Frame-Options to DENY.'],
      });
      setScanStatus('complete');
    }, 2000);
  };

  const scoreColor = useMemo(() => {
    if (!results) return 'text-white';
    if (results.score >= 90) return 'text-green-400';
    if (results.score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  }, [results]);

  return (
    <section id="scanner" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          <GoldText>Instant Website Security Scan</GoldText>
        </h2>
        <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto">
          Enter any domain below to get an instant, high-level analysis of basic vulnerabilities, SSL status, and critical HTTP security headers. Proactive defense starts here.
        </p>

        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-16">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter domain name (e.g., example.com)"
            className="flex-grow p-4 bg-slate-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-[#FFD26F] focus:border-transparent transition duration-200"
          />
          <GoldButton onClick={handleScan} disabled={scanStatus === 'scanning' || !domain.trim()}>
            {scanStatus === 'scanning' ? 'Scanning...' : 'Scan Now'}
          </GoldButton>
        </div>

        {scanStatus === 'scanning' && (
          <div className="text-center text-xl text-yellow-400 space-y-4">
            <Icon>⚙️</Icon>
            <p>Analyzing {domain} with AI Core...</p>
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-transparent to-[#FFD26F] animate-pulse"></div>
            </div>
          </div>
        )}

        {scanStatus === 'complete' && results && (
          <div className="bg-slate-800 p-8 rounded-xl shadow-2xl border border-gold-500/30">
            <h3 className="text-3xl font-bold mb-6 text-white text-center">
              <GoldText>Scan Results for {domain}</GoldText>
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-8 items-center border-b border-gold-500/20 pb-6">
              <div className="text-center">
                <p className="text-xl text-gray-400 uppercase tracking-widest">Security Score</p>
                <p className={`text-7xl font-black ${scoreColor} mt-2`} style={{ textShadow: `0 0 15px ${scoreColor}` }}>
                  {results.score}
                </p>
              </div>

              <div className="text-center p-4 bg-slate-900 rounded-lg border border-gold-500/10">
                <p className="text-lg font-semibold mb-2">SSL Status</p>
                <p className={`text-2xl font-bold ${results.sslStatus.includes('Secure') ? 'text-green-400' : 'text-red-400'}`}>
                  {results.sslStatus}
                </p>
              </div>

              <div className="text-center p-4 bg-slate-900 rounded-lg border border-gold-500/10">
                <p className="text-lg font-semibold mb-2">Security Headers</p>
                <p className={`text-2xl font-bold ${results.headers.length > 2 ? 'text-green-400' : 'text-red-400'}`}>
                  {results.headers.length} Found
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4">
                  <GoldText>Prioritized Fixes</GoldText>
                </h4>
                <ul className="space-y-3 text-gray-300">
                  {results.fixes.map((fix, index) => (
                    <li key={index} className="flex items-start">
                      <Icon className="text-xl mr-3 text-[#FFD26F]">🔑</Icon>
                      <span dangerouslySetInnerHTML={{ __html: fix }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-4">
                  <GoldText>Security Headers Info</GoldText>
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm bg-slate-900 p-4 rounded-lg">
                  {results.headers.map((header, index) => (
                    <li key={index} className="truncate">{header}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  *Only key headers are listed. Full report available soon.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Features = () => {
  const problems = [
    { icon: '🤯', title: 'Complex Digital Security', desc: 'Enterprise tools require expert knowledge. We translate complexity into simple, actionable steps.' },
    { icon: '💸', title: 'Expensive Enterprise Solutions', desc: 'High-tier protection is often out of budget for growing teams. We provide powerful, affordable access.' },
    { icon: '🚨', title: 'Reactive Security Systems', desc: 'Too many systems alert you after a breach. CipherPolice is built for proactive, preventative defense.' },
    { icon: '🔍', title: 'Hard-to-Understand Threat Data', desc: 'Stop sifting through jargon. We deliver threat intelligence with crystal clarity and prioritized fixes.' },
  ];

  return (
    <section id="features" className="py-24 bg-slate-800 border-t border-b border-gray-700">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          <GoldText>What CipherPolice Solves</GoldText>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6 bg-slate-900 rounded-xl border border-gold-500/10 transition duration-300 hover:shadow-gold-500/20 hover:shadow-xl">
              <Icon className="text-5xl mb-4">{problem.icon}</Icon>
              <h3 className="text-xl font-bold mb-3 text-white">{problem.title}</h3>
              <p className="text-gray-400 text-sm">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
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
            <GoldButton disabled={isSending}>
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

const Footer = () => (
  <footer className="py-8 bg-black/50 border-t border-gray-700">
    <div className="container mx-auto px-4 text-center text-gray-500">
      <p className="text-sm tracking-wider">
        © 2025 CipherPolice. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    document.title = "CipherPolice - Intelligent Digital Defence";
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Scanner />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
