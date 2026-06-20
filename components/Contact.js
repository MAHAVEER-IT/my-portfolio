"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Contact() {
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
      className="relative py-24 md:py-32 px-6 md:px-12 bg-brand-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text font-heading">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-base md:text-lg text-brand-text-muted mt-3 max-w-xl">
            Whether you want to discuss a project, hire me, or just say hello, I'm always open to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="h-full flex flex-col gap-6 p-8 sm:p-10 rounded-[32px] border border-brand-border bg-brand-card shadow-brand"
            >
              <h3 className="text-2xl font-bold text-brand-text font-heading mb-4">
                Contact Information
              </h3>
              
              <div className="flex flex-col gap-6">
                
                {/* Email Item */}
                <a
                  href="mailto:mahaveerk.dev@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-brand-border/40 hover:border-primary/20 hover:bg-brand-bg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">Email Me</h4>
                    <p className="text-sm sm:text-base font-semibold text-brand-text group-hover:text-primary transition-colors">
                      mahaveerk.dev@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone Item */}
                <a
                  href="tel:+916374827794"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-brand-border/40 hover:border-primary/20 hover:bg-brand-bg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">Call Me</h4>
                    <p className="text-sm sm:text-base font-semibold text-brand-text group-hover:text-primary transition-colors">
                      +91 6374827794
                    </p>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-brand-border/40">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">Location</h4>
                    <p className="text-sm sm:text-base font-semibold text-brand-text">
                      Coimbatore, Tamil Nadu
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="mt-auto border-t border-brand-border/60 pt-8">
                <h4 className="text-xs font-bold text-brand-text-muted uppercase tracking-wider mb-4">Follow Me</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/MAHAVEER-IT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-brand-border bg-brand-card hover:text-primary hover:scale-[1.04] transition-all cursor-pointer"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mahaveer-k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-brand-border bg-brand-card hover:text-primary hover:scale-[1.04] transition-all cursor-pointer"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="h-full p-8 sm:p-10 rounded-[32px] border border-brand-border bg-brand-card shadow-brand"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full justify-center">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mahaveer K"
                      disabled={status === "sending"}
                      className="px-4 py-3.5 rounded-xl border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mahaveerk.dev@gmail.com"
                      disabled={status === "sending"}
                      className="px-4 py-3.5 rounded-xl border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
                      required
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration Opportunity"
                    disabled={status === "sending"}
                    className="px-4 py-3.5 rounded-xl border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your product details or business goals..."
                    disabled={status === "sending"}
                    className="px-4 py-3.5 rounded-xl border border-brand-border bg-brand-bg text-brand-text text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all disabled:opacity-50 resize-none"
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary/95 transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
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
                      className="flex items-center gap-2 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm mt-4"
                    >
                      <CheckCircle2 size={16} />
                      <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 text-sm mt-4"
                    >
                      <AlertCircle size={16} />
                      <span>{errorMessage || "Please fill out all the required fields correctly."}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
