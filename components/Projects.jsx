"use client";

import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { featuredProjects, personalInfo } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#36415A]/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            badge="03 / SELECTED WORK"
            heading="Projects built through practice."
            description="Real web projects highlighting responsive layouts, user-centered interactions, and clean frontend engineering."
            className="mb-0 md:mb-0"
          />

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-mono text-[#B7D894] hover:text-[#E0F8C7] transition-colors pb-2"
          >
            <span>View more on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects List */}
        <div className="space-y-10 sm:space-y-12">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Mobile GitHub link */}
        <div className="mt-8 text-center md:hidden">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#36415A] text-sm font-mono text-[#B7D894] border border-[#36415A]"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>Explore all repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
