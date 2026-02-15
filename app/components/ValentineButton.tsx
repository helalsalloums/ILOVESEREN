"use client";

import { useState, useRef } from "react";

interface ValentineButtonProps {
  onYes: () => void;
}

export default function ValentineButton({ onYes }: ValentineButtonProps) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesSize, setYesSize] = useState(1);
  const [hoverCount, setHoverCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    // Make "No" button run away to a random position
    const randomX = (Math.random() - 0.5) * 300;
    const randomY = (Math.random() - 0.5) * 200;
    setNoPosition({ x: randomX, y: randomY });

    // Make "Yes" button grow bigger each time
    setHoverCount((prev) => prev + 1);
    setYesSize((prev) => Math.min(prev + 0.15, 2));
  };

  const messages = [
    "Will you be my Valentine? 💕",
    "Pretty please? 🥺",
    "Come on, say yes! 💖",
    "I know you want to! 😊",
    "Just click Yes already! 💝",
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-6 py-12 relative"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center">
        {messages[Math.min(hoverCount, messages.length - 1)]}
      </h2>

      <div className="flex gap-4 items-center justify-center relative h-20 w-full max-w-md">
        {/* Yes Button */}
        <button
          onClick={onYes}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-pink-600 hover:to-red-600"
          style={{
            transform: `scale(${yesSize})`,
            transition: "transform 0.3s ease-out",
          }}
        >
          Yes! 💖
        </button>

        {/* No Button - runs away */}
        <button
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
          className="px-8 py-3 bg-gray-300 text-gray-600 font-bold rounded-full shadow hover:bg-gray-400 transition-all duration-200 absolute"
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
            transition: "transform 0.2s ease-out",
            right: "20%",
          }}
        >
          No
        </button>
      </div>

      {hoverCount > 0 && (
        <p className="text-pink-400 text-sm animate-pulse">
          The No button is shy! 🙈
        </p>
      )}
    </div>
  );
}
