import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Navigation
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.skills': 'Compétences',
      'nav.experiences': 'Expériences',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',

      // Hero Section
      'hero.title': 'Je m\'appelle',
      'hero.subtitle': 'Community Manager, Développeur Web et Stratège Digital.',
      'hero.downloadCV': 'Télécharger mon CV',
      'hero.contactEmail': 'Me contacter par mail',
      'hero.contactWhatsApp': 'WhatsApp',

      // About Section
      'about.title': 'À Propos',
      'about.description': 'Étudiant en informatique passionné par l\'univers du digital, je me spécialise dans la création de contenu, le marketing numérique et le développement web. Je crois au pouvoir de la technologie pour connecter, inspirer et résoudre des problèmes.',
      'about.creative': '💡 Esprit créatif',
      'about.creativeDesc': 'Innovation et créativité dans chaque projet digital.',
      'about.technical': '🔧 Compétences techniques',
      'about.technicalDesc': 'HTML, CSS, JS, React, Java et plus encore.',
      'about.social': '📱 Compétences sociales',
      'about.socialDesc': 'Gestion de communauté et stratégie de contenu efficace.',
      'about.organization': '🎯 Sens de l\'organisation',
      'about.organizationDesc': 'Projets menés avec rigueur et méthode.',

      // Skills Section
      'skills.title': 'Mes Compétences',
      'skills.subtitle': 'Un ensemble de compétences diverses, alliant créativité technique et stratégie digitale.',

      // Experience Section
      'experience.title': 'Mes Expériences',
      'experience.subtitle': 'Parcours professionnel et projets significatifs dans le domaine digital.',

      // Portfolio Section
      'portfolio.title': 'Mon Portfolio',
      'portfolio.subtitle': 'Sélection de projets et réalisations dans le développement web et marketing digital.',

      // Contact Section
      'contact.title': 'Me Contacter',
      'contact.subtitle': 'Envie de discuter d\'un projet ou d\'une opportunité ? N\'hésitez pas à me contacter.',
      'contact.name': 'Nom',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.sendWhatsApp': 'Envoyer par WhatsApp',
      'contact.sending': 'Envoi en cours...',
      'contact.success': 'Message envoyé avec succès !',
      'contact.error': 'Une erreur est survenue. Veuillez réessayer.',

      // Footer
      'footer.rights': '© 2025 Sullivan Joro – Tous droits réservés',
      'footer.downloadCV': 'Télécharger mon CV',

      // Live Chat
      'chat.title': 'Chat en direct',
      'chat.placeholder': 'Écrivez votre message...',
      'chat.typing': 'En train d\'écrire...',
      'chat.welcome': 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
      'chat.response': 'Je vous remercie pour votre message. Je vous répondrai dans les plus brefs délais.',
      'chat.notification': 'Nouveau message',
      'chat.emoji': 'Emoji',
      'chat.send': 'Envoyer',
      'chat.close': 'Fermer',
    },
  },
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experiences': 'Experience',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',

      // Hero Section
      'hero.title': 'I am',
      'hero.subtitle': 'Community Manager, Web Developer and Digital Strategist.',
      'hero.downloadCV': 'Download CV',
      'hero.contactEmail': 'Contact me by email',
      'hero.contactWhatsApp': 'WhatsApp',

      // About Section
      'about.title': 'About',
      'about.description': 'A computer science student passionate about the digital world, I specialize in content creation, digital marketing, and web development. I believe in the power of technology to connect, inspire, and solve problems.',
      'about.creative': '💡 Creative Mind',
      'about.creativeDesc': 'Innovation and creativity in every digital project.',
      'about.technical': '🔧 Technical Skills',
      'about.technicalDesc': 'HTML, CSS, JS, React, Java and more.',
      'about.social': '📱 Social Skills',
      'about.socialDesc': 'Community management and effective content strategy.',
      'about.organization': '🎯 Organizational Skills',
      'about.organizationDesc': 'Projects carried out with rigor and method.',

      // Skills Section
      'skills.title': 'My Skills',
      'skills.subtitle': 'A diverse set of skills combining technical creativity and digital strategy.',

      // Experience Section
      'experience.title': 'My Experience',
      'experience.subtitle': 'Professional journey and significant projects in the digital field.',

      // Portfolio Section
      'portfolio.title': 'My Portfolio',
      'portfolio.subtitle': 'Selection of projects and achievements in web development and digital marketing.',

      // Contact Section
      'contact.title': 'Contact Me',
      'contact.subtitle': 'Want to discuss a project or opportunity? Feel free to contact me.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.sendWhatsApp': 'Send by WhatsApp',
      'contact.sending': 'Sending...',
      'contact.success': 'Message sent successfully!',
      'contact.error': 'An error occurred. Please try again.',

      // Footer
      'footer.rights': '© 2025 Sullivan Joro – All rights reserved',
      'footer.downloadCV': 'Download CV',

      // Live Chat
      'chat.title': 'Live Chat',
      'chat.placeholder': 'Type your message...',
      'chat.typing': 'Typing...',
      'chat.welcome': 'Hello! How can I help you today?',
      'chat.response': 'Thank you for your message. I will get back to you as soon as possible.',
      'chat.notification': 'New message',
      'chat.emoji': 'Emoji',
      'chat.send': 'Send',
      'chat.close': 'Close',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 