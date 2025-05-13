import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Préparer le message pour WhatsApp
      const whatsappMessage = `Nouveau message de ${formData.name} (${formData.email}):\n\n${formData.message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/261341060802?text=${encodedMessage}`;

      // Ouvrir WhatsApp dans un nouvel onglet
      window.open(whatsappUrl, '_blank');

      toast({
        title: t('contact.success'),
        description: "Votre message a été envoyé avec succès !",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-white/90">
            {t('contact.name')}
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
            className="bg-muted text-white border-muted focus:border-gold"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-white/90">
            {t('contact.email')}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            required
            className="bg-muted text-white border-muted focus:border-gold"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-white/90">
            {t('contact.message')}
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            required
            className="bg-muted text-white border-muted focus:border-gold min-h-[120px]"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gold hover:bg-gold/80 text-black font-medium transition-colors"
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          {isLoading ? t('contact.sending') : t('contact.sendWhatsApp')}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
