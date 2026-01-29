export const locales = ['en', 'he'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];


const FLAG_URL = (code: string) => `https://flagcdn.com/w80/${code}.png`;
export const localeInfo: Record<Locale, {
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}> = {
  en: {
    name: 'English',
    nativeName: 'English',
    flag: FLAG_URL('us'),
    dir: 'ltr',
  },
  he: {
    name: 'Hebrew',
    nativeName: 'עברית',
    flag: FLAG_URL('il'),
    dir: 'rtl',
  },
};