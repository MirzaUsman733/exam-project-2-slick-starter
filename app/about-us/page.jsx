import AboutUs from "../Components/about-us/AboutUs";
import Banner from "../Components/Banner";
import HotExam from "../Components/HomePageComponents/HotExams/HotExam";

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
