"use client";

import Image from "next/image";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  selectedIndex: number;
}

export default function ImageCarousel({
  images,
  selectedIndex,
}: ImageCarouselProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Image carousel */}
      <div className="overflow-hidden rounded-full">
        <div
          className="flex"
          style={{
            transform: `translateX(-${selectedIndex * 100}%)`,
            transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          {images.map((image, index) => {
            const isSelected = index === selectedIndex;
            return (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 flex items-center justify-center p-4"
              >
                <div
                  className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl"
                  style={{
                    boxShadow: isSelected
                      ? "0 25px 50px -12px rgba(236, 72, 153, 0.4)"
                      : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition:
                      "box-shadow 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  {/* Gradient ring effect */}
                  <div
                    className="absolute inset-0 rounded-full p-1"
                    style={{
                      background:
                        "linear-gradient(135deg, #ec4899, #f472b6, #fda4af)",
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption */}
      <div className="mt-6 text-center h-16">
        <p
          className="text-lg text-pink-600 font-medium transition-all duration-500"
          style={{
            opacity: images[selectedIndex]?.caption ? 1 : 0,
            transform: images[selectedIndex]?.caption
              ? "translateY(0)"
              : "translateY(10px)",
          }}
        >
          {images[selectedIndex]?.caption || ""}
        </p>
      </div>
    </div>
  );
}
