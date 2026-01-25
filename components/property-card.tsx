import { Bed, Bath, Maximize } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { PropertyStatus } from '@/types/property';

interface PropertyCardProps {
  image: string;
  status: PropertyStatus;
  address: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: string;
}

const statusColors: Record<PropertyStatus, string> = {
  Available: 'bg-green-100 text-green-700 hover:bg-green-100',
  Occupied: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
  Maintenance: 'bg-orange-100 text-orange-700 hover:bg-orange-100',
};

export function PropertyCard({
  image,
  status,
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
        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover"
        />
        {/* Status Badge Overlay */}
        <div className="absolute top-3 right-3">
          <Badge className={statusColors[status]}>
            {status}
          </Badge>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-3">
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
