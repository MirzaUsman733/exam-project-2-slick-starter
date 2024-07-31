import Footer from "./Components/GeneralComponents/Footer/Footer";
import CertificationExams from "./Components/HomePageComponents/CertificationExams/CertificationExams";
import Features from "./Components/HomePageComponents/Features/Features";
import HotExam from "./Components/HomePageComponents/HotExams/HotExam";
import HowItWorks from "./Components/HomePageComponents/HowItWorks";
import LogoCloud from "./Components/HomePageComponents/LogoCloud";
import PaymentReviewGuarantee from "./Components/HomePageComponents/PaymentReviewGuarantee";
import RecentlyUpdated from "./Components/HomePageComponents/RecentlyUpdatedExams/RecentlyUpdated";
import Stats from "./Components/HomePageComponents/Stats";
import Review from "./Components/Review";

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
      {/* <Stats /> */}
      {/* <PaymentReviewGuarantee />   */}
      <HowItWorks />
      <hr className="lg:max-w-[75%] border-gray-300 my-5 mx-auto" />
      <CertificationExams />
      <hr className="lg:max-w-[75%] border-gray-300 my-5 mx-auto" />
      {/* <Review /> */}
      <hr />
      
    </main>
  );
}
