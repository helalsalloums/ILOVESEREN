"use client";

import { useState } from "react";

interface LoveLetterProps {
  message: string;
  signature?: string;
}

export default function LoveLetter({
  message,
  signature = "With all my love",
}: LoveLetterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-lg mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-8">
        A Letter For You 💌
      </h2>

      <div className="relative perspective-1000">
        {/* Envelope */}
        <div
          className={`
            relative cursor-pointer
            transition-all duration-700 ease-out
            ${isOpen ? "transform-gpu" : "hover:scale-105"}
          `}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Envelope body */}
          <div
            className={`
              relative bg-gradient-to-br from-pink-100 to-pink-200 
              rounded-lg shadow-2xl overflow-hidden
              transition-all duration-700
              ${isOpen ? "h-auto" : "h-48"}
            `}
          >
            {/* Envelope flap */}
            <div
              className={`
                absolute top-0 left-0 right-0 h-24
                bg-gradient-to-br from-pink-200 to-pink-300
                transition-all duration-700 origin-top
                ${isOpen ? "rotate-x-180 opacity-0" : "rotate-x-0"}
              `}
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                transformStyle: "preserve-3d",
              }}
            />

            {/* Heart seal */}
            <div
              className={`
                absolute top-12 left-1/2 -translate-x-1/2 z-10
                transition-all duration-500
                ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}
              `}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>

            {/* Letter content */}
            <div
              className={`
                bg-white mx-4 my-4 rounded-lg shadow-inner
                transition-all duration-700 delay-300
                ${isOpen ? "opacity-100 p-6" : "opacity-0 p-0 h-0"}
              `}
            >
              {isOpen && (
                <>
                  <p className="text-gray-600 text-sm mb-4 font-serif italic">
                    My Dearest,
                  </p>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line font-serif">
                    {message}
                  </p>
                  <p className="text-pink-600 mt-6 font-serif italic text-right">
                    {signature} 💕
                  </p>
                </>
              )}
            </div>

            {/* Click hint */}
            {!isOpen && (
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-pink-500 text-sm animate-pulse">
                  Click to open 💝
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Close button when open */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 mx-auto block text-pink-500 hover:text-pink-600 text-sm"
          >
            Close letter ✉️
          </button>
        )}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .rotate-x-0 {
          transform: rotateX(0deg);
        }
      `}</style>
    </div>
  );
}
