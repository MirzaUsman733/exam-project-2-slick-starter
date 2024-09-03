"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../Components/Banner";
import AllTeExamList from "./AllTeExamList";

const Page = () => {
  const [data, setData] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A"); // Default letter to start with

  useEffect(() => {
    const fetchData = async (letter) => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/all-exam-codes/${letter}`, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        });
        response?.data
        setData(response.data); // Assuming the data is directly accessible from the response object
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Optionally update the UI to indicate an error happened
      }
    };

    fetchData(selectedLetter);
  }, [selectedLetter]);

  const handleLetterSelect = (letter) => {
    console.log("Selected Letter:", letter);
    setSelectedLetter(letter);
  };

  return (
    <div>
      {/* <Banner /> */}
      <AllTeExamList data={data} onLetterSelect={handleLetterSelect} />
    </div>
  );
};

export default Page;
