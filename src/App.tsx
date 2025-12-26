import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Scanner } from './components/Scanner';
import ComplianceGuide from './components/ComplianceGuide';
import { Methodology } from './components/Methodology';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatSidebar } from './components/ChatSidebar';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    document.title = "CipherPolice - Intelligent Digital Defence";
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-asi-dark font-sans text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Methodology />
        <Scanner />
        <ComplianceGuide />
        <Features />
        <Contact />
      </main>
      <Footer />
      <ChatSidebar isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </div>
  );
}

