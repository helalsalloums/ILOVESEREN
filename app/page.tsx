import CarouselSection from "./components/CarouselSection";

const images = [
  {
    src: "/photo_2_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "Your smile lights up my world 🌟",
  },
  {
    src: "/photo_3_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "Together is my favorite place 💕",
  },
  {
    src: "/photo_4_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "You make everything better 💖",
  },
  {
    src: "/photo_5_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "My heart chose you 💗",
  },
  {
    src: "/photo_6_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "Adventure partner for life 🌈",
  },
  {
    src: "/photo_7_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "You're my person 💝",
  },
  {
    src: "/photo_8_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "Lucky to have you 🍀",
  },
  {
    src: "/photo_9_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "Best thing that ever happened to me 💫",
  },
  {
    src: "/photo_10_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "Forever grateful for you 🙏",
  },
  {
    src: "/photo_11_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "My favorite hello 👋",
  },
  {
    src: "/photo_12_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "I wanna be yours ❤️",
  },
  {
    src: "/photo_13_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "You complete me 🧩",
  },
  {
    src: "/photo_14_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "Soulmate found ✓",
  },
  {
    src: "/photo_15_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "Love of my life 💑",
  },
  {
    src: "/photo_16_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "My sunshine ☀️",
  },
  {
    src: "/photo_17_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "Always and forever 💍",
  },
  {
    src: "/photo_18_2026-02-01_16-39-26.jpg",
    alt: "Our memory",
    caption: "Helal + Seren = ❤️",
  },
  {
    src: "/photo_2024-11-19_16-24-45.jpg",
    alt: "Our memory",
    caption: "The beginning of us 🌱",
  },
  {
    src: "/photo_2025-01-16_21-33-39.jpg",
    alt: "Our memory",
    caption: "Growing together 🌻",
  },
  {
    src: "/photo_2025-04-23_15-32-17.jpg",
    alt: "Our memory",
    caption: "Making memories 📸",
  },
  {
    src: "/photo_2025-12-19_14-48-17.jpg",
    alt: "Our memory",
    caption: "To infinity and beyond 🚀",
  },
];

const reasons = [
  "Your laugh is the most beautiful sound in the world to me",
  "You make even the ordinary moments feel extraordinary",
  "The way you care about me and protect me",
  "You understand me like no one else ever has",
  "Your hugs feel like home",
  "You believe in me even when I don't believe in myself",
  "The way your eyes light up when you're excited about something",
  "You make me want to be a better person every day",
  "Your kindness knows no bounds",
  "Every day with you is an adventure I never want to end",
];

const loveLetterMessage = `From the moment I met you, I knew there was something special about you. Every day since then, you've proven me right in ways I never could have imagined.

You've filled my life with joy, laughter, and a love so deep it takes my breath away. Thank you for being my best friend, my partner, and my everything.

I can't wait to create more beautiful memories with you. Here's to us, to our love, and to forever.

Happy Valentine's Day, my love! بحبك بحبك بحبك بحبك بحبك
I want to marry you and travel with you 
`;

const timelineEvents = [
  {
    date: "October 2023",
    title: "The Day We Met",
    description:
      "The day that changed everything. I knew from that moment you were special.",
    emoji: "💫",
  },
  {
    date: "October 2024",
    title: "First Date",
    description:
      "Butterflies, nervous laughs, and the start of everything beautiful.",
    emoji: "🦋",
  },
  {
    date: "February 2025",
    title: "First Valentine's Together",
    description:
      "Our first Valentine's Day as a couple. The first of many to come",
    emoji: "💝",
  },
  {
    date: "Summer 2025",
    title: "Adventures Together",
    description:
      "Exploring new places, making memories, falling deeper in love.",
    emoji: "🌅",
  },
  {
    date: "November 2025",
    title: "One Year Anniversary",
    description: "365 days of loving you, and I'd do it all over again.",
    emoji: "🎉",
  },
  {
    date: "February 2026",
    title: "Today",
    description:
      "Still falling for you every single day. Will you be my Valentine?",
    emoji: "💕",
  },
];

const startDateISO = "2024-11-03";

export default function Home() {
  return (
    <CarouselSection
      images={images}
      startDateISO={startDateISO}
      reasons={reasons}
      loveLetterMessage={loveLetterMessage}
      timelineEvents={timelineEvents}
    />
  );
}
