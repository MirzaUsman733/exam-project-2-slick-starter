"use client";
import AlphabetPagination from "@/app/all-te-exams-list/AlphabetPagination";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activationKeys, setActivationKeys] = useState([]);
  const [unlimitedTeAccess, setUnlimitedTeAccess] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("A");

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
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    if (!loginResponse?._token) {
      router.push("/login");
      return;
    }
    try {
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
    setSelectedLetter(letter); // Update the selected letter, triggering a re-fetch
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center bg-blue-100 p-4 rounded-md shadow space-y-2">
        <h2 className="text-xl font-semibold">Unlimited Test Engine Access</h2>
        <p>You have unlimited access to Test Engine Dumps files.</p>
        <p>You have downloaded: {unlimitedTeAccess?.total_downloaded}</p>
        <p>Monthly Download Limit: {unlimitedTeAccess?.total_limit}</p>
        <p>
          Each download of a different or the same Test Engine file will affect
          the download limit.
        </p>
        <p className="text-red-600 font-semibold">
          For Activation Key. Must have to download TEST ENGINE file first.
        </p>
      </div>
      {unlimitedTeAccess?.vendors?.length ? (
        <AlphabetPagination onSelect={handleLetterSelect} />
      ) : (
        ""
      )}
      {/* Snackbar Component */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      {dialogOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
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
                  className="flex-1 text-gray-800 bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
                />
                <button
                  className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
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
              className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg"
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
              className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md"
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
                      className="text-blue-500 underline"
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
            chat support or send an email to sales@examprince.com for fast
            approval. Thank you.
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
