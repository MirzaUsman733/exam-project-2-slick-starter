import HotExam from "@/app/Components/HomePageComponents/HotExams/HotExam";
import CourseHeader from "@/app/Components/videoCourses/CourseHeader";
import VideoCoursesDetail from "@/app/Components/videoCourses/VideoCoursesDetail";
import React from "react";

const page = async ({ params }) => {
  const courseId = params.id;
  const randomReviewCount = Math.floor(Math.random() * (1150 - 800 + 1)) + 800;
  const fetchCourseDetail = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/training-course/${courseId}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const courseDetail = await res.json();
      return courseDetail;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const courseDetail = await fetchCourseDetail();
  return (
    <div className="container mx-auto p-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Dumps Collection",
            description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
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
      <CourseHeader courseDetail={courseDetail} />
      <hr className="my-20" />
      <VideoCoursesDetail section={courseDetail.sections} />
      <hr className="my-5" />
      <HotExam />
    </div>
  );
};

export default page;


export async function generateMetadata({ params }) {
  const courseId = params.id;
  return {
    title: `Updated ${courseId} Mock Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,

    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/video-courses/${courseId}`,
        },
      ],
    },
  };
}
