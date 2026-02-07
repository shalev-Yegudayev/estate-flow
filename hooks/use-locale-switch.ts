'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { defaultLocale, type Locale } from '@/i18n/config';

export function useLocaleSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentLocale = getCurrentLocale(pathname);
  
  const switchLocale = (newLocale: Locale) => {
    if (newLocale === currentLocale) return;

    const searchString = searchParams.toString();
    const newPath = buildLocalizedPath(pathname, newLocale, searchString);
    
    router.replace(newPath);
  };

  return { currentLocale, switchLocale };
}

function getCurrentLocale(pathname: string): Locale {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return firstSegment === 'he' ? 'he' : defaultLocale;
}

function buildLocalizedPath(
  pathname: string,
  newLocale: Locale,
  search?: string
): string {
  const pathToUse = typeof window !== 'undefined' 
    ? window.location.pathname 
    : pathname;

  const segments = pathToUse.split('/').filter(Boolean);
  const pathWithoutLocale = segments.slice(1);
  
  const basePath = pathWithoutLocale.length 
    ? `/${newLocale}/${pathWithoutLocale.join('/')}`
    : `/${newLocale}`;

  return search ? `${basePath}?${search}` : basePath;
}