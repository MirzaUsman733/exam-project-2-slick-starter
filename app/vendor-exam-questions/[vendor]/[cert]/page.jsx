import CertificationDetails from "@/app/Components/certifications-components/CertificationDetails";
import React from "react";

const Page = async ({ params }) => {
  const vendor_perma = params.vendor;
  const cert_perma = params.cert;
  const fetchRelatedExamData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/certification/${cert_perma}`,
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
  const certData = await fetchRelatedExamData();
  return (
    <>
      <CertificationDetails
        certData={certData}
        vendorPerma={vendor_perma}
        certPerma={cert_perma}
      />
    </>
  );
};

export default Page;
