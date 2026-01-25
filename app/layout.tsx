import '@/styles/index.css';
import type { Metadata, Viewport } from 'next';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
