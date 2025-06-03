import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { path: '/', label: 'Accueil' },
        { path: '/photography', label: 'Photographie' },
        { path: '/contact', label: 'Contact' }
    ];

    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-gold">
                        Sullivan
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors ${isActive(link.path)
                                        ? 'text-gold'
                                        : 'text-foreground/70 hover:text-gold'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 transition-colors">
                            <a href="https://wa.me/261341060802" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="mr-2 h-4 w-4" />
                                Contact
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground/70 hover:text-gold transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-background/95 backdrop-blur-md"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block text-sm font-medium transition-colors ${isActive(link.path)
                                            ? 'text-gold'
                                            : 'text-foreground/70 hover:text-gold'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button asChild variant="outline" className="w-full border-gold text-gold hover:bg-gold/10 transition-colors">
                                <a href="https://wa.me/261341060802" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp className="mr-2 h-4 w-4" />
                                    Contact
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navigation; 