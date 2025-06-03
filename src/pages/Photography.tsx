import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

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

const Photography = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section id="photography-hero" className="bg-gradient pt-20">
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
            <span className="text-gradient font-extrabold">Photographie Mobile</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Capturer l'instant avec passion et créativité
          </motion.p>
        </motion.div>
      </Section>

      {/* Services Section */}
      <Section id="photography-services">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-gold">Services</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Des services adaptés à vos besoins en photographie mobile
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              title: "📸 Portrait",
              description: "Séances photo individuelles ou en groupe, en studio ou en extérieur."
            },
            {
              title: "🎉 Événements",
              description: "Couverture photo de vos événements professionnels ou personnels."
            },
            {
              title: "🏢 Architecture",
              description: "Photographie d'architecture et d'intérieur pour professionnels."
            },
            {
              title: "🌆 Urbain",
              description: "Photographie urbaine et street photography."
            },
            {
              title: "🌅 Paysage",
              description: "Photographie de paysage et nature."
            },
            {
              title: "📱 Réseaux Sociaux",
              description: "Contenu visuel optimisé pour vos réseaux sociaux."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-muted/30 p-6 rounded-lg"
              variants={fadeInUp}
              {...smoothScale}
            >
              <h3 className="text-xl font-semibold text-gold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Gallery Section */}
      <Section id="photography-gallery" className="bg-gradient">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ma <span className="text-gold">Galerie</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Une sélection de mes meilleures photos
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Array.from({ length: 9 }, (_, i) => (
            <motion.div
              key={i}
              className="relative aspect-square overflow-hidden rounded-lg"
              variants={fadeInUp}
              {...smoothScale}
            >
              <img
                src={`/images/photography/photo${i + 1}.jpg`}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="photography-contact">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Me <span className="text-gold">Contacter</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-4">
            Envie de discuter d'un projet photo ? N'hésitez pas à me contacter.
          </p>
          <motion.div
            className="flex justify-center mb-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 transition-colors">
                <a href="https://wa.me/261341060802" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="mr-2 h-5 w-5" />
                  +261 34 10 608 02
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Photography; 