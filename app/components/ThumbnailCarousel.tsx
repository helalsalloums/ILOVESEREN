"use client";

import Image from "next/image";

interface ThumbnailCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ThumbnailCarousel({ images }: ThumbnailCarouselProps) {
  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full max-w-xl">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div className="overflow-hidden px-2">
        <div
          className="flex gap-3 animate-scroll"
          style={{
            width: "fit-content",
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
