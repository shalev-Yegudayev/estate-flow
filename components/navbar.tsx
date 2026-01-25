'use client';

import { Bell, ChevronDown, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { forwardRef } from 'react';

const ProfileButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => (
    <button
      ref={ref}
      {...props}
      className="flex items-center gap-2 hover:bg-gray-100 px-2 md:px-3 py-2 rounded-lg transition-colors"
    >
      <Avatar className="size-8 md:size-9">
        <AvatarFallback className="bg-[#2563EB] text-white text-sm">JD</AvatarFallback>
      </Avatar>
      <span className="hidden sm:block text-sm font-medium text-gray-700">John Doe</span>
      <ChevronDown className="hidden sm:block size-4 text-gray-500" />
    </button>
  )
);
ProfileButton.displayName = 'ProfileButton';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[72px] bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="h-full px-4 md:px-8 flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <Building2 className="size-7 md:size-8 text-[#2563EB]" />
          <span className="text-lg md:text-xl font-semibold text-gray-900">EstateFlow</span>
        </div>

        {/* Center - Filter Dropdown (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 min-w-[160px]">
                All Properties
                <ChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem>All Properties</DropdownMenuItem>
              <DropdownMenuItem>Available</DropdownMenuItem>
              <DropdownMenuItem>Occupied</DropdownMenuItem>
              <DropdownMenuItem>Maintenance</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right side - Notification and Profile */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Notification Bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="size-5 md:size-6 text-gray-600" />
            <span className="absolute top-1 right-1 size-2 bg-[#2563EB] rounded-full"></span>
          </button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ProfileButton />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
