"use client";

import React, { useState, useRef, useEffect } from "react";

function formatChatText(text) {
  if (!text) return "";
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={i} className="h-1.5" />;

    const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    const parsed = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={j} className="font-bold text-[#fef08a]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("[") && part.includes("](")) {
        const textMatch = part.match(/\[(.*?)\]/);
        const urlMatch = part.match(/\((.*?)\)/);
        if (textMatch && urlMatch) {
          return (
            <a
              key={j}
              href={urlMatch[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#facc15] underline hover:text-white font-medium"
            >
              {textMatch[1]}
            </a>
          );
        }
      }
      return part;
    });

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      return (
        <li key={i} className="ml-3 list-disc leading-relaxed text-[12.5px]">
          {parsed}
        </li>
      );
    }
    return (
      <p key={i} className="leading-relaxed mb-1 text-[12.5px]">
        {parsed}
      </p>
    );
  });
}

export default function PandaChatbot({
  size = 125,
  customImageSrc = null, // Optional: pass your PNG path here if you want PNG + Sakura overlay mode
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isSending, setIsSending] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Ni hao! 🌸 I am **BaoBao**, Mahaveer's AI companion wired directly to his portfolio RAG knowledge base. Ask me about his projects, skills, education, or credentials!",
      citations: ["portfolioData.js"],
    },
  ]);
  const [input, setInput] = useState("");
  const avatarRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Deterministic sakura petals for smooth aesthetic background animation
  const sakuraPetals = [
    { id: 1, left: "18%", size: 11, delay: "0s", duration: "4.2s", sway: "18px" },
    { id: 2, left: "32%", size: 8, delay: "1.1s", duration: "5.0s", sway: "-14px" },
    { id: 3, left: "48%", size: 13, delay: "0.4s", duration: "3.8s", sway: "22px" },
    { id: 4, left: "65%", size: 9, delay: "2.0s", duration: "4.6s", sway: "-16px" },
    { id: 5, left: "78%", size: 12, delay: "0.8s", duration: "4.0s", sway: "15px" },
    { id: 6, left: "25%", size: 10, delay: "2.7s", duration: "5.2s", sway: "20px" },
    { id: 7, left: "58%", size: 7, delay: "1.5s", duration: "3.9s", sway: "-20px" },
    { id: 8, left: "85%", size: 10, delay: "3.1s", duration: "4.4s", sway: "12px" },
    { id: 9, left: "40%", size: 9, delay: "2.3s", duration: "4.8s", sway: "-12px" },
    { id: 10, left: "70%", size: 11, delay: "0.2s", duration: "3.6s", sway: "19px" },
  ];

  // Auto-scroll chat messages to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleMouseMove = (e) => {
    if (!avatarRef.current) return;
    const rect = avatarRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -12;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const executeQuestion = async (queryText) => {
    if (!queryText.trim() || isSending) return;
    const userMsg = queryText.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userMsg,
          chat_history: messages.slice(-5).map((m) => ({
            role: m.sender,
            text: m.text,
          })),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply =
          data.answer ||
          "🌸 I'm here to help! Ask me anything about Mahaveer's projects, skills, or background.";
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: reply,
            citations: data.citations || [],
            mode: data.mode,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "🌸 Ni hao! I am BaoBao. Mahaveer is a Full Stack Developer skilled in Next.js, Flutter, AWS, and AI products. Feel free to explore his projects above or reach him at mahaveerk.dev@gmail.com!",
            citations: ["about_me.md"],
          },
        ]);
      }
    } catch (err) {
      console.error("Panda chat send error:", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "🌸 I received your message! How else can this little panda assist you?",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    executeQuestion(input);
  };

  if (!mounted) return null;

  return (
    <div className="panda-chatbot-wrapper" aria-label="Interactive Panda AI Chatbot">
      <style>{`
        .panda-chatbot-wrapper {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          user-select: none;
          contain: layout style;
        }

        /* Floating Chat Window */
        .panda-chat-window {
          position: absolute;
          bottom: calc(100% + 16px);
          right: 0;
          width: min(350px, calc(100vw - 36px));
          height: 450px;
          max-height: calc(100vh - 120px);
          background: rgba(18, 12, 16, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 2px solid #eab308;
          border-radius: 22px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), 0 0 25px rgba(244, 114, 182, 0.25);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transform-origin: bottom right;
          animation: popWindow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          contain: paint;
        }

        @keyframes popWindow {
          from { opacity: 0; transform: scale(0.85) translateY(16px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .panda-chat-header {
          background: linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #7f1d1d 100%);
          border-bottom: 2px solid #facc15;
          padding: 13px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #fef08a;
          font-weight: 700;
          font-size: 13.5px;
          letter-spacing: 0.3px;
        }

        .panda-chat-messages {
          flex: 1;
          padding: 14px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: relative;
        }

        .panda-msg {
          max-width: 86%;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 12.5px;
          line-height: 1.45;
          word-break: break-word;
        }

        .panda-msg.bot {
          background: rgba(255, 228, 236, 0.12);
          border: 1px solid rgba(244, 114, 182, 0.35);
          color: #fce7f3;
          align-self: flex-start;
          border-bottom-left-radius: 4px;
        }

        .panda-msg.user {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          border: 1px solid #facc15;
          color: #fff;
          align-self: flex-end;
          border-bottom-right-radius: 4px;
        }

        .panda-msg.typing {
          opacity: 0.8;
          font-style: italic;
        }

        .panda-citations {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 6px;
          padding-top: 6px;
          border-top: 1px solid rgba(244, 114, 182, 0.2);
          align-items: center;
        }

        .panda-citation-pill {
          font-size: 10px;
          padding: 1.5px 6px;
          border-radius: 999px;
          background: rgba(234, 179, 8, 0.18);
          color: #fef08a;
          border: 1px solid rgba(250, 204, 21, 0.3);
          font-weight: 600;
        }

        .panda-chat-input {
          display: flex;
          padding: 10px;
          background: rgba(0, 0, 0, 0.55);
          border-top: 1px solid rgba(250, 204, 21, 0.25);
          gap: 8px;
        }

        .panda-chat-input input {
          flex: 1;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(244, 114, 182, 0.3);
          border-radius: 999px;
          padding: 8px 14px;
          color: #fff;
          font-size: 13px;
          outline: none;
        }

        .panda-chat-input input:focus {
          border-color: #f472b6;
        }

        .panda-chat-input button {
          background: linear-gradient(135deg, #facc15, #ca8a04);
          color: #450a0a;
          border: none;
          border-radius: 999px;
          padding: 0 16px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .panda-chat-input button:hover {
          transform: scale(1.05);
        }

        .panda-chat-input button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        /* Avatar Button Container */
        .panda-avatar-btn {
          position: relative;
          border-radius: 50%;
          cursor: pointer;
          perspective: 800px;
          background: transparent;
          border: none;
          padding: 0;
          outline: none;
          transition: filter 0.3s ease;
          contain: layout paint;
        }

        .panda-avatar-btn:hover {
          filter: drop-shadow(0 0 22px rgba(244, 114, 182, 0.65))
                  drop-shadow(0 8px 20px rgba(220, 38, 38, 0.45));
        }

        .panda-avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
          transition: transform 0.18s ease-out;
          background: radial-gradient(circle at 50% 35%, #2a0a18 0%, #0d0408 70%, #050203 100%);
          box-shadow: inset 0 0 25px rgba(244, 114, 182, 0.22);
          contain: strict;
          transform: translateZ(0);
        }

        /* Sakura Falling Keyframes */
        @keyframes sakuraFall {
          0% {
            transform: translateY(-20px) translateX(0px) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 0.95;
          }
          80% {
            opacity: 0.95;
          }
          100% {
            transform: translateY(155px) translateX(var(--sway, 16px)) rotate(340deg) scale(1.05);
            opacity: 0;
          }
        }

        .sakura-petal {
          position: absolute;
          top: -12px;
          pointer-events: none;
          will-change: transform, opacity;
          animation: sakuraFall var(--duration, 4s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
          filter: drop-shadow(0 0 4px rgba(251, 113, 133, 0.6));
        }

        .panda-avatar-btn:hover .sakura-petal {
          animation-duration: calc(var(--duration, 4s) * 0.62);
          filter: drop-shadow(0 0 7px rgba(255, 182, 193, 0.95));
        }

        /* Character Part Animations */
        .panda-head-group {
          transform-origin: 100px 115px;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .panda-avatar-btn:hover .panda-head-group {
          animation: headHappyNod 1.1s ease-in-out infinite alternate;
        }

        @keyframes headHappyNod {
          0% { transform: rotate(-3.5deg) translateY(0px); }
          100% { transform: rotate(4deg) translateY(-4px); }
        }

        .panda-waving-paw {
          transform-origin: 142px 148px;
          transition: transform 0.3s ease;
        }

        .panda-avatar-btn:hover .panda-waving-paw {
          animation: pawWave 0.42s ease-in-out infinite alternate;
        }

        @keyframes pawWave {
          0% { transform: rotate(-14deg) translateY(-2px); }
          100% { transform: rotate(18deg) translateY(-6px); }
        }

        .panda-lantern {
          transform-origin: 168px 42px;
          animation: lanternIdle 3.2s ease-in-out infinite alternate;
        }

        .panda-avatar-btn:hover .panda-lantern {
          animation: lanternHoverSwing 0.85s ease-in-out infinite alternate;
        }

        @keyframes lanternIdle {
          0% { transform: rotate(-3deg); }
          100% { transform: rotate(3deg); }
        }

        @keyframes lanternHoverSwing {
          0% { transform: rotate(-11deg); }
          100% { transform: rotate(11deg); }
        }

        .panda-tassel {
          transform-origin: 68px 66px;
        }

        .panda-avatar-btn:hover .panda-tassel {
          animation: tasselSway 0.65s ease-in-out infinite alternate;
        }

        @keyframes tasselSway {
          0% { transform: rotate(-10deg); }
          100% { transform: rotate(14deg); }
        }

        .sakura-branch-group {
          transform-origin: 20px 60px;
          animation: branchBreeze 4s ease-in-out infinite alternate;
        }

        .panda-avatar-btn:hover .sakura-branch-group {
          animation: branchBreeze 1.4s ease-in-out infinite alternate;
        }

        @keyframes branchBreeze {
          0% { transform: rotate(-1.5deg); }
          100% { transform: rotate(2.5deg); }
        }

        .panda-cheeks {
          transition: opacity 0.3s ease, transform 0.3s ease;
          opacity: 0.75;
        }

        .panda-avatar-btn:hover .panda-cheeks {
          opacity: 1;
          filter: drop-shadow(0 0 6px rgba(244, 63, 94, 0.8));
        }

        /* Tooltip Greeting Bubble */
        .panda-greeting-pill {
          position: absolute;
          right: calc(100% + 14px);
          top: 50%;
          transform: translateY(-50%) scale(0.9);
          background: linear-gradient(135deg, #991b1b, #7f1d1d);
          border: 1.5px solid #facc15;
          color: #fef08a;
          padding: 7px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
        }

        .panda-avatar-btn:hover .panda-greeting-pill {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        @media (max-width: 640px) {
          .panda-chatbot-wrapper {
            bottom: 18px;
            right: 18px;
          }
          .panda-greeting-pill {
            display: none;
          }
        }
      `}</style>

      {/* Expandable Chat Window */}
      {isOpen && (
        <div className="panda-chat-window">
          <div className="panda-chat-header">
            <span className="flex items-center gap-1.5">
              <span>🌸</span>
              <span>BaoBao RAG Assistant</span>
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fef08a",
                fontSize: "18px",
                cursor: "pointer",
                padding: "4px 8px",
              }}
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          <div className="panda-chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`panda-msg ${m.sender}`}>
                <div>{formatChatText(m.text)}</div>
                {m.citations && m.citations.length > 0 && (
                  <div className="panda-citations">
                    <span className="text-[10px] text-pink-200/60 font-semibold mr-1">RAG Sources:</span>
                    {m.citations.map((c, idx) => (
                      <span key={idx} className="panda-citation-pill">
                        📄 {c}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Quick Prompts when starting */}
            {messages.length === 1 && !isSending && (
              <div className="mt-2 p-2.5 rounded-xl bg-white/5 border border-yellow-400/20">
                <p className="text-[11px] text-yellow-200/80 mb-2 font-semibold">
                  Ask BaoBao about Mahaveer:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Top Projects",
                    "Tech Stack",
                    "Achievements",
                    "Contact Details",
                  ].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => executeQuestion(q)}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 hover:bg-yellow-400/20 text-yellow-100 hover:text-yellow-300 border border-yellow-400/30 transition-all text-left cursor-pointer active:scale-95"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isSending && (
              <div className="panda-msg bot typing flex items-center gap-2">
                <span>🌸 BaoBao is searching knowledge base...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="panda-chat-input" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask BaoBao anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isSending}
            />
            <button type="submit" disabled={isSending || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      )}

      {/* Interactive Panda Avatar Button */}
      <button
        ref={avatarRef}
        type="button"
        className="panda-avatar-btn"
        style={{ width: size, height: size }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open Panda Chatbot"
      >
        {!isOpen && (
          <div className="panda-greeting-pill">
            {isHovered ? "Ni Hao! Click to chat 🌸" : "Chat with me!"}
          </div>
        )}

        <div
          className="panda-avatar-inner"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
              isHovered ? 1.06 : 1
            })`,
          }}
        >
          {/* LAYER 1: Aesthetic Falling Sakura Petals in Background */}
          {sakuraPetals.map((petal) => (
            <svg
              key={petal.id}
              className="sakura-petal"
              style={{
                left: petal.left,
                width: petal.size,
                height: petal.size,
                "--delay": petal.delay,
                "--duration": petal.duration,
                "--sway": petal.sway,
              }}
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C8 6 4 11 6 17C7.5 21 12 22 12 19C12 22 16.5 21 18 17C20 11 16 6 12 2Z"
                fill="url(#sakuraGradPanda)"
              />
              <defs>
                <linearGradient id="sakuraGradPanda" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fbcfe8" />
                  <stop offset="60%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          ))}

          {/* Optional Custom PNG Mode OR Full Multi-Layer Animated Vector Rig */}
          {customImageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={customImageSrc}
              alt="Chibi Panda Avatar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "relative",
                zIndex: 2,
                transition: "transform 0.35s ease",
                transform: isHovered ? "scale(1.05) rotate(2deg)" : "scale(1)",
              }}
            />
          ) : (
            /* LAYER 2: Animated Multi-Part Chibi Panda SVG */
            <svg
              viewBox="0 0 200 200"
              width="100%"
              height="100%"
              style={{ position: "relative", zIndex: 2 }}
            >
              <defs>
                <clipPath id="circleClip">
                  <circle cx="100" cy="100" r="92" />
                </clipPath>
                <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#a16207" />
                </linearGradient>
                <linearGradient id="redSilk" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="55%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#991b1b" />
                </linearGradient>
                <radialGradient id="cheekGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fb7185" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
                </radialGradient>
              </defs>

              <g clipPath="url(#circleClip)">
                {/* Top-Left Aesthetic Sakura Branch */}
                <g className="sakura-branch-group">
                  <path
                    d="M8 92 Q32 50 78 16 M24 68 Q45 58 58 42"
                    stroke="#5c2d16"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Blossoms along the branch */}
                  {[
                    { cx: 22, cy: 76, r: 9 },
                    { cx: 36, cy: 52, r: 10 },
                    { cx: 55, cy: 36, r: 9 },
                    { cx: 74, cy: 20, r: 8 },
                    { cx: 48, cy: 55, r: 7 },
                  ].map((b, idx) => (
                    <g
                      key={idx}
                      transform={`translate(${b.cx}, ${b.cy}) scale(${b.r / 10})`}
                    >
                      {[0, 72, 144, 216, 288].map((angle) => (
                        <ellipse
                          key={angle}
                          cx="0"
                          cy="-6"
                          rx="4.2"
                          ry="6.5"
                          fill="#f472b6"
                          stroke="#fbcfe8"
                          strokeWidth="0.8"
                          transform={`rotate(${angle})`}
                        />
                      ))}
                      <circle cx="0" cy="0" r="2.5" fill="#fef08a" />
                    </g>
                  ))}
                </g>

                {/* Swinging Red & Gold Chinese Lantern (Right) */}
                <g className="panda-lantern">
                  <line
                    x1="168"
                    y1="8"
                    x2="168"
                    y2="56"
                    stroke="#facc15"
                    strokeWidth="2.5"
                  />
                  {/* Lantern Body */}
                  <ellipse
                    cx="168"
                    cy="74"
                    rx="20"
                    ry="17"
                    fill="url(#redSilk)"
                    stroke="#facc15"
                    strokeWidth="2"
                  />
                  <path
                    d="M160 58 Q152 74 160 90 M176 58 Q184 74 176 90"
                    stroke="#facc15"
                    strokeWidth="1.2"
                    fill="none"
                    opacity="0.7"
                  />
                  {/* Golden Blossom on Lantern */}
                  <circle cx="168" cy="74" r="5" fill="#fef08a" />
                  {/* Caps & Tassel */}
                  <rect
                    x="159"
                    y="55"
                    width="18"
                    height="4"
                    rx="1.5"
                    fill="url(#goldRim)"
                  />
                  <rect
                    x="160"
                    y="90"
                    width="16"
                    height="4"
                    rx="1.5"
                    fill="url(#goldRim)"
                  />
                  <path
                    d="M168 94 L165 112 L171 112 Z"
                    fill="#ef4444"
                    stroke="#facc15"
                    strokeWidth="0.8"
                  />
                </g>

                {/* Panda Torso (Red Tangzhuang Jacket) */}
                <g className="panda-body">
                  <path
                    d="M38 195 C42 146 66 132 100 132 C134 132 156 148 160 195 Z"
                    fill="url(#redSilk)"
                    stroke="#eab308"
                    strokeWidth="3"
                  />
                  {/* Golden Collar & Center Trim */}
                  <path
                    d="M68 134 Q100 152 130 134"
                    fill="none"
                    stroke="url(#goldRim)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="108"
                    y1="145"
                    x2="114"
                    y2="195"
                    stroke="url(#goldRim)"
                    strokeWidth="5"
                  />
                  {/* Traditional Gold Frog Buttons */}
                  <g stroke="url(#goldRim)" strokeWidth="3" fill="none">
                    <path d="M96 154 L120 151" strokeLinecap="round" />
                    <circle cx="94" cy="154" r="3.5" fill="#eab308" />
                    <circle cx="122" cy="151" r="3.5" fill="#eab308" />

                    <path d="M98 171 L122 168" strokeLinecap="round" />
                    <circle cx="96" cy="171" r="3.5" fill="#eab308" />
                    <circle cx="124" cy="168" r="3.5" fill="#eab308" />
                  </g>
                  {/* Auspicious Cloud Detail on Robe */}
                  <path
                    d="M62 166 Q68 158 76 164 Q83 160 84 168 Q75 174 62 166 Z"
                    fill="none"
                    stroke="#facc15"
                    strokeWidth="2"
                    opacity="0.85"
                  />
                </g>

                {/* Panda Head Group (Tilts & Bounces on Hover) */}
                <g className="panda-head-group">
                  {/* Round Black Ears */}
                  <circle cx="48" cy="78" r="22" fill="#1c1917" />
                  <circle cx="142" cy="64" r="21" fill="#1c1917" />

                  {/* Fluffy White Chibi Head */}
                  <ellipse
                    cx="100"
                    cy="98"
                    rx="54"
                    ry="44"
                    fill="#ffffff"
                    stroke="#e7e5e4"
                    strokeWidth="1.5"
                  />

                  {/* Blushing Cheeks */}
                  <g className="panda-cheeks">
                    <ellipse
                      cx="66"
                      cy="112"
                      rx="13"
                      ry="7.5"
                      fill="url(#cheekGlow)"
                    />
                    <ellipse
                      cx="138"
                      cy="102"
                      rx="13"
                      ry="7.5"
                      fill="url(#cheekGlow)"
                    />
                  </g>

                  {/* Iconic Panda Eye Patches */}
                  <ellipse
                    cx="76"
                    cy="94"
                    rx="16"
                    ry="13"
                    transform="rotate(-14 76 94)"
                    fill="#1c1917"
                  />
                  <ellipse
                    cx="125"
                    cy="88"
                    rx="15"
                    ry="12.5"
                    transform="rotate(14 125 88)"
                    fill="#1c1917"
                  />

                  {/* Happy Curved Anime Eyes */}
                  <path
                    d="M68 95 Q76 84 85 93"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M117 88 Q125 78 133 88"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Cute Nose & Joyful Open Mouth */}
                  <ellipse cx="103" cy="98" rx="5.5" ry="3.8" fill="#1c1917" />
                  <path
                    d="M92 104 Q103 109 114 102 C114 120 94 122 92 104 Z"
                    fill="#991b1b"
                    stroke="#1c1917"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  {/* Pink Tongue */}
                  <path
                    d="M95 110 Q103 106 111 110 C110 118 97 119 95 110 Z"
                    fill="#fb7185"
                  />

                  {/* Traditional Red Mandarin Cap */}
                  <path
                    d="M56 68 C62 32 122 28 134 60 Z"
                    fill="url(#redSilk)"
                    stroke="#7f1d1d"
                    strokeWidth="2"
                  />
                  {/* Golden Cap Brim */}
                  <path
                    d="M54 69 Q95 52 136 60"
                    fill="none"
                    stroke="url(#goldRim)"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                  />
                  {/* Golden Top Knob & Decorative Knot */}
                  <ellipse
                    cx="91"
                    cy="33"
                    rx="7"
                    ry="5"
                    fill="url(#goldRim)"
                  />
                  <circle
                    cx="95"
                    cy="48"
                    r="6"
                    fill="none"
                    stroke="url(#goldRim)"
                    strokeWidth="3"
                  />

                  {/* Swaying Red Hat Tassel */}
                  <g className="panda-tassel">
                    <path
                      d="M86 35 Q72 48 68 66"
                      stroke="#ef4444"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle cx="68" cy="66" r="4" fill="url(#goldRim)" />
                    <path
                      d="M64 68 L60 88 L73 88 L71 68 Z"
                      fill="#dc2626"
                      stroke="#7f1d1d"
                      strokeWidth="1.2"
                    />
                  </g>
                </g>

                {/* Waving Left Paw with Cute Pink Toe Beans */}
                <g className="panda-waving-paw">
                  {/* Red Sleeve Cuff */}
                  <path
                    d="M128 145 C135 128 158 135 156 164 C144 170 132 162 128 145 Z"
                    fill="url(#redSilk)"
                    stroke="url(#goldRim)"
                    strokeWidth="4"
                  />
                  {/* Raised Black Panda Paw */}
                  <ellipse
                    cx="152"
                    cy="126"
                    rx="15"
                    ry="21"
                    transform="rotate(25 152 126)"
                    fill="#1c1917"
                    stroke="#292524"
                    strokeWidth="1.5"
                  />
                  {/* Pink Paw Pads */}
                  <ellipse
                    cx="152"
                    cy="129"
                    rx="6.5"
                    ry="5"
                    transform="rotate(25 152 129)"
                    fill="#fb7185"
                  />
                  <circle cx="147" cy="117" r="2.8" fill="#fb7185" />
                  <circle cx="155" cy="116" r="2.8" fill="#fb7185" />
                  <circle cx="161" cy="121" r="2.8" fill="#fb7185" />
                </g>
              </g>

              {/* Outer Double Gold & Red Circular Medallion Frame */}
              <circle
                cx="100"
                cy="100"
                r="94"
                fill="none"
                stroke="url(#goldRim)"
                strokeWidth="3.5"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#b91c1c"
                strokeWidth="4.5"
              />
              <circle
                cx="100"
                cy="100"
                r="87"
                fill="none"
                stroke="url(#goldRim)"
                strokeWidth="2"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
