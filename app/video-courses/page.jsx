import React from "react";
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
      <CourseTable videoData={videoData} />
    </div>
  );
};

export default page;
