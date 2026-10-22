"use client";

import { ExternalLink, ArrowUpRight, ShoppingBag, Dumbbell, Calendar, CheckCircle } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <article className="group bg-[#36415A] border border-[#36415A] hover:border-[#B7D894]/40 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-black/25">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Project Browser Mockup Preview */}
        <div
          className={`lg:col-span-7 bg-[#202734] p-5 sm:p-7 flex flex-col justify-center border-b lg:border-b-0 ${
            isEven ? "lg:border-r" : "lg:order-2 lg:border-l"
          } border-[#36415A]`}
        >
          {/* Browser Window Frame */}
          <div className="rounded-xl overflow-hidden border border-[#36415A] bg-[#202734] shadow-inner">
            {/* Browser URL Bar */}
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#36415A]/60 border-b border-[#36415A] text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]/20"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1]/20"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#B7D894]"></span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded bg-[#202734] text-[#CBD5E1] text-[11px] truncate max-w-[200px] sm:max-w-[260px]">
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

            {/* Custom Interactive Mockup Content */}
            <div className="p-4 sm:p-6 bg-[#202734]/90 min-h-[220px] flex flex-col justify-between select-none">
              {project.browserMockup.type === "ecommerce" && (
                <div className="space-y-4">
                  {/* Mockup Store Header */}
                  <div className="flex items-center justify-between border-b border-[#36415A]/70 pb-3">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-[#B7D894]" />
                      <span className="font-bold text-sm tracking-tight text-[#F8FAFC]">
                        Bazar-Ghor
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-[#36415A] text-[#E0F8C7]">
                        Cart: 2 items
                      </span>
                    </div>
                  </div>

                  {/* Mockup Product Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-2.5 rounded-lg bg-[#36415A]/60 border border-[#CBD5E1]/10">
                      <div className="h-14 rounded bg-[#202734] flex items-center justify-center text-xs text-[#94A3B8] font-mono mb-2">
                        Product Item 01
                      </div>
                      <div className="text-xs font-semibold text-[#F8FAFC] truncate">
                        Everyday Essentials
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-bold text-[#B7D894]">৳ 450</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#202734] text-[#E0F8C7]">
                          Add +
                        </span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#36415A]/60 border border-[#CBD5E1]/10">
                      <div className="h-14 rounded bg-[#202734] flex items-center justify-center text-xs text-[#94A3B8] font-mono mb-2">
                        Product Item 02
                      </div>
                      <div className="text-xs font-semibold text-[#F8FAFC] truncate">
                        Fresh Organics
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs font-bold text-[#B7D894]">৳ 820</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#202734] text-[#E0F8C7]">
                          Add +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {project.browserMockup.type === "fitness" && (
                <div className="space-y-4">
                  {/* Mockup Fitness Header */}
                  <div className="flex items-center justify-between border-b border-[#36415A]/70 pb-3">
                    <div className="flex items-center gap-2">
                      <Dumbbell className="w-4 h-4 text-[#B7D894]" />
                      <span className="font-bold text-sm tracking-tight text-[#F8FAFC]">
                        FitLog Planner
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#B7D894]/20 text-[#B7D894]">
                      Week 4 · Active
                    </span>
                  </div>

                  {/* Mockup Workout Sessions */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#36415A]/60 border border-[#CBD5E1]/10 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#B7D894]" />
                        <span className="font-medium text-[#F8FAFC]">
                          Upper Body Push Day
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#E0F8C7]">
                        4 sets · 12 reps
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#36415A]/60 border border-[#CBD5E1]/10 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 rounded-full border border-[#B7D894] inline-block"></span>
                        <span className="font-medium text-[#F8FAFC]">
                          Core &amp; Mobility Circuit
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#94A3B8]">
                        30 mins · Target
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {project.browserMockup.type === "conference" && (
                <div className="space-y-4">
                  {/* Mockup Conference Header */}
                  <div className="flex items-center justify-between border-b border-[#36415A]/70 pb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#B7D894]" />
                      <span className="font-bold text-sm tracking-tight text-[#F8FAFC]">
                        DevStack Conf
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#36415A] text-[#E0F8C7]">
                      Annual Tech Summit
                    </span>
                  </div>

                  {/* Conference Speaker Schedule Cards */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-[#36415A]/60 border border-[#CBD5E1]/10">
                      <div className="text-[10px] font-mono text-[#B7D894]">10:00 AM</div>
                      <div className="font-semibold text-[#F8FAFC] truncate">Keynote Speech</div>
                      <div className="text-[11px] text-[#94A3B8] truncate">Future of Web</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#36415A]/60 border border-[#CBD5E1]/10">
                      <div className="text-[10px] font-mono text-[#E0F8C7]">02:30 PM</div>
                      <div className="font-semibold text-[#F8FAFC] truncate">Frontend UI Lab</div>
                      <div className="text-[11px] text-[#94A3B8] truncate">Interactive Session</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom bar inside mockup */}
              <div className="mt-3 pt-3 border-t border-[#36415A]/50 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span>Status: Verified &amp; Hosted</span>
                <span className="text-[#B7D894]">Responsive Viewport</span>
              </div>
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
