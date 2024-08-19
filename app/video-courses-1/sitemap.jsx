export default async function sitemap() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/sitemap/courses`,
    {
      headers: {
        "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();

  return data.map((item) => ({
    url: `https://dumps-collection.com/video-courses/${item.course_perma}`,
    lastModified: "2024-04-17",
    priority: 0.6,
  }));
}
