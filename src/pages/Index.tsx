import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import SocialLinks from '@/components/SocialLinks';
import { ArrowRight, ArrowDown, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SkillCard from '@/components/SkillCard';
import ExperienceCard from '@/components/ExperienceCard';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';

// Animations plus subtiles et professionnelles
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

const Index = () => {
  useEffect(() => {
    document.title = 'Sullivan Joro | Portfolio';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Section id="home" className="bg-gradient pt-20">
        <motion.div
          className="flex flex-col items-center justify-center text-center h-[90vh]"
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
            Je m'appelle <span className="text-gradient font-extrabold">Sullivan Joro</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Community Manager, Développeur Web et Stratège Digital.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Button asChild className="bg-gold text-background hover:bg-gold/80 transition-colors">
              <a href="/Sullivan_CV.pdf" download aria-label="Télécharger mon CV">
                <FileText className="mr-2 h-4 w-4" /> Télécharger mon CV
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 transition-colors">
              <a href="mailto:sullivan.13.freelance@gmail.com" aria-label="Me contacter par mail">
                Me contacter par mail <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 transition-colors">
              <a href="https://wa.me/261341060802" target="_blank" rel="noopener noreferrer" aria-label="Me contacter sur WhatsApp">
                WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <SocialLinks className="mt-8" />
          </motion.div>
          <motion.div
            className="absolute bottom-10 w-full flex justify-center"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Défiler vers le bas"
              className="animate-bounce"
            >
              <ArrowDown className="text-gold h-8 w-8" />
            </button>
          </motion.div>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À <span className="text-gold">Propos</span>
            </h2>
            <p className="mb-4 text-foreground/90">
              Étudiant en informatique passionné par l'univers du digital, je me spécialise dans la création de contenu, le marketing numérique et le développement web. Je crois au pouvoir de la technologie pour connecter, inspirer et résoudre des problèmes.
            </p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
              variants={staggerContainer}
            >
              {[
                { title: "💡 Esprit créatif", desc: "Innovation et créativité dans chaque projet digital." },
                { title: "🔧 Compétences techniques", desc: "HTML, CSS, JS, React, Java et plus encore." },
                { title: "📱 Compétences sociales", desc: "Gestion de communauté et stratégie de contenu efficace." },
                { title: "🎯 Sens de l'organisation", desc: "Projets menés avec rigueur et méthode." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-muted/30 p-4 rounded-md"
                  variants={fadeInUp}
                  {...smoothScale}
                >
                  <h3 className="text-lg font-semibold text-gold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            variants={fadeInUp}
            {...smoothScale}
          >
            <div className="w-64 h-64 bg-gradient-to-br from-ocean to-dark rounded-full flex items-center justify-center border-2 border-gold/30 shadow-lg shadow-gold/10">
              <span className="text-5xl font-bold text-gold">SJ</span>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-gradient">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-gold">Compétences</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Un ensemble de compétences diverses, alliant créativité technique et stratégie digitale.
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
              title: "⭐ Marketing Digital",
              description: "Stratégies de marketing digital adaptées, campagnes publicitaires ciblées et analyse de données marketing."
            },
            {
              title: "⭐ Community Management",
              description: "Gestion de communautés sur les réseaux sociaux, création d'engagement et modération de contenus."
            },
            {
              title: "⭐ Création de Contenu Visuel",
              description: "Création graphique avec Canva et Meta Business Suite pour des visuels professionnels et attrayants."
            },
            {
              title: "⭐ Programmation",
              description: "Développement web avec HTML, CSS, JavaScript, React, et applications Java."
            },
            {
              title: "⭐ Gestion de Projet",
              description: "Organisation et suivi de projets avec Notion, Jira et Trello pour des résultats optimaux."
            },
            {
              title: "⭐ Soft Skills",
              description: "Excellente communication, autonomie, adaptabilité et travail d'équipe efficace."
            }
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              {...smoothScale}
            >
              <SkillCard
                title={skill.title}
                description={skill.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experiences">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-gold">Expériences</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Parcours professionnel et projets significatifs dans le domaine digital.
          </p>
        </motion.div>
        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              title: "Gestionnaire de Contenus - Réseaux Sociaux",
              period: "2023 - Présent",
              description: "Création et gestion de contenus pour pages Facebook dans les domaines du sport, bien-être et coaching. Élaboration de stratégies d'engagement et analyse des performances."
            },
            {
              title: "Développeur Web - Projet TechYou Care",
              period: "2022 - 2023",
              description: "Participation à un projet de digitalisation des données médicales. Développement d'interfaces utilisateur et intégration de systèmes de gestion de données."
            },
            {
              title: "Développeur Front-end - Calendrier Familial",
              period: "2022",
              description: "Développement de site web avec React et Java pour un projet de calendrier familial. Création d'interfaces réactives et implémentation de fonctionnalités de planification."
            },
            {
              title: "Collaborateur - Projet HEI",
              period: "2021",
              description: "Collaboration dans une équipe de développement front-end/back-end pour des projets académiques. Travail en méthode agile et implémentation de solutions techniques."
            }
          ].map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              {...smoothScale}
            >
              <ExperienceCard
                title={exp.title}
                period={exp.period}
                description={exp.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" className="bg-gradient">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mon <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Sélection de projets et réalisations dans le développement web et marketing digital.
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
              title: "Publications Facebook",
              description: "Visuels et campagnes pour réseaux sociaux dans le domaine du sport et bien-être.",
              imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
              tags: ["Design", "Social Media", "Marketing"]
            },
            {
              title: "TechYou Care",
              description: "Interface utilisateur pour une application de gestion de données médicales.",
              imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
              tags: ["UI/UX", "React", "Java"]
            },
            {
              title: "RunRobe Landing",
              description: "Page d'atterrissage pour une boutique de vêtements sportifs en ligne.",
              imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
              tags: ["Web Design", "HTML/CSS", "JavaScript"]
            },
            {
              title: "Calendrier Familial",
              description: "Application web pour la gestion d'emplois du temps familiaux.",
              imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
              tags: ["React", "Java", "UX Design"]
            },
            {
              title: "Dashboard Analytics",
              description: "Interface de tableau de bord pour la visualisation de données marketing.",
              imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
              tags: ["Data Viz", "JavaScript", "CSS"]
            },
            {
              title: "Application Mobile Fitness",
              description: "Prototype d'application mobile pour le suivi d'activités sportives.",
              imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
              tags: ["Mobile", "UI Design", "Prototype"]
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              {...smoothScale}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
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
            Envie de discuter d'un projet ou d'une opportunité ? N'hésitez pas à me contacter.
          </p>
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 transition-colors">
                <a href="mailto:sullivan.13.freelance@gmail.com">
                  sullivan.13.freelance@gmail.com
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 transition-colors">
                <a href="https://wa.me/261341060802" target="_blank" rel="noopener noreferrer">
                  +261 34 106 08 02
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ContactForm />
        </motion.div>
      </Section>

      {/* Footer */}
      <motion.footer
        className="bg-muted py-8 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-foreground/70">© 2025 Sullivan Joro – Tous droits réservés</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks iconSize={24} />
            <a
              href="/Sullivan_CV.pdf"
              download
              className="mt-3 text-sm text-gold hover:text-gold/80 transition-colors"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
