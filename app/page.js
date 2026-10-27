import PortfolioHero from "@/components/hero/PortfolioHero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { jsonLdSchema } from "@/data/portfolioData";

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data Schema for SEO & search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <main className="min-h-screen flex flex-col bg-background text-foreground">
        <PortfolioHero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
