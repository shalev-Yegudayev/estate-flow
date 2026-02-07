"use client";

import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  Building2,
  Home,
  Store,
  TreePine,
  Car,
  Package,
  HelpCircle,
  CalendarIcon,
  Loader2,
} from "lucide-react";

import { cn } from "@/components/ui/utils";
import {
  propertyFormSchema,
  type PropertyFormValues,
  PROPERTY_TYPES,
  PROPERTY_TAGS,
  PROPERTY_TYPE_LABELS,
  PROPERTY_TAG_LABELS,
  COUNTRIES,
  type PropertyType,
  type PropertyTag,
  formValuesToCreateInput,
} from "@/lib/property-schema";
import { createProperty } from "@/lib/actions/property";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/hooks/use-toast";

import { FeatureTagInput } from "./feature-tag-input";
import { ImageUploadZone } from "./image-upload-zone";

// ── Icons per property type ───────────────────────────────────
const TYPE_ICONS: Record<PropertyType, React.ElementType> = {
  APARTMENT: Building2,
  HOUSE: Home,
  COMMERCIAL: Store,
  LAND: TreePine,
  PARKING: Car,
  STORAGE: Package,
  OTHER: HelpCircle,
};

interface NewPropertyFormProps {
  ownerId: string;
}

export function NewPropertyForm({ ownerId }: NewPropertyFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertyFormSchema) as Resolver<PropertyFormValues>,
    defaultValues: {
      type: "APARTMENT",
      tags: [],
      address: "",
      city: "",
      country: "IL",
      bedrooms: "",
      bathrooms: "",
      area: "",
      floor: "",
      yearBuilt: "",
      description: "",
      features: [],
      purchasePrice: "",
      purchaseDate: undefined,
      monthlyRent: "",
      images: [],
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: PropertyFormValues) {
    setServerError(null);

    try {
      const payload = formValuesToCreateInput(values, ownerId);
      const result = await createProperty(payload);
      if (!result.success) throw new Error(result.error);

      toast({
        title: "Property added!",
        description: `${PROPERTY_TYPE_LABELS[values.type]} at ${values.address} has been created.`,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setServerError(message);
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Add New Property
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Fill in the details below to add a property to your portfolio.
        </p>
      </div>

      {serverError && (
        <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
          {serverError}
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* ─── Section 1: Property Type & Tags ─────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Property Type & Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Property Type — Radio Cards */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type *</FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                        {PROPERTY_TYPES.map((pt: PropertyType) => {
                          const Icon = TYPE_ICONS[pt];
                          const isSelected = field.value === pt;
                          return (
                            <button
                              key={pt}
                              type="button"
                              onClick={() => field.onChange(pt)}
                              className={cn(
                                "flex flex-col items-center gap-1.5 rounded-lg border-2 p-3 text-xs font-medium transition-all",
                                isSelected
                                  ? "border-primary bg-primary/5 text-foreground"
                                  : "border-border hover:border-muted-foreground/40 text-muted-foreground",
                              )}
                            >
                              <Icon className="h-5 w-5" />
                              {PROPERTY_TYPE_LABELS[pt]}
                            </button>
                          );
                        })}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tags — Multi-select chips */}
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <div className="flex flex-wrap gap-2">
                        {PROPERTY_TAGS.map((tag: PropertyTag) => {
                          const isActive = field.value.includes(tag);
                          return (
                            <Badge
                              key={tag}
                              variant={isActive ? "default" : "outline"}
                              className={cn(
                                "cursor-pointer select-none transition-colors text-xs px-3 py-1",
                                isActive && "bg-primary text-primary-foreground",
                              )}
                              onClick={() => {
                                const next = isActive
                                  ? field.value.filter((t: string) => t !== tag)
                                  : [...field.value, tag];
                                field.onChange(next);
                              }}
                            >
                              {PROPERTY_TAG_LABELS[tag]}
                            </Badge>
                          );
                        })}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* ─── Section 2: Location ─────────────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main Street" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input placeholder="Tel Aviv" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {COUNTRIES.map((c: { value: string; label: string }) => (
                            <SelectItem key={c.value} value={c.value}>
                              {c.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* ─── Section 3: Property Details ─────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Property Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bedrooms</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          placeholder="—"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bathrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bathrooms</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          step={0.5}
                          placeholder="—"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area (sqm)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          step={0.01}
                          placeholder="—"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="floor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Floor</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="—" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="yearBuilt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year Built</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1800}
                          max={new Date().getFullYear()}
                          placeholder="—"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder="Describe the property…"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="features"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Features</FormLabel>
                    <FormControl>
                      <FeatureTagInput
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='e.g. parking, elevator, balcony…'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* ─── Section 4: Pricing & Dates ──────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pricing & Dates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="purchasePrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Purchase Price *</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          step={0.01}
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="monthlyRent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Rent</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={0}
                          step={0.01}
                          placeholder="Optional"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="purchaseDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Purchase Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full sm:w-[260px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* ─── Section 5: Media / Images ───────────────────── */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Media</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ImageUploadZone
                        images={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* ─── Submit ──────────────────────────────────────── */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              disabled={isSubmitting}
            >
              Reset
            </Button>
            <Button type="submit" disabled={isSubmitting} className="min-w-[140px]">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving…
                </>
              ) : (
                "Add Property"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
