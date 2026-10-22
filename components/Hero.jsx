"use client";

import { personalInfo } from "@/data/portfolioData";
import HeroVisual from "./HeroVisual";
import { ArrowDown, Mail, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#36415A]/90 border border-[#B7D894]/30 text-xs font-mono font-medium text-[#E0F8C7] mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7D894] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B7D894]"></span>
              </span>
              <span>AVAILABLE FOR JUNIOR OPPORTUNITIES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12] mb-6">
              Building{" "}
              <span className="text-[#B7D894] underline decoration-[#B7D894]/40 decoration-wavy decoration-1 underline-offset-8">
                Digital Experiences
              </span>{" "}
              That Feel Right.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-[#CBD5E1] leading-relaxed max-w-2xl mb-8">
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold bg-[#B7D894] text-[#131924] hover:bg-[#E0F8C7] transition-all duration-200 shadow-md shadow-[#B7D894]/15 hover:shadow-lg active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium bg-[#36415A] text-[#F8FAFC] hover:bg-[#36415A]/80 border border-[#CBD5E1]/20 hover:border-[#B7D894]/50 transition-all duration-200"
              >
                <span>Let&apos;s Connect</span>
                <Mail className="w-4 h-4 text-[#B7D894]" />
              </a>
            </div>

            {/* Compact Technology Line */}
            <div className="pt-6 border-t border-[#36415A]/80 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm font-mono text-[#94A3B8]">
                <span className="text-[#E0F8C7] font-semibold tracking-wide">
                  TECH STACK:
                </span>
                <span className="text-[#CBD5E1]">
                  {personalInfo.techLine}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
