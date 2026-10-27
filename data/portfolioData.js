/**
 * Master Portfolio Data Source
 * Consolidated and structured dataset for Mahaveer K's portfolio.
 * Preserves all bio, contact, education, experience, skills, projects, achievements, and credentials.
 */

export const personalData = {
  name: "Mahaveer K",
  greeting: "Hello, I am",
  title: "Full Stack Developer",
  role: "Full Stack Developer & AI Product Builder",
  tagline: "Building scalable web apps, mobile solutions, and playful digital experiences.",
  availability: "Available for Opportunities",
  badge: "LABS.DEV",
  stackSummary: "STACK: NEXT.JS • FLUTTER • AWS",
  location: {
    city: "Coimbatore",
    state: "Tamil Nadu",
    country: "India",
    formatted: "Coimbatore, Tamil Nadu",
  },
  contact: {
    email: "mahaveerk.dev@gmail.com",
    secondaryEmail: "mahaveer.k2023it@sece.ac.in",
    phone: "+91 63748 27794",
    phoneClean: "+916374827794",
    website: "https://www.mahaveer.live",
  },
  socials: {
    github: "https://github.com/MAHAVEER-IT",
    linkedin: "https://linkedin.com/in/mahaveer-k",
    resume: "https://drive.google.com/file/d/1qLrF_P4qrPCr9tN_aykdFe7yUi11Kkzm/view?usp=sharing",
  },
  images: {
    avatar: "/images/mahaveer_profile.png",
    avatarDark: "/images/mahaveer_profile_dark.png",
    logo: "/images/MAHAVEER.png",
    backdrop: "/images/misty_mountain_backdrop.png",
    background: "/images/misty_mountain_background.png",
  },
  bio: {
    headline: "A passionate software engineer blending design and performance.",
    summary:
      "I am a final-year B.Tech Information Technology student at Sri Eshwar College of Engineering. I possess a deep passion for building scalable software systems, modern web applications, AI-integrated workflows, and high-fidelity mobile experiences.",
    philosophy:
      "I focus on writing clean code, optimizing backend systems, and crafting responsive user interfaces that deliver delightful digital stories. My approach is centered on 'Elegant Simplicity'—stripping away clutter to emphasize performance and value.",
    natureNote: "Inspired by the warm glow of lantern festivals and the quiet grace of blooming cherry blossoms.",
  },
};

export const educationData = {
  college: {
    degree: "Bachelor of Technology (B.Tech) in Information Technology",
    institution: "Sri Eshwar College of Engineering (SECE)",
    location: "Coimbatore, Tamil Nadu, India",
    period: "2023 – 2027",
    cgpa: "7.81",
    curriculum: [
      "Full Stack Web Development using the MERN Stack",
      "Modern Frontend Development with React, Next.js, HTML, CSS, and JavaScript",
      "Mobile Application Development using Flutter & Dart",
      "Backend Development using Node.js and Express.js",
      "Database Management with MongoDB and Firebase",
      "Data Structures and Algorithms using C++",
      "REST API Development and Integration",
      "Version Control using Git and GitHub",
      "Cloud Deployment using platforms like Vercel and Render",
    ],
  },
  schooling: [
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Palaniyammal Higher Secondary School",
      period: "2022 – 2023",
      score: "84.6%",
      focus: "Mathematics, Physics, and Computer Science",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Palaniyammal Higher Secondary School",
      period: "2021 – 2022",
      focus: "Core academic discipline, mathematics, science, and logical reasoning",
    },
  ],
};

export const timelineData = [
  {
    year: "2023",
    title: "Started Engineering",
    description: "B.Tech in Information Technology at Sri Eshwar College of Engineering. Commenced journey into algorithms, computer systems, and full-stack development foundations.",
    category: "education",
  },
  {
    year: "2025",
    title: "Internship at Better Tomorrow",
    description: "Joined as a Full Stack Developer Intern. Spearheaded AI integration projects and developed production-ready Next.js & MERN products.",
    category: "work",
  },
  {
    year: "2025",
    title: "Built Multiple Real-world Products",
    description: "Authored & launched scalable apps (Geo-Guardian, NoteMate, Sow & Grow) resolving concrete real-world pain points.",
    category: "project",
  },
  {
    year: "2027",
    title: "Graduation",
    description: "Completed B.Tech. Embarking on full-time engineering career to deploy scalable AI systems and high-fidelity interfaces.",
    category: "education",
  },
];

