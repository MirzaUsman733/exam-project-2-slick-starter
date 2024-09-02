import React from "react";
import PrivacyPolicy from "../Components/privacy-policy/PrivacyPolicy";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import Banner from "../Components/Banner";

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
