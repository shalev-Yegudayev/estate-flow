/** Display tag values used by PropertyCard (must match TAG_VARIANT_MAP in property-card.tsx) */
export type PropertyTagDisplay =
  | 'Available'
  | 'Occupied'
  | 'Maintenance'
  | 'For Sale';

/** Shape used for property list/card display (from DB via mapDbPropertyToCard) */
export interface PropertyCardData {
  id: string;
  image: string;
  tags: PropertyTagDisplay[];
  address: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  price: string;
}

/** Legacy alias for card data (id was number in mock data; now string from DB) */
export type Property = PropertyCardData;
