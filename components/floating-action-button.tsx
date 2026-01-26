import { LucideIcon, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/components/ui/utils';
import Link from 'next/link';

interface FloatingActionButtonProps {
  icon?: LucideIcon;
  label?: string;
  href: string;
  className?: string;
}

export function FloatingActionButton({
  icon: Icon = Plus,
  label = 'Add new property',
  href,
  className,
}: FloatingActionButtonProps) {
  const buttonClassName = cn(
    'fixed bottom-6 right-6 md:bottom-8 md:right-8 size-14 md:size-14 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 z-40 group',
    className
  );


  return (
    <Button asChild size="icon" className={buttonClassName} aria-label={label}>
      <Link href={href}>
        <Icon className="size-6 md:size-7 group-hover:rotate-90 transition-transform duration-300" />
      </Link>
    </Button>
  );
}
