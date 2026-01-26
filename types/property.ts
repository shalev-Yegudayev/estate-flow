export type PropertyTag = 'Available' | 'Occupied' | 'Maintenance' | 'For Sale';

export interface Property {
  id: number;
  image: string;
  tags: PropertyTag[];
  address: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: string;
}
