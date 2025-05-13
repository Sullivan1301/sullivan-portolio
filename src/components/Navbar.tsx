
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ThemeToggle } from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-background/80 backdrop-blur-md shadow-md" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <Avatar className="h-12 w-12 border-2 border-gold hover:border-white transition-colors">
            <AvatarImage src="/sullivan-profile.jpg" alt="Sullivan Joro" />
            <AvatarFallback className="bg-dark text-gold text-lg font-bold">SJ</AvatarFallback>
          </Avatar>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground/80 hover:text-gold transition-colors">Accueil</a>
          <a href="#about" className="text-foreground/80 hover:text-gold transition-colors">À propos</a>
          <a href="#skills" className="text-foreground/80 hover:text-gold transition-colors">Compétences</a>
          <a href="#experiences" className="text-foreground/80 hover:text-gold transition-colors">Expériences</a>
          <a href="#portfolio" className="text-foreground/80 hover:text-gold transition-colors">Portfolio</a>
          <a href="#contact" className="text-foreground/80 hover:text-gold transition-colors">Contact</a>
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md pt-4 pb-6 shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#home" className="text-foreground/80 hover:text-gold transition-colors py-1" onClick={toggleMenu}>Accueil</a>
            <a href="#about" className="text-foreground/80 hover:text-gold transition-colors py-1" onClick={toggleMenu}>À propos</a>
            <a href="#skills" className="text-foreground/80 hover:text-gold transition-colors py-1" onClick={toggleMenu}>Compétences</a>
            <a href="#experiences" className="text-foreground/80 hover:text-gold transition-colors py-1" onClick={toggleMenu}>Expériences</a>
            <a href="#portfolio" className="text-foreground/80 hover:text-gold transition-colors py-1" onClick={toggleMenu}>Portfolio</a>
            <a href="#contact" className="text-foreground/80 hover:text-gold transition-colors py-1" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
