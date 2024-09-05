import Banner from "../Components/Banner";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import RefundPolicy from "../Components/refund-policy/RefundPolicy";
import Script from "../Components/scripts/Script";

const page = () => {
  return (
    <div>
      <Script />
      <Banner />
      <RefundPolicy />
      <hr className="my-10" />
      <HotExam />
    </div>
  );
};

export default page;
