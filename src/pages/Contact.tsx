import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Animations
const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

const smoothScale = {
    whileHover: {
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
    }
};

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Rediriger vers WhatsApp avec le message
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
        const whatsappMessage = `Bonjour, je m'appelle ${name}. ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/261341060802?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Section id="contact-hero" className="bg-gradient pt-20">
                <motion.div
                    className="flex flex-col items-center justify-center text-center h-[50vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    >
                        <span className="text-gradient font-extrabold">Contact</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl mb-8 max-w-2xl"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        Discutons de votre projet
                    </motion.p>
                </motion.div>
            </Section>

            {/* Contact Form Section */}
            <Section id="contact-form">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Envoyez-moi un <span className="text-gold">message</span>
                        </h2>
                        <p className="text-foreground/90 mb-8">
                            Remplissez le formulaire ci-dessous pour me contacter. Je vous répondrai dans les plus brefs délais.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nom</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Votre nom"
                                    required
                                    className="bg-muted/30 border-gold/30 focus:border-gold"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Votre message"
                                    required
                                    className="bg-muted/30 border-gold/30 focus:border-gold min-h-[150px]"
                                />
                            </div>
                            <Button type="submit" className="w-full bg-gold text-background hover:bg-gold/80 transition-colors">
                                Envoyer via WhatsApp
                            </Button>
                        </form>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Mes <span className="text-gold">coordonnées</span>
                        </h2>
                        <div className="space-y-6">
                            <motion.div
                                className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg"
                                {...smoothScale}
                            >
                                <FaWhatsapp className="text-gold text-2xl" />
                                <div>
                                    <h3 className="font-semibold">WhatsApp</h3>
                                    <a
                                        href="https://wa.me/261341060802"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/70 hover:text-gold transition-colors"
                                    >
                                        +261 34 10 608 02
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg"
                                {...smoothScale}
                            >
                                <FaEnvelope className="text-gold text-2xl" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <a
                                        href="mailto:sullivan.joro@gmail.com"
                                        className="text-foreground/70 hover:text-gold transition-colors"
                                    >
                                        sullivan.joro@gmail.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg"
                                {...smoothScale}
                            >
                                <FaMapMarkerAlt className="text-gold text-2xl" />
                                <div>
                                    <h3 className="font-semibold">Localisation</h3>
                                    <p className="text-foreground/70">
                                        Antananarivo, Madagascar
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </Section>
        </div>
    );
};

export default Contact; 