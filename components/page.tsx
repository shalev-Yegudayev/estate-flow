import { redirect } from 'next/navigation';

/**
 * Root page: redirect to default locale (English) so / shows English content.
 * With localePrefix: 'as-needed', /en is the canonical URL for English.
 */
export default function RootPage() {
  redirect('/en');
}
