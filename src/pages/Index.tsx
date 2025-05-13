
import React, { useEffect } from 'react';
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

const Index = () => {
  useEffect(() => {
    document.title = 'Sullivan Joro | Portfolio';
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Section id="home" className="bg-gradient pt-20">
        <div className="flex flex-col items-center justify-center text-center h-[90vh]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6">
            Je m'appelle <span className="text-gradient font-extrabold">Sullivan Joro</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Community Manager, Développeur Web et Stratège Digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild className="bg-gold text-dark hover:bg-gold/80 transition-colors">
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
          </div>
          <SocialLinks className="mt-8" />
          <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Défiler vers le bas"
            >
              <ArrowDown className="text-gold h-8 w-8" />
            </button>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              À <span className="text-gold">Propos</span>
            </h2>
            <p className="mb-4 text-white/90">
              Étudiant en informatique passionné par l'univers du digital, je me spécialise dans la création de contenu, le marketing numérique et le développement web. Je crois au pouvoir de la technologie pour connecter, inspirer et résoudre des problèmes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-muted/30 p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gold mb-2">💡 Esprit créatif</h3>
                <p className="text-white/70">Innovation et créativité dans chaque projet digital.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gold mb-2">🔧 Compétences techniques</h3>
                <p className="text-white/70">HTML, CSS, JS, React, Java et plus encore.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gold mb-2">📱 Compétences sociales</h3>
                <p className="text-white/70">Gestion de communauté et stratégie de contenu efficace.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gold mb-2">🎯 Sens de l'organisation</h3>
                <p className="text-white/70">Projets menés avec rigueur et méthode.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-ocean to-dark rounded-full flex items-center justify-center border-2 border-gold/30 shadow-lg shadow-gold/10">
              <span className="text-5xl font-bold text-gold">SJ</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="bg-gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-gold">Compétences</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Un ensemble de compétences diverses, alliant créativité technique et stratégie digitale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            title="⭐ Marketing Digital" 
            description="Stratégies de marketing digital adaptées, campagnes publicitaires ciblées et analyse de données marketing." 
          />
          <SkillCard 
            title="⭐ Community Management" 
            description="Gestion de communautés sur les réseaux sociaux, création d'engagement et modération de contenus." 
          />
          <SkillCard 
            title="⭐ Création de Contenu Visuel" 
            description="Création graphique avec Canva et Meta Business Suite pour des visuels professionnels et attrayants." 
          />
          <SkillCard 
            title="⭐ Programmation" 
            description="Développement web avec HTML, CSS, JavaScript, React, et applications Java." 
          />
          <SkillCard 
            title="⭐ Gestion de Projet" 
            description="Organisation et suivi de projets avec Notion, Jira et Trello pour des résultats optimaux." 
          />
          <SkillCard 
            title="⭐ Soft Skills" 
            description="Excellente communication, autonomie, adaptabilité et travail d'équipe efficace." 
          />
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experiences">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-gold">Expériences</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Parcours professionnel et projets significatifs dans le domaine digital.
          </p>
        </div>
        <div className="space-y-6">
          <ExperienceCard 
            title="Gestionnaire de Contenus - Réseaux Sociaux" 
            period="2023 - Présent" 
            description="Création et gestion de contenus pour pages Facebook dans les domaines du sport, bien-être et coaching. Élaboration de stratégies d'engagement et analyse des performances." 
          />
          <ExperienceCard 
            title="Développeur Web - Projet TechYou Care" 
            period="2022 - 2023" 
            description="Participation à un projet de digitalisation des données médicales. Développement d'interfaces utilisateur et intégration de systèmes de gestion de données." 
          />
          <ExperienceCard 
            title="Développeur Front-end - Calendrier Familial" 
            period="2022" 
            description="Développement de site web avec React et Java pour un projet de calendrier familial. Création d'interfaces réactives et implémentation de fonctionnalités de planification." 
          />
          <ExperienceCard 
            title="Collaborateur - Projet HEI" 
            period="2021" 
            description="Collaboration dans une équipe de développement front-end/back-end pour des projets académiques. Travail en méthode agile et implémentation de solutions techniques." 
          />
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" className="bg-gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mon <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Sélection de projets et réalisations dans le développement web et marketing digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            title="Publications Facebook" 
            description="Visuels et campagnes pour réseaux sociaux dans le domaine du sport et bien-être." 
            imageUrl="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
            tags={["Design", "Social Media", "Marketing"]} 
          />
          <ProjectCard 
            title="TechYou Care" 
            description="Interface utilisateur pour une application de gestion de données médicales." 
            imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
            tags={["UI/UX", "React", "Java"]} 
          />
          <ProjectCard 
            title="RunRobe Landing" 
            description="Page d'atterrissage pour une boutique de vêtements sportifs en ligne." 
            imageUrl="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
            tags={["Web Design", "HTML/CSS", "JavaScript"]} 
          />
          <ProjectCard 
            title="Calendrier Familial" 
            description="Application web pour la gestion d'emplois du temps familiaux." 
            imageUrl="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
            tags={["React", "Java", "UX Design"]} 
          />
          <ProjectCard 
            title="Dashboard Analytics" 
            description="Interface de tableau de bord pour la visualisation de données marketing." 
            imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            tags={["Data Viz", "JavaScript", "CSS"]} 
          />
          <ProjectCard 
            title="Application Mobile Fitness" 
            description="Prototype d'application mobile pour le suivi d'activités sportives." 
            imageUrl="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
            tags={["Mobile", "UI Design", "Prototype"]} 
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Me <span className="text-gold">Contacter</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-4">
            Envie de discuter d'un projet ou d'une opportunité ? N'hésitez pas à me contacter.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 transition-colors">
              <a href="mailto:sullivan.13.freelance@gmail.com">
                sullivan.13.freelance@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10 transition-colors">
              <a href="https://wa.me/261341060802" target="_blank" rel="noopener noreferrer">
                +261 34 106 08 02
              </a>
            </Button>
          </div>
        </div>
        <ContactForm />
      </Section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-white/70">© 2025 Sullivan Joro – Tous droits réservés</p>
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
      </footer>
    </div>
  );
};

export default Index;
