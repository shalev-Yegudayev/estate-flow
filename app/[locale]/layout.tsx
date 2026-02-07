import { setRequestLocale, getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Locale } from '@/i18n/config';
import { NavbarWithAuth } from '@/components/navbar-with-auth';
import { Footer } from '@/components/footer';
import { getSessionWithProfile } from '@/lib/auth/session';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function toInitials(firstName: string, lastName: string, email?: string): string {
  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }
  if (email) {
    return email.slice(0, 2).toUpperCase();
  }
  return '?';
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);
  const footerT = await getTranslations('footer');
  const session = await getSessionWithProfile();

  const user = session
    ? {
        name: session.profile
          ? `${session.profile.firstName} ${session.profile.lastName}`.trim() || session.email || 'User'
          : session.email || 'User',
        initials: session.profile
          ? toInitials(session.profile.firstName, session.profile.lastName, session.email)
          : session.email
            ? session.email.slice(0, 2).toUpperCase()
            : '?',
        avatar: session.profile?.avatarUrl ?? undefined,
      }
    : null;

  return (
    <div className="min-h-screen bg-background">
      <NavbarWithAuth user={user} locale={locale} />
      <main className="pt-[72px] pb-8">
        {children}
      </main>
      <Footer copyright={footerT('copyright')} />
    </div>
  );
}
