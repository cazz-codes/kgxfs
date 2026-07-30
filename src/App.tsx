import { BackgroundVideo, GuideLines, RootNoiseFilter, LogoMark } from './components/primitives';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuBar } from './components/MenuBar';
import { BootstrapperMockup } from './components/BootstrapperMockup';
import { FeatureTriage } from './components/FeatureTriage';
import { LogoCloud } from './components/LogoCloud';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FinalCTA } from './components/FinalCTA';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <RootNoiseFilter />
      <BackgroundVideo />
      <GuideLines />

      <Navbar />
      <Hero />
      <MenuBar />
      <BootstrapperMockup />
      <FeatureTriage />
      <LogoCloud />
      <Testimonials />
      <Pricing />
      <FinalCTA />

      <footer className="relative z-10 max-w-6xl mx-auto px-6 py-10 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LogoMark className="w-5 h-5" />
            <span className="text-sm text-white/60">
              © 2026 Aimguard · Secure & Encrypted
            </span>
          </div>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
