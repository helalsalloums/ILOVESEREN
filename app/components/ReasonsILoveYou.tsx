"use client";

import { useState } from "react";

interface ReasonsILoveYouProps {
  reasons: string[];
}

export default function ReasonsILoveYou({ reasons }: ReasonsILoveYouProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-8">
        Reasons I Love You 💝
      </h2>

      <div className="space-y-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setExpandedIndex(index)}
            onMouseLeave={() => setExpandedIndex(null)}
          >
            <div
              className={`
                bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg
                border-2 border-pink-100 hover:border-pink-300
                transform transition-all duration-500 ease-out
                hover:scale-105 hover:shadow-xl
                cursor-pointer
                ${expandedIndex === index ? "bg-gradient-to-r from-pink-50 to-red-50" : ""}
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-4">
                {/* Heart number */}
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  {index + 1}
                </div>

                {/* Reason text */}
                <p className="text-gray-700 text-lg leading-relaxed pt-1">
                  {reason}
                </p>
              </div>

              {/* Decorative heart */}
              <div
                className={`
                  absolute -right-2 -top-2 text-pink-400 
                  transform transition-all duration-300
                  ${expandedIndex === index ? "scale-125 rotate-12" : "scale-0"}
                `}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
