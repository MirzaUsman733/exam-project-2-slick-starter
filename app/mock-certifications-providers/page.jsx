import Banner from "../Components/Banner";
import CertificationsComponent from "../Components/certifications-components/CertificationsComponent";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import Script from "../Components/scripts/Script";
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
      <Script />
      <Banner />
      <CertificationsComponent certifications={certifications} />
      <div className="mt-10">
        <HotExam />
      </div>
    </>
  );
};

export default Page;

export async function generateMetadata() {
  return {
    title: `Updated Mock Certified Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/mock-certifications-providers`,
        },
      ],
    },
  };
}
