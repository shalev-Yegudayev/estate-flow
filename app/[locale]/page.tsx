import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/components/navbar';
import { PropertyCard } from '@/components/property-card';
import { Footer } from '@/components/footer';
import { FloatingActionButton } from '@/components/floating-action-button';
import { EmptyState } from '@/components/empty-state';
import { getProperties } from '@/lib/db/property';
import type { Locale } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const footerT = await getTranslations('footer');

  const properties = await getProperties();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-[72px] pb-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="py-8 md:py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('myProperties')}
            </h1>
            <p className="text-muted-foreground">
              {t('propertyCount', { count: properties.length })}
            </p>
          </div>

          {properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  {...property}
                  href={`/properties/${property.id}`}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title={t('noPropertiesYet')}
              description={t('noPropertiesDescription')}
              actionLabel={t('addFirstProperty')}
              actionHref="/properties/new"
            />
          )}
        </div>
      </main>

      <Footer copyright={footerT('copyright')} />
      <FloatingActionButton href="/properties/new" />
    </div>
  );
}
