'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import {
  createPropertyInputSchema,
  type CreatePropertyInput,
  type UpdatePropertyInput,
  PROPERTY_TYPES,
  PROPERTY_TAGS,
} from '@/lib/property-schema';

type ActionResult = { success: true; id: string } | { success: false; error: string };

export type { CreatePropertyInput, UpdatePropertyInput };

export async function createProperty(input: CreatePropertyInput): Promise<ActionResult> {
  const parsed = createPropertyInputSchema.safeParse(input);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const message =
      (first.purchasePrice?.[0]) ??
      (first.address?.[0]) ??
      (first.city?.[0]) ??
      (first.ownerId?.[0]) ??
      parsed.error.message;
    return { success: false, error: String(message) };
  }
  const data = parsed.data;

  try {
    const property = await prisma.property.create({
      data: {
        ownerId: data.ownerId,
        type: data.type,
        tags: data.tags ?? [],
        address: data.address,
        city: data.city,
        country: data.country?.trim() ?? 'IL',
        bedrooms: data.bedrooms ?? undefined,
        bathrooms: data.bathrooms ?? undefined,
        area: data.area ?? undefined,
        floor: data.floor ?? undefined,
        yearBuilt: data.yearBuilt ?? undefined,
        purchasePrice: data.purchasePrice,
        monthlyRent: data.monthlyRent ?? undefined,
        purchaseDate: data.purchaseDate ? new Date(data.purchaseDate) : undefined,
        description: data.description?.trim() || undefined,
        features: data.features ?? [],
        images: data.images ?? [],
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

  if (data.type !== undefined && !PROPERTY_TYPES.includes(data.type))
    return { success: false, error: 'Invalid property type' };
  if (data.tags !== undefined && data.tags.some((t) => !PROPERTY_TAGS.includes(t)))
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
