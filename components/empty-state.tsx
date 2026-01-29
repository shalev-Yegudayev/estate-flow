import { LucideIcon } from 'lucide-react';
import { Home } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { AppPathname } from '@/i18n/routing';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: AppPathname;
}

export function EmptyState({
  icon: Icon = Home,
  title = 'No Properties Yet',
  description = 'Get started by adding your first property to your portfolio. Track occupancy, manage tenants, and monitor your real estate investments.',
  actionLabel = 'Add Your First Property',
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4">
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
        <Icon className="size-12 text-muted-foreground" />
      </div>
      
      <h3 className="text-2xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-center max-w-md mb-8">
        {description}
      </p>
      
      {actionHref && (
        <Button asChild className="gap-2">
          <Link href={actionHref}>
            {actionLabel}
          </Link>
        </Button>
      )}
    </div>
  );
}
