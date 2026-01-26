import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const base =
  "inline-flex items-center justify-center gap-1 rounded-md border px-2 py-0.5 " +
  "text-xs font-medium whitespace-nowrap shrink-0 w-fit overflow-hidden " +
  "[&>svg]:size-3 [&>svg]:pointer-events-none " +
  "transition-[color,box-shadow] " +
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] " +
  "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40";

const badgeVariants = cva(base, {
  variants: {
    variant: {
      default:
        "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
      secondary:
        "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
      destructive:
        "border-transparent bg-destructive text-white dark:bg-destructive/60 [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
      outline:
        "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      available:
        "border-transparent bg-green-100 text-green-700 [a&]:hover:bg-green-100",
      occupied:
        "border-transparent bg-blue-100 text-blue-700 [a&]:hover:bg-blue-100",
      maintenance:
        "border-transparent bg-orange-100 text-orange-700 [a&]:hover:bg-orange-100",
      forSale:
        "border-transparent bg-purple-100 text-purple-700 [a&]:hover:bg-purple-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean };

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        ref={ref}
        data-slot="badge"
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
