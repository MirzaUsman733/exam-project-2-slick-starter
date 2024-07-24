import Features from "./Components/HomePageComponents/Features/Features";
import HotExam from "./Components/HomePageComponents/HotExams/HotExam";
import LogoCloud from "./Components/HomePageComponents/LogoCloud";

export default function Home() {
  return (
    <main>
      <Features />
      <hr className="lg:max-w-[75%] border-gray-300 mx-auto" />
      <LogoCloud />
      <hr className="lg:max-w-[75%] border-gray-300 my-5 mx-auto" />
      <HotExam />
    </main>
  );
}
