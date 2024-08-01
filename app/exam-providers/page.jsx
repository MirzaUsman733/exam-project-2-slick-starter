import React from "react";
import ExamProvider from "../Components/exam-provider-components/ExamProvider";
const Page = async () => {
  const fetchRelatedExamData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/vendors`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const relatedExamData = await res.json();
      return relatedExamData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const vendors = await fetchRelatedExamData();
  return (
    <>
      <ExamProvider vendors={vendors} />
    </>
  );
};

export default Page;
