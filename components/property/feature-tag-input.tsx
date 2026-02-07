"use client";

import { useState, type KeyboardEvent } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface FeatureTagInputProps {
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
}

export function FeatureTagInput({
    value,
    onChange,
    placeholder = 'Type and press Enter…',
}: FeatureTagInputProps) {
    const [inputValue, setInputValue] = useState("");

    const addTag = (tag: string) => {
        const trimmed = tag.trim().toLowerCase();
        if (trimmed && !value.includes(trimmed)) {
            onChange([...value, trimmed]);
        }
        setInputValue("");
    };

    const removeTag = (tagToRemove: string) => {
        onChange(value.filter((t) => t !== tagToRemove));
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTag(inputValue);
        }
        if (e.key === "Backspace" && !inputValue && value.length > 0) {
            removeTag(value[value.length - 1]);
        }
    };

    return (
        <div className="space-y-2">
            <div className="flex flex-wrap gap-1.5">
                {value.map((tag) => (
                    <Badge
                        key={tag}
                        variant="secondary"
                        className="gap-1 pr-1 text-xs capitalize"
                    >
                        {tag}
                        <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-0.5 rounded-full p-0.5 hover:bg-muted-foreground/20 transition-colors"
                            aria-label={`Remove ${tag}`}
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </Badge>
                ))}
            </div>
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="text-sm"
            />
        </div>
    );
}