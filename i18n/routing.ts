import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/auth': '/auth',
    '/properties': '/properties',
    '/properties/new': '/properties/new',
    '/dashboard': '/dashboard',
    '/profile': '/profile',
    '/settings': '/settings',
    '/billing': '/billing',
    '/about': '/about',
    '/terms': '/terms',
    '/privacy': '/privacy',
    '/support': '/support',
  },
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

export type AppPathname = keyof typeof routing.pathnames;
