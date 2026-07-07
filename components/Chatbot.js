"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, AlertCircle, Link as LinkIcon, HelpCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper to format simple markdown-like syntax safely in React
function formatMarkdown(text) {
  if (!text) return "";
  
  const lines = text.split('\n');
  const elements = [];
  let inList = false;
  let listItems = [];

  const parseInline = (content) => {
    // Basic bold parsing: **text**
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={j} className="font-bold text-primary dark:text-accent font-heading">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // Simple link parser: [text](url)
      const linkParts = part.split(/(\[.*?\]\(.*?\))/g);
      return linkParts.map((linkPart, k) => {
        if (linkPart.startsWith('[') && linkPart.includes('](')) {
          const textMatch = linkPart.match(/\[(.*?)\]/);
          const urlMatch = linkPart.match(/\((.*?)\)/);
          if (textMatch && urlMatch) {
            return (
              <a
                key={k}
                href={urlMatch[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-accent hover:underline font-semibold inline-flex items-center gap-0.5"
              >
                {textMatch[1]}
              </a>
            );
          }
        }
        return linkPart;
      });
    });
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    
    // Bullet list handler
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      if (!inList) {
        inList = true;
        listItems = [];
      }
      listItems.push(
        <li key={`li-${i}`} className="ml-4 list-disc text-xs sm:text-sm text-brand-text-muted leading-relaxed mb-1">
          {parseInline(trimmed.substring(2))}
        </li>
      );
    } else {
      if (inList) {
        elements.push(
          <ul key={`ul-${i}`} className="my-2 space-y-1">
            {listItems}
          </ul>
        );
        inList = false;
      }
      
      // Header handlers
      if (trimmed.startsWith('### ')) {
        elements.push(
          <h4 key={`h4-${i}`} className="text-sm font-bold text-brand-text mt-3 mb-1 font-heading">
            {parseInline(trimmed.substring(4))}
          </h4>
        );
      } else if (trimmed.startsWith('## ')) {
        elements.push(
          <h3 key={`h3-${i}`} className="text-base font-bold text-primary dark:text-accent mt-4 mb-2 font-heading">
            {parseInline(trimmed.substring(3))}
          </h3>
        );
      } else if (trimmed.startsWith('# ')) {
        elements.push(
          <h2 key={`h2-${i}`} className="text-lg font-bold text-primary dark:text-accent mt-4 mb-2 border-b border-brand-border/40 pb-1 font-heading">
            {parseInline(trimmed.substring(2))}
          </h2>
        );
      } else if (trimmed === "") {
        elements.push(<div key={`space-${i}`} className="h-2" />);
      } else {
        elements.push(
          <p key={`p-${i}`} className="text-xs sm:text-sm text-brand-text leading-relaxed mb-2">
            {parseInline(line)}
          </p>
        );
      }
    }
  });

  if (inList) {
    elements.push(
      <ul key="ul-end" className="my-2 space-y-1">
        {listItems}
      </ul>
    );
  }

  return elements;
}

