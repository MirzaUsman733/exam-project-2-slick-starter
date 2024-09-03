"use client";
import { Card } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchCard = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [vendorData, setVendorData] = useState([]);
  const [certificationData, setCertificationData] = useState([]);
  const [isInputVisible, setIsInputVisible] = useState(false);

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
    <div style={{ position: "relative", marginBottom: 4 }}>
      {isInputVisible ? (
        <>
          <input
            type="text"
            className="bg-gray-100 text-blue-500"
            style={{
              padding: "10px",
              borderRadius: "50px",
              color: "black",
              width: "100%",
              outline: "none",
              paddingLeft: "35px",
              border: "1px solid #D7DBE0",
            }}
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => {
              const { value } = e.target;
              handleSearch(value);
            }}
          />
          <svg
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              fill: "currentColor",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </>
      ) : (
        <div className="flex justify-end items-center">
          <svg
            style={{
              textAlign: "end",
              cursor: "pointer",
              fill: "currentColor",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => setIsInputVisible(true)}
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </div>
      )}
      {searchValue && (
        <>
          <ul
            style={{
              color: "white",
              padding: "0",
              margin: "0",
              listStyle: "none",
              position: "absolute",
              top: "100%",
              left: 0,
              borderRadius: "0px",
              zIndex: 1000,
            }}
            className="w-[140%] md:w-[180%]"
          >
            <Card
              className="bg-gary-100 text-black custom-scrollbar"
              sx={{ maxHeight: "500px", overflowY: "auto", padding: "10px" }}
            >
              <li
                style={{
                  padding: "5px 10px",
                  textAlign: "center",
                }}
              >
                See all search for {searchValue}
              </li>
              <li
                className="bg-white text-gray-700 font-bold text-xl text-center"
                style={{
                  padding: "5px 10px",
                }}
              >
                Exams - {filteredData.length}
              </li>
              {filteredData.map((item, index) => (
                <div
                  key={item.code}
                  onClick={() => handleExamPage(item)}
                  style={{ cursor: "pointer" }}
                  className="border-b border-gray-500 last:border-b-0"
                >
                  <li
                    style={{
                      padding: "15px 10px",
                    }}
                    className="hover:bg-gray-100"
                  >
                    <div className="text-black font-bold text-sm">
                      {item.code}
                    </div>
                    <div className="text-xs">{item.name}</div>
                  </li>
                </div>
              ))}
              <li
                className="bg-white text-gray-700 font-bold text-xl text-center"
                style={{
                  padding: "5px 10px",
                }}
              >
                Vendors - {filteredVendors.length}
              </li>
              {filteredVendors.map((item, index) => (
                <div
                  key={item.code}
                  onClick={() => handleVendorPage(item.slug)}
                  style={{ cursor: "pointer" }}
                  className="border-b border-gray-500 last:border-b-0"
                >
                  <li
                    style={{
                      padding: "15px 10px",
                    }}
                    className="hover:bg-gray-100"
                  >
                    <div className="text-black font-bold">{item.slug}</div>
                    <div>{item.name}</div>
                  </li>
                </div>
              ))}
              <li
                className="bg-white text-gray-700 font-bold text-xl text-center"
                style={{
                  padding: "5px 10px",
                }}
              >
                Certifications - {filteredCertifications.length}
              </li>
              {filteredCertifications.map((item, index) => (
                <div
                  key={item.code}
                  onClick={() => handleCertificationPage(item)}
                  style={{ cursor: "pointer" }}
                  className="border-b border-gray-500 last:border-b-0"
                >
                  <li
                    style={{
                      padding: "15px 10px",
                    }}
                    className="hover:bg-gray-100 "
                  >
                    <div className="text-black font-bold">{item.slug}</div>
                    <div>{item.name}</div>
                  </li>
                </div>
              ))}
            </Card>
          </ul>
        </>
      )}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: black;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: black;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: black;
        }
      `}</style>
    </div>
  );
};

export default SearchCard;
