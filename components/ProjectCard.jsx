"use client";

import Image from "next/image";
import { ExternalLink, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <article className="group bg-[#36415A] border border-[#36415A] hover:border-[#B7D894]/40 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-black/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Project Browser Mockup Preview with Actual Project Picture */}
        <div
          className={`lg:col-span-7 bg-[#202734] p-5 sm:p-7 flex flex-col justify-center border-b lg:border-b-0 ${
            isEven ? "lg:border-r" : "lg:order-2 lg:border-l"
          } border-[#36415A]`}
        >
          {/* Browser Window Frame */}
          <div className="rounded-xl overflow-hidden border border-[#36415A] bg-[#202734] shadow-xl group/browser">
            {/* Browser URL Bar */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#36415A]/80 border-b border-[#36415A] text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]/20"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]/20"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#B7D894]"></span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded bg-[#202734] text-[#CBD5E1] text-[11px] truncate max-w-[200px] sm:max-w-[280px]">
                <span className="text-[#B7D894]">https://</span>
                <span className="truncate">{project.browserMockup.headerTitle}</span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-[#B7D894] transition-colors"
                aria-label={`Open ${project.title} live preview`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Actual Project Image Viewport */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden bg-[#1a202c] aspect-[16/10] sm:aspect-[16/9] focus:outline-none"
              aria-label={`Visit live demo for ${project.title}`}
            >
              {/* Project Picture Image */}
              <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-[#202734] to-[#171d26]">
                <Image
                  src={project.image}
                  alt={project.imageAlt || `${project.title} project screenshot`}
                  width={600}
                  height={400}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#202734]/80 via-transparent to-transparent pointer-events-none" />

                {/* Live Floating Tag over Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-[#202734]/90 backdrop-blur-md text-[#E0F8C7] border border-[#B7D894]/30 shadow-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7D894] animate-pulse"></span>
                    <span className="truncate">{project.browserMockup.tagline}</span>
                  </span>

                  <span className="hidden sm:inline-flex px-2 py-0.5 rounded bg-[#36415A]/90 backdrop-blur-md text-[#94A3B8] text-[11px] border border-[#CBD5E1]/10">
                    Click to Open ↗
                  </span>
                </div>
              </div>
            </a>

            {/* Bottom status strip inside mockup */}
            <div className="px-4 py-2 bg-[#202734]/95 border-t border-[#36415A] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
              <span className="flex items-center gap-1.5 text-[#B7D894]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Hosted Project</span>
              </span>
              <span className="text-[#E0F8C7]">
                {project.browserMockup.accentTag}
              </span>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div
          className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between ${
            isEven ? "" : "lg:order-1"
          }`}
        >
          <div>
            {/* Category Subtitle */}
            <div className="text-xs font-mono uppercase text-[#B7D894] tracking-wider mb-2">
              {project.subtitle}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#B7D894] transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[#CBD5E1] text-sm sm:text-base leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Project Key Highlights */}
            <div className="space-y-2 mb-6">
              {project.highlights.map((item, hIdx) => (
                <div
                  key={hIdx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-[#CBD5E1]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7D894] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#202734] text-[#E0F8C7] border border-[#CBD5E1]/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-[#202734] flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#B7D894] text-[#131924] hover:bg-[#E0F8C7] transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[#202734] text-[#F8FAFC] hover:bg-[#202734]/80 border border-[#CBD5E1]/15 hover:border-[#B7D894]/40 transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-[#B7D894]" />
                <span>Source Code</span>
              </a>
            ) : (
              <span className="text-xs font-mono text-[#94A3B8] px-2 py-1">
                Demo hosted on Netlify
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
