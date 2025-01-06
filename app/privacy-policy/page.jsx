import Banner from "../Components/Banner";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import PrivacyPolicy from "../Components/privacy-policy/PrivacyPolicy";
import Script from "../Components/scripts/Script";

const page = () => {
  return (
    <div>
      <Script />
      <Banner />
      <PrivacyPolicy />
      <hr className="my-10" />
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
          url: `https://dumps-collection.com/privacy-policy`,
        },
      ],
    },
  };
}