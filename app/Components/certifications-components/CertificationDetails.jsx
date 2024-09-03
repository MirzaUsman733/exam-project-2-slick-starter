import Link from "next/link";

function CertificationDetails({ certData, vendorPerma }) {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <div className="px-3 md:px-6 py-6 bg-blue-500 rounded-lg text-white">
            <h1 className="text-xl font-medium md:text-4xl md:font-extrabold text-center">
              {certData?.cert_title} Certification Details
            </h1>
          </div>
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
              <div>
                <p className="text-sm md:text-lg text-gray-800">
                  <strong>Certification Title:</strong>{" "}
                  <span className="italic">{certData?.cert_full_name}</span>
                </p>
                <p className="text-sm md:text-lg text-gray-800 mt-2 md:mt-4">
                  <strong>Exam Provider:</strong>{" "}
                  <span className="uppercase italic">{vendorPerma}</span>
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end my-2 gap-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
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
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
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
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
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
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
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
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="#FDD835">
                      <path
                        d="M128 24v165.09l-54.72 33.65a8.4 8.4 0 0 1-12.52-9.17l14.88-62.79l-48.7-42A8.46 8.46 0 0 1 31.73 94l63.91-5.2l24.62-59.6A8.26 8.26 0 0 1 128 24"
                        opacity="1"
                      />
                      <path d="M239.18 97.26A16.38 16.38 0 0 0 224.92 86l-59-4.76l-22.78-55.09a16.36 16.36 0 0 0-30.27 0L90.11 81.23L31.08 86a16.46 16.46 0 0 0-9.37 28.86l45 38.83L53 211.75a16.4 16.4 0 0 0 24.5 17.82l50.5-31.08l50.53 31.08A16.4 16.4 0 0 0 203 211.75l-13.76-58.07l45-38.83a16.43 16.43 0 0 0 4.94-17.59M69.09 215.94c-.15.09-.2.12-.38 0a.37.37 0 0 1-.17-.48l14.88-62.8a8 8 0 0 0-2.56-7.91l-48.7-42a.39.39 0 0 1-.13-.51c.09-.27.18-.27.33-.29l63.92-5.16a8 8 0 0 0 6.72-4.93l17-41.08v133.85Zm154.75-113.21l-48.7 42a8 8 0 0 0-2.56 7.91l14.88 62.8a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0L136 184.63V50.78l17 41.08a8 8 0 0 0 6.75 4.92l63.91 5.16c.16 0 .25 0 .34.29s0 .4-.16.5" />
                    </g>
                  </svg>{" "}
                  &nbsp; <span className="text-md"> 4.7 </span>
                  &nbsp;{" "}
                  <span className="text-md text-blue-900 font-bold">
                    {" "}
                    (4055){" "}
                  </span>
                </div>
                <Link
                  href={`/mock-certifications/${vendorPerma}/${certData?.cert_perma}`}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-[50%] md:w-[25%] text-center py-2 md:py-3 rounded-lg transition duration-300 shadow-lg"
                >
                  Take Exam
                </Link>
              </div>
            </div>
          </div>
          <div className="py-6">
            <h2 className="text-xl md:text-3xl font-bold text-blue-500 mb-4">
              Exams for {certData?.cert_title} Certification :
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
              {certData?.cert_multiple_exams?.map((certification) => (
                <div
                  key={certification?.exam_id}
                  className="relative bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg transition duration-300"
                >
                  {/* Ribbon for Retired Exam */}
                  {certification?.exam_retired === true ? (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                      Retired Exam
                    </div>
                  ) : (
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                      New Arrival
                    </div>
                  )}

                  <div className="p-4 md:p-6 flex flex-wrap md:flex-nowrap gap-10">
                    <div>
                      <img
                        src="https://dumpsarena.com/media/package-small-min_optimized.png"
                        alt="Exam Image"
                        className="h-28"
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-xl font-bold text-blue-600 mb-2">
                        {certification?.exam_title}
                      </h3>
                      <p className="text-md text-gray-700 mb-2">
                        Vendor:{" "}
                        <span className="uppercase">
                          {certification?.exam_vendor_title}
                        </span>
                      </p>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
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
                            </svg>
                          ))}{" "}
                          &nbsp; (4.5)
                        </div>
                        <div className="">
                          <Link
                            href={`/mock-exam/${certification?.exam_vendor_perma}/${certification?.exam_perma}`}
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                // <div
                //   key={certification?.exam_id}
                //   className="relative bg-white py-5 px-10 rounded-lg shadow-md"
                //   style={{
                //     boxShadow: "0px 1px 3px 5px rgba(0, 0, 0, 0.05)",
                //   }}
                // >
                //   {/* Ribbon for Retired Exam */}
                //   {certification?.exam_retired === true ? (
                //     <div className="absolute top-0 right-0 bg-red-500 text-white text-lg font-bold px-5 py-2 rounded-bl-3xl">
                //       Retired Exam
                //     </div>
                //   ) : (
                //     <div className="absolute top-0 right-0 bg-green-500 text-white text-lg font-bold px-5 py-2 rounded-bl-3xl">
                //       New Arrival
                //     </div>
                //   )}
                //   <div className="grid grid-cols-2 items-center">
                //     <div>
                //       <h2 className="text-2xl text-blue-500 font-bold mb-2 ">
                //         {certification?.exam_title}
                //       </h2>
                //       <p className="text-gray-600 my-2">
                //         Reliable Study Materials & Testing Engine for System
                //         Administration 4
                //       </p>
                //       <span className="inline-block bg-blue-100 text-blue-600 py-1 px-2 rounded text-sm mb-4">
                //         {certification?.exam_vendor_title}
                //       </span>
                //       <ul className="list-none p-0 m-0 text-gray-700">
                //         <li className="mb-2 flex gap-2">
                //           <svg
                //             className="text-blue-500"
                //             xmlns="http://www.w3.org/2000/svg"
                //             width="1.3em"
                //             height="1.3em"
                //             viewBox="0 0 24 24"
                //           >
                //             <path
                //               fill="none"
                //               stroke="currentColor"
                //               strokeLinecap="round"
                //               strokeLinejoin="round"
                //               strokeWidth="5"
                //               d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                //               color="currentColor"
                //             />
                //           </svg>{" "}
                //           <span>
                //             Expert-verified, accurate, with instant updates and
                //             refunds.
                //           </span>
                //         </li>
                //         <li className="mb-2 flex gap-2">
                //           <svg
                //             className="text-blue-500"
                //             xmlns="http://www.w3.org/2000/svg"
                //             width="1.3em"
                //             height="1.3em"
                //             viewBox="0 0 24 24"
                //           >
                //             <path
                //               fill="none"
                //               stroke="currentColor"
                //               strokeLinecap="round"
                //               strokeLinejoin="round"
                //               strokeWidth="5"
                //               d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                //               color="currentColor"
                //             />
                //           </svg>{" "}
                //           <span>
                //             High-value PDFs with secure, successful exam prep.
                //           </span>
                //         </li>
                //         <li className="mb-2 flex gap-2">
                //           <svg
                //             className="text-blue-500"
                //             xmlns="http://www.w3.org/2000/svg"
                //             width="1.3em"
                //             height="1.3em"
                //             viewBox="0 0 24 24"
                //           >
                //             <path
                //               fill="none"
                //               stroke="currentColor"
                //               strokeLinecap="round"
                //               strokeLinejoin="round"
                //               strokeWidth="5"
                //               d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                //               color="currentColor"
                //             />
                //           </svg>{" "}
                //           <span>Up-To-Date Exam Study Material</span>
                //         </li>
                //         <li className="flex gap-2">
                //           <svg
                //             className="text-blue-500"
                //             xmlns="http://www.w3.org/2000/svg"
                //             width="1.3em"
                //             height="1.3em"
                //             viewBox="0 0 24 24"
                //           >
                //             <path
                //               fill="none"
                //               stroke="currentColor"
                //               strokeLinecap="round"
                //               strokeLinejoin="round"
                //               strokeWidth="5"
                //               d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11"
                //               color="currentColor"
                //             />
                //           </svg>{" "}
                //           <span>Guaranteed To Have Actual PDF</span>
                //         </li>
                //       </ul>
                //     </div>
                //     <div className="text-center me-10">
                //       <div className="bg-red-100 text-red-500 text-sm py-1 px-2 rounded inline-block mb-3">
                //         Mega Sale
                //       </div>
                //       <div className="text-red-500 text-xl mb-3">
                //         <span className="block text-2xl font-bold">
                //           (40-70% OFF)
                //         </span>
                //         <p className="text-gray-600 text-md my-1">
                //           Hurry up! offer ends in 14h 22m 16s
                //         </p>
                //       </div>
                //       <div className="mt-2 text-lg text-yellow-600">
                //         <span className="text-yellow-600 text-xl">★</span> 4.2
                //         (2547) &nbsp; | &nbsp; 5 - Star Exam
                //       </div>
                //       {/* <div className="my-4 text-lg text-gray-800">
                //         <span className="line-through text-gray-400 mr-3">
                //           $500
                //         </span>
                //         <span className="text-2xl font-bold">$250</span>
                //         <p>$500 for 2 nights</p>
                //       </div> */}
                //       <div className="absolute bottom-3 right-5">
                //         <Link  href={`/exam-details/${certification?.exam_vendor_perma}/${certification?.exam_perma}`} className="text-blue-500 flex border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer px-3 py-1 rounded-full">
                //           <span>See Exam Detail</span>
                //           <svg
                //             xmlns="http://www.w3.org/2000/svg"
                //             className="h-6 w-6 ml-1"
                //             fill="none"
                //             viewBox="0 0 24 24"
                //             stroke="currentColor"
                //           >
                //             <path
                //               strokeLinecap="round"
                //               strokeLinejoin="round"
                //               strokeWidth="2"
                //               d="M13 7l5 5m0 0l-5 5m5-5H6"
                //             />
                //           </svg>
                //         </Link>
                //       </div>
                //     </div>
                //   </div>
                // </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationDetails;
