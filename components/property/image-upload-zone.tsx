"use client";

import { useCallback, useRef, useState, type DragEvent } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { cn } from "@/components/ui/utils";
import Image from "next/image";

interface ImageUploadZoneProps {
    images: string[];
    onChange: (images: string[]) => void;
}

export function ImageUploadZone({ images, onChange }: ImageUploadZoneProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFiles = useCallback(
        async (files: FileList | null) => {
            if (!files || files.length === 0) return;

            setUploading(true);
            const newUrls: string[] = [];

            for (const file of Array.from(files)) {
                if (!file.type.startsWith("image/")) continue;

                // Create local preview URL for now.
                // In a real integration, upload to Supabase Storage here:
                //   const { data } = await supabase.storage
                //     .from('property-images')
                //     .upload(`properties/${Date.now()}-${file.name}`, file);
                //   newUrls.push(supabase.storage.from('property-images').getPublicUrl(data.path).data.publicUrl);
                const objectUrl = URL.createObjectURL(file);
                newUrls.push(objectUrl);
            }

            onChange([...images, ...newUrls]);
            setUploading(false);
        },
        [images, onChange],
    );

    const handleDrop = useCallback(
        (e: DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
        },
        [handleFiles],
    );

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    const removeImage = (index: number) => {
        const updated = [...images];
        // Revoke object URL to free memory
        if (updated[index].startsWith("blob:")) {
            URL.revokeObjectURL(updated[index]);
        }
        updated.splice(index, 1);
        onChange(updated);
    };

    return (
        <div className="space-y-4">
            {/* Drop zone */}
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                    "relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-8 text-center transition-colors cursor-pointer",
                    isDragging
                        ? "border-primary bg-primary/5"
                        : "border-muted-foreground/25 hover:border-muted-foreground/50",
                    uploading && "pointer-events-none opacity-60",
                )}
            >
                <Upload className="h-8 w-8 text-muted-foreground" />
                <div>
                    <p className="text-sm font-medium text-foreground">
                        {uploading ? "Uploading…" : "Drop images here or click to browse"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                        PNG, JPG, WEBP up to 10 MB each
                    </p>
                </div>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                />
            </div>

            {/* Preview grid */}
            {images.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {images.map((url, idx) => (
                        <div
                            key={url + idx}
                            className="group relative aspect-square rounded-lg overflow-hidden border bg-muted"
                        >
                            <Image
                                width={100}
                                height={100}
                                src={url}
                                alt={`Property image ${idx + 1}`}
                                className="h-full w-full object-cover"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(idx)}
                                className="absolute top-1 right-1 rounded-full bg-foreground/70 p-1 text-background opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-label="Remove image"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Empty state */}
            {images.length === 0 && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ImageIcon className="h-4 w-4" />
                    <span>No images uploaded yet</span>
                </div>
            )}
        </div>
    );
}
