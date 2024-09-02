import Banner from "../Components/Banner";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import RefundPolicy from "../Components/refund-policy/RefundPolicy";

const page = () => {
  return (
    <div>
      <Banner />
      <RefundPolicy />
      <hr className="my-10" />
      <HotExam />
    </div>
  );
};

export default page;
