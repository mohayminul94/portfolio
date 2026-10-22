"use client";

import { useState } from "react";
import {
  Code2,
  Terminal,
  CheckCircle2,
  Sparkles,
  FileCode,
  Layers,
  Cpu,
} from "lucide-react";

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState("developer");

  const developerCode = `// Rayhan's Developer Profile
const rayhan = {
  name: "MD Mohayminul Islam Rayhan",
  role: "Frontend Developer",
  education: "CSE, Dhaka International Univ.",
  location: "Bangladesh",
  coreStack: [
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS"
  ],
  passion: "Crafting intuitive digital experiences",
  status: "Ready for Junior Opportunities"
};

export default rayhan;`;

  const skillsConfig = `// Current Architecture & Toolkit
{
  "focus": "Frontend Engineering",
  "styling": "Tailwind CSS v4",
  "components": "Reusable & Accessible",
  "versionControl": "Git & GitHub",
  "learningNext": [
    "Node.js",
    "Express.js",
    "MongoDB"
  ],
  "cleanCode": true
}`;

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#B7D894]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#36415A]/60 rounded-full blur-2xl pointer-events-none" />

      {/* Main Code Window */}
      <div className="relative rounded-2xl bg-[#36415A]/95 border border-[#36415A] shadow-2xl shadow-black/30 overflow-hidden backdrop-blur-sm">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#202734]/80 border-b border-[#36415A]/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#36415A] border border-[#CBD5E1]/20"></span>
            <span className="w-3 h-3 rounded-full bg-[#36415A] border border-[#CBD5E1]/20"></span>
            <span className="w-3 h-3 rounded-full bg-[#B7D894] shadow-sm shadow-[#B7D894]/50"></span>
          </div>

          {/* Editor Tabs */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab("developer")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-medium transition-colors ${
                activeTab === "developer"
                  ? "bg-[#36415A] text-[#B7D894] border-t-2 border-[#B7D894]"
                  : "text-[#94A3B8] hover:text-[#CBD5E1]"
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Rayhan.jsx</span>
            </button>
            <button
              onClick={() => setActiveTab("config")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-medium transition-colors ${
                activeTab === "config"
                  ? "bg-[#36415A] text-[#B7D894] border-t-2 border-[#B7D894]"
                  : "text-[#94A3B8] hover:text-[#CBD5E1]"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>toolkit.json</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#94A3B8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7D894] animate-pulse"></span>
            <span>Live</span>
          </div>
        </div>

        {/* Code Viewport with Syntax Styling */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto bg-[#202734]/50">
          {activeTab === "developer" ? (
            <pre className="text-[#CBD5E1] space-y-1">
              <div>
                <span className="text-[#94A3B8] italic">// Rayhan&apos;s Developer Profile</span>
              </div>
              <div>
                <span className="text-[#E0F8C7]">const</span>{" "}
                <span className="text-[#B7D894] font-semibold">rayhan</span> = {"{"}
              </div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">name:</span>{" "}
                <span className="text-[#B7D894]">&quot;MD Mohayminul Islam Rayhan&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">role:</span>{" "}
                <span className="text-[#B7D894]">&quot;Frontend Developer&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">education:</span>{" "}
                <span className="text-[#B7D894]">&quot;CSE @ Dhaka International Univ.&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">coreStack:</span> [
              </div>
              <div className="pl-8 text-[#E0F8C7]/90">
                &quot;JavaScript&quot;, &quot;React&quot;, &quot;Next.js&quot;, &quot;Tailwind CSS&quot;
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">passion:</span>{" "}
                <span className="text-[#CBD5E1]">&quot;Building clean &amp; responsive web experiences&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">status:</span>{" "}
                <span className="text-[#B7D894] font-bold">&quot;Available for Junior Roles&quot;</span>
              </div>
              <div>{"};"}</div>
              <div className="pt-2">
                <span className="text-[#E0F8C7]">export default</span> rayhan;
              </div>
            </pre>
          ) : (
            <pre className="text-[#CBD5E1] space-y-1">
              <div>
                <span className="text-[#94A3B8] italic">// Architecture &amp; Current Toolkit</span>
              </div>
              <div>{"{"}</div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">&quot;focus&quot;:</span>{" "}
                <span className="text-[#B7D894]">&quot;Frontend Engineering&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">&quot;styling&quot;:</span>{" "}
                <span className="text-[#B7D894]">&quot;Tailwind CSS&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">&quot;components&quot;:</span>{" "}
                <span className="text-[#B7D894]">&quot;Reusable &amp; Accessible&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">&quot;learningNext&quot;:</span> [
              </div>
              <div className="pl-8 text-[#B7D894]">
                &quot;Node.js&quot;, &quot;Express.js&quot;, &quot;MongoDB&quot;
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-[#E0F8C7]">&quot;cleanCode&quot;:</span>{" "}
                <span className="text-[#B7D894]">true</span>
              </div>
              <div>{"}"}</div>
            </pre>
          )}
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#202734]/90 border-t border-[#36415A] text-[11px] font-mono text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B7D894]" />
              <span>0 Errors</span>
            </span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E0F8C7]">React 19 / Next.js</span>
          </div>
        </div>
      </div>

      {/* Floating Pill Badges */}
      <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-[#36415A] border border-[#B7D894]/40 shadow-xl text-xs font-medium text-[#F8FAFC]">
        <div className="p-1 rounded bg-[#B7D894]/20 text-[#B7D894]">
          <Layers className="w-3.5 h-3.5" />
        </div>
        <span>Responsive &amp; Component-Driven</span>
      </div>

      <div className="hidden sm:flex items-center gap-2 absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-[#36415A] border border-[#B7D894]/40 shadow-xl text-xs font-medium text-[#E0F8C7]">
        <span className="w-2 h-2 rounded-full bg-[#B7D894]"></span>
        <span>Dhaka International University</span>
      </div>
    </div>
  );
}
