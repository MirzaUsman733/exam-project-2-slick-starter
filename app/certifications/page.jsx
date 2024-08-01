import React from "react";
import Certifications from "../Components/certifications-components/Certifications";
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
  console.log(certifications)
  return (
    <>
      <Certifications certifications={certifications} />
    </>
  );
};

export default Page;
