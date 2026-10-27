export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Google-Extended",
          "PerplexityBot",
          "Gemini-Scraper",
          "Applebot-Extended",
          "cohere-ai",
        ],
        allow: ["/", "/ai.txt", "/llms.txt"],
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.mahaveer.live/sitemap.xml",
    host: "https://www.mahaveer.live",
  };
}
