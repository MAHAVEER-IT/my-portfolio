import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.mahaveer.live"),
  title: {
    default: "Mahaveer K | Full Stack Developer",
    template: "%s | Mahaveer K",
  },
  description: "Portfolio of Mahaveer K, a Full Stack Developer building modern web applications, mobile experiences, AI-powered products, and scalable digital solutions.",
  keywords: [
    "Mahaveer K",
    "Full Stack Developer",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "React",
    "Flutter",
    "Dart",
    "Node.js",
    "MongoDB",
    "AI Application Developer",
    "Mobile Developer"
  ],
  authors: [{ name: "Mahaveer K", url: "https://github.com/MAHAVEER-IT" }],
  creator: "Mahaveer K",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mahaveer.live",
    title: "Mahaveer K | Full Stack Developer",
    description: "Portfolio of Mahaveer K, showcasing web, mobile, and AI application designs.",
    siteName: "Mahaveer K Portfolio",
    images: [
      {
        url: "/images/MAHAVEER.png",
        width: 1200,
        height: 630,
        alt: "Mahaveer K | Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahaveer K | Full Stack Developer",
    description: "Portfolio of Mahaveer K, showcasing web, mobile, and AI application designs.",
    images: ["/images/MAHAVEER.png"],
  },
};

export default function RootLayout({ children }) {
  const themeScript = `
    (function() {
      const theme = localStorage.getItem('theme') || 'light';
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })()
  `;

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text transition-colors duration-300">
        <SmoothScroll>
          <CursorGlow />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
