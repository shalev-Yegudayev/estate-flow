export type PropertyStatus = 'Available' | 'Occupied' | 'Maintenance';

export interface Property {
  id: number;
  image: string;
  status: PropertyStatus;
  address: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: string;
}
