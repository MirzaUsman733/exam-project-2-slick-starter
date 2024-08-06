// "use client";
// import Link from "next/link";
// import React, { useState } from "react";

// const CertificationsComponent = ({ certifications }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredCertifications = searchTerm.trim()
//     ? certifications?.filter((certification) =>
//         certification?.vendor_title
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase())
//       )
//     : certifications;
//   return (
//     <div className="container p-6 mx-auto font-[Lato] mt-10">
//       <div>
//         <div>
//           <h2 className="bg-blue-500 text-white p-5 mb-5 text-3xl font-bold text-center">
//             Certifications
//           </h2>
//         </div>
//         <div className="flex justify-between items-center mb-10">
//           <h1 className="text-3xl mb-5 font-bold">Select the Certifications</h1>
//           <div className="flex flex-col items-center justify-center w-1/4">
//             <div className="w-full">
//               <input
//                 id="customInput"
//                 type="email"
//                 placeholder="Enter the Certification Name"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-4 py-2 border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 active:border-blue-500 rounded-lg shadow transition-shadow duration-300 ease-in-out focus:shadow-lg placeholder-gray-500 text-gray-700"
//                 style={{
//                   background: "rgba(255, 255, 255, 0.65)",
//                   backdropFilter: "blur(10px)",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
//           {filteredCertifications?.map((certification) => (
//             <div key={certification?.vendor_id}>
//               <Link
//                 href={`/exam-providers/${certification?.vendor_perma}`}
//                 // className="flex flex-col p-3 border border-gray-200 clip-polygon-exam-provider"
//                 className="flex flex-col p-3 border border-gray-200"
//               >
//                 <div
//                   className="relative bg-white rounded-lg p-6 flex-1 min-w-[calc(33.333%-20px)] shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:before:top-[-30%] hover:before:left-[-30%]"
//                 >
//                   <div className="absolute left-[65%] w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 z-0 transition-all duration-300 ease-in-out transform rotate-45 rounded-full before:content-[''] before:absolute before:top-0 before:left-0"></div>
//                   <div className="relative z-10 text-gray-800">
//                     <h2 className="text-xl font-semibold mb-2 text-blue-500">
//                       {certification?.vendor_title}
//                     </h2>
//                     <p className="text-lg font-medium text-gray-600">
//                       Certifications ({certification?.vendor_certs})
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificationsComponent;













"use client";
import React, { useState } from "react";
import Link from "next/link";

const CertificationsComponent = ({ certifications }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCertifications = searchTerm.trim()
    ? certifications?.filter((certification) =>
        certification?.vendor_title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : certifications;

  return (
    <div className="container mx-auto p-6 mt-10">
      <div className=" relative text-white">
        <h2 className="text-5xl font-extrabold text-gray-700 text-center mb-16 tracking-tight leading-tight relative z-10">
          Explore Exam Providers
        </h2>

        <div className="flex justify-center mb-12 relative z-10">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for a Certification"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full border text-gray-700 bg-white focus:ring-4 focus:ring-blue-300 focus:outline-none placeholder-gray-400 transition duration-300 ease-in-out"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-3 h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 4a8 8 0 015.29 13.71l5.6 5.6a1 1 0 01-1.42 1.42l-5.6-5.6A8 8 0 118 4z"
              />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
          {filteredCertifications?.map((certification) => (
            <Link
              key={certification?.vendor_id}
              href={`/mock-exam-providers/${certification?.vendor_perma}`}
            >
              <div className="group relative p-6 transform hover:scale-10 transition-transform duration-300 ease-in-out">
                <div
                  style={{
                    boxShadow: "0px 1px 3px 5px rgba(0, 0, 0, 0.05)",
                  }}
                  className="absolute inset-0 bg-white opacity-100 rounded-2xl group-hover:opacity-100 group-hover:bg-gray-50 transition-opacity duration-300 ease-in-out"
                ></div>
                <div className="relative z-10">
                  <h2 className="text-2xl flex items-center gap-3 font-semibold text-gray-700 group-hover:text-blue-500 transition-colors duration-300 mb-4">
                    <svg
                      className="text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.3em"
                      height="1.3em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <path d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11M8 10h8M8 6h4m-4 8h3" />
                        <path d="m16.306 17.113l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.177.568l-1.471 1.5l.347 2.118c.044.272-.229.48-.462.351l-1.818-1l-1.818 1c-.234.129-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.176-.568zM16 2v3.4a.6.6 0 0 0 .6.6H20" />
                      </g>
                    </svg>

                    {/* <FaRegCheckCircle className="text-blue-500" />{" "} */}
                    {certification?.vendor_title}
                  </h2>
                  {/* <p className="text-lg font-medium flex items-center justify-center gap-3 text-black group-hover:text-gray-100 transition-colors duration-300">
                    <span> {vendor?.vendor_exams} Exams </span>
                  </p> */}
                  <div className="flex justify-end items-center gap-1 mt-6 transition-colors duration-300">
                    <span className="text-lg font-semibold text-blue-500">
                      {/* View Details */}
                      <span> {certification?.vendor_certs} Certifications </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-1 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsComponent;