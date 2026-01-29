import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function NewPropertyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('properties');

  return (
    <div>
      <h1>{t('newProperty')}</h1>
    </div>
  );
}
