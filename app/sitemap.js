export default async function sitemap() {
  const baseUrl = "https://www.mahaveer.live";

  // Active dynamic project case study routes
  const projectIds = [
    "pandivo-tv",
    "geo-guardian",
    "note-mate",
    "pdf-flow",
  ];

  const projectUrls = projectIds.map((id) => ({
    url: `${baseUrl}/projects/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
