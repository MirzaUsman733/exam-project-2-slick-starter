"use client";
import AlphabetPagination from "@/app/all-te-exams-list/AlphabetPagination";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const router = useRouter();
  const [unlimitedTeAccess, setUnlimitedTeAccess] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState("A");

  useEffect(() => {
    const fetchData = async () => {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      if (!loginResponse?._token) {
        router.push("/login");
        return;
      }
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/pdf-unlimited-access/${params.slug_1}/${params.slug_2}/${selectedLetter}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setUnlimitedTeAccess(response.data);
    };
    fetchData();
  }, [router, params.slug_1, params.slug_2, selectedLetter]);

  const handleLetterSelect = (letter) => {
    console.log("Selected Letter:", letter);
    setSelectedLetter(letter);
  };
  return (
    <div className="container mx-auto px-4 py-8">
       {unlimitedTeAccess?.vendors?.length ? (
        <AlphabetPagination onSelect={handleLetterSelect} />
        ) : ''}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">
          Unlimited TE Access
        </h2>
        {unlimitedTeAccess?.vendors?.length ? (
          unlimitedTeAccess.vendors.map((vendor) => (
            <div
              key={vendor?.exam_id}
              className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {vendor?.vendor_title}
              </h3>
              {vendor.exams.map((exam, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm mb-4"
                >
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">
                    {exam.exam_code}
                  </h4>
                  <p className="text-gray-600 mb-2">{exam.exam_name}</p>
                  <p className="text-gray-500 mb-4">
                    {exam?.exam_questions} Questions And Answers
                  </p>
                  <div className="flex items-center justify-end">
                    <Link
                      href={`${process?.env?.NEXT_PUBLIC_API_BASE_URL}${exam?.download_url}`}
                      className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
                    >
                      Download Unlimited File
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-red-600">
            Your Unlimited PDF access is not approved yet. We are checking your
            payment so this might take a few hours. Please contact our sales
            chat support or send an email to sales@dumps-collection.com for fast
            approval. Thank you.
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
