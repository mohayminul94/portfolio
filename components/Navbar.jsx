"use client";

import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#202734]/90 backdrop-blur-md border-b border-[#36415A] shadow-lg shadow-black/10 py-3.5"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-1.5 text-xl font-bold font-mono tracking-tight text-[#F8FAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7D894] rounded px-1"
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

          {/* Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#B7D894] text-[#131924] hover:bg-[#E0F8C7] transition-all duration-200 shadow-sm hover:shadow-[#B7D894]/20 hover:shadow-md active:scale-95"
            >
              <span>Let&apos;s Talk</span>
              <MessageSquare className="w-4 h-4 text-[#131924]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#B7D894] text-[#131924] hover:bg-[#E0F8C7]"
            >
              Let&apos;s Talk
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#36415A] text-[#F8FAFC] hover:text-[#B7D894] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7D894]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[65px] bg-[#202734]/98 backdrop-blur-xl border-t border-[#36415A] z-40 transition-all duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col justify-between h-[calc(100vh-65px)]">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">
                Navigation
              </span>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      isActive
                        ? "bg-[#36415A] text-[#B7D894] font-semibold"
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
            </div>

            <div className="pt-6 border-t border-[#36415A] flex flex-col gap-4 mb-8">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold bg-[#B7D894] text-[#131924] hover:bg-[#E0F8C7] transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <MessageSquare className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between text-xs text-[#94A3B8] font-mono px-2">
                <span>{personalInfo.location}</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B7D894] flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
