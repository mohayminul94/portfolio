"use client";

import SectionHeader from "./SectionHeader";
import { GraduationCap, Code2, Server, ArrowRight, BookOpen, Compass } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: GraduationCap,
      label: "Education",
      title: "Computer Science & Engineering",
      institution: "Dhaka International University",
      description:
        "Building a solid academic base in computer science principles, data structures, algorithms, and software engineering methodologies.",
    },
    {
      icon: Code2,
      label: "Focus",
      title: "Frontend Development",
      institution: "Modern Web Interfaces",
      description:
        "Passionate about turning design concepts into fast, clean, and accessible web experiences using React, Next.js, and Tailwind CSS.",
    },
    {
      icon: Server,
      label: "Currently Learning",
      title: "Backend Development",
      institution: "Node.js · Express.js · MongoDB",
      description:
        "Expanding foundational knowledge to understand full-stack architectures, API design, and database integration.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#36415A]/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="01 / ABOUT ME"
          heading="A little about the developer behind the code."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Main Story Paragraph */}
          <div className="lg:col-span-7 bg-[#36415A]/50 border border-[#36415A] rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B7D894]"></span>
              Curious, Practical, &amp; Growth-Oriented
            </h3>
            <p className="text-[#CBD5E1] text-base sm:text-lg leading-relaxed mb-6">
              I&apos;m a Computer Science and Engineering student at Dhaka
              International University with a strong interest in frontend
              development. I enjoy transforming ideas and designs into
              responsive, accessible, and practical web applications.
            </p>
            <p className="text-[#CBD5E1] text-base leading-relaxed">
              I&apos;m continuously improving my skills through hands-on
              projects and learning modern web technologies. Rather than relying
              on shortcuts, I strive to understand foundational programming
              principles, modern component lifecycles, and clean coding
              conventions.
            </p>

            <div className="mt-8 pt-6 border-t border-[#36415A] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center gap-2">
                <span className="text-[#B7D894]">●</span> Based in Bangladesh
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#E0F8C7]">●</span> Seeking Junior Roles &amp; Internships
              </span>
            </div>
          </div>

          {/* Quick Highlight Summary Box */}
          <div className="lg:col-span-5 bg-[#36415A] border border-[#B7D894]/25 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B7D894] uppercase tracking-wider mb-3">
              <Compass className="w-4 h-4" />
              <span>Philosophy</span>
            </div>
            <h4 className="text-lg font-bold text-[#F8FAFC] mb-3">
              Design with clarity. Code with care.
            </h4>
            <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6">
              I believe great frontend development sits at the intersection of
              clean visual design, accessible structure, and intuitive user
              experience. Every component should feel intentional and responsive.
            </p>

            <div className="space-y-2.5 text-xs font-mono text-[#CBD5E1]">
              <div className="flex items-center justify-between py-1.5 border-b border-[#202734]/60">
                <span className="text-[#94A3B8]">University</span>
                <span className="text-[#F8FAFC] font-semibold text-right">
                  Dhaka Intl. University
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#202734]/60">
                <span className="text-[#94A3B8]">Major</span>
                <span className="text-[#F8FAFC] font-semibold">CSE</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#202734]/60">
                <span className="text-[#94A3B8]">Primary Stack</span>
                <span className="text-[#B7D894] font-semibold">
                  React / Next.js / Tailwind
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-[#94A3B8]">Learning</span>
                <span className="text-[#E0F8C7] font-semibold">
                  Node.js &amp; MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Compact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isLearning = card.label === "Currently Learning";
            return (
              <div
                key={idx}
                className={`relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isLearning
                    ? "bg-[#36415A]/80 border border-[#B7D894]/30"
                    : "bg-[#36415A] border border-[#36415A] hover:border-[#B7D894]/30"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-2.5 rounded-lg ${
                      isLearning
                        ? "bg-[#B7D894]/15 text-[#B7D894]"
                        : "bg-[#202734] text-[#E0F8C7]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-md ${
                      isLearning
                        ? "bg-[#B7D894]/15 text-[#B7D894] border border-[#B7D894]/30"
                        : "bg-[#202734] text-[#94A3B8]"
                    }`}
                  >
                    {card.label}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#F8FAFC] mb-1">
                  {card.title}
                </h4>
                <div className="text-xs font-medium text-[#B7D894] mb-3">
                  {card.institution}
                </div>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
