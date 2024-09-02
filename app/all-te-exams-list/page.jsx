"use client";
import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import AllTeExamList from "./AllTeExamList";
const Page = () => {
  const [data, setData] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A"); // Default letter to start with

  useEffect(() => {
    const fetchData = async (letter) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/all-exam-codes/${letter}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status}`);
      }
      const allExamList = await res.json();
      setData(allExamList);
    };

    fetchData(selectedLetter);
  }, [selectedLetter]);
  const handleLetterSelect = (letter) => {
    console.log("Selected Letter:", letter);
    setSelectedLetter(letter);
  };

  return (
    <div>
      <Banner />
      <AllTeExamList data={data} onLetterSelect={handleLetterSelect} />
    </div>
  );
};

export default Page;
