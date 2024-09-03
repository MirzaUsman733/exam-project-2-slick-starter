"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
const countries = [
  "US",
  "IND",
  "IND",
  "RUS",
  "UK",
  "BRA",
  "FRA",
  "ITA",
  "FRA",
  "US",
  "SPA",
  "CAN",
  "UK",
  "GER",
  "MEX",
  "SAU",
  "US",
  "AUS",
  "SAF",
  "JAP",
  "US",
  "UK",
  "ITA",
  "GER",
  "IND",
  "US",
  "US",
  "IND",
  "IND",
  "RUS",
  "UK",
  "BRA",
  "FRA",
  "ITA",
  "FRA",
  "US",
  "SPA",
  "CAN",
  "UK",
  "GER",
  "MEX",
  "SAU",
  "US",
  "AUS",
  "SAF",
  "JAP",
  "US",
  "UK",
  "ITA",
  "GER",
  "IND",
  "US",
];
const generateCountryPairs = (countries) => {
  // Shuffle the countries array
  const shuffledCountries = [...countries].sort(() => 0.5 - Math.random());

  // Create pairs
  const pairs = [];
  for (let i = 0; i < shuffledCountries.length - 1; i += 2) {
    pairs.push([shuffledCountries[i], shuffledCountries[i + 1]]);
  }

  // If the number of countries is odd, add the last country as a single element pair
  if (shuffledCountries.length % 2 !== 0) {
    pairs.push([shuffledCountries[shuffledCountries.length - 1]]);
  }

  return pairs;
};
const countryPairs = generateCountryPairs(countries);
const ChildComponent = ({ hotExamsWeek, hotExamMonthly }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedTab, setSelectedTab] = useState("week");
  const [topCountryPairs, setTopCountryPairs] = useState([]);
  const paginate = (exams, pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return exams.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  useEffect(() => {
    // Set the pairs when the component mounts
    setTopCountryPairs(countryPairs);
  }, []);

  const currentExams = selectedTab === "week" ? hotExamsWeek : hotExamMonthly;
  const paginatedExams = paginate(currentExams || [], currentPage);
  const totalPages = Math.ceil((currentExams?.length || 0) / itemsPerPage);
  return (
    <div>
      <section className="bg-coolGray-50">
        <div className="container mx-auto p-6">
          <div className="pt-6 bg-white overflow-hidden rounded-md shadow-dashboard">
            <div className="flex justify-between items-center pb-3 border-b">
              <h2 className="pe-6 text-md md:text-xl text-coolGray-900 font-bold">
                Hot Exams
              </h2>
              <div className="flex items-center gap-1 md:gap-3">
                <button
                  className={`bg-blue-500 text-white px-2 md:px-3 py-1 font-bold rounded-lg ${
                    selectedTab === "week" ? "bg-blue-700" : ""
                  }`}
                  onClick={() => handleTabChange("week")}
                >
                  Weekly
                </button>
                <button
                  className={`bg-blue-500 text-white px-2 md:px-3 py-1 font-bold rounded-lg ${
                    selectedTab === "month" ? "bg-blue-700" : ""
                  }`}
                  onClick={() => handleTabChange("month")}
                >
                  Monthly
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  <tr className="whitespace-nowrap h-11 bg-coolGray-50 sticky top-0 bg-white z-100">
                    <th className="pe-1 md:pe-4 font-semibold text-xs md:text-sm text-coolGray-500 uppercase text-left rounded-l-md">
                      <p>Exam Title</p>
                    </th>
                    <th className="hidden md:table-cell whitespace-nowrap px-2 md:px-4 font-bold text-xs md:text-sm text-coolGray-500 uppercase text-left">
                      Vendor
                    </th>
                    <th className="hidden md:table-cell whitespace-nowrap px-2 md:px-4 font-bold text-xs md:text-sm text-coolGray-500 uppercase text-left">
                      Exam Code
                    </th>
                    <th className="hidden md:table-cell whitespace-nowrap px-2 md:px-4 font-bold text-xs md:text-sm text-coolGray-500 uppercase text-left">
                      Top country
                    </th>
                    <th className="hidden md:table-cell whitespace-nowrap px-2 md:px-4 font-bold text-xs md:text-sm text-coolGray-500 uppercase text-left">
                      Rating
                    </th>
                    <th className="hidden md:table-cell whitespace-nowrap px-2 md:ps-4 font-bold text-xs md:text-sm text-coolGray-500 uppercase text-left rounded-r-md">
                      Buy Now
                    </th>
                  </tr>
                  {paginatedExams.map((hotExam, index) => (
                    <tr
                      key={hotExam?.exam_id}
                      className={`h-18 border-b border-coolGray-100 ${
                        index % 2 ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <th className="whitespace-nowrap w-full overflow-hidden text-wrap py-3 bg-white text-left">
                        <Link
                          href={`/mock-exam/${hotExam?.vendor_perma}/${hotExam?.exam_perma}`}
                        >
                          <div className="flex items-center -m-2">
                            <div className="w-auto py-2 ps-2">
                              <div className="flex items-center justify-center lg:w-8 lg:h-8 2xl:w-9 2xl:h-9 text-base font-medium bg-blue-500 rounded-md">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 10.94C21.9896 10.8481 21.9695 10.7576 21.94 10.67V10.58C21.8919 10.4772 21.8278 10.3827 21.75 10.3L15.75 4.3C15.6673 4.22222 15.5728 4.15808 15.47 4.11H15.37C15.2728 4.058 15.1683 4.02092 15.06 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V11C22 11 22 11 22 10.94ZM16 7.41L18.59 10H17C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9V7.41ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H14V9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12H20V17ZM7 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11C12 10.7348 11.8946 10.4804 11.7071 10.2929C11.5196 10.1054 11.2652 10 11 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM7 14C6.73478 14 6.48043 14.1054 6.29289 14.2929C6.10536 14.4804 6 14.7348 6 15C6 15.2652 6.10536 15.5196 6.29289 15.7071C6.48043 15.8946 6.73478 16 7 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14H7Z"
                                    fill="#EBF3FE"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="max-w-full overflow-hidden md:w-[40vw] p-2">
                              <p className="text-wrap text-xs md:text-sm font-medium hover:underline hover:text-blue-700 text-coolGray-800">
                                {hotExam?.vendor_title} - {hotExam?.exam_code} -{" "}
                                {hotExam?.exam_title}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </th>
                      <th className="hidden md:table-cell whitespace-nowrap px-2 md:px-4 bg-white text-xs md:text-sm font-medium text-coolGray-800 z-0 text-left">
                        <Link
                          className="font-medium text-blue-500 hotExam-link z-0"
                          href={`/mock-exam-provider/${hotExam?.vendor_perma}`}
                        >
                          {hotExam?.vendor_title}
                        </Link>
                      </th>
                      <th className="hidden md:table-cell whitespace-nowrap px-2 md:px-4 bg-white text-xs md:text-sm font-medium text-coolGray-800 text-left">
                        {hotExam?.exam_code}
                      </th>
                      <th className="hidden md:table-cell whitespace-nowrap px-2 md:px-4 bg-white text-xs md:text-sm font-medium text-coolGray-800 text-left">
                        {topCountryPairs[index]
                          ? topCountryPairs[index].join(" | ")
                          : "US | UK"}
                      </th>
                      <th className="hidden md:table-cell whitespace-nowrap px-2 md:px-4 bg-white text-xs md:text-sm font-medium text-coolGray-800 text-left">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 128 128"
                          >
                            <path
                              fill="#fdd835"
                              d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                            />
                            <path
                              fill="#ffff8d"
                              d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                            />
                            <path
                              fill="#f4b400"
                              d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                            />
                          </svg>{" "}
                          <span> 4.5 </span>
                        </div>
                      </th>
                      <th className="hidden md:table-cell whitespace-nowrap ps-1 md:ps-4 bg-white text-xs md:text-sm font-medium text-blue-500 text-left">
                        <Link
                          className="bg-blue-500 border-0 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 text-white font-bold py-1 px-3 rounded"
                          href={`/mock-exam/${hotExam?.vendor_perma}/${hotExam?.exam_perma}`}
                        >
                          Buy
                        </Link>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap items-center justify-between w-full lg:w-1/2 py-4 px-6 -m-2">
              <div className="w-auto p-2">
                <p className="text-sm font-semibold text-coolGray-500">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(
                    currentPage * itemsPerPage,
                    [selectedTab]?.length || 0
                  )}{" "}
                  of {[selectedTab]?.length} results
                </p>
              </div>
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto mr-3">
                    <div className="relative flex items-center">
                      <svg
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.16667 0.641619C9.01053 0.48641 8.79932 0.399292 8.57917 0.399292C8.35901 0.399292 8.1478 0.48641 7.99167 0.641619L5 3.59162L2.05 0.641619C1.89386 0.48641 1.68266 0.399292 1.4625 0.399292C1.24235 0.399292 1.03114 0.48641 0.875 0.641619C0.796893 0.719088 0.734898 0.811256 0.692591 0.912805C0.650284 1.01435 0.628502 1.12328 0.628502 1.23329C0.628502 1.3433 0.650284 1.45222 0.692591 1.55377C0.734898 1.65532 0.796893 1.74748 0.875 1.82495L4.40833 5.35829C4.4858 5.43639 4.57797 5.49839 4.67952 5.54069C4.78107 5.583 4.88999 5.60478 5 5.60478C5.11001 5.60478 5.21893 5.583 5.32048 5.54069C5.42203 5.49839 5.5142 5.43639 5.59167 5.35829L9.16667 1.82495C9.24477 1.74748 9.30677 1.65532 9.34908 1.55377C9.39138 1.45222 9.41317 1.3433 9.41317 1.23329C9.41317 1.12328 9.39138 1.01435 9.34908 0.912805C9.30677 0.811256 9.24477 0.719088 9.16667 0.641619Z"
                          fill="#556987"
                        ></path>
                      </svg>
                      <select
                        className="appearance-none py-1 px-4 w-16 text-coolGray-500 text-sm font-medium bg-white border outline-none border-coolGray-200 focus:border-yellow-500 rounded-md"
                        value={itemsPerPage}
                        onChange={(e) => {
                          setCurrentPage(1);
                          setItemsPerPage(parseInt(e.target.value));
                        }}
                      >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-auto">
                    <p className="text-sm text-coolGray-500 font-medium">
                      per page
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center gap-2">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      className={`${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-white text-blue-500 border border-blue-500"
                      } px-4 py-1 rounded-md`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildComponent;
