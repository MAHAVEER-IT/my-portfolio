import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahaveer K",
    "jobTitle": "Full Stack Developer",
    "url": "https://www.mahaveer.live",
    "image": "https://www.mahaveer.live/images/MAHAVEER.png",
    "sameAs": [
      "https://github.com/MAHAVEER-IT",
      "https://linkedin.com/in/mahaveer-k"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
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
      "name": "Sri Ramakrishna Engineering College (SREC)",
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
  };

  return (
    <>
      {/* JSON-LD Structured Data Schema for search/answer engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
