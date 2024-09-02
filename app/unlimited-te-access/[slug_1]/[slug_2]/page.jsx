"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlphabetPagination from "@/app/all-te-exams-list/AlphabetPagination";

const Page = ({ params }) => {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activationKeys, setActivationKeys] = useState([]);
  const [unlimitedTeAccess, setUnlimitedTeAccess] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [selectedLetter, setSelectedLetter] = useState('A');
  

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setSnackbarMessage("Copied to clipboard!");
    setSnackbarOpen(true);
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const fetchActivationKeys = async (exam) => {
    setDialogOpen(true);
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
        if (!loginResponse?._token) {
          router.push("/login");
          return;
        }
      console.log("Exam Activation URL: ", exam?.activation_keys_url);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${exam?.activation_keys_url}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setActivationKeys(response.data);
      console.log(response?.data);
    } catch (error) {
      console.error("Error fetching activation keys:", error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
        if (!loginResponse?._token) {
          router.push("/login");
          return;
        }
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/te-unlimited-access/${params.slug_1}/${params.slug_2}/${selectedLetter}`,
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
    setSelectedLetter(letter); // Update the selected letter, triggering a re-fetch
  };
  return (
    <div className="container mx-auto px-4 py-8">
        {unlimitedTeAccess?.vendors?.length ? (
        <AlphabetPagination onSelect={handleLetterSelect} />
        ) : ''}
         {/* Snackbar Component */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={
          <button onClick={handleCloseSnackbar} className="text-white">
            Close
          </button>
        }
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>   
      {dialogOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md transform transition-transform duration-300 scale-100 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-700 text-center mb-4">
              Activation Keys
            </h3>
            {activationKeys.map((key, index) => (
              <div
                key={index}
                className="flex items-center p-4 mb-2 bg-gray-50 rounded-lg shadow-md border border-gray-200"
              >
                <input
                  type="text"
                  readOnly
                  value={`${key?.purchase_key || ""} | ${
                    key?.activation_key || ""
                  }`}
                  className="flex-1 text-gray-800 bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <button
                  className="ml-4 bg-gradient-to-r from-blue-500 to-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200"
                  onClick={() =>
                    handleCopyToClipboard(
                      `${key?.purchase_key || ""} | ${
                        key?.activation_key || ""
                      }`
                    )
                  }
                >
                  Copy
                </button>
              </div>
            ))}

            <button
              className="mt-4 w-full py-2 bg-gradient-to-r from-red-500 to-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
              onClick={() => setDialogOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
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
            Your Unlimited PDF access is not approved yet. We are checking your payment so this might take a few hours. Please contact our sales chat support or send an email to sales@examprince.com for fast approval. Thank you.
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
