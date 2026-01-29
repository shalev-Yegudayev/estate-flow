import '@/styles/index.css';
import type { Metadata, Viewport } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { localeDirections } from '@/i18n/config';
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
  const direction = localeDirections[locale];

  // #region agent log
  if (typeof fetch !== 'undefined') {
    fetch('http://127.0.0.1:7243/ingest/86f80f37-d34c-4cf0-a743-13c5a87bf3d1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: 'app/layout.tsx:RootLayout',
        message: 'Root layout ran (server)',
        data: { locale, direction },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        hypothesisId: 'H1',
      }),
    }).catch(() => {});
  }
  // #endregion agent log

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
