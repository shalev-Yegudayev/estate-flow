import { Bed, Bath, Maximize } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

type TagVariant = 'available' | 'occupied' | 'maintenance' | 'forSale';

interface PropertyCardProps {
  image: string;
  tags: string[];
  address: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: string;
}

const tagVariantMap: Record<string, TagVariant> = {
  'Available': 'available',
  'Occupied': 'occupied',
  'Maintenance': 'maintenance',
  'For Sale': 'forSale',
  'ForSale': 'forSale',
};

export function PropertyCard({
  image,
  tags,
  address,
  type,
  bedrooms,
  bathrooms,
  sqft,
  price,
}: PropertyCardProps) {
  return (
    <div className="group cursor-pointer bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      {/* Property Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={address}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="eager"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant={tagVariantMap[tag] || 'default'}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Address */}
        <h3 className="font-medium text-gray-900 text-lg">
          {address}
        </h3>

        {/* Property Type */}
        <p className="text-sm text-gray-500">
          {type}
        </p>

        {/* Key Details */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Bed className="size-4" />
            <span>{bedrooms} bed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="size-4" />
            <span>{bathrooms} bath</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="size-4" />
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Price */}
        <div className="pt-2 border-t border-gray-100">
          <p className="text-2xl font-bold text-gray-900">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}
