import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import BrowserMonitorSection from './components/BrowserMonitorSection';
import DashboardPage from './pages/DashboardPage';
import DataEthics from './components/DataEthics';
import Team from './components/Team';
import { Footer } from './components/Footer';
import { ChatSidebar } from './components/ChatSidebar';

import { About } from './components/About';
import { Methodology } from './components/Methodology';
import { Scanner } from './components/Scanner';
import ComplianceGuide from './components/ComplianceGuide';
import { Contact } from './components/Contact';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    document.title = 'CipherPolice – AI Security & Cognitive Firewall';
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = "CipherPolice – The world's first AI-powered digital security force for the AI browser. Protecting digital citizens in the meta-quantum world.";
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-asi-dark font-sans text-white relative overflow-x-hidden selection:bg-asi-neon selection:text-asi-dark" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Futuristic Background Layers */}
      <div className="fixed inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
      <div className="scanline-overlay"></div>
      <div className="scanline-beam"></div>
      <div className="fixed inset-0 bg-gradient-to-t from-asi-dark via-transparent to-transparent pointer-events-none"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />

        <About />

        <Features />

        <Methodology />

        <BrowserMonitorSection />

        <DashboardPage />

        <Scanner />

        <ComplianceGuide />

        <DataEthics />

        <Team />

        <Contact />
      </main>
      <Footer />
      <ChatSidebar isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </div>
  );
}
