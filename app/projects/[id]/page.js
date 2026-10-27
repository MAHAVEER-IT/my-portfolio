import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";

// Case Studies Database
const projectDetails = {
  "pandivo-tv": {
    name: "Pandivo TV",
    tagline: "Next-Gen AI-Powered Music & Continuous AI DJ Experience for Amazon Fire TV & Android TV",
    category: "AI & TV Engineering",
    image: "/images/pandivo_tv.jpg",
    githubUrl: "https://github.com/MAHAVEER-IT/pandivo-tv",
    liveUrl: "https://github.com/MAHAVEER-IT/pandivo-tv/releases/tag/v1.0.0",
    apkUrl: "https://github.com/MAHAVEER-IT/pandivo-tv/releases/download/v1.0.0/pandivo-v1.0.0.apk",
    tech: [
      "React Native TV 0.86",
      "AWS Bedrock (Nova Lite)",
      "Google Gemini 3.5 Flash",
      "Whistle AI (C++ NDK/JNI)",
      "Amazon DynamoDB",
      "SQLite (WAL Mode)",
      "Fire OS 7 & 8",
      "Android TV (API 24-34)"
    ],
    challenge: "Living room television environments present unique engineering constraints: TV remotes suffer from low-gain Bluetooth microphones and 800ms-2500ms cloud STT lag; standard Whisper models produce phantom silence hallucinations on ambient noise; and complex 10-foot D-pad navigation easily suffers from focus traps and frame drops on low-power TV chipsets.",
    solution: "Engineered a native C++ JNI on-device speech engine (Whistle AI, ~16.9 MB) equipped with an 80Hz high-pass filter, energy-based VAD silence trimming, and peak AGC (0.85). Coupled with an autonomous Continuous AI DJ powered by AWS Bedrock (Nova Lite) and Gemini, a plug-and-play USB OTG music player, and local SQLite WAL storage synchronized non-blockingly to Amazon DynamoDB.",
    highlights: [
      "Continuous AI DJ & Smart Curation: Multi-stage pipeline powered by AWS Bedrock (Nova Lite) extracting mood, energy curves, and harmonic BPM transitions with dynamic radio-host commentary.",
      "100% Offline Speech-to-Text: ~120ms Time to First Token with zero cloud latency and zero network dependencies via native C++ JNI Whistle engine (~16.9MB acoustic model).",
      "Plug-and-Play USB Audio Player: Automatic OTG detection for USB thumb drives with offline ID3 metadata extraction for MP3, FLAC, WAV, and AAC.",
      "Sub-Millisecond Hybrid Storage: Local SQLite in WAL mode ensures 60 FPS cold boots, mirrored asynchronously to Amazon DynamoDB cloud sync.",
      "Physical TV Verified at 60 FPS: Tested and validated on physical Fire OS hardware (FOS 14 3P TV) with real Fire TV remotes in Amazon Appstore Quality Central.",
      "Open Source Contribution: Extracted and published the standalone npm package react-native-whistle-tv-offline for the global TV developer ecosystem."
    ],
    architecture: [
      { name: "React Native 10-Foot UI", desc: "60 FPS TV interface featuring spatial D-pad focus routing, zero focus traps, and interactive companion avatars." },
      { name: "Whistle Native C++ DSP Engine", desc: "1-pole 80Hz high-pass filter, VAD silence trimming, automatic gain control, and RMS silence gating." },
      { name: "AWS Bedrock & Gemini Cloud AI", desc: "Amazon Bedrock Nova Lite with Gemini 3.5 Flash fallback for vibe understanding and real-time DJ commentary." },
      { name: "Hybrid SQLite WAL + DynamoDB", desc: "Local-first instant query engine synchronized asynchronously to DynamoDB cloud tables." }
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
    }`
  },
  "geo-guardian": {
    name: "Geo-Guardian",
    tagline: "Real-time danger zone management platform",
    category: "Full Stack Development",
    image: "/images/geo_guardian.jpg",
    githubUrl: "https://github.com/MAHAVEER-IT/Geo-Guardian",
    liveUrl: "https://geo-guardian.netlify.app/",
    tech: ["React", "Vite", "Leaflet", "React Leaflet", "Leaflet Draw", "Socket.io Client", "Axios", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    challenge: "Managing danger zones on physical maps and broadcasting real-time safety alerts to tourists and operators requires a robust bidirectional socket bridge and high-performance spatial calculation indices.",
    solution: "Created a React + Leaflet control panel integrated with Leaflet Draw for active polygon editing, bound to a Node.js + Express backend. Submissions utilize geospatial index structures in MongoDB Atlas (2dsphere index) to compute coordinate proximity and push triggers instantly via Socket.io.",
    highlights: [
      "Draw and modify custom danger zones using an interactive Leaflet Draw polygon interface.",
      "Real-time GPS coordinate logging and location searching utilizing Nominatim API integration.",
      "Sub-100ms toast notifications and alerts triggered on mobile boundary breaches via Socket.io Client."
    ],
    architecture: [
      { name: "React & Leaflet UI", desc: "Renders interactive maps, allows administrators to draw danger zone boundaries, and handles Nominatim search." },
      { name: "Socket.io Bridge", desc: "Coordinates live, bi-directional socket relays between admin dashboards and the mobile client ecosystem." },
      { name: "Node.js & Express API", desc: "Processes REST endpoints, validates inputs, and queries geospatial datasets." },
      { name: "MongoDB Atlas (2dsphere)", desc: "Stores coordinates as GeoJSON polygons with 2dsphere indexes for rapid distance/point intersections." }
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
});`
  },
  "note-mate": {
    name: "NoteMate",
    tagline: "AI study planner & productivity dashboard",
    category: "Artificial Intelligence",
    image: "/images/note_mate.jpg",
    githubUrl: "https://github.com/MAHAVEER-IT/Note-Mate",
    liveUrl: "https://note-mate-sage.vercel.app/",
    tech: ["React", "Vite", "NVIDIA API", "React Router", "Context API", "React Draggable", "Tailwind CSS", "Axios", "Node.js", "Express.js", "MongoDB"],
    challenge: "Integrating complex, responsive schedules and draggable boards with real-time AI generation can slow down browser main loops and expose secure keys on the client-side.",
    solution: "Built NoteMate with React and Vite using Context API for structured CRUD. Draggable sticky notes leverage React Draggable, while the AI Study Planner delegates prompts securely to an Express server proxy that invokes the NVIDIA API, returning instant markdown schedules.",
    highlights: [
      "AI Study Planner generating structured, customized academic calendars using NVIDIA API prompts.",
      "Draggable sticky notes that persist position coordinates and color codes across active browser sessions.",
      "Comprehensive note management featuring archive categories, color-coded filters, and JWT-secured routes."
    ],
    architecture: [
      { name: "React App (Vite)", desc: "Renders note folders, handles draggable session storage coordinates, and routes authenticated dashboards." },
      { name: "Express Security Proxy", desc: "Validates JWT session credentials and acts as a gateway to external AI model endpoints." },
      { name: "NVIDIA API", desc: "Processes text prompts server-side to generate optimized educational study calendars." },
      { name: "MongoDB Storage", desc: "Saves notes, sticky layout indices, and archived structures linked to user profiles." }
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
});`
  },
  "pdf-flow": {
    name: "PDF Flow",
    tagline: "Elegant browser-based document converter",
    category: "Web Utility",
    image: "/images/pdf_flow.jpg",
    githubUrl: "https://github.com/MAHAVEER-IT/PDF_FLOW.git",
    liveUrl: "https://pdf-flow-smoky.vercel.app/",
    tech: ["Next.js 15", "React 19", "Tailwind CSS 4", "pdf-lib", "SWC Compiler", "HTML5 Files API"],
    challenge: "Performing file conversions and document editing in-browser quickly without crashing user interface threads or sending private data to server pipelines.",
    solution: "Leveraged the browser's raw processing performance. Used pdf-lib to perform document merges, image compilations, and format operations entirely on the client, resulting in near-instant outputs with maximum security.",
    highlights: [
      "Client-side conversion models for DOCX, PPT, XLSX, and images straight into optimized PDF formats.",
      "Fast PDF merging pipeline combining bulk PDFs into a single file with custom page indices.",
      "Zero login required, zero remote bandwidth overhead, keeping private documents completely local."
    ],
    architecture: [
      { name: "Next.js 15 UI", desc: "Responsive layout powered by Tailwind CSS 4's compiler and client-side StepperFlow hooks." },
      { name: "pdf-lib Engine", desc: "Client-side binary manipulation library that recompiles PDF streams directly in browser memory." },
      { name: "HTML5 File Reader", desc: "Reads incoming files as raw ArrayBuffers, feeding them to compilers without server transport." }
    ],
    code: `// Client-side PDF Merging implementation using pdf-lib in Next.js
import { PDFDocument } from 'pdf-lib';

export const mergePDFDocuments = async (pdfArrayBuffers) => {
  // Create a new empty PDF Document
  const mergedPdf = await PDFDocument.create();

  for (const buffer of pdfArrayBuffers) {
    // Load current PDF
    const pdf = await PDFDocument.load(buffer);
    
    // Copy all pages into the merged document
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  // Save and compile to Uint8Array
  const mergedPdfBytes = await mergedPdf.save();
  return mergedPdfBytes;
};`
  }
};

export async function generateStaticParams() {
  return [
    { id: "pandivo-tv" },
    { id: "geo-guardian" },
    { id: "note-mate" },
    { id: "pdf-flow" },
  ];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const project = projectDetails[id];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
    description: project.tagline,
    alternates: {
      canonical: `https://www.mahaveer.live/projects/${id}`,
    },
    openGraph: {
      title: `${project.name} | Mahaveer K`,
      description: project.tagline,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.name} | Mahaveer K`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Mahaveer K`,
      description: project.tagline,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const project = projectDetails[id];

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description || project.tagline,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Mahaveer K",
      url: "https://www.mahaveer.live",
    },
    url: `https://www.mahaveer.live/projects/${id}`,
    image: `https://www.mahaveer.live${project.image}`,
    keywords: project.tech?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectClient project={project} id={id} />
    </>
  );
}
