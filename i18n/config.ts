export const locales = ['en', 'he'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

// Locale display names
export const localeNames: Record<Locale, string> = {
  en: 'English',
  he: 'עברית',
};

// Text direction mapping
export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  he: 'rtl',
};
