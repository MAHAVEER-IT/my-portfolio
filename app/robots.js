export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "ClaudeBot", "Google-Extended", "PerplexityBot", "Gemini-Scraper"],
        allow: ["/", "/ai.txt"],
      }
    ],
    sitemap: "https://www.mahaveer.live/sitemap.xml",
  };
}
