import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { MessageSquare, X, Send, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useToast } from './ui/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const LiveChat: React.FC = () => {
    const { t } = useTranslation();
    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Charger les messages depuis le localStorage
    useEffect(() => {
        const savedMessages = localStorage.getItem('chatMessages');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        } else {
            setMessages([{
                id: 1,
                text: t('chat.welcome'),
                sender: 'bot',
                timestamp: new Date(),
            }]);
        }
    }, [t]);

    // Sauvegarder les messages dans le localStorage
    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    // Scroll vers le bas quand de nouveaux messages arrivent
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Jouer un son pour les nouveaux messages
    const playNotificationSound = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/notification.mp3');
        }
        audioRef.current.play().catch(() => {
            // Gérer l'erreur si l'autorisation de lecture audio n'est pas accordée
            console.log('Audio playback failed');
        });
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        const newMessage: Message = {
            id: messages.length + 1,
            text: message,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, newMessage]);
        setMessage('');
        setIsTyping(true);

        // Simuler une réponse du bot
        setTimeout(() => {
            const botResponse: Message = {
                id: messages.length + 2,
                text: t('chat.response'),
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
            playNotificationSound();
            toast({
                title: t('chat.notification'),
                description: botResponse.text,
            });
        }, 2000);
    };

    const onEmojiClick = (emojiData: EmojiClickData) => {
        setMessage(prev => prev + emojiData.emoji);
        setShowEmojiPicker(false);
    };

    return (
        <TooltipProvider>
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 rounded-full h-14 w-14 bg-gold text-background hover:bg-gold/80 transition-colors shadow-lg"
            >
                <MessageSquare className="h-6 w-6" />
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-20 right-4 w-80 sm:w-96 z-50"
                    >
                        <Card className="bg-background/95 backdrop-blur-md border-muted shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <h3 className="font-semibold">{t('chat.title')}</h3>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsOpen(false)}
                                    className="h-8 w-8"
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="h-80 overflow-y-auto">
                                <div className="space-y-4">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[80%] rounded-lg p-3 ${msg.sender === 'user'
                                                        ? 'bg-gold text-background'
                                                        : 'bg-muted text-foreground'
                                                    }`}
                                            >
                                                <p className="text-sm">{msg.text}</p>
                                                <span className="text-xs opacity-70">
                                                    {msg.timestamp.toLocaleTimeString()}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="bg-muted text-foreground rounded-lg p-3">
                                                <p className="text-sm">{t('chat.typing')}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <form onSubmit={handleSendMessage} className="w-full flex gap-2">
                                    <div className="relative flex-1">
                                        <Input
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder={t('chat.placeholder')}
                                            className="pr-10"
                                        />
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
                                                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                                >
                                                    <Smile className="h-4 w-4" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{t('chat.emoji')}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                        {showEmojiPicker && (
                                            <div className="absolute bottom-full right-0 mb-2">
                                                <EmojiPicker onEmojiClick={onEmojiClick} />
                                            </div>
                                        )}
                                    </div>
                                    <Button type="submit" size="icon" className="bg-gold text-background hover:bg-gold/80">
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </TooltipProvider>
    );
};

export default LiveChat; 