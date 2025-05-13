import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-foreground hover:text-gold transition-colors"
                    aria-label="Select language"
                >
                    <Globe className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => changeLanguage('fr')}
                    className={i18n.language === 'fr' ? 'text-gold' : ''}
                >
                    🇫🇷 Français
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => changeLanguage('en')}
                    className={i18n.language === 'en' ? 'text-gold' : ''}
                >
                    🇬🇧 English
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSelector; 