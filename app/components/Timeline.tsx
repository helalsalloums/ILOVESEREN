"use client";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  emoji?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="w-full max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 text-center mb-12">
        Our Journey Together 💑
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-red-300 to-pink-300" />

        {events.map((event, index) => (
          <div
            key={index}
            className={`
              relative flex items-center mb-12
              ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
            `}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 w-4 h-4 -ml-2 bg-gradient-to-br from-pink-500 to-red-500 rounded-full shadow-lg z-10">
              <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-20" />
            </div>

            {/* Content card */}
            <div
              className={`
                ml-16 md:ml-0 md:w-5/12
                ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}
              `}
            >
              <div
                className="
                  bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg
                  border-2 border-pink-100 hover:border-pink-300
                  transform transition-all duration-500 hover:scale-105 hover:shadow-xl
                "
              >
                {/* Date badge */}
                <div
                  className={`inline-block mb-2 ${index % 2 === 0 ? "md:float-right md:ml-4" : "md:float-left md:mr-4"}`}
                >
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold rounded-full">
                    {event.date}
                  </span>
                </div>

                {/* Emoji */}
                {event.emoji && (
                  <div className="text-3xl mb-2">{event.emoji}</div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 clear-both">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Empty space for alternating layout */}
            <div className="hidden md:block md:w-5/12" />
          </div>
        ))}
      </div>
    </div>
  );
}
