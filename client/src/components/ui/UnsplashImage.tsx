import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  photoId: string;
  alt: string;
  quality?: number;
  className?: string;
  isFlipped?: boolean;
};

const UnsplashImage: React.FC<Props> = ({ photoId, alt, quality = 80, className, isFlipped = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const placeholderUrl = `https://images.unsplash.com/photo-${photoId}?q=10&auto=format&fit=crop&ixlib=rb-4.0.3`;
  const imageUrl = `https://images.unsplash.com/photo-${photoId}?q=${quality}&auto=format&fit=crop&ixlib=rb-4.0.3`;

  // Setting up the srcSet for responsive images
  const srcSet = `
    https://images.unsplash.com/photo-${photoId}?q=${quality}&w=640 640w,
    https://images.unsplash.com/photo-${photoId}?q=${quality}&w=1024 1024w,
    https://images.unsplash.com/photo-${photoId}?q=${quality}&w=1600 1600w,
    https://images.unsplash.com/photo-${photoId}?q=${quality}&w=2048 2048w
  `;

  return (
    <img
      src={isLoaded ? imageUrl : placeholderUrl}
      srcSet={isLoaded ? srcSet : undefined}
      alt={alt}
      loading='lazy'
      onLoad={() => setIsLoaded(true)}
      className={twMerge(
        `mx-auto h-full w-full object-cover transition-opacity duration-500 ease-in-out ${isFlipped ? 'scale-x-[-1]' : ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} `,
        className,
      )}
    />
  );
};

export default UnsplashImage;
