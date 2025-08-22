import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Car, TrendingUp } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  country: 'IL' | 'US';
  price: number;
  currency: 'ILS' | 'USD';
  roi: number;
  bedrooms?: number;
  bathrooms?: number;
  parking?: boolean;
  imageUrl: string;
  type: string;
  status: 'available' | 'sold' | 'pending';
}

interface PropertyCardProps {
  property: Property;
  language: 'he' | 'en';
}

export const PropertyCard = ({ property, language }: PropertyCardProps) => {
  const isRTL = language === 'he';

  const translations = {
    he: {
      bedrooms: 'חדרים',
      bathrooms: 'שירותים',
      parking: 'חניה',
      roi: 'תשואה צפויה',
      available: 'זמין',
      sold: 'נמכר',
      pending: 'בהליך'
    },
    en: {
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      parking: 'Parking',
      roi: 'Expected ROI',
      available: 'Available',
      sold: 'Sold',
      pending: 'Pending'
    }
  };

  const t = translations[language];

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat(language === 'he' ? 'he-IL' : 'en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'available': return 'default';
      case 'sold': return 'secondary';
      case 'pending': return 'outline';
      default: return 'default';
    }
  };

  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-gradient-card ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <div 
          className="aspect-[4/3] bg-cover bg-center bg-gray-200 group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${property.imageUrl})` }}
        />
        <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'}`}>
          <Badge className="bg-primary text-primary-foreground">
            {property.country}
          </Badge>
        </div>
        <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
          <Badge variant={getStatusVariant(property.status)}>
            {t[property.status as keyof typeof t]}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(property.price, property.currency)}
            </div>
            <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-2 py-1 rounded">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">{property.roi}%</span>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-1">
          {property.title}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          {property.type}
        </div>

        {/* Property Features */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            {property.bedrooms && (
              <div className="flex items-center space-x-1">
                <Bed className="w-4 h-4" />
                <span>{property.bedrooms}</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center space-x-1">
                <Bath className="w-4 h-4" />
                <span>{property.bathrooms}</span>
              </div>
            )}
            {property.parking && (
              <div className="flex items-center space-x-1">
                <Car className="w-4 h-4" />
                <span>✓</span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">{t.roi}</div>
            <div className="font-semibold text-green-600">{property.roi}%</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};