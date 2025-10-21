import { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, TrendingUp, Shield, Heart } from 'lucide-react';

const About = () => {
  const [language, setLanguage] = useState<'he' | 'en'>('en');
  
  const isRTL = language === 'he';

  const translations = {
    he: {
      title: 'אודותינו',
      subtitle: 'מי אנחנו ולמה אנחנו כאן',
      description: 'אנחנו צוות של מומחי נדל״ן עם ניסיון של יותר מ-8 שנים בשוק הישראלי והאמריקאי. המשימה שלנו היא לחבר בין משקיעים להזדמנויות השקעה איכותיות.',
      ourStory: 'הסיפור שלנו',
      storyText: 'החלנו את דרכנו מתוך הבנה שהשוק הנדל״ן זקוק לשקיפות, מקצועיות ושירות אמיתי. במהלך השנים בנינו רשת של קשרים איכותיים ופיתחנו מערכת ניהול מתקדמת המאפשרת למשקיעים להשקיע בביטחון.',
      ourValues: 'הערכים שלנו',
      transparency: 'שקיפות',
      transparencyDesc: 'כל המידע זמין ובהיר - ללא הפתעות',
      professionalism: 'מקצועיות',
      professionalismDesc: 'צוות מומחים עם ניסיון עשיר בתחום',
      trust: 'אמון',
      trustDesc: 'יחסים ארוכי טווח מבוססי אמון הדדי',
      innovation: 'חדשנות',
      innovationDesc: 'שימוש בטכנולוגיות מתקדמות לשירות טוב יותר',
      support: 'תמיכה',
      supportDesc: 'זמינות 24/7 לכל שאלה ובעיה',
      results: 'תוצאות',
      resultsDesc: 'מחויבות להשגת התוצאות הטובות ביותר',
      ourTeam: 'הצוות שלנו',
      teamDescription: 'צוות מומחים מנוסים בתחומי הנדל״ן, הפיננסים והמשפט',
      stats: 'המספרים שלנו',
      happyClients: 'לקוחות מרוצים',
      propertiesManaged: 'נכסים מנוהלים',
      countriesActive: 'מדינות פעילות',
      yearsExperience: 'שנות ניסיון',
      contactUs: 'צור קשר'
    },
    en: {
      title: 'About Us',
      subtitle: 'Who we are and why we\'re here',
      description: 'We are a team of real estate experts with over 8 years of experience in the Israeli and American markets. Our mission is to connect investors with quality investment opportunities.',
      ourStory: 'Our Story',
      storyText: 'We started our journey from the understanding that the real estate market needs transparency, professionalism, and real service. Over the years, we have built a network of quality connections and developed an advanced management system that allows investors to invest with confidence.',
      ourValues: 'Our Values',
      transparency: 'Transparency',
      transparencyDesc: 'All information is available and clear - no surprises',
      professionalism: 'Professionalism',
      professionalismDesc: 'Expert team with rich experience in the field',
      trust: 'Trust',
      trustDesc: 'Long-term relationships based on mutual trust',
      innovation: 'Innovation',
      innovationDesc: 'Using advanced technologies for better service',
      support: 'Support',
      supportDesc: '24/7 availability for any questions or issues',
      results: 'Results',
      resultsDesc: 'Commitment to achieving the best results',
      ourTeam: 'Our Team',
      teamDescription: 'Experienced team of experts in real estate, finance, and law',
      stats: 'Our Numbers',
      happyClients: 'Happy Clients',
      propertiesManaged: 'Properties Managed',
      countriesActive: 'Active Countries',
      yearsExperience: 'Years Experience',
      contactUs: 'Contact Us'
    }
  };

  const t = translations[language];

  const values = [
    { icon: Shield, title: t.transparency, desc: t.transparencyDesc },
    { icon: Award, title: t.professionalism, desc: t.professionalismDesc },
    { icon: Heart, title: t.trust, desc: t.trustDesc },
    { icon: TrendingUp, title: t.innovation, desc: t.innovationDesc },
    { icon: Users, title: t.support, desc: t.supportDesc },
    { icon: Globe, title: t.results, desc: t.resultsDesc }
  ];

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main>
        {/* Hero Section */}
        <section className={`relative min-h-[70vh] flex items-center ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {t.title}
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
                {t.description}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {t.ourStory}
                </h2>
                <div className="w-24 h-1 bg-accent-gold mx-auto mb-8"></div>
              </div>
              
              <Card className="p-8">
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    {t.storyText}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {t.ourValues}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-elevated transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {t.stats}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">2000+</div>
                <div className="text-xl text-muted-foreground">{t.happyClients}</div>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-xl text-muted-foreground">{t.propertiesManaged}</div>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">2</div>
                <div className="text-xl text-muted-foreground">{t.countriesActive}</div>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">8+</div>
                <div className="text-xl text-muted-foreground">{t.yearsExperience}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {t.ourTeam}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.teamDescription}
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity px-8">
                {t.contactUs}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;