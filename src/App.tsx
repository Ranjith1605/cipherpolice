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
    meta.content = "CipherPolice – The world's first AI-powered Cognitive Firewall. Real-time browser security, cognitive load monitoring, and AI threat detection.";
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-asi-dark font-sans text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <section id="features">
          <Features />
        </section>
        <BrowserMonitorSection />
        <DashboardPage />
        <section id="data-ethics">
          <DataEthics />
        </section>
        <section id="team">
          <Team />
        </section>
      </main>
      <Footer />
      <ChatSidebar isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </div>
  );
}
