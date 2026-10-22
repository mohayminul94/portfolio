"use client";

import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/data/portfolioData";
import { GitHubIcon } from "./Icons";
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Globe,
  Layout,
  GitBranch,
  Terminal,
  ShieldCheck,
  Server,
  Cpu,
  Database,
  Sparkles,
  Check,
  Clock,
} from "lucide-react";

// Icon mapping helper
const iconMap = {
  Code2: Code2,
  Palette: Palette,
  Braces: Braces,
  Atom: Atom,
  Globe: Globe,
  Layout: Layout,
  GitBranch: GitBranch,
  Github: GitHubIcon,
  Terminal: Terminal,
  ShieldCheck: ShieldCheck,
  Server: Server,
  Cpu: Cpu,
  Database: Database,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[#36415A]/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="02 / TOOLKIT"
          heading="Technologies I work with."
          description="A practical toolkit centered around modern frontend engineering, clean component structures, and reliable workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const isLearning = cat.isLearning;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                  isLearning
                    ? "bg-[#36415A]/70 border-2 border-dashed border-[#B7D894]/40"
                    : "bg-[#36415A] border border-[#36415A] hover:border-[#B7D894]/30"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-[#F8FAFC]">
                        {cat.category}
                      </h3>
                      {isLearning && (
                        <span className="flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#B7D894]/20 text-[#B7D894] border border-[#B7D894]/30">
                          <Clock className="w-3 h-3" />
                          <span>In Progress</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#CBD5E1]">
                      {cat.description}
                    </p>
                  </div>

                  <span className="shrink-0 text-xs font-mono uppercase px-2.5 py-1 rounded bg-[#202734] text-[#E0F8C7] border border-[#CBD5E1]/10">
                    {cat.badge}
                  </span>
                </div>

                {/* Skill Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {cat.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code2;

                    return (
                      <div
                        key={sIdx}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-colors duration-200 ${
                          isLearning
                            ? "bg-[#202734]/60 border border-[#CBD5E1]/10 hover:border-[#B7D894]/40"
                            : "bg-[#202734]/80 border border-transparent hover:border-[#B7D894]/30"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg shrink-0 ${
                            isLearning
                              ? "bg-[#36415A] text-[#B7D894]"
                              : "bg-[#36415A] text-[#E0F8C7]"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-[#F8FAFC] flex items-center gap-1.5">
                            <span>{skill.name}</span>
                            {isLearning ? (
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-[#B7D894] animate-pulse"
                                title="Active Learning"
                              />
                            ) : (
                              <Check className="w-3.5 h-3.5 text-[#B7D894]" />
                            )}
                          </div>
                          <div className="text-[11px] text-[#94A3B8] leading-snug mt-0.5 truncate">
                            {skill.level}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Transparency Note */}
        <div className="mt-8 p-4 rounded-xl bg-[#202734] border border-[#36415A] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B7D894]" />
            <span>
              Clear distinction: Core frontend tools are actively used across projects; backend tools represent current ongoing study.
            </span>
          </div>
          <span className="font-mono text-[#E0F8C7] shrink-0">
            No arbitrary % progress bars
          </span>
        </div>
      </div>
    </section>
  );
}