const suggestions = [
  "What is Geo-Guardian?",
  "Tell me about NoteMate",
  "What did Mahaveer do at Better Tomorrow?",
  "How can I contact Mahaveer?",
];

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.4 + 0.1;
      }
      update(width, height) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }
      draw() {
        ctx.fillStyle = `rgba(46, 125, 107, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particlesArray = [];
    const numberOfParticles = 25;
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas.width, canvas.height);
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      style={{ opacity: 0.75 }}
    />
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! 👋 I'm Mahaveer's AI assistant. Ask me anything about his qualifications, experience, tech skills, or projects!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: text,
          chat_history: messages.slice(-5).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with RAG Service");
      }

      const data = await response.json();
      
      const assistantMessage = {
        role: "assistant",
        content: data.answer,
        citations: data.citations || [],
        confidence: data.confidence || 0.0,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again later.",
          error: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none font-sans">
      {/* Floating Toggle Button with Glowing Ring */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-primary/30 cursor-pointer transition-all duration-300 group z-50"
        title="Chat with Mahaveer's AI Assistant"
      >
        {/* Glowing border ring */}
        <div className="absolute inset-[-3px] rounded-full bg-gradient-to-tr from-primary via-accent to-primary opacity-40 group-hover:opacity-100 blur-[3px] transition-opacity duration-500 -z-10 animate-pulse-slow" />
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative"
            >
              <MessageSquare size={22} />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-90"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.93 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="absolute bottom-18 right-0 w-[90vw] sm:w-[440px] h-[600px] rounded-[28px] border border-brand-border bg-brand-card/95 backdrop-blur-xl shadow-brand overflow-hidden flex flex-col z-50 text-left border-primary/10 shadow-[0_20px_50px_var(--shadow-color)]"
          >
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none -z-10" />
            <ParticleBackground />

            {/* Header with Glassmorphism */}
            <div className="p-4 border-b border-brand-border bg-primary/4 dark:bg-primary/10 flex items-center justify-between relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/8 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-accent shadow-inner">
                  <Sparkles size={18} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-brand-text font-heading">AI Portfolio Assistant</h3>
                  <span className="text-[10px] text-primary dark:text-accent font-bold flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-accent animate-ping" />
                    Gemini 2.5 RAG Model
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-brand-border/60 rounded-xl text-brand-text-muted hover:text-brand-text transition-colors cursor-pointer group"
              >
                <X size={16} className="group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Messages Screen */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-brand-border scrollbar-track-transparent">
              <AnimatePresence initial={false}>
                {messages.map((msg, index) => {
                  const isUser = msg.role === "user";
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      {/* Bubble with layout details */}
                      <div
                        className={`max-w-[85%] p-4 rounded-2xl text-left shadow-sm ${
                          isUser
                            ? "bg-primary text-white rounded-br-none"
                            : msg.error
                            ? "bg-red-500/10 border border-red-500/20 text-brand-text rounded-bl-none"
                            : "bg-brand-bg border border-brand-border/80 text-brand-text rounded-bl-none hover:border-primary/10 transition-colors"
                        }`}
                      >
                        {/* Message Content */}
                        <div className="prose prose-sm dark:prose-invert">
                          {isUser ? msg.content : formatMarkdown(msg.content)}
                        </div>

                        {/* Error State */}
                        {msg.error && (
                          <div className="flex items-center gap-1.5 mt-2.5 text-[10px] font-semibold text-red-500">
                            <AlertCircle size={12} />
                            <span>Connection error</span>
                          </div>
                        )}

                        {/* Citations metadata row */}
                        {!isUser && msg.citations && msg.citations.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-brand-border/50 flex flex-wrap items-center gap-1.5 text-[10px] text-brand-text-muted font-mono font-bold uppercase tracking-wider">
                            <LinkIcon size={10} className="text-primary dark:text-accent" />
                            <span>Source:</span>
                            {msg.citations.map((cite, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-2 py-0.5 rounded-full bg-brand-border/40 text-[9px] text-brand-text border border-brand-border/20"
                              >
                                {cite}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Advanced Typing Wave Loader */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-brand-bg border border-brand-border p-4 rounded-2xl rounded-bl-none flex items-center gap-2 shadow-sm">
                    <span className="text-[10px] text-brand-text-muted font-semibold mr-1 font-mono uppercase tracking-wider animate-pulse">thinking</span>
                    <div className="flex items-center gap-1 h-3">
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                      />
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                      />
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
                        className="w-1.5 h-1.5 rounded-full bg-primary"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips with Staggered Slide In */}
            {messages.length === 1 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06 }
                  }
                }}
                className="px-5 py-3 border-t border-brand-border/40 flex flex-col gap-2 bg-brand-bg/30"
              >
                <div className="flex items-center gap-1 text-[10px] font-bold text-brand-text-muted uppercase tracking-wider mb-0.5">
                  <HelpCircle size={10} className="text-primary" />
                  <span>Frequently Asked</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((sug, idx) => (
                    <motion.button
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSendMessage(sug)}
                      className="text-[11px] font-semibold text-brand-text-muted hover:text-primary dark:hover:text-accent bg-brand-card hover:bg-primary/5 border border-brand-border/80 px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1"
                    >
                      {sug}
                      <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Chat Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-4 border-t border-brand-border bg-brand-card flex gap-2.5 items-center relative"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4.5 py-3.5 text-xs sm:text-sm bg-brand-bg border border-brand-border rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-brand-text placeholder-brand-text-muted/65 transition-all shadow-inner"
                disabled={isLoading}
              />
              <motion.button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3.5 rounded-xl bg-primary hover:bg-primary/95 text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors shadow-md shadow-primary/10"
              >
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
