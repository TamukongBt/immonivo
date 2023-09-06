import React from "react";

interface ImageProps {
  src: string;
  fallback: string;
  type?: string;
  alt: string;
}

function Image({ src, fallback, type = "image/webp", alt }: ImageProps) {
  return (
    <picture>
      {/* WebP image if possible*/}
      <source srcSet={src} type={type} />
      {/* Fallback to normal image if not*/}
      <img src={fallback} alt={alt} />
    </picture>
  );
}

export default Image;
