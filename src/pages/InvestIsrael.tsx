import { useState } from 'react';
import { Header } from '@/components/Header';
import { PropertyCard } from '@/components/PropertyCard';
import { PropertyFilters } from '@/components/PropertyFilters';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import propertyIL1 from '@/assets/property-il-1.jpg';
import { Building, MapPin, TrendingUp, Shield } from 'lucide-react';

// Mock Israeli properties data
const israelProperties = [
  {
    id: '1',
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
    id: '2',
    title: 'Luxury Villa in Tel Aviv',
    location: 'Tel Aviv, Israel',
    country: 'IL' as const,
    price: 4500000,
    currency: 'ILS' as const,
    roi: 7.2,
    bedrooms: 4,
    bathrooms: 3,
    parking: true,
    imageUrl: propertyIL1,
    type: 'House',
    status: 'available' as const,
  }
];

const InvestIsrael = () => {
  const [language, setLanguage] = useState<'he' | 'en'>('en');
  const [filteredProperties, setFilteredProperties] = useState(israelProperties);
  
  const isRTL = language === 'he';

  const translations = {
    he: {
      title: 'השקעות בישראל',
      subtitle: 'השקיעו בנכסי יוקרה בישראל',
      description: 'גלו הזדמנויות השקעה יוחדות בשוק הנדל״ן הישראלי. מירושלים ועד תל אביב - מגוון נכסים איכותיים עם תשואות אטרקטיביות.',
      whyIsrael: 'למה להשקיע בישראל?',
      stableMarket: 'שוק יציב',
      stableDesc: 'שוק נדל״ן יציב עם צמיחה מתמדת',
      highDemand: 'ביקוש גבוה',
      demandDesc: 'ביקוש רב לנכסי יוקרה באזורים מרכזיים',
      taxBenefits: 'יתרונות מס',
      taxDesc: 'הטבות מס עבור תושבי חו״ל',
      viewProperties: 'צפו בנכסים בישראל',
      contactUs: 'צור קשר'
    },
    en: {
      title: 'Invest in Israel',
      subtitle: 'Invest in Premium Israeli Properties',
      description: 'Discover unique investment opportunities in the Israeli real estate market. From Jerusalem to Tel Aviv - quality properties with attractive returns.',
      whyIsrael: 'Why Invest in Israel?',
      stableMarket: 'Stable Market',
      stableDesc: 'Stable real estate market with consistent growth',
      highDemand: 'High Demand',
      demandDesc: 'Strong demand for premium properties in central areas',
      taxBenefits: 'Tax Benefits',
      taxDesc: 'Tax advantages for foreign residents',
      viewProperties: 'View Israel Properties',
      contactUs: 'Contact Us'
    }
  };

  const t = translations[language];

  const handleFiltersChange = (filters: any) => {
    setFilteredProperties(israelProperties);
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

        {/* Why Israel Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {t.whyIsrael}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.stableMarket}</h3>
                  <p className="text-muted-foreground">{t.stableDesc}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.highDemand}</h3>
                  <p className="text-muted-foreground">{t.demandDesc}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.taxBenefits}</h3>
                  <p className="text-muted-foreground">{t.taxDesc}</p>
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

export default InvestIsrael;