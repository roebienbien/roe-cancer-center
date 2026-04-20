import React, { useState } from "react";
import './UnsplashImage.scss'

type Props = {
  src: string;
  alt: string;
  quality?: number;
  className?: string;
  isFlipped?: boolean;
};

const UnsplashImage: React.FC<Props> = ({
  src,
  alt,
  quality = 80,
  className = "",
  isFlipped = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const isUnsplash = src.includes("images.unsplash.com");
  const base = src.split("?")[0];

  const imageUrl = isUnsplash
    ? `${base}?q=${quality}&w=1200&auto=format&fit=crop`
    : src;

  return (
    <img
      src={imageUrl}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      className={`image ${isLoaded ? "image--loaded" : ""} ${isFlipped ? "image--flipped" : ""
        } ${className}`}
    />
  );
};

export default UnsplashImage;
