"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { ArrowUp, Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#202734] border-t border-[#36415A] py-12 text-sm text-[#94A3B8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href="#home"
              onClick={handleBackToTop}
              className="text-lg font-bold font-mono text-[#F8FAFC] tracking-tight hover:text-[#B7D894] transition-colors"
            >
              rayhan<span className="text-[#B7D894]">.dev</span>
            </a>
            <p className="text-xs text-[#CBD5E1]">
              Designed and built with care.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#36415A] text-[#CBD5E1] hover:text-[#B7D894] hover:bg-[#36415A]/80 transition-colors"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#36415A] text-[#CBD5E1] hover:text-[#B7D894] hover:bg-[#36415A]/80 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top & copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs">
            <span>
              &copy; {currentYear} {personalInfo.fullName}. All rights reserved.
            </span>

            <a
              href="#home"
              onClick={handleBackToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#36415A] text-[#CBD5E1] hover:text-[#B7D894] hover:bg-[#36415A]/80 transition-colors font-mono"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#B7D894]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
