'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { PropertyType, PropertyTag } from '@/app/generated/prisma';

export type CreatePropertyInput = {
  ownerId: string;
  type: PropertyType;
  tags?: PropertyTag[];
  address: string;
  city: string;
  country?: string;
  bedrooms?: number | null;
  bathrooms?: number | null;
  area?: number | null;
  floor?: number | null;
  yearBuilt?: number | null;
  purchasePrice: number;
  monthlyRent?: number | null;
  purchaseDate?: string | null;
  description?: string | null;
  features?: string[];
  images?: string[];
};

export type UpdatePropertyInput = Partial<{
  type: PropertyType;
  tags: PropertyTag[];
  address: string;
  city: string;
  country: string;
  bedrooms: number | null;
  bathrooms: number | null;
  area: number | null;
  floor: number | null;
  yearBuilt: number | null;
  purchasePrice: number;
  monthlyRent: number | null;
  purchaseDate: string | null;
  description: string | null;
  features: string[];
  images: string[];
}>;

type ActionResult = { success: true; id: string } | { success: false; error: string };

const VALID_PROPERTY_TYPES: PropertyType[] = Object.values(PropertyType);
const VALID_PROPERTY_TAGS: PropertyTag[] = Object.values(PropertyTag);

function validateCreateInput(input: CreatePropertyInput): string | null {
  if (!input.ownerId?.trim()) return 'Owner is required';
  if (!input.address?.trim()) return 'Address is required';
  if (!input.city?.trim()) return 'City is required';
  if (!VALID_PROPERTY_TYPES.includes(input.type)) return 'Invalid property type';
  if (typeof input.purchasePrice !== 'number' || input.purchasePrice < 0)
    return 'Valid purchase price is required';
  if (
    input.tags?.length &&
    input.tags.some((tag) => !VALID_PROPERTY_TAGS.includes(tag))
  )
    return 'Invalid tag';
  return null;
}

export async function createProperty(input: CreatePropertyInput): Promise<ActionResult> {
  const err = validateCreateInput(input);
  if (err) return { success: false, error: err };

  try {
    const property = await prisma.property.create({
      data: {
        ownerId: input.ownerId.trim(),
        type: input.type,
        tags: input.tags ?? [],
        address: input.address.trim(),
        city: input.city.trim(),
        country: input.country?.trim() ?? 'IL',
        bedrooms: input.bedrooms ?? undefined,
        bathrooms: input.bathrooms ?? undefined,
        area: input.area ?? undefined,
        floor: input.floor ?? undefined,
        yearBuilt: input.yearBuilt ?? undefined,
        purchasePrice: input.purchasePrice,
        monthlyRent: input.monthlyRent ?? undefined,
        purchaseDate: input.purchaseDate ? new Date(input.purchaseDate) : undefined,
        description: input.description?.trim() || undefined,
        features: input.features ?? [],
        images: input.images ?? [],
      },
    });
    revalidatePath('/');
    return { success: true, id: property.id };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Failed to create property';
    return { success: false, error: message };
  }
}

export async function updateProperty(
  id: string,
  data: UpdatePropertyInput
): Promise<ActionResult> {
  if (!id?.trim()) return { success: false, error: 'Property id is required' };

  if (data.type !== undefined && !VALID_PROPERTY_TYPES.includes(data.type))
    return { success: false, error: 'Invalid property type' };
  if (data.tags !== undefined && data.tags.some((t) => !VALID_PROPERTY_TAGS.includes(t)))
    return { success: false, error: 'Invalid tag' };

  try {
    await prisma.property.update({
      where: { id },
      data: {
        ...(data.type !== undefined && { type: data.type }),
        ...(data.tags !== undefined && { tags: data.tags }),
        ...(data.address !== undefined && { address: data.address }),
        ...(data.city !== undefined && { city: data.city }),
        ...(data.country !== undefined && { country: data.country }),
        ...(data.bedrooms !== undefined && { bedrooms: data.bedrooms }),
        ...(data.bathrooms !== undefined && { bathrooms: data.bathrooms }),
        ...(data.area !== undefined && { area: data.area }),
        ...(data.floor !== undefined && { floor: data.floor }),
        ...(data.yearBuilt !== undefined && { yearBuilt: data.yearBuilt }),
        ...(data.purchasePrice !== undefined && { purchasePrice: data.purchasePrice }),
        ...(data.monthlyRent !== undefined && { monthlyRent: data.monthlyRent }),
        ...(data.purchaseDate !== undefined && {
          purchaseDate: data.purchaseDate ? new Date(data.purchaseDate) : null,
        }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.features !== undefined && { features: data.features }),
        ...(data.images !== undefined && { images: data.images }),
      },
    });
    revalidatePath('/');
    return { success: true, id };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Failed to update property';
    return { success: false, error: message };
  }
}

export async function deleteProperty(id: string): Promise<ActionResult> {
  if (!id?.trim()) return { success: false, error: 'Property id is required' };

  try {
    await prisma.property.delete({ where: { id } });
    revalidatePath('/');
    return { success: true, id };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Failed to delete property';
    return { success: false, error: message };
  }
}
