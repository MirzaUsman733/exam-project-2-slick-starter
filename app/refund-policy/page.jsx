import React from "react";
import RefundPolicy from "../Components/refund-policy/RefundPolicy";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import Banner from "../Components/Banner";

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
