import { z } from "zod";
import {
  PropertyType as PropertyTypeEnum,
  PropertyTag as PropertyTagEnum,
} from "@/app/generated/prisma";

// Re-export Prisma enums so the app uses a single type source
export type { PropertyType, PropertyTag } from "@/app/generated/prisma";

// ── Enums derived from Prisma ─────────────────────────────────
export const PROPERTY_TYPES = Object.values(
  PropertyTypeEnum
) as unknown as readonly [import("@/app/generated/prisma").PropertyType, ...import("@/app/generated/prisma").PropertyType[]];

export const PROPERTY_TAGS = Object.values(
  PropertyTagEnum
) as unknown as readonly [import("@/app/generated/prisma").PropertyTag, ...import("@/app/generated/prisma").PropertyTag[]];

// ── Display helpers ───────────────────────────────────────────
export const PROPERTY_TYPE_LABELS: Record<
  import("@/app/generated/prisma").PropertyType,
  string
> = {
  APARTMENT: "Apartment",
  HOUSE: "House",
  COMMERCIAL: "Commercial",
  LAND: "Land",
  PARKING: "Parking",
  STORAGE: "Storage",
  OTHER: "Other",
};

export const PROPERTY_TAG_LABELS: Record<
  import("@/app/generated/prisma").PropertyTag,
  string
> = {
  RENTED: "Rented",
  VACANT: "Vacant",
  FOR_SALE: "For Sale",
  UNDER_RENOVATION: "Under Renovation",
  NEEDS_REPAIR: "Needs Repair",
};

// ── Form schema (allows empty string for numeric inputs) ────────
export const propertyFormSchema = z.object({
  type: z.enum(PROPERTY_TYPES, {
    message: "Property type is required",
  }),
  tags: z.array(z.enum(PROPERTY_TAGS)).default([]),

  // Location
  address: z.string().trim().min(1, "Address is required").max(500, "Address too long"),
  city: z.string().trim().min(1, "City is required").max(100, "City name too long"),
  country: z.string().default("IL"),

  // Details
  bedrooms: z.coerce.number().int().min(0).optional().or(z.literal("")),
  bathrooms: z.coerce.number().min(0).optional().or(z.literal("")),
  area: z.coerce.number().min(0).optional().or(z.literal("")),
  floor: z.coerce.number().int().optional().or(z.literal("")),
  yearBuilt: z.coerce
    .number()
    .int()
    .min(1800)
    .max(new Date().getFullYear())
    .optional()
    .or(z.literal("")),
  description: z.string().max(5000).optional().or(z.literal("")),
  features: z.array(z.string()).default([]),

  // Financial — allow "" so form defaultValues match; validate in submit
  purchasePrice: z.union([
    z.coerce.number().positive("Must be a positive number"),
    z.literal(""),
  ]),
  purchaseDate: z.date().optional(),
  monthlyRent: z.coerce.number().min(0).optional().or(z.literal("")),

  // Media
  images: z.array(z.string()).default([]),
});

export type PropertyFormValues = z.infer<typeof propertyFormSchema>;

// ── Create property input (API / server) ───────────────────────
export const createPropertyInputSchema = z.object({
  ownerId: z.string().trim().min(1, "Owner is required"),
  type: z.enum(PROPERTY_TYPES),
  tags: z.array(z.enum(PROPERTY_TAGS)).optional().default([]),
  address: z.string().trim().min(1, "Address is required").max(500),
  city: z.string().trim().min(1, "City is required").max(100),
  country: z.string().trim().optional().default("IL"),
  bedrooms: z.number().int().min(0).nullish(),
  bathrooms: z.number().min(0).nullish(),
  area: z.number().min(0).nullish(),
  floor: z.number().int().nullish(),
  yearBuilt: z.number().int().min(1800).max(new Date().getFullYear()).nullish(),
  purchasePrice: z.number().positive("Valid purchase price is required"),
  monthlyRent: z.number().min(0).nullish(),
  purchaseDate: z.string().nullish(),
  description: z.string().trim().max(5000).nullish(),
  features: z.array(z.string()).optional().default([]),
  images: z.array(z.string()).optional().default([]),
});

export type CreatePropertyInput = z.infer<typeof createPropertyInputSchema>;

export type UpdatePropertyInput = Partial<Omit<CreatePropertyInput, "ownerId">>;

// ── Map form values to create input ───────────────────────────
export function formValuesToCreateInput(
  values: PropertyFormValues,
  ownerId: string
): CreatePropertyInput {
  const purchasePrice =
    values.purchasePrice === ""
      ? NaN
      : typeof values.purchasePrice === "number"
        ? values.purchasePrice
        : Number(values.purchasePrice);
  if (Number.isNaN(purchasePrice) || purchasePrice <= 0) {
    throw new Error("Purchase price is required and must be a positive number");
  }
  return createPropertyInputSchema.parse({
    ownerId,
    type: values.type,
    tags: values.tags,
    address: values.address,
    city: values.city,
    country: values.country,
    bedrooms: values.bedrooms === "" ? null : Number(values.bedrooms),
    bathrooms: values.bathrooms === "" ? null : Number(values.bathrooms),
    area: values.area === "" ? null : Number(values.area),
    floor: values.floor === "" ? null : Number(values.floor),
    yearBuilt: values.yearBuilt === "" ? null : Number(values.yearBuilt),
    purchasePrice,
    monthlyRent: values.monthlyRent === "" ? null : Number(values.monthlyRent),
    purchaseDate: values.purchaseDate?.toISOString?.() ?? null,
    description: values.description || null,
    features: values.features,
    images: values.images,
  });
}

// ── Country list (subset) ─────────────────────────────────────
export const COUNTRIES = [
  { value: "IL", label: "Israel" },
  { value: "US", label: "United States" },
  { value: "GB", label: "United Kingdom" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "CA", label: "Canada" },
  { value: "AU", label: "Australia" },
] as const;