export const specializationsData = [
  {
    name: "MERN Stack Development",
    desc: "Building full-stack web architectures with React, Node, Express, and MongoDB.",
  },
  {
    name: "Next.js & App Router",
    desc: "Structuring highly optimized, server-rendered web applications with premium transitions.",
  },
  {
    name: "Mobile Development (Flutter)",
    desc: "Crafting compiled native iOS and Android apps using single-codebase Flutter framework.",
  },
  {
    name: "AI Integration & Product Design",
    desc: "Embedding LLMs, vector search engines, and prompt engineering paradigms into core services.",
  },
];

export const experienceData = [
  {
    company: "Better Tomorrow",
    role: "Full Stack Developer Intern",
    period: "Feb 2025 – Mar 2025",
    location: "Remote / Hybrid",
    description: "Developed and shipped AI-integrated products, focusing on MERN stack architecture, modern React frontends, and API performance.",
    highlights: [
      {
        title: "Built AI-Powered NoteMate",
        desc: "Designed and engineered NoteMate, an intelligent note-taking app that automatically structures meeting logs and generates actionable follow-ups.",
      },
      {
        title: "OpenAI Integration",
        desc: "Integrated OpenAI's GPT models via streaming APIs to execute semantic search and produce context-aware summarizations.",
      },
      {
        title: "MERN Stack Development",
        desc: "Refactored Express.js routes and MongoDB schemas to reduce query latency by 20% and establish robust model relationships.",
      },
      {
        title: "Deployment & Infrastructure",
        desc: "Set up CI/CD pipelines to build and deploy frontend assets on Vercel and background services on Render, securing 99.9% uptime.",
      },
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "OpenAI API", "Vercel", "Render", "Tailwind CSS"],
  },
];

export const skillsData = [
  {
    id: "frontend",
    category: "Frontend",
    skills: [
      { name: "React", level: "Expert", status: "expert" },
      { name: "Next.js", level: "Expert", status: "expert" },
      { name: "HTML5 & CSS3", level: "Expert", status: "expert" },
      { name: "Tailwind CSS", level: "Expert", status: "expert" },
    ],
  },
  {
    id: "backend",
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Expert", status: "expert" },
      { name: "Express.js", level: "Expert", status: "expert" },
      { name: "REST APIs", level: "Expert", status: "expert" },
    ],
  },
  {
    id: "mobile",
    category: "Mobile",
    skills: [
      { name: "Flutter", level: "Advanced", status: "advanced" },
      { name: "Dart", level: "Advanced", status: "advanced" },
    ],
  },
  {
    id: "database",
    category: "Database",
    skills: [
      { name: "MongoDB", level: "Expert", status: "expert" },
      { name: "Firebase", level: "Expert", status: "expert" },
    ],
  },
  {
    id: "tools",
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: "Advanced", status: "advanced" },
      { name: "Postman", level: "Expert", status: "expert" },
      { name: "Docker", level: "Intermediate", status: "intermediate" },
      { name: "VS Code", level: "Expert", status: "expert" },
      { name: "Android Studio", level: "Advanced", status: "advanced" },
    ],
  },
  {
    id: "core",
    category: "Core & Algorithms",
    skills: [
      { name: "Data Structures", level: "Advanced", status: "advanced" },
      { name: "Algorithms", level: "Advanced", status: "advanced" },
      { name: "DBMS Core", level: "Advanced", status: "advanced" },
      { name: "C++", level: "Proficient", status: "proficient" },
    ],
  },
  {
    id: "cloud",
    category: "Cloud & Deployment",
    skills: [
      { name: "Vercel", level: "Advanced", status: "advanced" },
      { name: "Render", level: "Advanced", status: "advanced" },
      { name: "AWS Cloud", level: "Certified", status: "certified" },
    ],
  },
  {
    id: "ai",
    category: "AI & Modern APIs",
    skills: [
      { name: "OpenAI GPT Models", level: "Advanced", status: "advanced" },
      { name: "Google Gemini 2.0 Flash", level: "Advanced", status: "advanced" },
      { name: "NVIDIA NIM / Llama 3", level: "Advanced", status: "advanced" },
      { name: "Vector Search & Embeddings", level: "Intermediate", status: "intermediate" },
    ],
  },
];

export const projectCategories = ["All", "Full Stack", "AI", "Utility"];

