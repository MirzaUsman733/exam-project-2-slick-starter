"use client";
import axios from "axios";
import { useEffect, useState } from "react";
// import Script from "../Components/scripts/Script";
import AllTeExamList from "./AllTeExamList";

const Page = () => {
  const randomReviewCount = Math.floor(Math.random() * (1150 - 800 + 1)) + 800;
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Dumps Collection",
            description: `Dumps Collection is a premium provider of Real and Valid Mock Exams for IT certifications. Pass your mock certification exam easily with pdf and test engine exams in 2025.`,
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: 4,
                bestRating: 5,
              },
              author: {
                "@type": "Person",
                name: "Fred Benson",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4.6,
              reviewCount: randomReviewCount,
            },
          }),
        }}
      />
      {/* <Script /> */}
      <AllTeExamList data={data} onLetterSelect={handleLetterSelect} />
    </div>
  );
};

export default Page;
