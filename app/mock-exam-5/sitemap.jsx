export default async function sitemap() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/sitemap/exams/5`, {
      headers: {
        "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const data = await response.json();
    
  
    return data?.exams?.map((item) => ({
      url: `https://dumps-collection.com/mock-exam/${item?.vendor_perma}/${item?.exam_perma}`,
      lastModified: "2024-04-17",
      priority: 0.6,
    }));
  }
  