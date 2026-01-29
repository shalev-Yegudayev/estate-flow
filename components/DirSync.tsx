'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { localeInfo } from '@/i18n/config';
import { defaultLocale } from '@/i18n/config';
import type { Locale } from '@/i18n/config';


/** Derive locale from pathname: /he/... => he, otherwise default (en). */
function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0];
  return segment === 'he' ? 'he' : defaultLocale;
}

export function DirSync() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const direction = localeInfo[locale].dir;
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    prevPathnameRef.current = pathname;
    const html = document.documentElement;
    html.setAttribute('dir', direction);
    html.setAttribute('lang', locale);
    if (direction === 'rtl') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }

  }, [pathname, locale, direction]);

  return null;
}
