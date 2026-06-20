import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";

// Case Studies Database
const projectDetails = {
  "geo-guardian": {
    name: "Geo-Guardian",
    tagline: "Real-time danger zone management platform",
    category: "Full Stack Development",
    image: "/images/geo_guardian.png",
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
    image: "/images/note_mate.png",
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
  "sow-grow": {
    name: "Sow & Grow",
    tagline: "Voice-first AI farm companion app",
    category: "Mobile Application",
    image: "/images/sow_grow.png",
    githubUrl: "https://github.com/MAHAVEER-IT/Sow-Grow",
    liveUrl: "https://www.canva.com/design/DAGrAd4CWMI/JwQ19kPFiNsjxFi0YFJ9_A/watch?utm_content=DAGrAd4CWMI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0409f5f144",
    tech: ["Flutter", "Dart", "Provider", "Gemini AI", "Firebase", "Flutter Map", "OpenStreetMap", "TTS / STT"],
    challenge: "Providing accessible, interactive agricultural guidelines to rural farmers with low internet speeds and varied literacy levels.",
    solution: "Designed a voice-friendly Flutter client using local TTS/STT packages. Implemented Gemini Flash 2.0 via a REST service layer (FarmCare) to handle plant image diagnoses, paired with a local-first Flutter Map dashboard showing geospatial plant disease heatmaps.",
    highlights: [
      "FarmHelper AI: Conversational voice assistant featuring Gemini Flash 2.0 chat, image uploads, and Speech-to-Text.",
      "Livestocare Suite: Simple tracker registry for livestock records, vaccination dates, and SMS reminders.",
      "Disease Heatmap: Interactive OpenStreetMap rendering overlay layers of diagnosed crop/animal infections."
    ],
    architecture: [
      { name: "Flutter Client", desc: "Material 3 UI utilizing Provider state management and geolocator map rendering." },
      { name: "FarmCare Backend API", desc: "Express service orchestrating user data, regional coordinates, and weather advisory tables." },
      { name: "Gemini Generative API", desc: "Performs natural language voice processing and visual diagnosis of crop leaf conditions." },
      { name: "Firebase Services", desc: "Authenticates accounts, stores uploaded diagnostic logs, and dispatches reminders." }
    ],
    code: `// Dart service invoking Gemini API via Generative AI package
import 'package:google_generative_ai/google_generative_ai.dart';

class FarmHelperService {
  final String apiKey = const String.fromEnvironment('GEMINI_API_KEY');
  
  Future<String> askFarmHelper(String prompt, List<int>? imageBytes) async {
    final model = GenerativeModel(model: 'gemini-2.0-flash', apiKey: apiKey);
    final content = [Content.text(prompt)];
    
    if (imageBytes != null) {
      content.add(Content.data('image/jpeg', imageBytes));
    }
    
    final response = await model.generateContent(content);
    return response.text ?? 'No response received. Please try again.';
  }
}`
  },
  "pdf-flow": {
    name: "PDF Flow",
    tagline: "Elegant browser-based document converter",
    category: "Web Utility",
    image: "/images/pdf_flow.png",
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
  },
  "parking-tracker": {
    name: "Visitor Parking Tracker",
    tagline: "Smart parking slots registration portal",
    category: "Full Stack Development",
    image: "/images/parking_management.png",
    githubUrl: "https://github.com/MAHAVEER-IT/visitor-parking-tracker",
    liveUrl: "https://visitor-parking-tracker.vercel.app/",
    tech: ["Next.js 15", "React 19", "Tailwind CSS", "React Hook Form", "Firebase Auth", "Firestore NoSQL"],
    challenge: "Providing a responsive, real-time booking form that updates occupancy immediately while ensuring secure validation across role permissions.",
    solution: "Built a Next.js App Router portal integrated with Firebase client SDKs. Used React Hook Form for client-side license plate formatting, writing registrations directly to Firebase Firestore to trigger instant listener layout updates.",
    highlights: [
      "Secure Google Sign-In and profile authorization using Firebase Authentication.",
      "React Hook Form validation mapping license formats (Two Wheeler, Four Wheeler, Heavy, EV).",
      "Firestore real-time listeners syncing parking availability status indicators instantly across operators."
    ],
    architecture: [
      { name: "Next.js Client", desc: "Dashboard UI rendering active bookings and responsive forms using React Hook Form." },
      { name: "Firebase Auth", desc: "Manages user authorization states, logins, and credentials securely." },
      { name: "Firebase Firestore", desc: "NoSQL database serving as the source of truth for slot occupancy states and logs." }
    ],
    code: `// Next.js Firebase Firestore booking submission helper
import { db } from '../firebase/config';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

export const submitParkingBooking = async (userId, data) => {
  const bookingRef = collection(db, 'bookings');
  
  // Add new booking document
  const newBooking = await addDoc(bookingRef, {
    userId,
    vehicleNo: data.vehicleNo.toUpperCase(),
    vehicleType: data.vehicleType,
    slotId: data.slotId,
    entryTime: new Date().toISOString(),
    status: 'active'
  });

  // Mark slot occupied in slots metadata collection
  const slotDocRef = doc(db, 'slots', data.slotId);
  await updateDoc(slotDocRef, {
    isOccupied: true,
    currentBookingId: newBooking.id
  });

  return newBooking.id;
};`
  },
  "bank-inishit": {
    name: "Bank Inishit",
    tagline: "Unified multi-bank utility app",
    category: "Mobile Application",
    image: "/images/banking_application.png",
    githubUrl: "https://github.com/MAHAVEER-IT/bank_inish",
    liveUrl: "https://drive.google.com/drive/folders/13j3pnF7rVRWrvD1OvyUghWhdSVP8HYQR",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "Currency Converter API", "Syncfusion Charts"],
    challenge: "Accessing essential banking tools across different banks in India without installing multiple heavy, slow corporate apps.",
    solution: "Developed a unified banking application supporting SBI, Indian Bank, Union Bank, and KVB. Consolidates balance check hotlines, ATM blocking shortcuts, Google Maps branch trackers, and Gold/Personal loan calculators.",
    highlights: [
      "Toll-free banking shortcuts using integrated dialers for rapid balance checks and card blocks.",
      "Interactive nearby ATM and branch locator utilizing integrated Google Maps API markers.",
      "Gold and personal loan calculators referencing scheme data tables with Syncfusion Charts."
    ],
    architecture: [
      { name: "Flutter Mobile Client", desc: "Responsive cross-platform application utilizing Dart and Material Design cards." },
      { name: "Firebase Database", desc: "Stores user preferences and static bank holiday records." },
      { name: "Google Maps SDK", desc: "Queries local location vectors to plot close ATM coordinates." },
      { name: "Currency Exchange API", desc: "Fetches real-time exchange rates to power the built-in converter." }
    ],
    code: `// Flutter dial service utilizing url_launcher for dial shortcuts
import 'package:url_launcher/url_launcher.dart';

class BankDialService {
  // Toll free number mapping for SBI, Indian Bank, Union Bank, KVB
  final Map<String, String> balanceCheckNumbers = {
    'SBI': 'tel:09223766666',
    'Indian Bank': 'tel:09289592895',
    'Union Bank': 'tel:09223008586',
    'KVB': 'tel:09266292662',
  };

  Future<void> makeCall(String bankName) async {
    final number = balanceCheckNumbers[bankName];
    if (number == null) return;
    
    final Uri uri = Uri.parse(number);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri);
    } else {
      throw 'Could not launch dialer for ' + number;
    }
  }
}`
  }
};

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

  return <ProjectClient project={project} id={id} />;
}
