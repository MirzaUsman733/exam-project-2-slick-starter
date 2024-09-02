import React from "react";
import AboutUs from "../Components/about-us/AboutUs";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";
import Banner from "../Components/Banner";

const page = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <hr className="my-10" />
      <HotExam />
    </div>
  );
};

export default page;
