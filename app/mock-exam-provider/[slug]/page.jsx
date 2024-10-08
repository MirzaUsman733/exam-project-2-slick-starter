import Banner from "@/app/Components/Banner";
import VendorDetails from "../../Components/exam-provider-components/VendorDetails";
import Script from "@/app/Components/scripts/Script";
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
      <Script />
      <Banner />
      <VendorDetails vendorData={vendorData} vendorPerma={vendorPerma} />
    </>
  );
};

export default Page;

export async function generateMetadata({ params }) {
  const vendorPerma = params.slug;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/vendor/${vendorPerma}`,
    {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    }
  );

  const metaDATA = await response.json();
  return {
    title: `Updated ${params?.slug} Mock Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,

    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/mock-exam-provider/${params?.slug}`,
        },
      ],
    },
  };
}
