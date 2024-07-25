import Features from "./Components/HomePageComponents/Features/Features";
import HotExam from "./Components/HomePageComponents/HotExams/HotExam";
import HowItWorks from "./Components/HomePageComponents/HowItWorks";
import LogoCloud from "./Components/HomePageComponents/LogoCloud";
import Stats from "./Components/HomePageComponents/Stats";

export default function Home() {
  return (
    <main>
      <Features />
      <hr className=" border-gray-300 mx-auto" />
      <LogoCloud />
      <HotExam />
      <Stats />
      <HowItWorks />
      {/* <hr className="lg:max-w-[75%] border-gray-300 my-5 mx-auto" /> */}
    </main>
  );
}
