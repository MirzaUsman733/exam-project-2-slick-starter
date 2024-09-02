import Banner from "../Components/Banner";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import PrivacyPolicy from "../Components/privacy-policy/PrivacyPolicy";

const page = () => {
  return (
    <div>
      <Banner />
      <PrivacyPolicy />
      <hr className="my-10" />
      <HotExam />
    </div>
  );
};

export default page;
