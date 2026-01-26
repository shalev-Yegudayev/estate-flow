'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/components/ui/utils';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
  fallbackAlt?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackSrc = ERROR_IMG_SRC,
  fallbackAlt = 'Error loading image',
  ...props
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Check if image loads successfully using a test img element
  useEffect(() => {
    if (typeof imgSrc !== 'string') {
      return;
    }

    const testImg = new window.Image();
    testImg.onerror = () => {
      setDidError(true);
      setImgSrc(fallbackSrc);
    };
    testImg.onload = () => {
      setDidError(false);
    };
    testImg.src = imgSrc;
  }, [imgSrc, fallbackSrc]);

  if (didError || imgSrc === fallbackSrc) {
    const fallbackWidth = props.width || (props.fill ? undefined : 88);
    const fallbackHeight = props.height || (props.fill ? undefined : 88);

    return (
      <div className={cn('inline-block bg-muted text-center align-middle', className)}>
        <div className="flex items-center justify-center w-full h-full">
          {props.fill ? (
            <Image
              src={fallbackSrc}
              alt={fallbackAlt}
              fill
              className={className}
              data-original-url={typeof src === 'string' ? src : undefined}
              unoptimized
            />
          ) : (
            <Image
              src={fallbackSrc}
              alt={fallbackAlt}
              width={fallbackWidth as number}
              height={fallbackHeight as number}
              className={className}
              data-original-url={typeof src === 'string' ? src : undefined}
              unoptimized
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt || ''}
      className={className}
      {...props}
    />
  );
}
