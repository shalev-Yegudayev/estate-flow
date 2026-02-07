import { setRequestLocale } from 'next-intl/server';
import { getDefaultOwnerId } from '@/lib/db/property';
import { NewPropertyForm } from '@/components/property/new-property-form';
import type { Locale } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function NewPropertyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const ownerId = await getDefaultOwnerId();

  if (!ownerId) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <p className="text-muted-foreground">
          No user found. Run the database seed to create a default user first.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
      <NewPropertyForm ownerId={ownerId} />
    </div>
  );
}
