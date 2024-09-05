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
