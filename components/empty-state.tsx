import { Home, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4">
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
        <Home className="size-12 text-gray-400" />
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        No Properties Yet
      </h3>
      
      <p className="text-gray-500 text-center max-w-md mb-8">
        Get started by adding your first property to your portfolio. Track occupancy, manage tenants, and monitor your real estate investments.
      </p>
      
      <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] gap-2">
        <Plus className="size-5" />
        Add Your First Property
      </Button>
    </div>
  );
}
