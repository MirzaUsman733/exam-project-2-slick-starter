import Banner from "../Components/Banner";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import Script from "../Components/scripts/Script";
import UnlimitedAccess from "../Components/unlimitedAccessComponents/UnlimitedAccess";

const page = async() => {
  const fetchUnlimitedAccessData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/unlimited_access/?coupon=MEGASALE-30`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const UnlimitedAccessCartData = await res.json();
      return UnlimitedAccessCartData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  const UnlimitedAccessCartData = await fetchUnlimitedAccessData();
  console.log(UnlimitedAccessCartData)
  return (
    <div>
      <Script />
      <Banner />
      <UnlimitedAccess UnlimitedAccessCartData={UnlimitedAccessCartData} />
      <hr className="container mx-auto" />
      <HotExam />
    </div>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Updated Mock Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/unlimited-access`,
        },
      ],
    },
  };
}
