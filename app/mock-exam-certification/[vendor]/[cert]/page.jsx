import Banner from "@/app/Components/Banner";
import CertificationDetails from "@/app/Components/certifications-components/CertificationDetails";
import HotExam from "@/app/Components/HomePageComponents/HotExams/HotExam";
import Script from "@/app/Components/scripts/Script";

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
      <Script />
      <Banner />
      <CertificationDetails
        certData={certData}
        vendorPerma={vendor_perma}
        certPerma={cert_perma}
      />
      <hr />
      <HotExam />
    </>
  );
};

export default Page;

export async function generateMetadata({ params }) {
  const vendor_perma = params.vendor;
  const cert_perma = params.cert;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/certification/${cert_perma}`,
    {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    }
  );

  const data = await response.json();
  let shouldIndex = true;
  if (data.cert_title === null) {
    shouldIndex = false;
  }
  return {
    title: `Updated ${vendor_perma} Mock Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,

    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/mock-exam-provider/${vendor_perma}/${cert_perma}`,
        },
      ],
    },
  };
}
