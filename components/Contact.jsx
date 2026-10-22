"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { personalInfo } from "@/data/portfolioData";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  AlertCircle,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || "Portfolio Contact: Collaboration Opportunity"
  )}&body=${encodeURIComponent(
    `Hi Rayhan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#36415A]/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="04 / GET IN TOUCH"
          heading="Have an idea? Let's build something useful."
          description="I'm open to junior frontend developer opportunities, internships, collaborations, and interesting projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-2xl bg-[#36415A] border border-[#36415A] hover:border-[#B7D894]/30 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-lg bg-[#202734] text-[#B7D894]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#94A3B8] uppercase">
                    Direct Email
                  </div>
                  <div className="text-sm font-semibold text-[#F8FAFC]">
                    {personalInfo.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#202734]">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-[#B7D894] text-[#131924] hover:bg-[#E0F8C7] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-[#202734] text-[#CBD5E1] hover:text-[#F8FAFC] border border-[#CBD5E1]/10 transition-colors"
                  aria-label="Copy email address"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B7D894]" />
                      <span className="text-[#B7D894]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#36415A] border border-[#36415A] hover:border-[#B7D894]/40 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[#202734] text-[#E0F8C7]">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#B7D894] transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#94A3B8]">Professional</div>
                  <div className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#B7D894] transition-colors">
                    LinkedIn Profile
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#36415A] border border-[#36415A] hover:border-[#B7D894]/40 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-[#202734] text-[#E0F8C7]">
                    <GitHubIcon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#B7D894] transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#94A3B8]">Code Repositories</div>
                  <div className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#B7D894] transition-colors">
                    GitHub Profile
                  </div>
                </div>
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="p-5 rounded-xl bg-[#202734] border border-[#36415A] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#B7D894]" />
                <div className="text-xs">
                  <span className="text-[#94A3B8]">Location: </span>
                  <span className="text-[#F8FAFC] font-semibold">{personalInfo.location}</span>
                </div>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#36415A] text-[#E0F8C7]">
                UTC+6
              </span>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-[#36415A] border border-[#36415A] rounded-2xl p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1]">
                Fill out the form below or contact me directly via email.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-[#202734] border border-[#B7D894]/40 space-y-4">
                <div className="flex items-center gap-2 text-[#B7D894] font-semibold text-base">
                  <Check className="w-5 h-5" />
                  <span>Message Prepared Successfully!</span>
                </div>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Because this is a static frontend portfolio without a third-party backend database, you can launch your email client with one click to send this drafted message directly to Rayhan.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#B7D894] text-[#131924] hover:bg-[#E0F8C7] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2.5 rounded-lg text-sm font-medium bg-[#36415A] text-[#F8FAFC] hover:bg-[#36415A]/80 transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-[#CBD5E1] uppercase tracking-wider mb-1.5"
                    >
                      Your Name <span className="text-[#B7D894]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rahman"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#202734] border ${
                        errors.name
                          ? "border-red-400 focus:border-red-400"
                          : "border-[#36415A] focus:border-[#B7D894]"
                      } text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none transition-colors`}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-[#CBD5E1] uppercase tracking-wider mb-1.5"
                    >
                      Your Email <span className="text-[#B7D894]">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#202734] border ${
                        errors.email
                          ? "border-red-400 focus:border-red-400"
                          : "border-[#36415A] focus:border-[#B7D894]"
                      } text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none transition-colors`}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-[#CBD5E1] uppercase tracking-wider mb-1.5"
                  >
                    Subject <span className="text-[#B7D894]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Junior Frontend Opportunity / Collaboration"
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#202734] border ${
                      errors.subject
                        ? "border-red-400 focus:border-red-400"
                        : "border-[#36415A] focus:border-[#B7D894]"
                    } text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none transition-colors`}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-[#CBD5E1] uppercase tracking-wider mb-1.5"
                  >
                    Message <span className="text-[#B7D894]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, project, or opportunity..."
                    className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#202734] border ${
                      errors.message
                        ? "border-red-400 focus:border-red-400"
                        : "border-[#36415A] focus:border-[#B7D894]"
                    } text-[#F8FAFC] placeholder-[#94A3B8]/60 focus:outline-none transition-colors resize-none`}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#B7D894] text-[#131924] hover:bg-[#E0F8C7] transition-all duration-200 shadow-md shadow-[#B7D894]/15 active:scale-[0.99]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="mt-2 text-center text-[11px] text-[#94A3B8]">
                    Client-side validation verified. No spam or third-party tracking.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
