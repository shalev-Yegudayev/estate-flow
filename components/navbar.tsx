'use client';

import { Bell, ChevronDown, Building2, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { forwardRef } from 'react';
import { Link } from '@/i18n/routing';
import type { AppPathname } from '@/i18n/routing';
import { cn } from '@/components/ui/utils';
import LocaleSwitcher from '@/app/[locale]/components/LocaleSwitcher';

interface FilterOption {
  label: string;
  value: string;
}

interface ProfileMenuItem {
  label: string;
  href?: AppPathname;
  onClick?: () => void;
  variant?: 'default' | 'destructive';
}

interface User {
  name: string;
  initials: string;
  avatar?: string;
}

interface NavbarProps {
  logo?: {
    icon?: LucideIcon;
    text?: string;
    href?: AppPathname;
  };
  filters?: FilterOption[];
  selectedFilter?: string;
  onFilterChange?: (value: string) => void;
  user?: User;
  profileMenuItems?: ProfileMenuItem[];
  showNotifications?: boolean;
  notificationCount?: number;
  onNotificationClick?: () => void;
}

const DEFAULT_FILTERS: FilterOption[] = [
  { label: 'All Properties', value: 'all' },
  { label: 'Available', value: 'available' },
  { label: 'Occupied', value: 'occupied' },
  { label: 'Maintenance', value: 'maintenance' },
];

const DEFAULT_PROFILE_MENU_ITEMS: ProfileMenuItem[] = [
  { label: 'Profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
  { label: 'Billing', href: '/billing' },
  { label: 'Logout', onClick: () => {}, variant: 'destructive' },
];

const ProfileButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { user: User }>(
  ({ user, ...props }, ref) => (
    <Button
      ref={ref}
      variant="ghost"
      className="flex items-center gap-2 px-2 md:px-3"
      {...props}
    >
      <Avatar className="size-8 md:size-9">
        {user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
        <AvatarFallback className="bg-primary text-primary-foreground text-sm">
          {user.initials}
        </AvatarFallback>
      </Avatar>
      <span className="hidden sm:block text-sm font-medium">{user.name}</span>
      <ChevronDown className="hidden sm:block size-4 text-muted-foreground" />
    </Button>
  )
);
ProfileButton.displayName = 'ProfileButton';

export function Navbar({
  logo = { icon: Building2, text: 'EstateFlow', href: '/' },
  filters = DEFAULT_FILTERS,
  selectedFilter = 'all',
  onFilterChange,
  user = { name: 'Shalev Yegudayev', initials: 'SY' },
  profileMenuItems = DEFAULT_PROFILE_MENU_ITEMS,
  showNotifications = true,
  notificationCount = 1,
  onNotificationClick,
}: NavbarProps) {
  const LogoIcon = logo.icon || Building2;
  const selectedFilterLabel = filters.find(f => f.value === selectedFilter)?.label || filters[0]?.label;

  return (
    <nav className="fixed top-0 left-0 right-0 h-[72px] bg-background border-b border-border z-50 shadow-sm">
      <div className="h-full px-4 md:px-8 flex items-center justify-between max-w-[1440px] mx-auto">
        <Link
          href={logo.href || '/'}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <LogoIcon className="size-7 md:size-8 text-primary" />
          <span className="text-lg md:text-xl font-semibold text-foreground">{logo.text}</span>
        </Link>

        {filters.length > 0 && (
          <div className="hidden md:flex flex-1 justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 min-w-[160px]">
                  {selectedFilterLabel}
                  <ChevronDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                {filters.map((filter) => (
                  <DropdownMenuItem
                    key={filter.value}
                    onClick={() => onFilterChange?.(filter.value)}
                  >
                    {filter.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        <div className="flex items-center gap-2 md:gap-4">
          <LocaleSwitcher />
          {showNotifications && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onNotificationClick}
              className="relative"
              aria-label="Notifications"
            >
              <Bell className="size-5 md:size-6 text-muted-foreground" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 size-2 bg-primary rounded-full" />
              )}
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ProfileButton user={user} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {profileMenuItems.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  asChild={!!item.href}
                  onClick={!item.href ? item.onClick : undefined}
                  className={cn(item.variant === 'destructive' && 'text-destructive')}
                >
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
