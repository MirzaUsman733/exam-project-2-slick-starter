import React from "react";
import CourseTable from "../Components/videoCourses/CourseTable";

const page = async () => {
  const randomReviewCount = Math.floor(Math.random() * (1150 - 800 + 1)) + 800;

  const fetchRelatedExamData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/training-courses`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const videoData = await res.json();
      return videoData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const videoData = await fetchRelatedExamData();
  return (
    <div className="container mx-auto font-[Lato] my-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Dumps Collection",
            description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: 4,
                bestRating: 5,
              },
              author: {
                "@type": "Person",
                name: "Fred Benson",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4.6,
              reviewCount: randomReviewCount,
            },
          }),
        }}
      />
      <CourseTable videoData={videoData} />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Updated Mock Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/video-courses`,
        },
      ],
    },
  };
}
