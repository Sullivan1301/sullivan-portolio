
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className, iconSize = 20 }) => {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <a 
        href="https://www.linkedin.com/in/sullivan-rakotoniaina" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/80 hover:text-gold transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a 
        href="mailto:sullivan.13.freelance@gmail.com" 
        className="text-white/80 hover:text-gold transition-colors"
        aria-label="Email"
      >
        <Mail size={iconSize} />
      </a>
      <a 
        href="https://wa.me/261341060802" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/80 hover:text-gold transition-colors"
        aria-label="WhatsApp"
      >
        <Phone size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
