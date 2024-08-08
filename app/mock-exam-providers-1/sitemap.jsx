export default async function sitemap() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/sitemap/vendors`, {
      headers: {
        "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const data = await response.json();
    
  
    return data.map((item) => ({
      url: `https://dumps-collection.com/mock-exam-providers/${item.vendor_perma}`,
      lastModified: "2024-07-06",
      priority: 0.6,
    }));
  }