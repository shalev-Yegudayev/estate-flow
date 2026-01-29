import '@/styles/index.css';
import type { Metadata, Viewport } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { localeInfo } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { DirSync } from '@/components/DirSync';

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  'https://estateflow.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'EstateFlow – Manage Your Real Estate Portfolio',
    template: '%s | EstateFlow',
  },
  description:
    'Track properties, tenants, and maintenance in one place. EstateFlow helps property owners manage their real estate portfolio with ease.',
  keywords: [
    'real estate',
    'property management',
    'portfolio',
    'rental properties',
    'landlord',
    'tenants',
    'maintenance',
  ],
  authors: [{ name: 'EstateFlow', url: siteUrl }],
  creator: 'EstateFlow',
  publisher: 'EstateFlow',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'EstateFlow',
    title: 'EstateFlow – Manage Your Real Estate Portfolio',
    description:
      'Track properties, tenants, and maintenance in one place. EstateFlow helps property owners manage their real estate portfolio.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'EstateFlow – Real Estate Portfolio Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EstateFlow – Manage Your Real Estate Portfolio',
    description:
      'Track properties, tenants, and maintenance in one place. EstateFlow helps property owners manage their real estate portfolio.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = (await getLocale()) as Locale;
  const messages = await getMessages();
  const direction = localeInfo[locale].dir;

  return (
    <html lang={locale} dir={direction}>
      <body className={direction === 'rtl' ? 'rtl' : ''}>
        <NextIntlClientProvider messages={messages}>
          <DirSync />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
