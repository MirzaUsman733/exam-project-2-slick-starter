import React from "react";
import ExamProvider from "../Components/exam-provider-components/ExamProvider";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
const Page = async () => {
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
  const vendors = await res.json();
  return (
    <>
      <ExamProvider vendors={vendors} />
      <div className="mt-10">
        <HotExam />
      </div>
    </>
  );
};

export default Page;
