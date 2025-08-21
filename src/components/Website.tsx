import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { TeamSection } from './sections/TeamSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { ContactSection } from './sections/ContactSection';

export const Website = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'programs', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <div id="home">
          <HeroSection onNavigate={handleNavigate} />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="team">
          <TeamSection />
        </div>
        
        <div id="programs">
          <ProgramsSection onNavigate={handleNavigate} />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-sm">BH</span>
            </div>
            <span className="text-xl font-bold">Bright Hearts Brighter Society</span>
          </div>
          <p className="text-primary-foreground/80">
            © {new Date().getFullYear()} Bright Hearts Brighter Society. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};