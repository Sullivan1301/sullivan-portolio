
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-dark/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-montserrat font-bold text-gradient">SJ.</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'skills', 'experiences', 'portfolio', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-white/80 hover:text-gold transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white/90 hover:text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-md py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {['home', 'about', 'skills', 'experiences', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left py-2 text-white/80 hover:text-gold transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
