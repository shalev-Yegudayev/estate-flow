'use client';

import { Plus } from 'lucide-react';

export function FloatingActionButton() {
  return (
    <button
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 size-14 md:size-14 bg-[#2563EB] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 group"
      aria-label="Add new property"
    >
      <Plus className="size-6 md:size-7 group-hover:rotate-90 transition-transform duration-300" />
    </button>
  );
}
