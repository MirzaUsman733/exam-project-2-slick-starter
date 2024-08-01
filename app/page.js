import CertificationExams from "./Components/HomePageComponents/CertificationExams/CertificationExams";
import Features from "./Components/HomePageComponents/Features/Features";
import HotExam from "./Components/HomePageComponents/HotExams/HotExam";
import HowItWorks from "./Components/HomePageComponents/HowItWorks";
import LogoCloud from "./Components/HomePageComponents/LogoCloud";
import RecentlyUpdated from "./Components/HomePageComponents/RecentlyUpdatedExams/RecentlyUpdated";

export default function Home() {
  return (
    <main>
      <Features />
      <hr className=" border-gray-300 mx-auto" />
      <LogoCloud />
      <hr className=" border-gray-300 mx-auto" />
      <RecentlyUpdated />
      <hr className=" border-gray-300 mx-auto" />
      <HotExam />
      <hr className=" border-gray-300 mx-auto" />
      <HowItWorks />
      <hr className="lg:max-w-[75%] border-gray-300 my-5 mx-auto" />
      <CertificationExams />
      <hr className="lg:max-w-[75%] border-gray-300 my-5 mx-auto" />
    </main>
  );
}
