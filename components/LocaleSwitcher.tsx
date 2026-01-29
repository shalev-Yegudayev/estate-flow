'use client';

import Image from 'next/image';
import { ChevronDown, Check, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { locales, localeInfo, defaultLocale } from '@/i18n/config';
import { useLocaleSwitch } from '@/hooks/useLocaleSwitch';

const triggerClass =
  'group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700';

export default function LocaleSwitcher() {
  const { currentLocale, switchLocale } = useLocaleSwitch();
  const safeLocale =
    currentLocale === 'he' || currentLocale === 'en' ? currentLocale : defaultLocale;
  const currentInfo = localeInfo?.[safeLocale] ?? localeInfo?.[defaultLocale];

  if (!localeInfo || !locales?.length || !currentInfo) {
    return (
      <button className={triggerClass} aria-label="Select language">
        <Globe className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        <span className="hidden sm:inline">Language</span>
      </button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={triggerClass} aria-label="Select language">
          <Globe className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Image
            src={currentInfo.flag}
            alt="{}"
            width={24}
            height={24}
            className="h-5 w-5 rounded-sm object-cover"
            aria-hidden
          />
          <span className="hidden sm:inline">{currentInfo.nativeName}</span>
          <ChevronDown className="h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={4} className="min-w-[140px]">
        {locales.map((locale) => {
          const info = localeInfo[locale];
          const isActive = locale === safeLocale;
          return (
            <DropdownMenuItem
              key={locale}
              onClick={() => switchLocale(locale)}
              className="flex cursor-pointer items-center gap-2 py-1.5"
            >
              <Image
                src={info.flag}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 shrink-0 rounded-sm object-cover"
                aria-hidden
              />
              <span className="min-w-0 flex-1 text-sm">
                <span className="font-medium">{info.nativeName}</span>
                <span className="ml-1 text-muted-foreground">· {info.name}</span>
              </span>
              {isActive && <Check className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
