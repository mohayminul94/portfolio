"use client";

import { journeyMilestones } from "@/data/portfolioData";
import { CheckCircle2, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export default function Journey() {
  return (
    <section className="py-20 md:py-28 border-t border-[#36415A]/60 bg-[#202734]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md text-xs font-mono tracking-wider uppercase font-semibold border border-[#B7D894]/25 bg-[#36415A]/60 text-[#B7D894]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>GROWTH &amp; PROGRESSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8FAFC]">
            Always learning. Always building.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1]">
            A purposeful technical path moving steadily from web fundamentals to
            advanced component architectures and modern web technologies.
          </p>
        </div>

        {/* Desktop Progression Cards */}
        <div className="hidden lg:grid grid-cols-4 gap-4 relative">
          {journeyMilestones.map((milestone, idx) => {
            const isLast = idx === journeyMilestones.length - 1;

            return (
              <div
                key={milestone.step}
                className={`relative flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 ${
                  isLast
                    ? "bg-[#36415A]/90 border-2 border-dashed border-[#B7D894]/50 shadow-lg shadow-[#B7D894]/5"
                    : "bg-[#36415A] border border-[#36415A] hover:border-[#B7D894]/30"
                }`}
              >
                <div>
                  {/* Step & Status header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#B7D894]">
                      {milestone.step}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                        isLast
                          ? "bg-[#B7D894]/20 text-[#B7D894] border border-[#B7D894]/30"
                          : "bg-[#202734] text-[#E0F8C7]"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>

                  {/* Title & Stack */}
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">
                    {milestone.title}
                  </h3>
                  <div className="text-xs font-mono text-[#B7D894] mb-4">
                    {milestone.technologies}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Bottom decorative connector indicator */}
                <div className="mt-6 pt-4 border-t border-[#202734]/70 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span>Milestone {idx + 1}</span>
                  {!isLast ? (
                    <ArrowRight className="w-3.5 h-3.5 text-[#B7D894]" />
                  ) : (
                    <Sparkles className="w-3.5 h-3.5 text-[#E0F8C7]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l-2 border-[#36415A] space-y-8">
          {journeyMilestones.map((milestone, idx) => {
            const isLast = idx === journeyMilestones.length - 1;

            return (
              <div key={milestone.step} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    isLast
                      ? "bg-[#202734] border-[#B7D894]"
                      : "bg-[#B7D894] border-[#36415A]"
                  }`}
                />

                <div
                  className={`p-5 rounded-xl ${
                    isLast
                      ? "bg-[#36415A]/80 border border-[#B7D894]/40"
                      : "bg-[#36415A] border border-[#36415A]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#B7D894]">
                      STEP {milestone.step}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                        isLast
                          ? "bg-[#B7D894]/20 text-[#B7D894]"
                          : "bg-[#202734] text-[#E0F8C7]"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#F8FAFC]">
                    {milestone.title}
                  </h3>
                  <div className="text-xs font-mono text-[#B7D894] mb-2">
                    {milestone.technologies}
                  </div>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
