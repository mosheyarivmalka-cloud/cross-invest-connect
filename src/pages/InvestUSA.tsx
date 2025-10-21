import { useState } from 'react';
import { Header } from '@/components/Header';
import { PropertyCard } from '@/components/PropertyCard';
import { PropertyFilters } from '@/components/PropertyFilters';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import propertyUS1 from '@/assets/property-us-1.jpg';
import propertyUS2 from '@/assets/property-us-2.jpg';
import { Building, DollarSign, TrendingUp, Globe } from 'lucide-react';

// Mock US properties data
const usProperties = [
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

const InvestUSA = () => {
  const [language, setLanguage] = useState<'he' | 'en'>('en');
  const [filteredProperties, setFilteredProperties] = useState(usProperties);
  
  const isRTL = language === 'he';

  const translations = {
    he: {
      title: 'השקעות בארה״ב',
      subtitle: 'השקיעו בנכסי יוקרה בארה״ב',
      description: 'גלו הזדמנויות השקעה בשוק הנדל״ן האמריקאי. ממנהטן ועד מיאמי - נכסים איכותיים בשווקים מובילים.',
      whyUSA: 'למה להשקיע בארה״ב?',
      strongEconomy: 'כלכלה חזקה',
      economyDesc: 'כלכלה יציבה עם צמיחה ארוכת טווח',
      diverseMarkets: 'שווקים מגוונים',
      marketsDesc: 'מגוון רחב של שווקים ואפשרויות השקעה',
      currencyStability: 'יציבות מטבע',
      currencyDesc: 'דולר אמריקאי חזק ויציב',
      viewProperties: 'צפו בנכסים בארה״ב',
      contactUs: 'צור קשר'
    },
    en: {
      title: 'Invest in USA',
      subtitle: 'Invest in Premium US Properties',
      description: 'Discover investment opportunities in the American real estate market. From Manhattan to Miami - quality properties in leading markets.',
      whyUSA: 'Why Invest in USA?',
      strongEconomy: 'Strong Economy',
      economyDesc: 'Stable economy with long-term growth',
      diverseMarkets: 'Diverse Markets',
      marketsDesc: 'Wide range of markets and investment opportunities',
      currencyStability: 'Currency Stability',
      currencyDesc: 'Strong and stable US Dollar',
      viewProperties: 'View US Properties',
      contactUs: 'Contact Us'
    }
  };

  const t = translations[language];

  const handleFiltersChange = (filters: any) => {
    setFilteredProperties(usProperties);
  };

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
              <Button size="lg" className="bg-accent-gold hover:bg-accent-gold/90 text-accent-gold-foreground font-semibold px-8 py-4 text-lg">
                {t.viewProperties}
              </Button>
            </div>
          </div>
        </section>

        {/* Why USA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {t.whyUSA}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.strongEconomy}</h3>
                  <p className="text-muted-foreground">{t.economyDesc}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.diverseMarkets}</h3>
                  <p className="text-muted-foreground">{t.marketsDesc}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.currencyStability}</h3>
                  <p className="text-muted-foreground">{t.currencyDesc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Properties Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {t.viewProperties}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <PropertyFilters language={language} onFiltersChange={handleFiltersChange} />
            </div>

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
                {t.contactUs}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InvestUSA;