import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Visualization from './components/Visualization';
import WaitlistModal from './components/WaitlistModal';
import Footer from './components/Footer';

function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-deadw3-dark">
      <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      <Features />
      <Visualization />
      <Footer />

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}

export default App;
