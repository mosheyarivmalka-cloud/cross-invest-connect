import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PropertyCard } from '@/components/PropertyCard';
import { PropertyFilters } from '@/components/PropertyFilters';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-israel.jpg';
import propertyUS1 from '@/assets/property-us-1.jpg';
import propertyIL1 from '@/assets/property-il-1.jpg';
import propertyUS2 from '@/assets/property-us-2.jpg';
import { Globe, CheckCircle, TrendingUp, Shield, Users, Building } from 'lucide-react';

// Mock property data
const mockProperties = [
  {
    id: '1',
    title: 'Luxury Apartment in Manhattan',
    location: 'New York, NY',
    country: 'US' as const,
    price: 850000,
    currency: 'USD' as const,
    roi: 7.2,
    bedrooms: 2,
    bathrooms: 2,
    parking: true,
    imageUrl: propertyUS1,
    type: 'Apartment',
    status: 'available' as const,
  },
  {
    id: '2',
    title: 'Modern Apartment in Jerusalem',
    location: 'Jerusalem, Israel',
    country: 'IL' as const,
    price: 2800000,
    currency: 'ILS' as const,
    roi: 6.8,
    bedrooms: 3,
    bathrooms: 2,
    parking: true,
    imageUrl: propertyIL1,
    type: 'Apartment',
    status: 'available' as const,
  },
  {
    id: '3',
    title: 'Miami Beach House',
    location: 'Miami, FL',
    country: 'US' as const,
    price: 1200000,
    currency: 'USD' as const,
    roi: 8.5,
    bedrooms: 4,
    bathrooms: 3,
    parking: true,
    imageUrl: propertyUS2,
    type: 'House',
    status: 'available' as const,
  }
];

const Index = () => {
  const [language, setLanguage] = useState<'he' | 'en'>('en');
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  
  const isRTL = language === 'he';

  const translations = {
    he: {
      featuredProperties: 'נכסים מומלצים',
      viewAllProperties: 'צפו בכל הנכסים',
      whyChooseUs: 'למה לבחור בנו?',
      experience: 'ניסיון של 8+ שנים',
      experienceDesc: 'מומחיות מוכחת בהשקעות נדל״ן בישראל ובארה״ב',
      transparency: 'שקיפות מלאה',
      transparencyDesc: 'כל הפרטים הפיננסיים והמשפטיים חשופים מראש',
      support: 'ליווי מקצועי',
      supportDesc: 'צוות מומחים זמין 24/7 לכל שאלה ובעיה',
      management: 'ניהול מקצועי',
      managementDesc: 'ניהול מלא של הנכס מהרכישה ועד השכרה',
      investors: 'משקיעים מרוצים',
      properties: 'נכסים מנוהלים',
      countries: 'מדינות פעילות',
      contactUs: 'דברו עמנו',
      contactDescription: 'מעוניינים להשקיע או למכור? השאירו פרטים ונחזור אליכם בהקדם',
      investWithUs: 'השקיעו עמנו',
      sellWithUs: 'מכרו עמנו'
    },
    en: {
      featuredProperties: 'Featured Properties',
      viewAllProperties: 'View All Properties',
      whyChooseUs: 'Why Choose Us?',
      experience: '8+ Years Experience',
      experienceDesc: 'Proven expertise in real estate investments in Israel and the US',
      transparency: 'Full Transparency',
      transparencyDesc: 'All financial and legal details disclosed upfront',
      support: 'Professional Support',
      supportDesc: '24/7 expert team available for any questions or issues',
      management: 'Professional Management',
      managementDesc: 'Complete property management from acquisition to rental',
      investors: 'Happy Investors',
      properties: 'Managed Properties',
      countries: 'Active Countries',
      contactUs: 'Contact Us',
      contactDescription: 'Interested in investing or selling? Leave your details and we\'ll get back to you soon',
      investWithUs: 'Invest With Us',
      sellWithUs: 'Sell With Us'
    }
  };

  const t = translations[language];

  const handleFiltersChange = (filters: any) => {
    let filtered = mockProperties;
    
    if (filters.country && filters.country !== 'ALL') {
      filtered = filtered.filter(property => property.country === filters.country);
    }
    
    setFilteredProperties(filtered);
  };

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header language={language} onLanguageChange={setLanguage} />
      
      <main>
        {/* Hero Section */}
        <Hero language={language} />

        {/* Featured Properties Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {t.featuredProperties}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto mb-8"></div>
            </div>

            {/* Property Filters */}
            <div className="mb-12">
              <PropertyFilters language={language} onFiltersChange={handleFiltersChange} />
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  language={language}
                />
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity px-8">
                {t.viewAllProperties}
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {t.whyChooseUs}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.experience}</h3>
                  <p className="text-muted-foreground">{t.experienceDesc}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.transparency}</h3>
                  <p className="text-muted-foreground">{t.transparencyDesc}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.support}</h3>
                  <p className="text-muted-foreground">{t.supportDesc}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.management}</h3>
                  <p className="text-muted-foreground">{t.managementDesc}</p>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">2000+</div>
                <div className="text-xl text-muted-foreground">{t.investors}</div>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-xl text-muted-foreground">{t.properties}</div>
              </div>
              <div className="p-8">
                <div className="text-5xl font-bold text-primary mb-2">2</div>
                <div className="text-xl text-muted-foreground">{t.countries}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                {t.contactUs}
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {t.contactDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Investment Form */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 mb-4">
                  <Badge className="bg-accent-gold text-accent-gold-foreground">
                    {t.investWithUs}
                  </Badge>
                </div>
                <ContactForm language={language} type="investor" />
              </div>

              {/* Seller Form */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 mb-4">
                  <Badge className="bg-white text-primary">
                    {t.sellWithUs}
                  </Badge>
                </div>
                <ContactForm language={language} type="seller" />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Globe className="w-8 h-8 text-accent-gold" />
              <span className="text-2xl font-bold">
                {language === 'he' ? 'דירה בישראל' : 'Home in Israel'}
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              {language === 'he' 
                ? 'מחברים בין משקיעים להזדמנויות — בישראל ובארה״ב'
                : 'Connecting investors with opportunities — in Israel and the U.S.'
              }
            </p>
            <div className="text-sm text-primary-foreground/60">
              {language === 'he'
                ? 'אין באמור כדי להוות ייעוץ השקעות/שיווק השקעות. כל השקעה כרוכה בסיכון. ביצועים היסטוריים אינם מבטיחים תשואה עתידית.'
                : 'This does not constitute investment advice/investment marketing. All investments involve risk. Past performance does not guarantee future returns.'
              }
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
