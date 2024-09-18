import CertificationExams from "./Components/HomePageComponents/CertificationExams/CertificationExams";
import Features from "./Components/HomePageComponents/Features/Features";
import HotExam from "./Components/HomePageComponents/HotExams/HotExam";
import HowItWorks from "./Components/HomePageComponents/HowItWorks";
import LogoCloud from "./Components/HomePageComponents/LogoCloud";
import RecentlyUpdated from "./Components/HomePageComponents/RecentlyUpdatedExams/RecentlyUpdated";
import Script from "./Components/scripts/Script";

export default function Home() {
  return (
    <>
      <Script />
      <Features />
      <hr className=" border-gray-300 mx-auto" />
      <LogoCloud />
      <hr className=" border-gray-300 mx-auto" />
      <RecentlyUpdated />
      <hr className=" border-gray-300 mx-auto" />
      <HotExam />
      <hr className=" border-gray-300 mx-auto" />
      <HowItWorks />
      <hr className="border-gray-300 my-5 mx-auto" />
      <CertificationExams />
      <hr className="border-gray-300 my-5 mx-auto" />
    </>
  );
}

export async function generateMetadata() {
  return {
    title: "Updated Mock Exams by IT Professionals",
    description:
      "Dumps Collection is a premium provider of Real and Valid Mock Exams for IT certifications. Pass your mock certification exam easily with pdf and test engine exams in 2024.",
    robots: {
      index: true,
    },
    alternates: {
      canonical: "https://dumps-collection.com",
    },
  };
}
