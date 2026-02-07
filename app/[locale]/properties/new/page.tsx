import { setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
import { getCurrentUserId } from '@/lib/auth/session';
import { NewPropertyForm } from '@/components/property/new-property-form';
import type { Locale } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function NewPropertyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const ownerId = await getCurrentUserId();
  if (!ownerId) {
    redirect(`/${locale}/auth`);
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
      <NewPropertyForm ownerId={ownerId} />
    </div>
  );
}
