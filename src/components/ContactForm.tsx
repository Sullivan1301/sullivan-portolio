
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
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
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé!",
        description: "Merci pour votre message. Je vous répondrai dès que possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-white/90">
          Nom
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
          Email
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
          Message
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
        {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>
    </form>
  );
};

export default ContactForm;
