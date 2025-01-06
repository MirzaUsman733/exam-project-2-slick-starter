"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Script from "../Components/scripts/Script";
import AllTeExamList from "./AllTeExamList";

const Page = () => {
  const [data, setData] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A");

  useEffect(() => {
    const fetchData = async (letter) => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/all-exam-codes/${letter}`,
          {
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );
        response?.data;
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData(selectedLetter);
  }, [selectedLetter]);

  const handleLetterSelect = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <div>
      <Script />
      <AllTeExamList data={data} onLetterSelect={handleLetterSelect} />
    </div>
  );
};

export default Page;


export async function generateMetadata() {
  return {
    title: `Updated Mock Exam by IT Professionals`,
    description: `Dumps Collection is a premium provider of Real and Valid Mock Exam of IT certification Exams. Pass your mock certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://dumps-collection.com/all-te-exams-list`,
        },
      ],
    },
  };
}