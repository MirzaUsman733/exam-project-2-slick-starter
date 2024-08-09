export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/profile"],
    },
    sitemap: "https://dumps-collection.com/sitemap.xml",
  };
}
