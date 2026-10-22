"use client";

export default function SectionHeader({
  badge,
  heading,
  description,
  centered = false,
  className = "",
}) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md text-xs font-mono tracking-wider uppercase font-semibold border ${
            centered ? "justify-center" : ""
          } border-[#B7D894]/25 bg-[#36415A]/60 text-[#B7D894]`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B7D894]"></span>
          <span>{badge}</span>
        </div>
      )}

      {heading && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC] leading-[1.15]">
          {heading}
        </h2>
      )}

      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
