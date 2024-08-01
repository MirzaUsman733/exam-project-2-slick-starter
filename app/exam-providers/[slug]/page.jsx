import React from "react";
import VendorDetails from "../../Components/exam-provider-components/VendorDetails";
const Page = async ({ params }) => {
  const vendorPerma = params.slug;
  const fetchRelatedExamData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/vendor/${vendorPerma}`,
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
  const vendorData = await fetchRelatedExamData();
  return (
    <>
      <VendorDetails vendorData={vendorData} vendorPerma={vendorPerma} />
    </>
  );
};

export default Page;
