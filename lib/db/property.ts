import { prisma } from "@/lib/clients/prisma";
import type { PropertyCardData, PropertyTagDisplay } from "@/types/property";
import type { PropertyType, PropertyTag, Prisma } from "@/lib/generated/prisma";

const PROPERTY_LIST_SELECT = {
  id: true,
  type: true,
  tags: true,
  address: true,
  city: true,
  bedrooms: true,
  bathrooms: true,
  area: true,
  monthlyRent: true,
  images: true,
} as const;

type PropertyListRow = Prisma.PropertyGetPayload<{
  select: typeof PROPERTY_LIST_SELECT;
}>;

const PROPERTY_TYPE_TO_LABEL: Record<PropertyType, string> = {
  APARTMENT: "Apartment",
  HOUSE: "House",
  COMMERCIAL: "Commercial",
  LAND: "Land",
  PARKING: "Parking",
  STORAGE: "Storage",
  OTHER: "Other",
};

const PROPERTY_TAG_TO_DISPLAY: Record<PropertyTag, PropertyTagDisplay> = {
  RENTED: "Occupied",
  VACANT: "Available",
  FOR_SALE: "For Sale",
  UNDER_RENOVATION: "Maintenance",
  NEEDS_REPAIR: "Maintenance",
};

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800";

function toNumber(value: unknown): number {
  if (value == null) return 0;
  if (typeof value === "number" && !Number.isNaN(value)) return value;
  if (typeof value === "object" && value !== null && "toNumber" in value)
    return (value as { toNumber: () => number }).toNumber();
  const n = Number(value);
  return Number.isNaN(n) ? 0 : n;
}

function formatPrice(monthlyRent: unknown): string {
  const n = toNumber(monthlyRent);
  if (n <= 0) return "—";
  return `₪${n.toLocaleString()}/mo`;
}

/**
 * Maps a DB property row (list select) to the shape expected by PropertyCard.
 */
export function mapDbPropertyToCard(row: PropertyListRow): PropertyCardData {
  const image = row.images?.length > 0 ? row.images[0] : PLACEHOLDER_IMAGE;
  const tags: PropertyTagDisplay[] = (row.tags ?? []).map(
    (tag) => PROPERTY_TAG_TO_DISPLAY[tag] ?? "Available",
  );
  const address = [row.address, row.city].filter(Boolean).join(", ");
  const areaSqm = toNumber(row.area);
  const sqft = Math.round(areaSqm * 10.7639);

  return {
    id: row.id,
    image,
    tags,
    address,
    type: PROPERTY_TYPE_TO_LABEL[row.type] ?? row.type,
    bedrooms: row.bedrooms ?? 0,
    bathrooms: toNumber(row.bathrooms),
    sqft: sqft > 0 ? sqft : 0,
    price: formatPrice(row.monthlyRent),
  };
}

/**
 * Fetches properties for list/card display.
 * When auth is implemented, pass the current user's id as ownerId.
 */
export async function getProperties(ownerId?: string): Promise<PropertyCardData[]> {
  const rows = await prisma.property.findMany({
    where: ownerId ? { ownerId } : undefined,
    select: PROPERTY_LIST_SELECT,
  });
  return rows.map(mapDbPropertyToCard);
}

/**
 * Fetches a single property by id for detail/edit.
 * Returns the full DB model (or null if not found).
 */
export async function getPropertyById(id: string) {
  return prisma.property.findUnique({
    where: { id },
  });
}

/**
 * Returns the first user's id for use as default owner when auth is not yet implemented.
 * When auth is added, remove this and use the session user id instead.
 */
export async function getDefaultOwnerId(): Promise<string | null> {
  const user = await prisma.user.findFirst({ select: { id: true } });
  return user?.id ?? null;
}
