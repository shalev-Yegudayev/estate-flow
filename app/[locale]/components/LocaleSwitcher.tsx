'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { useTransition } from 'react';

const LOG_ENDPOINT = 'http://127.0.0.1:7243/ingest/86f80f37-d34c-4cf0-a743-13c5a87bf3d1';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelectChange(newLocale: Locale) {
    // #region agent log
    fetch(LOG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        location: 'LocaleSwitcher.tsx:onSelectChange',
        message: 'User switched locale',
        data: { newLocale, pathname },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        hypothesisId: 'H5',
      }),
    }).catch(() => { });
    // #endregion agent log
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  }

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => onSelectChange(e.target.value as Locale)}
        disabled={isPending}
        className="appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pe-10 text-sm font-medium text-align-center text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        aria-label="Select language"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
        <svg
          className="h-4 w-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
