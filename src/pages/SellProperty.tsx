import { useState } from 'react';
import { Header } from '@/components/Header';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Home, DollarSign, Users, Clock } from 'lucide-react';

const SellProperty = () => {
  const [language, setLanguage] = useState<'he' | 'en'>('en');
  
  const isRTL = language === 'he';

  const translations = {
    he: {
      title: 'מכרו את הנכס שלכם',
      subtitle: 'שירות מקצועי למכירת נכסים',
      description: 'אנחנו עוזרים לכם למכור את הנכס שלכם במהירות ובמחיר הטוב ביותר. עם ניסיון של שנים בשוק הנדל״ן הישראלי והאמריקאי.',
      whySellWithUs: 'למה למכור איתנו?',
      marketExpertise: 'מומחיות שוק',
      expertiseDesc: 'ידע מעמיק בשוק הנדל״ן בישראל ובארה״ב',
      fastSale: 'מכירה מהירה',
      fastDesc: 'תהליך מכירה יעיל וממוקד תוצאות',
      bestPrice: 'מחיר מיטבי',
      priceDesc: 'הערכת שווי מקצועית להשגת המחיר הטוב ביותר',
      fullService: 'שירות מלא',
      serviceDesc: 'ליווי מלא מההערכה ועד החתימה',
      sellForm: 'טופס למכירת נכס',
      propertyType: 'סוג נכס',
      apartment: 'דירה',
      house: 'בית',
      commercial: 'מסחרי',
      location: 'מיקום',
      selectLocation: 'בחרו מיקום',
      israel: 'ישראל',
      usa: 'ארה״ב',
      propertyValue: 'שווי משוער',
      description: 'תיאור הנכס',
      contact: 'פרטי קשר',
      fullName: 'שם מלא',
      email: 'אימייל',
      phone: 'טלפון',
      submitForm: 'שלחו פרטים',
      additionalInfo: 'מידע נוסף'
    },
    en: {
      title: 'Sell Your Property',
      subtitle: 'Professional Property Sales Service',
      description: 'We help you sell your property quickly and at the best price. With years of experience in the Israeli and American real estate markets.',
      whySellWithUs: 'Why Sell With Us?',
      marketExpertise: 'Market Expertise',
      expertiseDesc: 'Deep knowledge of real estate markets in Israel and the US',
      fastSale: 'Fast Sale',
      fastDesc: 'Efficient sales process focused on results',
      bestPrice: 'Best Price',
      priceDesc: 'Professional valuation to achieve the best price',
      fullService: 'Full Service',
      serviceDesc: 'Complete support from valuation to signing',
      sellForm: 'Property Sale Form',
      propertyType: 'Property Type',
      apartment: 'Apartment',
      house: 'House',
      commercial: 'Commercial',
      location: 'Location',
      selectLocation: 'Select Location',
      israel: 'Israel',
      usa: 'USA',
      propertyValue: 'Estimated Value',
      description: 'Property Description',
      contact: 'Contact Information',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      submitForm: 'Submit Details',
      additionalInfo: 'Additional Information'
    }
  };

  const t = translations[language];

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

        {/* Why Sell With Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {t.whySellWithUs}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.marketExpertise}</h3>
                  <p className="text-muted-foreground">{t.expertiseDesc}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.fastSale}</h3>
                  <p className="text-muted-foreground">{t.fastDesc}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.bestPrice}</h3>
                  <p className="text-muted-foreground">{t.priceDesc}</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-elevated transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t.fullService}</h3>
                  <p className="text-muted-foreground">{t.serviceDesc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sell Form Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  {t.sellForm}
                </h2>
                <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{t.contact}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">{t.propertyType}</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t.propertyType} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">{t.apartment}</SelectItem>
                          <SelectItem value="house">{t.house}</SelectItem>
                          <SelectItem value="commercial">{t.commercial}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">{t.location}</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t.selectLocation} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="israel">{t.israel}</SelectItem>
                          <SelectItem value="usa">{t.usa}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">{t.fullName}</Label>
                      <Input id="fullName" placeholder={t.fullName} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="propertyValue">{t.propertyValue}</Label>
                      <Input id="propertyValue" placeholder={t.propertyValue} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.email}</Label>
                      <Input id="email" type="email" placeholder={t.email} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.phone}</Label>
                      <Input id="phone" placeholder={t.phone} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">{t.description}</Label>
                    <Textarea 
                      id="description" 
                      placeholder={t.additionalInfo}
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity px-8">
                      {t.submitForm}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SellProperty;