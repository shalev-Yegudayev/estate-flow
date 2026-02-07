'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/routing';
import { createProperty, type CreatePropertyInput } from '@/lib/actions/property';
import { PropertyType, PropertyTag } from '@/app/generated/prisma';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/components/ui/utils';
import { useTranslations } from 'next-intl';

const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: 'APARTMENT', label: 'Apartment' },
  { value: 'HOUSE', label: 'House' },
  { value: 'COMMERCIAL', label: 'Commercial' },
  { value: 'LAND', label: 'Land' },
  { value: 'PARKING', label: 'Parking' },
  { value: 'STORAGE', label: 'Storage' },
  { value: 'OTHER', label: 'Other' },
];

type Props = {
  ownerId: string;
};

export function NewPropertyForm({ ownerId }: Props) {
  const t = useTranslations('properties');
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const purchasePrice = Number(formData.get('purchasePrice'));
    const monthlyRentRaw = formData.get('monthlyRent');
    const monthlyRent =
      monthlyRentRaw !== null && monthlyRentRaw !== ''
        ? Number(monthlyRentRaw)
        : null;
    const bedroomsRaw = formData.get('bedrooms');
    const bedrooms =
      bedroomsRaw !== null && bedroomsRaw !== ''
        ? Number(bedroomsRaw)
        : null;
    const bathroomsRaw = formData.get('bathrooms');
    const bathrooms =
      bathroomsRaw !== null && bathroomsRaw !== ''
        ? Number(bathroomsRaw)
        : null;
    const areaRaw = formData.get('area');
    const area =
      areaRaw !== null && areaRaw !== '' ? Number(areaRaw) : null;

    const input: CreatePropertyInput = {
      ownerId,
      type: formData.get('type') as PropertyType,
      tags: formData.getAll('tags').length
        ? (formData.getAll('tags') as PropertyTag[])
        : [],
      address: (formData.get('address') as string) ?? '',
      city: (formData.get('city') as string) ?? '',
      country: (formData.get('country') as string) || undefined,
      bedrooms,
      bathrooms,
      area,
      purchasePrice,
      monthlyRent,
      description: (formData.get('description') as string) || undefined,
      features: [],
      images: [],
    };

    const result = await createProperty(input);
    setPending(false);

    if (result.success) {
      router.push('/');
      return;
    }
    setError(result.error);
  }

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>{t('newProperty')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <p className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
              {error}
            </p>
          )}

          <div className="space-y-2">
            <Label htmlFor="type">{t('type')}</Label>
            <select
              id="type"
              name="type"
              required
              defaultValue="APARTMENT"
              className={cn(
                'flex h-9 w-full rounded-md border border-input bg-input-background px-3 py-1 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
              )}
            >
              {PROPERTY_TYPES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">{t('address')}</Label>
            <Input
              id="address"
              name="address"
              type="text"
              required
              placeholder={t('address')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              type="text"
              required
              placeholder="City"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purchasePrice">{t('purchasePrice')}</Label>
            <Input
              id="purchasePrice"
              name="purchasePrice"
              type="number"
              required
              min={0}
              step={0.01}
              placeholder="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="monthlyRent">{t('monthlyRent')}</Label>
            <Input
              id="monthlyRent"
              name="monthlyRent"
              type="number"
              min={0}
              step={0.01}
              placeholder="Optional"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Input
                id="bedrooms"
                name="bedrooms"
                type="number"
                min={0}
                placeholder="—"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Input
                id="bathrooms"
                name="bathrooms"
                type="number"
                min={0}
                placeholder="—"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Area (sqm)</Label>
            <Input
              id="area"
              name="area"
              type="number"
              min={0}
              step={0.01}
              placeholder="Optional"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              rows={3}
              className="flex w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Optional"
            />
          </div>

          <Button type="submit" disabled={pending} className="w-full">
            {pending ? 'Saving…' : t('addProperty')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
