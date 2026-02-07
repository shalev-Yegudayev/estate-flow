import { Bed, Bath, Maximize } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/components/ui/utils';

type TagVariant = 'available' | 'occupied' | 'maintenance' | 'forSale';

interface PropertyCardProps {
  id: string | number;
  image: string;
  imageAlt?: string;
  tags?: string[];
  address: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: string;
  href?: string;
  className?: string;
}

const TAG_VARIANT_MAP: Record<string, TagVariant> = {
  'Available': 'available',
  'Occupied': 'occupied',
  'Maintenance': 'maintenance',
  'For Sale': 'forSale',
  'ForSale': 'forSale',
} as const;

export function PropertyCard({
  id,
  image,
  imageAlt,
  tags = [],
  address,
  type,
  bedrooms,
  bathrooms,
  sqft,
  price,
  href,
  className,
}: PropertyCardProps) {
  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || address}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-5 space-y-3">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant={TAG_VARIANT_MAP[tag] || 'default'}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <h3 className="font-medium text-foreground text-lg">
          {address}
        </h3>

        <p className="text-sm text-muted-foreground">
          {type}
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
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

        <div className="pt-2 border-t border-border">
          <p className="text-2xl font-bold text-foreground">
            {price}
          </p>
        </div>
      </div>
    </>
  );

  const cardClassName = cn(
    'group bg-card rounded-xl border border-border overflow-hidden',
    'hover:shadow-xl hover:scale-[1.02] transition-all duration-300',
    href && 'cursor-pointer',
    className
  );

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClassName}>
      {content}
    </div>
  );
}
