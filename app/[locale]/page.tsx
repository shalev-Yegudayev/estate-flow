import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { HomePropertyList } from '@/components/home-property-list';
import { FloatingActionButton } from '@/components/floating-action-button';
import { getProperties } from '@/lib/db/property';
import type { Locale } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const properties = await getProperties();

  const propertyCount = properties.length === 1 ?
    t('propertyCount', { count: properties.length }) :
    t('propertyCount_other', { count: properties.length });

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t('myProperties')}
          </h1>
          <p className="text-muted-foreground">
            {propertyCount}
          </p>
        </div>

        <HomePropertyList
          properties={properties}
          emptyStateTitle={t('noPropertiesYet')}
          emptyStateDescription={t('noPropertiesDescription')}
          emptyStateActionLabel={t('addFirstProperty')}
          emptyStateActionHref="/properties/new"
        />
      </div>
      <FloatingActionButton href="/properties/new" />
    </>
  );
}
