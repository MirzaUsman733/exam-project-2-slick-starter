// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
import Login from "../Components/authComponents/Login";
// import loginPageProtector from "../Components/authComponents/loginPageProtector";

const Page = () => {
  // const router = useRouter();
  // let loginResponse;

  // if (typeof window !== "undefined") {
  //   loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
  // }
  // useEffect(() => {
  //   if (loginResponse?.is_logged_in) {
  //     window.location.reload();
  //   }
  // }, [loginResponse, router]);
  return <Login />;
};

export default Page;



export async function generateMetadata() {
  return {
    title: `Updated Certified Mock Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/login`,
        },
      ],
    },
  };
}

