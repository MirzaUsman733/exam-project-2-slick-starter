import Banner from "../Components/Banner";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import Script from "../Components/scripts/Script";
import CourseTable from "../Components/videoCourses/CourseTable";

const page = async () => {
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
      <Script />
      <Banner />
      <div className="mt-5"></div>
      <CourseTable videoData={videoData} />
      <hr className="my-5" />
      <HotExam />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Updated Certified Mock Exam by IT Professionals`,
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
