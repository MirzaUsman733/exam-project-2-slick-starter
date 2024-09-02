'use client'
import React, { useState, useEffect } from 'react';
import AllTeExamList from './AllTeExamList';
import Banner from '../Components/Banner';
const Page = () => {
  const [data, setData] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('A'); // Default letter to start with

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
  }, [selectedLetter]); // Fetch data when `selectedLetter` changes

  const handleLetterSelect = (letter) => {
    console.log("Selected Letter:", letter);
    setSelectedLetter(letter); // Update the selected letter, triggering a re-fetch
  };

  return (
    <div>
      {/* <AlphabetPagination onSelect={handleLetterSelect} /> */}
      <Banner />
      <AllTeExamList data={data} onLetterSelect={handleLetterSelect} />
    </div>
  );
};

export default Page;
