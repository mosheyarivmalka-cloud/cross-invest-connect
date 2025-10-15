import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, TrendingUp, Shield, Globe } from 'lucide-react';

interface HeroProps {
  language: 'he' | 'en';
}

export const Hero = ({ language }: HeroProps) => {
  const isRTL = language === 'he';

  const handleContactClick = () => {
    console.log('Contact button clicked!');
    alert('כפתור צור קשר נלחץ! הפונקציונליות תתווסף בקרוב');
    // Scroll to contact section or open contact modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPropertiesClick = () => {
    console.log('View Properties button clicked!');
    alert('כפתור צפייה בנכסים נלחץ! הפונקציונליות תתווסף בקרוב');
    // Scroll to properties section or navigate to properties page
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const translations = {
    he: {
      title: 'מחברים בין משקיעים להזדמנויות',
      subtitle: 'בישראל ובארה״ב',
      description: 'פלטפורמה מובילה להשקעות נדל״ן חוצות יבשות. מאיתור הנכס ועד ניהול מלא - אנחנו כאן בכל שלב בדרך.',
      ctaPrimary: 'דברו עם יועץ',
      ctaSecondary: 'צפו בנכסים',
      stat1: '500+ נכסים',
      stat2: '2000+ משקיעים',
      stat3: '8+ שנות ניסיון',
      feature1: 'תשואות גבוהות',
      feature2: 'שקיפות מלאה',
      feature3: 'כיסוי עולמי'
    },
    en: {
      title: 'Connecting Investors with Opportunities',
      subtitle: 'in Israel and the U.S.',
      description: 'Leading cross-border real estate investment platform. From property discovery to full management - we\'re with you every step of the way.',
      ctaPrimary: 'Speak with Advisor',
      ctaSecondary: 'View Properties',
      stat1: '500+ Properties',
      stat2: '2000+ Investors',
      stat3: '8+ Years Experience',
      feature1: 'High Returns',
      feature2: 'Full Transparency',
      feature3: 'Global Coverage'
    }
  };

  const t = translations[language];
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className={`relative min-h-[90vh] flex items-center ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block mb-2">{t.title}</span>
            <span className="text-accent-gold">{t.subtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={handleContactClick}
              className="inline-flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-gold/90 text-accent-gold-foreground font-semibold px-8 py-4 text-lg shadow-elevated rounded-md transition-colors cursor-pointer"
            >
              {t.ctaPrimary}
              <ArrowIcon className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={handleViewPropertiesClick}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-md cursor-pointer"
            >
              {t.ctaSecondary}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                {t.stat1.split(' ')[0]}
              </div>
              <div className="text-white/80">{t.stat1.split(' ').slice(1).join(' ')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                {t.stat2.split(' ')[0]}
              </div>
              <div className="text-white/80">{t.stat2.split(' ').slice(1).join(' ')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                {t.stat3.split(' ')[0]}
              </div>
              <div className="text-white/80">{t.stat3.split(' ').slice(1).join(' ')}</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
              <TrendingUp className="w-6 h-6 text-accent-gold" />
              <span className="text-white font-medium">{t.feature1}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
              <Shield className="w-6 h-6 text-accent-gold" />
              <span className="text-white font-medium">{t.feature2}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
              <Globe className="w-6 h-6 text-accent-gold" />
              <span className="text-white font-medium">{t.feature3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};