export const projectsData = [
  {
    id: "pandivo-tv",
    name: "Pandivo TV",
    tagline: "AI music & continuous DJ experience for TV",
    category: "AI",
    description: "A 10-foot living room music experience featuring an autonomous Continuous AI DJ, on-device offline voice search via Whistle AI, and USB plug-and-play playback for Fire TV & Android TV.",
    image: "/images/pandivo_tv.jpg",
    tech: [
      "React Native TV",
      "AWS Bedrock",
      "Gemini AI",
      "Whistle AI",
      "DynamoDB",
      "SQLite",
    ],
    liveUrl: "https://github.com/MAHAVEER-IT/pandivo-tv/releases/tag/v1.0.0",
    githubUrl: "https://github.com/MAHAVEER-IT/pandivo-tv",
    challenge: "Living room television environments present unique engineering constraints: TV remotes suffer from low-gain Bluetooth microphones and 800ms-2500ms cloud STT lag; standard Whisper models produce phantom silence hallucinations on ambient noise; and complex 10-foot D-pad navigation easily suffers from focus traps and frame drops on low-power TV chipsets.",
    solution: "Engineered a native C++ JNI on-device speech engine (Whistle AI, ~16.9 MB) equipped with an 80Hz high-pass filter, energy-based VAD silence trimming, and peak AGC (0.85). Coupled with an autonomous Continuous AI DJ powered by AWS Bedrock (Nova Lite) and Gemini, a plug-and-play USB OTG music player, and local SQLite WAL storage synchronized non-blockingly to Amazon DynamoDB.",
    highlights: [
      "Continuous AI DJ & Smart Curation: Multi-stage pipeline powered by AWS Bedrock (Nova Lite) extracting mood, energy curves, and harmonic BPM transitions with dynamic radio-host commentary.",
      "100% Offline Speech-to-Text: ~120ms Time to First Token with zero cloud latency and zero network dependencies via native C++ JNI Whistle engine (~16.9MB acoustic model).",
      "Plug-and-Play USB Audio Player: Automatic OTG detection for USB thumb drives with offline ID3 metadata extraction for MP3, FLAC, WAV, and AAC.",
      "Sub-Millisecond Hybrid Storage: Local SQLite in WAL mode ensures 60 FPS cold boots, mirrored asynchronously to Amazon DynamoDB cloud sync.",
      "Physical TV Verified at 60 FPS: Tested and validated on physical Fire OS hardware (FOS 14 3P TV) with real Fire TV remotes in Amazon Appstore Quality Central.",
      "Open Source Contribution: Extracted and published the standalone npm package react-native-whistle-tv-offline for the global TV developer ecosystem.",
    ],
    architecture: [
      { name: "React Native 10-Foot UI", desc: "60 FPS TV interface featuring spatial D-pad focus routing, zero focus traps, and interactive companion avatars." },
      { name: "Whistle Native C++ DSP Engine", desc: "1-pole 80Hz high-pass filter, VAD silence trimming, automatic gain control, and RMS silence gating." },
      { name: "AWS Bedrock & Gemini Cloud AI", desc: "Amazon Bedrock Nova Lite with Gemini 3.5 Flash fallback for vibe understanding and real-time DJ commentary." },
      { name: "Hybrid SQLite WAL + DynamoDB", desc: "Local-first instant query engine synchronized asynchronously to DynamoDB cloud tables." },
    ],
    code: `// AudioPreprocessor.kt - Native DSP pipeline for living room TV remote microphones
package com.pandivo.whistle

class AudioPreprocessor {
    companion object {
        private const val HPF_ALPHA = 0.969f // 1-pole HPF (~80 Hz at 16kHz)
        private const val NOMINAL_PEAK = 0.85f
        private const val MAX_GAIN = 6.0f
        private const val RMS_SILENCE_THRESHOLD = 0.010f

        fun processAudio(rawPcm: ShortArray): PreprocessResult {
            var prevInput = 0f
            var prevOutput = 0f
            var peak = 0f
            var sumSquares = 0.0

            // 1. 80Hz High-Pass Filter: Eliminate DC bias & HVAC low rumble
            val filtered = FloatArray(rawPcm.size)
            for (i in rawPcm.indices) {
                val input = rawPcm[i] / 32768.0f
                val output = HPF_ALPHA * (prevOutput + input - prevInput)
                prevInput = input
                prevOutput = output
                filtered[i] = output

                val abs = Math.abs(output)
                if (abs > peak) peak = abs
                sumSquares += (output * output).toDouble()
            }

            // 2. Dual-Stage Silence Gating: Reject silence hallucinations
            val rms = Math.sqrt(sumSquares / rawPcm.size).toFloat()
            if (rms < RMS_SILENCE_THRESHOLD && peak < 0.05f) {
                return PreprocessResult(isSilent = true, audio = floatArrayOf())
            }

            // 3. Peak Automatic Gain Control (AGC) for distant TV remote mics
            val gain = if (peak > 0.001f) Math.min(NOMINAL_PEAK / peak, MAX_GAIN) else 1.0f
            for (i in filtered.indices) {
                filtered[i] = Math.max(-1.0f, Math.min(1.0f, filtered[i] * gain))
            }

            return PreprocessResult(isSilent = false, audio = filtered)
        }
    }`,
  },
  {
    id: "geo-guardian",
    name: "Geo-Guardian",
    tagline: "Real-time danger zone management platform",
    category: "Full Stack",
    description: "A geospatial safety system designed to monitor, create, and manage danger zones in real-time. Features an interactive Leaflet control panel for administrators to draw boundary maps and receive instant connection alerts from mobile clients.",
    image: "/images/geo_guardian.jpg",
    tech: ["React", "Vite", "Leaflet", "React Leaflet", "Leaflet Draw", "Socket.io Client", "Axios", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas (2dsphere)"],
    liveUrl: "https://geo-guardian.netlify.app/",
    githubUrl: "https://github.com/MAHAVEER-IT/Geo-Guardian",
    challenge: "Managing danger zones on physical maps and broadcasting real-time safety alerts to tourists and operators requires a robust bidirectional socket bridge and high-performance spatial calculation indices.",
    solution: "Created a React + Leaflet control panel integrated with Leaflet Draw for active polygon editing, bound to a Node.js + Express backend. Submissions utilize geospatial index structures in MongoDB Atlas (2dsphere index) to compute coordinate proximity and push triggers instantly via Socket.io.",
    highlights: [
      "Draw and modify custom danger zones using an interactive Leaflet Draw polygon interface.",
      "Real-time GPS coordinate logging and location searching utilizing Nominatim API integration.",
      "Sub-100ms toast notifications and alerts triggered on mobile boundary breaches via Socket.io Client.",
    ],
    architecture: [
      { name: "React & Leaflet UI", desc: "Renders interactive maps, allows administrators to draw danger zone boundaries, and handles Nominatim search." },
      { name: "Socket.io Bridge", desc: "Coordinates live, bi-directional socket relays between admin dashboards and the mobile client ecosystem." },
      { name: "Node.js & Express API", desc: "Processes REST endpoints, validates inputs, and queries geospatial datasets." },
      { name: "MongoDB Atlas (2dsphere)", desc: "Stores coordinates as GeoJSON polygons with 2dsphere indexes for rapid distance/point intersections." },
    ],
    code: `// Express endpoint to check if a user is inside any danger zone using MongoDB 2dsphere index
const Zone = require('../models/Zone');

router.post('/check-location', async (req, res) => {
  const { longitude, latitude } = req.body;

  try {
    const activeZone = await Zone.findOne({
      geometry: {
        $geoIntersects: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          }
        }
      }
    });

    if (activeZone) {
      return res.json({ status: 'inside', zone: activeZone.name, alert: true });
    }
    return res.json({ status: 'safe', alert: false });
  } catch (err) {
    res.status(500).json({ error: 'Geospatial calculation failed' });
  }
});`,
  },
  {
    id: "note-mate",
    name: "NoteMate",
    tagline: "AI study planner & productivity dashboard",
    category: "AI",
    description: "An intelligent workspace featuring draggable sticky notes, note categorization, JWT session credentials, and an AI study planner powered by the NVIDIA API to generate customized academic schedules.",
    image: "/images/note_mate.jpg",
    tech: ["React", "Vite", "NVIDIA API", "React Router", "Context API", "React Draggable", "Tailwind CSS", "Axios", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://note-mate-sage.vercel.app/",
    githubUrl: "https://github.com/MAHAVEER-IT/Note-Mate",
    challenge: "Integrating complex, responsive schedules and draggable boards with real-time AI generation can slow down browser main loops and expose secure keys on the client-side.",
    solution: "Built NoteMate with React and Vite using Context API for structured CRUD. Draggable sticky notes leverage React Draggable, while the AI Study Planner delegates prompts securely to an Express server proxy that invokes the NVIDIA API, returning instant markdown schedules.",
    highlights: [
      "AI Study Planner generating structured, customized academic calendars using NVIDIA API prompts.",
      "Draggable sticky notes that persist position coordinates and color codes across active browser sessions.",
      "Comprehensive note management featuring archive categories, color-coded filters, and JWT-secured routes.",
    ],
    architecture: [
      { name: "React App (Vite)", desc: "Renders note folders, handles draggable session storage coordinates, and routes authenticated dashboards." },
      { name: "Express Security Proxy", desc: "Validates JWT session credentials and acts as a gateway to external AI model endpoints." },
      { name: "NVIDIA API", desc: "Processes text prompts server-side to generate optimized educational study calendars." },
      { name: "MongoDB Storage", desc: "Saves notes, sticky layout indices, and archived structures linked to user profiles." },
    ],
    code: `// Node.js backend route calling NVIDIA API securely to generate study plans
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/generate-study-plan', async (req, res) => {
  const { subject, duration, goal } = req.body;
  
  try {
    const response = await axios.post(
      'https://integrate.api.nvidia.com/v1/chat/completions',
      {
        model: 'meta/llama3-70b-instruct',
        messages: [{
          role: 'user',
          content: 'Generate a study plan for ' + subject + ' over ' + duration + ' to achieve: ' + goal + '. Output clean markdown.'
        }],
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': 'Bearer ' + process.env.NVIDIA_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json({ studyPlan: response.data.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'AI generation service unavailable' });
  }
});`,
  },
  {
    id: "pdf-flow",
    name: "PDF Flow",
    tagline: "Elegant browser-based document converter",
    category: "Utility",
    description: "A zero-clutter, high-performance web utility that converts DOCX, PPT, XLSX, and images directly to PDF format, or merges multiple PDFs in the browser using client-side document compilers.",
    image: "/images/pdf_flow.jpg",
    tech: ["Next.js 15", "React 19", "Tailwind CSS 4", "pdf-lib", "SWC Compiler", "HTML5 Files API"],
    liveUrl: "https://pdf-flow-smoky.vercel.app/",
    githubUrl: "https://github.com/MAHAVEER-IT/PDF_FLOW.git",
    challenge: "Performing file conversions and document editing in-browser quickly without crashing user interface threads or sending private data to server pipelines.",
    solution: "Leveraged the browser's raw processing performance. Used pdf-lib to perform document merges, image compilations, and format operations entirely on the client, resulting in near-instant outputs with maximum security.",
    highlights: [
      "Client-side conversion models for DOCX, PPT, XLSX, and images straight into optimized PDF formats.",
      "Fast PDF merging pipeline combining bulk PDFs into a single file with custom page indices.",
      "Zero login required, zero remote bandwidth overhead, keeping private documents completely local.",
    ],
    architecture: [
      { name: "Next.js 15 UI", desc: "Responsive layout powered by Tailwind CSS 4 compiler and client-side StepperFlow hooks." },
      { name: "pdf-lib Engine", desc: "Client-side binary manipulation library that recompiles PDF streams directly in browser memory." },
      { name: "HTML5 File Reader", desc: "Reads incoming files as raw ArrayBuffers, feeding them to compilers without server transport." },
    ],
    code: `// Client-side PDF Merging implementation using pdf-lib in Next.js
import { PDFDocument } from 'pdf-lib';

export const mergePDFDocuments = async (pdfArrayBuffers) => {
  const mergedPdf = await PDFDocument.create();

  for (const buffer of pdfArrayBuffers) {
    const pdf = await PDFDocument.load(buffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedPdfBytes = await mergedPdf.save();
  return mergedPdfBytes;
};`,
  },
];

export const achievementsData = [
  {
    id: "hackastrom-25",
    title: "Hackastrom'25",
    rank: "Rank #2",
    placement: "2nd Place Winner & AI Optimization Lead",
    description: "Competed in a rigorous 36-hour sprint to build a fully-functional AI-driven energy optimization platform. Engineered predictive models forecasting grid utilization and load balancing.",
    prize: "Rs. 15,000",
    metrics: "+28% Efficiency Boost",
  },
  {
    id: "leetcode",
    title: "LeetCode Proficiency",
    rank: "200+ Solved",
    placement: "72% Accuracy (Medium / Hard)",
    description: "Consistently practicing core data structures & algorithm puzzles to secure optimal query latency and memory allocation models.",
    metrics: "Dynamic Programming, Trees, Graphs, Binary Search",
  },
  {
    id: "freshothon",
    title: "Freshothon",
    rank: "Rank #3",
    placement: "3rd Place Hackathon Winner",
    description: "Competed with over 150+ student teams to conceptualize and build a smart civic safety mapping solution in a 24-hour speed sprint.",
    metrics: "24h Speed Sprint Completed",
  },
  {
    id: "srec-project-expo",
    title: "Sri Eshwar Project Expo",
    rank: "Rank #3",
    placement: "3rd Place Winner & Social Impact Award",
    description: "Presented our AI agricultural assistant Sow & Grow to a panel of corporate judges. Evaluated on user design, engineering scalability, and local-first offline image classifications.",
    scores: {
      viability: "9.5/10",
      uxExecution: "9.0/10",
      architecture: "8.8/10",
    },
  },
];

export const certificationsData = [
  {
    id: "mongodb-cert",
    title: "MongoDB Certified Associate Developer",
    issuer: "MongoDB",
    date: "2025",
    credentialId: "www.credly.com/go/o1RjgrXd",
    url: "https://www.credly.com/badges/743fc448-d8eb-46a8-8438-7bc7ff250a26/public_url",
    image: "/images/mongodb.png",
    topics: [
      "NoSQL Database Concepts",
      "CRUD Operations",
      "Schema Design & Data Modeling",
      "Indexing and Query Optimization",
      "Aggregation Framework",
      "MongoDB Atlas Integration",
    ],
  },
  {
    id: "aws-cert",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2026",
    credentialId: "fa46a4996e424f92a0357334e9cab1c3",
    url: "https://www.credly.com/badges/00e10b5e-8c1c-4a42-ac61-906250ffeeeb/public_url",
    image: "/images/aws.png",
    topics: [
      "Cloud Computing Fundamentals",
      "AWS Global Infrastructure",
      "Compute, Storage, and Networking Services",
      "Cloud Security and Identity Management",
      "Pricing and Billing Models",
      "Shared Responsibility Model",
    ],
  },
  {
    id: "dsa-cert",
    title: "Data Structures & Algorithms",
    issuer: "Udemy (Abdul Bari)",
    date: "2024",
    credentialId: "UC-2a09c594-7240-4b22-8fed-a37b3ec96fOf",
    url: "https://drive.google.com/file/d/1hNaqWsmg33o9NrRHP1lUBnj1I618PPf8/view?usp=drive_link",
    image: null,
    topics: [
      "Arrays, Linked Lists, Stacks, Queues",
      "Trees, BST, Graph Algorithms",
      "Recursion and Backtracking",
      "Dynamic Programming (DP) & Greedy Algorithms",
      "Time and Space Complexity Analysis (Big O)",
    ],
  },
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.mahaveer.live/#website",
      "url": "https://www.mahaveer.live",
      "name": "Mahaveer K | Full Stack Developer",
      "description": "Portfolio of Mahaveer K, a Full Stack Developer building modern web applications, mobile experiences, and AI products.",
      "publisher": {
        "@id": "https://www.mahaveer.live/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.mahaveer.live/#webpage",
      "url": "https://www.mahaveer.live",
      "name": "Mahaveer K Portfolio",
      "isPartOf": {
        "@id": "https://www.mahaveer.live/#website"
      },
      "mainEntity": {
        "@id": "https://www.mahaveer.live/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.mahaveer.live/#person",
      "name": "Mahaveer K",
      "jobTitle": "Full Stack Developer",
      "email": "mailto:mahaveerk.dev@gmail.com",
      "telephone": "+916374827794",
      "url": "https://www.mahaveer.live",
      "image": "https://www.mahaveer.live/images/mahaveer_profile.png",
      "sameAs": [
        "https://github.com/MAHAVEER-IT",
        "https://linkedin.com/in/mahaveer-k"
      ],
      "knowsAbout": [
        "React",
        "Next.js",
        "React Native TV",
        "AWS Bedrock",
        "Speech AI & Audio DSP",
        "Flutter",
        "Dart",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "AWS Cloud Development",
        "Data Structures and Algorithms",
        "AI Application Development",
        "Full Stack Development"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Sri Eshwar College of Engineering (SECE)",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "India"
          }
        }
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Better Tomorrow"
      },
      "description": "Mahaveer K is a Full Stack Developer specializing in React, Next.js, Flutter, Node.js, and AI product integration."
    }
  ]
};

const portfolioData = {
  personal: personalData,
  education: educationData,
  timeline: timelineData,
  specializations: specializationsData,
  experience: experienceData,
  skills: skillsData,
  projectCategories,
  projects: projectsData,
  achievements: achievementsData,
  certifications: certificationsData,
  navigation: navItems,
  jsonLd: jsonLdSchema,
};

export default portfolioData;
