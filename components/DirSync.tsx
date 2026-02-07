'use client';

import { useLocale } from 'next-intl';
import { useEffect } from 'react';
import { localeInfo } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

export function DirSync() {
  const locale = useLocale() as Locale;
  const direction = localeInfo[locale].dir;

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('dir', direction);
    html.setAttribute('lang', locale);
    if (direction === 'rtl') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [locale, direction]);

  return null;
}
