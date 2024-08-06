import React from "react";
import CertificationsComponent from "../Components/certifications-components/CertificationsComponent";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
const Page = async () => {
  const fetchCertificationData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/certifications`,
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


  const certifications = await fetchCertificationData();
  return (
    <>
      <CertificationsComponent certifications={certifications} />
      <div className="mt-10">
        <HotExam />
      </div>
    </>
  );
};

export default Page;
