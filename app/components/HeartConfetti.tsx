"use client";

import { useState, useCallback } from "react";

interface ConfettiHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  velocityX: number;
  velocityY: number;
}

export default function HeartConfetti() {
  const [hearts, setHearts] = useState<ConfettiHeart[]>([]);

  const colors = [
    "#ec4899",
    "#f472b6",
    "#fb7185",
    "#f43f5e",
    "#e11d48",
    "#be123c",
  ];

  const createConfetti = useCallback((e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    const newHearts: ConfettiHeart[] = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      size: 10 + Math.random() * 20,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      velocityX: (Math.random() - 0.5) * 20,
      velocityY: -10 - Math.random() * 10,
    }));

    setHearts((prev) => [...prev, ...newHearts]);

    // Remove hearts after animation
    setTimeout(() => {
      setHearts((prev) =>
        prev.filter((h) => !newHearts.find((nh) => nh.id === h.id)),
      );
    }, 2000);
  }, []);

  return (
    <>
      {/* Click overlay - attach to parent */}
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        onClick={createConfetti}
        style={{ pointerEvents: "none" }}
      >
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-confetti-fall"
            style={
              {
                left: heart.x,
                top: heart.y,
                transform: `rotate(${heart.rotation}deg)`,
                "--vx": `${heart.velocityX}px`,
                "--vy": `${heart.velocityY}px`,
              } as React.CSSProperties
            }
          >
            <svg
              width={heart.size}
              height={heart.size}
              viewBox="0 0 24 24"
              fill={heart.color}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--vx), 300px) rotate(720deg) scale(0);
          }
        }
        .animate-confetti-fall {
          animation: confetti-fall 2s ease-out forwards;
        }
      `}</style>
    </>
  );
}

// Export a hook to trigger confetti programmatically
export function useConfetti() {
  const [confettiHearts, setConfettiHearts] = useState<ConfettiHeart[]>([]);

  const colors = [
    "#ec4899",
    "#f472b6",
    "#fb7185",
    "#f43f5e",
    "#e11d48",
    "#be123c",
  ];

  const triggerConfetti = useCallback((x: number, y: number) => {
    const newHearts: ConfettiHeart[] = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      size: 15 + Math.random() * 25,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      velocityX: (Math.random() - 0.5) * 30,
      velocityY: -15 - Math.random() * 15,
    }));

    setConfettiHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setConfettiHearts((prev) =>
        prev.filter((h) => !newHearts.find((nh) => nh.id === h.id)),
      );
    }, 2000);
  }, []);

  const ConfettiComponent = () => (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {confettiHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.x,
            top: heart.y,
            animation: "confetti-fall 2s ease-out forwards",
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill={heart.color}
            style={{
              animation: `confetti-spin 2s ease-out forwards`,
              transform: `rotate(${heart.rotation}deg)`,
            }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--vx, 0), 400px) scale(0.5);
          }
        }
        @keyframes confetti-spin {
          to {
            transform: rotate(720deg);
          }
        }
      `}</style>
    </div>
  );

  return { triggerConfetti, ConfettiComponent };
}
