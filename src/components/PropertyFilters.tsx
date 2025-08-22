import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, X } from 'lucide-react';

interface PropertyFiltersProps {
  language: 'he' | 'en';
  onFiltersChange: (filters: FilterState) => void;
}

interface FilterState {
  country?: 'IL' | 'US' | 'ALL';
  priceMin?: number;
  priceMax?: number;
  roiMin?: number;
  propertyType?: string;
  bedrooms?: string;
}

export const PropertyFilters = ({ language, onFiltersChange }: PropertyFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    country: 'ALL',
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const isRTL = language === 'he';

  const translations = {
    he: {
      filters: 'סינון נכסים',
      country: 'מדינה',
      allCountries: 'כל המדינות',
      israel: 'ישראל',
      usa: 'ארה״ב',
      priceRange: 'טווח מחירים',
      minPrice: 'מחיר מינימלי',
      maxPrice: 'מחיר מקסימלי',
      roi: 'תשואה מינימלית (%)',
      propertyType: 'סוג נכס',
      allTypes: 'כל הסוגים',
      apartment: 'דירה',
      house: 'בית פרטי',
      commercial: 'מסחרי',
      land: 'קרקע',
      bedrooms: 'מספר חדרים',
      allBedrooms: 'כל החדרים',
      studio: 'סטודיו',
      applyFilters: 'החל סינון',
      clearFilters: 'נקה סינון',
      showFilters: 'הצג סינון',
      hideFilters: 'הסתר סינון'
    },
    en: {
      filters: 'Property Filters',
      country: 'Country',
      allCountries: 'All Countries',
      israel: 'Israel',
      usa: 'United States',
      priceRange: 'Price Range',
      minPrice: 'Min Price',
      maxPrice: 'Max Price',
      roi: 'Min ROI (%)',
      propertyType: 'Property Type',
      allTypes: 'All Types',
      apartment: 'Apartment',
      house: 'House',
      commercial: 'Commercial',
      land: 'Land',
      bedrooms: 'Bedrooms',
      allBedrooms: 'All Bedrooms',
      studio: 'Studio',
      applyFilters: 'Apply Filters',
      clearFilters: 'Clear Filters',
      showFilters: 'Show Filters',
      hideFilters: 'Hide Filters'
    }
  };

  const t = translations[language];

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = { country: 'ALL' as const };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className={`w-full ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center space-x-2"
        >
          <Filter className="w-4 h-4" />
          <span>{isExpanded ? t.hideFilters : t.showFilters}</span>
        </Button>
      </div>

      {/* Filters Card */}
      <Card className={`${isExpanded ? 'block' : 'hidden'} md:block shadow-card`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>{t.filters}</span>
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-1" />
              {t.clearFilters}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Country Filter */}
            <div className="space-y-2">
              <Label htmlFor="country">{t.country}</Label>
              <Select
                value={filters.country}
                onValueChange={(value) => handleFilterChange('country', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t.allCountries} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">{t.allCountries}</SelectItem>
                  <SelectItem value="IL">{t.israel}</SelectItem>
                  <SelectItem value="US">{t.usa}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <Label htmlFor="propertyType">{t.propertyType}</Label>
              <Select
                value={filters.propertyType}
                onValueChange={(value) => handleFilterChange('propertyType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t.allTypes} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">{t.allTypes}</SelectItem>
                  <SelectItem value="apartment">{t.apartment}</SelectItem>
                  <SelectItem value="house">{t.house}</SelectItem>
                  <SelectItem value="commercial">{t.commercial}</SelectItem>
                  <SelectItem value="land">{t.land}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <Label htmlFor="bedrooms">{t.bedrooms}</Label>
              <Select
                value={filters.bedrooms}
                onValueChange={(value) => handleFilterChange('bedrooms', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t.allBedrooms} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">{t.allBedrooms}</SelectItem>
                  <SelectItem value="0">{t.studio}</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* ROI Filter */}
            <div className="space-y-2">
              <Label htmlFor="roi">{t.roi}</Label>
              <Input
                type="number"
                placeholder="5.0"
                value={filters.roiMin || ''}
                onChange={(e) => handleFilterChange('roiMin', parseFloat(e.target.value) || undefined)}
              />
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-4">
            <Label className="mb-3 block">{t.priceRange}</Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  type="number"
                  placeholder={t.minPrice}
                  value={filters.priceMin || ''}
                  onChange={(e) => handleFilterChange('priceMin', parseFloat(e.target.value) || undefined)}
                />
              </div>
              <div>
                <Input
                  type="number"
                  placeholder={t.maxPrice}
                  value={filters.priceMax || ''}
                  onChange={(e) => handleFilterChange('priceMax', parseFloat(e.target.value) || undefined)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};