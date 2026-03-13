import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import DataEthics from './components/DataEthics';
import Team from './components/Team';
import { Footer } from './components/Footer';
import { ChatSidebar } from './components/ChatSidebar';
import ComplianceGuide from './components/ComplianceGuide';
import { Contact } from './components/Contact';
import { useState } from 'react';
import { HyperspaceBackground } from './components/HyperspaceBackground';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { CognitiveFirewallDashboard } from './components/dashboard/CognitiveFirewallDashboard';
import { CyberCursor } from './components/CyberCursor';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFirewallActive, setIsFirewallActive] = useState(false);

  useEffect(() => {
    document.title = 'CipherPolice – Browser Security & Privacy Shield';
  }, []);

  return (
    <div className="min-h-screen bg-[#050a14] font-sans text-white relative overflow-x-hidden selection:bg-primary selection:text-black cursor-none">
      {/* Dynamic Background */}
      <HyperspaceBackground />
      <CyberCursor />

      <Navbar onOpenFirewall={() => setIsFirewallActive(true)} />
      <main className="relative z-10">
        <Hero />
        <Features />
        <DataEthics />
        <ComplianceGuide />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ChatSidebar isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
      <ThemeSwitcher />
      <CognitiveFirewallDashboard isOpen={isFirewallActive} onClose={() => setIsFirewallActive(false)} />
    </div>
  );
}
