'use client';

import { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PropertyCard } from '@/components/property/property-card';
import { EmptyState } from '@/components/empty-state';
import type { PropertyCardData } from '@/types/property';
import type { AppPathname } from '@/i18n/routing';

const FILTER_OPTIONS = [
  { label: 'All Properties', value: 'all' },
  { label: 'Available', value: 'available' },
  { label: 'Occupied', value: 'occupied' },
  { label: 'Maintenance', value: 'maintenance' },
] as const;

type FilterValue = (typeof FILTER_OPTIONS)[number]['value'];

function matchesFilter(property: PropertyCardData, filter: FilterValue): boolean {
  if (filter === 'all') return true;
  const tag = filter === 'available' ? 'Available' : filter === 'occupied' ? 'Occupied' : 'Maintenance';
  return property.tags?.includes(tag) ?? false;
}

interface HomePropertyListProps {
  properties: PropertyCardData[];
  emptyStateTitle: string;
  emptyStateDescription: string;
  emptyStateActionLabel: string;
  emptyStateActionHref: AppPathname;
}

export function HomePropertyList({
  properties,
  emptyStateTitle,
  emptyStateDescription,
  emptyStateActionLabel,
  emptyStateActionHref,
}: HomePropertyListProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterValue>('all');

  const filteredProperties = useMemo(
    () => properties.filter((p) => matchesFilter(p, selectedFilter)),
    [properties, selectedFilter]
  );

  const selectedLabel = FILTER_OPTIONS.find((f) => f.value === selectedFilter)?.label ?? FILTER_OPTIONS[0].label;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 py-4">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 min-w-[160px]">
              {selectedLabel}
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {FILTER_OPTIONS.map((filter) => (
              <DropdownMenuItem
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
              >
                {filter.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              href={`/properties/${property.id}`}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title={emptyStateTitle}
          description={emptyStateDescription}
          actionLabel={emptyStateActionLabel}
          actionHref={emptyStateActionHref}
        />
      )}
    </>
  );
}
