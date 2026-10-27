"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, X } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import CherryBlossomPetals from "@/components/hero/CherryBlossomPetals";
import { personalData } from "@/data/portfolioData";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all the required fields correctly.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrorMessage("");
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Failed to send message. Please try again later.");
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMessage("Network error. Please check your internet connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
      className="relative w-full min-h-[720px] lg:min-h-[820px] overflow-hidden bg-[#FFFDF9] text-[#17191F] font-sans scroll-mt-20 py-16 sm:py-24 px-5 sm:px-8 md:px-12 flex items-center"
    >
      {/* ====================================================================
          1. Full-Width Background: Anime Friends Sharing a Warm Meal
          ==================================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu will-change-transform backface-hidden [contain:paint]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/cherry-blossom-teahouse.webp"
          alt="Anime Friends Sharing a Warm Meal overlooking cherry blossom teahouse terrace"
          className="h-full w-full object-cover object-[70%_center] sm:object-center transform-gpu backface-hidden opacity-95"
          fetchPriority="high"
          decoding="async"
        />

        {/* Ambient porcelain light filter for optimal card contrast */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#FFFDF9]/65 via-[#FFFDF9]/20 to-transparent
            sm:from-[#FFFDF9]/50 sm:via-transparent sm:to-transparent
            pointer-events-none
          "
          aria-hidden="true"
        />

        {/* Top & Bottom Soft Feathering to blend with neighboring sections */}
        <div
          className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFFDF9]/60 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#FFFDF9] via-[#FFFDF9]/70 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ====================================================================
          2. Seamless Falling Sakura Petals Drift
          ==================================================================== */}
      <CherryBlossomPetals />

      {/* ====================================================================
          3. Main Content Container
          ==================================================================== */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10">

          {/* Floating Frosted Porcelain Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 15 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[480px] bg-white/92 backdrop-blur-md border border-white/90 shadow-[0_20px_50px_rgba(20,25,35,0.08)] rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 md:p-10 transition-all duration-300"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0ED] text-[#E03131] border border-[#FEE2E2] text-xs font-semibold tracking-wide w-fit mb-5">
              <Mail className="w-3.5 h-3.5 text-[#E03131]" />
              <span>Get In Touch</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-[#17191F] font-heading leading-[1.15] mb-3">
              Let's <span className="text-[#E03131]">Connect</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-7 sm:mb-8">
              Have a project, opportunity, or just want to say hi? I'd love to hear from you.
            </p>

            {/* Direct Contact List */}
            <div className="flex flex-col gap-4 sm:gap-5 mb-8">

              {/* Email Row */}
              <a
                href={`mailto:${personalData?.contact?.email || "mahaveerk.dev@gmail.com"}`}
                className="group flex items-center gap-4 p-2 sm:p-2.5 -mx-2 rounded-2xl hover:bg-[#FFF5F4] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0ED] text-[#E03131] border border-[#FEE2E2]/60 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#FEE2E2]">
                  <Mail className="w-5 h-5 text-[#E03131]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-[15px] font-semibold text-[#17191F] group-hover:text-[#E03131] transition-colors truncate">
                    {personalData?.contact?.email || "mahaveerk.dev@gmail.com"}
                  </p>
                </div>
              </a>

              {/* Phone Row */}
              <a
                href={`tel:${personalData?.contact?.phoneClean || "+916374827794"}`}
                className="group flex items-center gap-4 p-2 sm:p-2.5 -mx-2 rounded-2xl hover:bg-[#FFF5F4] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0ED] text-[#E03131] border border-[#FEE2E2]/60 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#FEE2E2]">
                  <Phone className="w-5 h-5 text-[#E03131]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-[15px] font-semibold text-[#17191F] group-hover:text-[#E03131] transition-colors">
                    {personalData?.contact?.phone || "+91 63748 27794"}
                  </p>
                </div>
              </a>

              {/* Location Row */}
              <a
                href="https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-2 sm:p-2.5 -mx-2 rounded-2xl hover:bg-[#FFF5F4] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF0ED] text-[#E03131] border border-[#FEE2E2]/60 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#FEE2E2]">
                  <MapPin className="w-5 h-5 text-[#E03131]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm sm:text-[15px] font-semibold text-[#17191F] group-hover:text-[#E03131] transition-colors">
                    Coimbatore, Tamil Nadu - 642007
                  </p>
                </div>
              </a>

            </div>

            {/* Follow Me Section */}
            <div className="pt-2 border-t border-[#F1F3F5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-[#17191F] mb-3">Follow Me</h4>
                <div className="flex items-center gap-3">
                  {/* GitHub Button */}
                  <a
                    href={personalData?.socials?.github || "https://github.com/MAHAVEER-IT"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#17191F] hover:text-[#E03131] hover:border-[#FCA5A5] hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
                    title="GitHub Profile"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>

                  {/* LinkedIn Button */}
                  <a
                    href={personalData?.socials?.linkedin || "https://linkedin.com/in/mahaveer-k"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm flex items-center justify-center text-[#0A66C2] hover:border-[#93C5FD] hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Direct Message Action Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-[#E03131] hover:bg-[#C53030] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group sm:self-end"
              >
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                <span>Send Note</span>
              </button>
            </div>

          </motion.div>

          {/* Right empty column ensures the anime tea-conversation illustration remains fully visible */}
          <div className="hidden lg:block lg:w-[48%] pointer-events-none" aria-hidden="true" />

        </div>
      </div>

      {/* ====================================================================
          4. Interactive Message Form Modal
          ==================================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/45 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-[#FFFDF9] border border-white/80 shadow-2xl rounded-[32px] p-6 sm:p-8 z-10 overflow-hidden"
            >
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#E03131] via-[#FA5252] to-[#E03131]" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 text-[#4B5563] hover:text-[#17191F] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0ED] text-[#E03131] text-xs font-semibold tracking-wide mb-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send a Message</span>
                </div>
                <h3 className="text-2xl font-bold text-[#17191F] font-heading">
                  Let's Talk About Your Project
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-1">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-name" className="text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                      Your Name <span className="text-[#E03131]">*</span>
                    </label>
                    <input
                      type="text"
                      id="modal-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Chen"
                      disabled={status === "sending"}
                      className="px-3.5 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#17191F] text-sm focus:outline-none focus:border-[#E03131] focus:ring-2 focus:ring-[#E03131]/15 transition-all disabled:opacity-50"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-email" className="text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                      Your Email <span className="text-[#E03131]">*</span>
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      disabled={status === "sending"}
                      className="px-3.5 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#17191F] text-sm focus:outline-none focus:border-[#E03131] focus:ring-2 focus:ring-[#E03131]/15 transition-all disabled:opacity-50"
                      required
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-subject" className="text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="modal-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    disabled={status === "sending"}
                    className="px-3.5 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#17191F] text-sm focus:outline-none focus:border-[#E03131] focus:ring-2 focus:ring-[#E03131]/15 transition-all disabled:opacity-50"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-message" className="text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                    Message <span className="text-[#E03131]">*</span>
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your product, timeline, or idea..."
                    disabled={status === "sending"}
                    className="px-3.5 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-[#17191F] text-sm focus:outline-none focus:border-[#E03131] focus:ring-2 focus:ring-[#E03131]/15 transition-all disabled:opacity-50 resize-none"
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="mt-2 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold text-white bg-[#E03131] hover:bg-[#C53030] transition-all shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>

                {/* Status Message Panel */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm mt-2"
                    >
                      <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                      <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm mt-2"
                    >
                      <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
                      <span>{errorMessage || "Please fill out all the required fields correctly."}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
