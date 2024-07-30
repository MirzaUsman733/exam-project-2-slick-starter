import Breadcrumbs from "@/app/Components/ExamDetails/Breadcrumbs";
import ExamBanner from "@/app/Components/ExamDetails/ExamBanner";
import ExamDetail from "@/app/Components/ExamDetails/ExamDetail";
import HeaderCard from "@/app/Components/ExamDetails/HeaderCard";
import React from "react";

const Page = ({ params }) => {
  const vendor_perma = params.vendor;
  const exam_perma = params.exam;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/exam/${exam_perma}?coupon=MEGASALE-30`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const renderData = async () => {
    const examData = await fetchData();
    const breadcrumbData = [
      { label: "Home", path: "/" },
      { label: `${examData?.exam_vendor_title}`, path: `/${vendor_perma}` },
      // { label: `${examData?.exam_code}`, path: `/${vendor_perma}/${exam_perma}` },
      {
        label: `${examData?.exam_code} - ${examData?.exam_title}`,
        path: `/${examData?.exam_vendor_title}/${examData?.exam_code}`,
      },
    ];
    const vendorPerma = vendor_perma;
    const formattedDate = new Date(
      examData.exam_update_date
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    console.log(examData);
    return (
      <div>
        <ExamDetail
          examData={examData}
          formattedDate={formattedDate}
          vendorPerma={vendorPerma}
          examPerma={exam_perma}
          breadcrumbData={breadcrumbData}
        />
      </div>
    );
  };
  return renderData();
};

export default Page;
