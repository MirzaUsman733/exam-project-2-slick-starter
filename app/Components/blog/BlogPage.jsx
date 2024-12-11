import BlogList from "./BlogList";
const fetchBlogData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/blogs`,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    const blogData = await res.json();
    return blogData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
const blogData = await fetchBlogData();

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <BlogList data={blogData} />
    </main>
  );
}
