import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, User, Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactFormProps {
  language: 'he' | 'en';
  type?: 'investor' | 'seller' | 'general';
}

export const ContactForm = ({ language, type = 'general' }: ContactFormProps) => {
  const isRTL = language === 'he';
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const translations = {
    he: {
      investor: {
        title: 'בואו נתחיל את המסע שלכם',
        subtitle: 'נציגינו יצרו עמכם קשר תוך 24 שעות'
      },
      seller: {
        title: 'מכרו את הנכס שלכם',
        subtitle: 'נעריך את הנכס ונמצא לכם קונים'
      },
      general: {
        title: 'צרו עמנו קשר',
        subtitle: 'נשמח לענות על כל השאלות שלכם'
      },
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      email: 'כתובת אימייל',
      phone: 'טלפון',
      country: 'מדינה',
      selectCountry: 'בחרו מדינה',
      israel: 'ישראל',
      usa: 'ארה״ב',
      other: 'אחר',
      investmentType: 'סוג השקעה מבוקש',
      selectInvestment: 'בחרו סוג השקעה',
      residential: 'מגורים',
      commercial: 'מסחרי',
      land: 'קרקע',
      mixed: 'מעורב',
      budget: 'תקציב משוער',
      budgetPlaceholder: 'למשל: 500,000',
      propertyLocation: 'מיקום הנכס',
      propertyType: 'סוג הנכס',
      propertyValue: 'שווי משוער',
      message: 'הודעה נוספת',
      messagePlaceholder: 'ספרו לנו על הצרכים שלכם...',
      submit: 'שלחו הודעה',
      submitting: 'שולח...',
      success: 'הודעתכם נשלחה בהצלחה!',
      successDescription: 'נציגינו יצרו עמכם קשר בקרוב.',
      error: 'שגיאה בשליחת ההודעה',
      errorDescription: 'אנא נסו שוב או צרו קשר טלפונית.',
      required: 'שדה חובה'
    },
    en: {
      investor: {
        title: 'Let\'s Start Your Journey',
        subtitle: 'Our representatives will contact you within 24 hours'
      },
      seller: {
        title: 'Sell Your Property',
        subtitle: 'We\'ll evaluate your property and find buyers'
      },
      general: {
        title: 'Contact Us',
        subtitle: 'We\'d love to answer all your questions'
      },
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      country: 'Country',
      selectCountry: 'Select Country',
      israel: 'Israel',
      usa: 'United States',
      other: 'Other',
      investmentType: 'Investment Type',
      selectInvestment: 'Select Investment Type',
      residential: 'Residential',
      commercial: 'Commercial',
      land: 'Land',
      mixed: 'Mixed',
      budget: 'Budget Range',
      budgetPlaceholder: 'e.g., $500,000',
      propertyLocation: 'Property Location',
      propertyType: 'Property Type',
      propertyValue: 'Estimated Value',
      message: 'Additional Message',
      messagePlaceholder: 'Tell us about your needs...',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Message sent successfully!',
      successDescription: 'Our representatives will contact you soon.',
      error: 'Error sending message',
      errorDescription: 'Please try again or contact us by phone.',
      required: 'Required field'
    }
  };

  const t = translations[language];
  const formType = t[type];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    investmentType: '',
    budget: '',
    propertyLocation: '',
    propertyType: '',
    propertyValue: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: t.success,
        description: t.successDescription,
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        investmentType: '',
        budget: '',
        propertyLocation: '',
        propertyType: '',
        propertyValue: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: t.error,
        description: t.errorDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className={`w-full max-w-2xl mx-auto shadow-premium ${isRTL ? 'rtl' : 'ltr'}`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary mb-2">
          {formType.title}
        </CardTitle>
        <p className="text-muted-foreground">{formType.subtitle}</p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{t.firstName} *</span>
              </Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="transition-all focus:shadow-card"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">{t.lastName} *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="transition-all focus:shadow-card"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{t.email} *</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="transition-all focus:shadow-card"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{t.phone} *</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="transition-all focus:shadow-card"
              />
            </div>
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label htmlFor="country">{t.country} *</Label>
            <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
              <SelectTrigger>
                <SelectValue placeholder={t.selectCountry} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="IL">{t.israel}</SelectItem>
                <SelectItem value="US">{t.usa}</SelectItem>
                <SelectItem value="OTHER">{t.other}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Investment-specific fields */}
          {type === 'investor' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="investmentType">{t.investmentType}</Label>
                <Select value={formData.investmentType} onValueChange={(value) => handleInputChange('investmentType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t.selectInvestment} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">{t.residential}</SelectItem>
                    <SelectItem value="commercial">{t.commercial}</SelectItem>
                    <SelectItem value="land">{t.land}</SelectItem>
                    <SelectItem value="mixed">{t.mixed}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">{t.budget}</Label>
                <Input
                  id="budget"
                  placeholder={t.budgetPlaceholder}
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="transition-all focus:shadow-card"
                />
              </div>
            </>
          )}

          {/* Seller-specific fields */}
          {type === 'seller' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="propertyLocation">{t.propertyLocation} *</Label>
                <Input
                  id="propertyLocation"
                  required
                  value={formData.propertyLocation}
                  onChange={(e) => handleInputChange('propertyLocation', e.target.value)}
                  className="transition-all focus:shadow-card"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="propertyType">{t.propertyType}</Label>
                  <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.selectInvestment} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">{t.residential}</SelectItem>
                      <SelectItem value="commercial">{t.commercial}</SelectItem>
                      <SelectItem value="land">{t.land}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyValue">{t.propertyValue}</Label>
                  <Input
                    id="propertyValue"
                    placeholder={t.budgetPlaceholder}
                    value={formData.propertyValue}
                    onChange={(e) => handleInputChange('propertyValue', e.target.value)}
                    className="transition-all focus:shadow-card"
                  />
                </div>
              </div>
            </>
          )}

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>{t.message}</span>
            </Label>
            <Textarea
              id="message"
              placeholder={t.messagePlaceholder}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={4}
              className="transition-all focus:shadow-card resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-hero hover:opacity-90 transition-opacity text-lg py-6"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {t.submitting}
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {t.submit}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};