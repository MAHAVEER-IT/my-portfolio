export default function manifest() {
  return {
    name: "Mahaveer K | Full Stack Developer",
    short_name: "Mahaveer K",
    description: "Portfolio of Mahaveer K, a Full Stack Developer building modern web applications, mobile experiences, and AI products.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDF9",
    theme_color: "#FFFDF9",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
