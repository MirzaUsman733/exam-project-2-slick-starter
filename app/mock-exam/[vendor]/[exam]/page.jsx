import Banner from "@/app/Components/Banner";
import ExamDetail from "@/app/Components/ExamDetails/ExamDetail";
import Script from "@/app/Components/scripts/Script";
import ScriptFaq from "@/app/Components/scripts/ScriptFaq";

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
      {
        label: `${examData?.exam_vendor_title}`,
        path: `/mock-exam-provider/${vendor_perma}`,
      },
      {
        label: `${examData?.exam_code}`,
        path: `${examData?.exam_code}`,
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
    return (
      <div>
        <Script />
        <ScriptFaq examData={examData} />
        <Banner />
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

export async function generateMetadata({ params }) {
  const vendor_perma = params.vendor;
  const exam_perma = params.exam;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/exam/${exam_perma}?coupon=MEGASALE-30`,
    {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    }
  );
  const DATA = await res.json();
  const isExamTitleAvailable = DATA && DATA.exam_title;
  return {
    title: `Updated ${vendor_perma} Mock Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,

    robots: {
      index: !!isExamTitleAvailable,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/mock-exam/${vendor_perma}/${exam_perma}`,
        },
      ],
    },
  };
}
