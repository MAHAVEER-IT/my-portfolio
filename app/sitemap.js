export default async function sitemap() {
  const baseUrl = "https://www.mahaveer.live";

  // Dynamic project routes
  const projectIds = [
    "geo-guardian",
    "note-mate",
    "sow-grow",
    "pdf-flow",
    "parking-tracker",
    "bank-inishit"
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
