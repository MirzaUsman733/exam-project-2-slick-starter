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
