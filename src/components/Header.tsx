import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Languages, Globe, Phone } from 'lucide-react';

interface HeaderProps {
  language: 'he' | 'en';
  onLanguageChange: (lang: 'he' | 'en') => void;
}

export const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRTL = language === 'he';

  const translations = {
    he: {
      home: 'בית',
      investIsrael: 'השקעות בישראל',
      investUSA: 'השקעות בארה"ב',
      sellProperty: 'מכרו נכס',
      about: 'אודותינו',
      contact: 'צור קשר',
      language: 'English',
      phone: '+972-50-123-4567'
    },
    en: {
      home: 'Home',
      investIsrael: 'Invest in Israel',
      investUSA: 'Invest in USA',
      sellProperty: 'Sell Property',
      about: 'About',
      contact: 'Contact',
      language: 'עברית',
      phone: '+1-555-123-4567'
    }
  };

  const t = translations[language];

  return (
    <header className={`bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className={`font-bold text-xl ${isRTL ? 'mr-2' : 'ml-2'}`}>
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                {language === 'he' ? 'דירה בישראל' : 'Home in Israel'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.home}
            </a>
            <a href="#invest-israel" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.investIsrael}
            </a>
            <a href="#invest-usa" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.investUSA}
            </a>
            <a href="#sell" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.sellProperty}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              {t.about}
            </a>
          </nav>

          {/* Contact & Language */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{t.phone}</span>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === 'he' ? 'en' : 'he')}
              className="flex items-center space-x-1"
            >
              <Languages className="w-4 h-4" />
              <span>{t.language}</span>
            </Button>

            <Button className="bg-gradient-hero hover:opacity-90 transition-opacity">
              {t.contact}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};