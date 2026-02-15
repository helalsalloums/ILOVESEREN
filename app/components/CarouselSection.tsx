"use client";

import { useState, useEffect, useCallback } from "react";
import ThumbnailCarousel from "./ThumbnailCarousel";
import ImageCarousel from "./ImageCarousel";
import DaysCounter from "./DaysCounter";
import FloatingHearts from "./FloatingHearts";
import ValentineButton from "./ValentineButton";
import ReasonsILoveYou from "./ReasonsILoveYou";
import LoveLetter from "./LoveLetter";
import Timeline from "./Timeline";
import SparkleEffect from "./SparkleEffect";

interface CarouselSectionProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  startDateISO: string;
  reasons: string[];
  loveLetterMessage: string;
  timelineEvents: {
    date: string;
    title: string;
    description: string;
    emoji?: string;
  }[];
}

// Confetti Hearts Component
function ConfettiExplosion({ active }: { active: boolean }) {
  const [hearts, setHearts] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      color: string;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    if (active) {
      const colors = [
        "#ec4899",
        "#f472b6",
        "#fb7185",
        "#f43f5e",
        "#fda4af",
        "#ff6b6b",
      ];
      const newHearts = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: 50 + (Math.random() - 0.5) * 100,
        y: 50,
        size: 15 + Math.random() * 25,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
      }));
      setHearts(newHearts);
    }
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-confetti-burst"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDelay: `${heart.delay}s`,
          }}
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
      <style jsx>{`
        @keyframes confetti-burst {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(0) rotate(0deg);
          }
          20% {
            transform: translate(
                calc((var(--random-x, 0) - 0.5) * 400px),
                -200px
              )
              scale(1) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: translate(
                calc((var(--random-x, 0) - 0.5) * 500px),
                400px
              )
              scale(0.5) rotate(720deg);
          }
        }
        .animate-confetti-burst {
          --random-x: ${Math.random()};
          animation: confetti-burst 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default function CarouselSection({
  images,
  startDateISO,
  reasons,
  loveLetterMessage,
  timelineEvents,
}: CarouselSectionProps) {
  const startDate = new Date(startDateISO);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  // Autoplay - change slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleYes = useCallback(() => {
    setShowCelebration(true);
    setHasAccepted(true);
    setTimeout(() => setShowCelebration(false), 4000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-red-50 to-pink-100 relative">
      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Confetti explosion */}
      <ConfettiExplosion active={showCelebration} />

      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo / Title */}
          <SparkleEffect>
            <h1 className="text-xl font-bold text-pink-600">Our Journey 💕</h1>
          </SparkleEffect>

          {/* Thumbnail Carousel - Center (infinite scroll) */}
          <div className="flex-1 flex justify-center overflow-hidden">
            <ThumbnailCarousel images={images} />
          </div>

          {/* Days Counter - Right */}
          <DaysCounter startDate={startDate} />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section with Carousel */}
        <section className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
          <ImageCarousel images={images} selectedIndex={selectedIndex} />

          {/* Valentine Button */}
          {!hasAccepted ? (
            <ValentineButton onYes={handleYes} />
          ) : (
            <div className="text-center animate-bounce-slow">
              <SparkleEffect color="#ec4899">
                <h2 className="text-4xl md:text-5xl font-bold text-pink-600">
                  Yay! I love you! 💖
                </h2>
              </SparkleEffect>
              <p className="text-pink-500 mt-4 text-xl">
                You made me the happiest person! 🥰
              </p>
            </div>
          )}
        </section>

        {/* Reasons I Love You Section */}
        <section className="py-16 bg-white/50">
          <ReasonsILoveYou reasons={reasons} />
        </section>

        {/* Love Letter Section */}
        <section className="py-16">
          <LoveLetter message={loveLetterMessage} />
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white/50">
          <Timeline events={timelineEvents} />
        </section>

        {/* Footer */}
        <footer className="py-12 text-center bg-gradient-to-t from-pink-200 to-transparent">
          <p className="text-pink-600 text-lg">HELAL 💕 SEREN</p>
          <p className="text-pink-400 text-sm mt-2">Forever & Always</p>
        </footer>
      </main>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
