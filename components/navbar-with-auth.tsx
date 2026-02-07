'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/clients/supabase';
import { Navbar } from '@/components/navbar';
import type { AppPathname } from '@/i18n/routing';

interface UserInfo {
  name: string;
  initials: string;
  avatar?: string;
}

interface NavbarWithAuthProps {
  user: UserInfo | null;
  locale: string;
}

const DEFAULT_PROFILE_MENU_ITEMS = [
  { label: 'Profile', href: '/profile' as AppPathname },
  { label: 'Settings', href: '/settings' as AppPathname },
  { label: 'Billing', href: '/billing' as AppPathname },
];

export function NavbarWithAuth({ user, locale }: NavbarWithAuthProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push(`/${locale}/auth`);
    router.refresh();
  };

  const profileMenuItems = [
    ...DEFAULT_PROFILE_MENU_ITEMS,
    { label: 'Logout', onClick: handleLogout, variant: 'destructive' as const },
  ];

  const displayUser = user ?? {
    name: 'Guest',
    initials: 'G',
  };

  return (
    <Navbar
      user={displayUser}
      profileMenuItems={profileMenuItems}
      showNotifications={true}
      notificationCount={0}
    />
  );
}
