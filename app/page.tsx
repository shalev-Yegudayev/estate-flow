import { Navbar } from '@/components/navbar';
import { PropertyCard } from '@/components/property-card';
import { Footer } from '@/components/footer';
import { FloatingActionButton } from '@/components/floating-action-button';
import { EmptyState } from '@/components/empty-state';
import type { Property } from '@/types/property';

// Mock property data
const properties: Property[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTE1MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Available',
    address: '1234 Maple Street, San Francisco, CA',
    type: 'Single Family Home',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2850,
    price: '$4,200/mo',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkxNzY5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Occupied',
    address: '456 Park Avenue, New York, NY',
    type: 'Luxury Apartment',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1600,
    price: '$3,500/mo',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1664372623516-0b1540d6771e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBjb25kb3xlbnwxfHx8fDE3NjkxNzY5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Available',
    address: '789 Ocean Drive, Miami, FL',
    type: 'Condo',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    price: '$2,900/mo',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1765765234094-bc009a3bba62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzY5MDk2ODExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Occupied',
    address: '321 Elm Street, Austin, TX',
    type: 'Single Family Home',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2100,
    price: '$2,800/mo',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1624343385944-b99336163b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0b3duaG91c2V8ZW58MXx8fHwxNzY5MTIwMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Maintenance',
    address: '567 Pine Road, Seattle, WA',
    type: 'Townhouse',
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1950,
    price: '$3,100/mo',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1768538120529-66bdd717e811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGhvdXNlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzY5MTc2OTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Available',
    address: '890 Coastal Highway, Malibu, CA',
    type: 'Beach House',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3500,
    price: '$7,500/mo',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1742108351840-8164e19f8ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTA4NjcyNHww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Occupied',
    address: '234 Downtown Blvd, Chicago, IL',
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 900,
    price: '$1,800/mo',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1645807380313-71980928cb8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMHByb3BlcnR5fGVufDF8fHx8MTc2OTE1NjI0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Available',
    address: '678 Highland Avenue, Los Angeles, CA',
    type: 'Villa',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 4800,
    price: '$9,200/mo',
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdXBsZXglMjBob3VzZXxlbnwxfHx8fDE3NjkxNzY5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Maintenance',
    address: '901 Riverside Drive, Portland, OR',
    type: 'Duplex',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    price: '$3,400/mo',
  },
];

export default function HomePage() {
  // Toggle this to see empty state
  const showProperties = true;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content - Add padding top for fixed navbar */}
      <main className="pt-[72px] pb-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          {/* Header Section */}
          <div className="py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              My Properties
            </h1>
            <p className="text-gray-600">
              {properties.length} {properties.length === 1 ? 'property' : 'properties'}
            </p>
          </div>

          {/* Property Grid or Empty State */}
          {showProperties && properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </main>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}
