import { Link } from '@/i18n/routing';
import type { AppPathname } from '@/i18n/routing';

interface FooterLink {
  label: string;
  href: AppPathname;
}

interface FooterProps {
  copyright?: string;
  links?: FooterLink[];
}

const DEFAULT_LINKS: FooterLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Support', href: '/support' },
];

export function Footer({
  copyright = '© 2026 EstateFlow. All rights reserved.',
  links = DEFAULT_LINKS,
}: FooterProps) {
  return (
    <footer className="w-full bg-muted/50 border-t border-border mt-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            {copyright}
          </div>

          {links.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-sm text-muted-foreground">
              {links.map((link, index) => (
                <div key={link.href} className="flex items-center gap-3 md:gap-6">
                  {index > 0 && (
                    <span className="text-border hidden md:inline">•</span>
                  )}
                  <Link
                    href={link.href}
                    className="hover:text-primary hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
