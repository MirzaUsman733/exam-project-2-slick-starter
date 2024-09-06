"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchCard = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [vendorData, setVendorData] = useState([]);
  const [certificationData, setCertificationData] = useState([]);
  const [isInputVisible, setIsInputVisible] = useState(false); // Track input visibility for desktop

  const normalizeText = (value) => {
    return value.replace(/[-_*$!@#$%^&()\s]/g, "").toLowerCase();
  };

  const fetchData = async () => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const storedExamData = localStorage.getItem("searchData");
        if (storedExamData) {
          setSearchData(JSON.parse(storedExamData));
        } else {
          const examResponse = await axios.get(
            `https://dumpsarena.com/exam-search`
          );
          setSearchData(examResponse.data);
          localStorage.setItem("searchData", JSON.stringify(examResponse.data));
        }

        const storedVendorData = localStorage.getItem("vendorData");
        if (storedVendorData) {
          setVendorData(JSON.parse(storedVendorData));
        } else {
          const vendorResponse = await axios.get(
            `https://dumpsarena.com/vendor-search`
          );
          setVendorData(vendorResponse.data);
          localStorage.setItem(
            "vendorData",
            JSON.stringify(vendorResponse.data)
          );
        }

        const storedCertificationData =
          localStorage.getItem("certificationData");
        if (storedCertificationData) {
          setCertificationData(JSON.parse(storedCertificationData));
        } else {
          const certificationResponse = await axios.get(
            `https://dumpsarena.com/certification-search`
          );
          setCertificationData(certificationResponse.data);
          localStorage.setItem(
            "certificationData",
            JSON.stringify(certificationResponse.data)
          );
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const normalizedSearchValue = normalizeText(searchValue);

  const filteredData = searchData
    .filter((item) => normalizeText(item.code).includes(normalizedSearchValue))
    .slice(0, 30);

  const filteredVendors = vendorData
    .filter((item) => normalizeText(item.slug).includes(normalizedSearchValue))
    .slice(0, 10);

  const filteredCertifications = certificationData
    .filter((item) => normalizeText(item.slug).includes(normalizedSearchValue))
    .slice(0, 10);

  const handleExamPage = (exam) => {
    router.push(`/mock-exam/${exam.vendor}/${exam.slug}`);
    setSearchValue("");
  };
  const handleVendorPage = (exam) => {
    router.push(`/mock-exam-provider/${exam}`);
    setSearchValue("");
  };
  const handleCertificationPage = (exam) => {
    router.push(`/mock-exam-certification/${exam.vendor}/${exam.slug}`);
    setSearchValue("");
  };

  return (
    <div className="relative mb-4">
      {/* Input always visible on mobile, toggle on larger screens */}
      <div className="md:hidden">
        <input
          type="text"
          className="bg-gray-100 text-blue-500 block p-2 rounded-full w-full outline-none border border-gray-300 pl-8"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <svg
          className="absolute top-1/2 left-2 transform -translate-y-1/2 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      </div>

      {/* Toggle input visibility on larger screens */}
      <div className="hidden md:flex justify-end items-center">
        {isInputVisible ? (
          <div className="relative w-full mt-3">
            <input
              type="text"
              className="bg-gray-100 text-blue-500 p-2 rounded-full w-full outline-none border border-gray-300 pl-8"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <svg
              className="absolute top-1/2 left-2 transform -translate-y-1/2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
            {/* Button to close the input */}
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
              onClick={() => {
                setSearchValue("")
                setIsInputVisible(false)}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path></svg>
            </button>
          </div>
        ) : (
          <svg
            className="text-end cursor-pointer mt-3"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => setIsInputVisible(true)}
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        )}
      </div>

      {/* Search results */}
      {searchValue && (
        <ul className="absolute left-0 top-full w-full 2xl:w-[250%] md:mt-5 bg-blue-50 z-50 p-2 rounded-lg shadow-lg">
          <div className="bg-gray-100 text-black max-h-80 overflow-scroll custom-scrollbar p-2">
            <li className="p-2 text-center">See all search results for {searchValue}</li>
            <li className="bg-white text-gray-900 font-bold text-xl text-center p-2">
              Exams - {filteredData.length}
            </li>
            {filteredData.map((item) => (
              <div
                key={item.code}
                onClick={() => handleExamPage(item)}
                className="cursor-pointer border-b border-gray-300 last:border-none hover:bg-gray-200"
              >
                <li className="p-2">
                  <div className="text-black font-bold text-sm">{item.code}</div>
                  <div className="text-xs">{item.name}</div>
                </li>
              </div>
            ))}
            <li className="bg-white text-gray-700 font-bold text-xl text-center p-2">
              Vendors - {filteredVendors.length}
            </li>
            {filteredVendors.map((item) => (
              <div
                key={item.slug}
                onClick={() => handleVendorPage(item.slug)}
                className="cursor-pointer border-b border-gray-300 last:border-none hover:bg-gray-200"
              >
                <li className="p-2">
                  <div className="text-black font-bold">{item.slug}</div>
                  <div>{item.name}</div>
                </li>
              </div>
            ))}
            <li className="bg-white text-gray-700 font-bold text-xl text-center p-2">
              Certifications - {filteredCertifications.length}
            </li>
            {filteredCertifications.map((item) => (
              <div
                key={item.slug}
                onClick={() => handleCertificationPage(item)}
                className="cursor-pointer border-b border-gray-300 last:border-none hover:bg-gray-200"
              >
                <li className="p-2">
                  <div className="text-black font-bold">{item.slug}</div>
                  <div>{item.name}</div>
                </li>
              </div>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default SearchCard;
