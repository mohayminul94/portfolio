"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks, personalInfo } from "@/data/portfolioData";
import {
  Menu,
  X,
  ArrowUpRight,
  MessageSquare,
  FileText,
  MapPin,
} from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Section spy and scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle window resize and escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open, restore when closed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  // Reliable navigation scroll with fixed header offset
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
    document.body.style.touchAction = "";

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: targetId === "home" ? 0 : offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300 flex items-center ${
        isScrolled || mobileMenuOpen
          ? "bg-[#202734]/95 backdrop-blur-md border-b border-[#36415A] shadow-md shadow-black/15"
          : "bg-[#202734]/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-1.5 text-lg sm:text-xl font-bold font-mono tracking-tight text-[#F8FAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7D894] rounded px-1 shrink-0"
            aria-label="Rayhan portfolio home"
          >
            <span className="w-2.5 h-2.5 rounded-sm bg-[#B7D894] inline-block transition-transform duration-300 group-hover:rotate-45"></span>
            <span>rayhan</span>
            <span className="text-[#B7D894]">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[#E0F8C7] font-semibold"
                      : "text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#36415A]/40"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#B7D894] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium bg-[#36415A] text-[#E0F8C7] hover:text-[#F8FAFC] border border-[#CBD5E1]/15 hover:border-[#B7D894]/40 transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-[#B7D894]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#94A3B8]" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#B7D894] text-[#131924] hover:bg-[#E0F8C7] transition-all duration-200 shadow-sm hover:shadow-[#B7D894]/20 hover:shadow-md active:scale-95"
            >
              <span>Let&apos;s Talk</span>
              <MessageSquare className="w-4 h-4 text-[#131924]" />
            </a>
          </div>

          {/* Mobile Right Controls: Clean, Non-wrapping layout */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-[#36415A] text-[#E0F8C7] border border-[#B7D894]/30 flex items-center gap-1 active:scale-95 transition-transform"
              aria-label="Open resume in Google Drive"
            >
              <FileText className="w-3.5 h-3.5 text-[#B7D894]" />
              <span>Resume</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#36415A] text-[#F8FAFC] hover:text-[#B7D894] border border-[#CBD5E1]/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7D894] active:scale-95 transition-transform"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#B7D894]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed top-[68px] inset-x-0 bottom-0 bg-[#202734]/98 backdrop-blur-2xl border-t border-[#36415A] z-40 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="max-w-[1200px] mx-auto px-5 py-6 flex flex-col justify-between min-h-[calc(100dvh-68px)]">
            {/* Nav links list */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1 px-1">
                Navigation
              </span>

              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? "bg-[#36415A] text-[#B7D894] border border-[#B7D894]/30"
                        : "text-[#CBD5E1] hover:text-[#F8FAFC] hover:bg-[#36415A]/50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      {isActive ? "●" : "→"}
                    </span>
                  </a>
                );
              })}

              {/* Mobile Menu Resume Card */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#E0F8C7] bg-[#36415A]/80 border border-[#B7D894]/40 hover:bg-[#36415A] transition-colors mt-2"
              >
                <span className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#B7D894]" />
                  <span>Resume / CV (Google Drive)</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#B7D894]" />
              </a>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="pt-6 border-t border-[#36415A] flex flex-col gap-4 mt-6 mb-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold bg-[#B7D894] text-[#131924] hover:bg-[#E0F8C7] active:scale-95 transition-all shadow-md shadow-[#B7D894]/15"
              >
                <span>Let&apos;s Talk</span>
                <MessageSquare className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-xs text-[#94A3B8] font-mono px-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B7D894]" />
                  <span>{personalInfo.location}</span>
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B7D894] flex items-center gap-1"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
