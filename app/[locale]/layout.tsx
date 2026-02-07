import { setRequestLocale, getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/i18n/config';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);
  const footerT = await getTranslations('footer');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[72px] pb-8">
        {children}
      </main>
      <Footer copyright={footerT('copyright')} />
    </div>
  );
}
