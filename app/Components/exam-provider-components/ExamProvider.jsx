// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// const ExamProvider = ({ vendors }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredVendors = searchTerm.trim()
//     ? vendors?.filter((vendor) =>
//         vendor?.vendor_title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : vendors;

//   return (
//     <div className="container mx-auto p-6 mt-10 font-sans">
//       <div className="bg-gradient-to-br from-white p-8 mx-auto relative">
//         {/* Decorative Vector Background */}
//         <div className="absolute inset-0 pointer-events-none z-0">
//           <svg
//             className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
//             width="400"
//             height="400"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="200" cy="200" r="200" fill="url(#paint0_linear)" />
//             <defs>
//               <linearGradient
//                 id="paint0_linear"
//                 x1="100"
//                 y1="100"
//                 x2="300"
//                 y2="300"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#3b82f6" stopOpacity="0.15" />
//                 <stop offset="1" stopColor="#ec4899" stopOpacity="0.05" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>

//         <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 tracking-tight leading-tight relative z-10">
//           Explore Exam Providers
//         </h2>

//         <div className="flex justify-center mb-12 relative z-10">
//           <div className="relative w-full max-w-lg">
//             <input
//               type="text"
//               placeholder="Search for a Vendor"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-6 py-3 rounded-full text-gray-700 bg-gradient-to-r from-gray-200 to-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none placeholder-gray-500 transition duration-300 ease-in-out"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute right-4 top-3 h-6 w-6 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M8 4a8 8 0 015.29 13.71l5.6 5.6a1 1 0 01-1.42 1.42l-5.6-5.6A8 8 0 118 4z"
//               />
//             </svg>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
//           {filteredVendors?.map((vendor) => (
//             <Link key={vendor?.vendor_id} href={`/exam-providers/${vendor?.vendor_perma}`}>
//               <div className="group relative bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 rounded-3xl group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
//                 <div className="relative z-10">
//                   <h2 className="text-2xl font-semibold text-blue-500 group-hover:text-blue-600 transition-colors duration-300 mb-4">
//                     {vendor?.vendor_title}
//                   </h2>
//                   <p className="text-lg font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
//                     {vendor?.vendor_exams} Exams Available
//                   </p>
//                   <div className="flex justify-end items-center mt-6 text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
//                     <span className="text-sm font-semibold">
//                       View Details
//                     </span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 ml-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M13 7l5 5m0 0l-5 5m5-5H6"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExamProvider;

// "use client";
// import React, { useState } from "react";
// import { FaRegCheckCircle } from "react-icons/fa"; // React icon for a checkmark

// const ExamProvider = ({ vendors }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredVendors = searchTerm.trim()
//     ? vendors?.filter((vendor) =>
//         vendor?.vendor_title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : vendors;

//   return (
//     <div className="container mx-auto p-6 mt-10 font-[lato]">
//       <div className="bg-gradient-to-br from-white to-white">
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight leading-tight">
//           Explore Exam Providers
//         </h2>

//         <div className="flex justify-center mb-8">
//           <div className="relative w-full max-w-lg">
//             <input
//               type="text"
//               placeholder="Search for a Vendor"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-6 py-3 rounded-full text-gray-700 bg-gradient-to-r from-gray-200 to-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none placeholder-gray-500 transition duration-300 ease-in-out"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute right-4 top-3 h-6 w-6 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M8 4a8 8 0 015.29 13.71l5.6 5.6a1 1 0 01-1.42 1.42l-5.6-5.6A8 8 0 118 4z"
//               />
//             </svg>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto overflow-hidden">
//             <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
//               <tr>
//                 <th className="px-6 py-3 text-left text-md font-semibold uppercase tracking-wider">
//                   Vendor Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-md font-semibold uppercase tracking-wider">
//                   Exams Available
//                 </th>
//                 <th className="px-6 py-3 text-left text-md font-semibold uppercase tracking-wider">
//                   Exam Type
//                 </th>
//                 <th className="px-6 py-3 text-left text-md font-semibold uppercase tracking-wider">
//                   Rating
//                 </th>
//                 <th className="px-6 py-3 text-left text-md font-semibold uppercase tracking-wider">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700">
//               {filteredVendors?.map((vendor, index) => (
//                 <tr
//                   key={vendor?.vendor_id}
//                   className={`hover:bg-gray-100 ${
//                     index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                   }`}
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap text-md font-medium">
//                     <div className="flex items-center space-x-2">
//                       <FaRegCheckCircle className="text-green-500" />
//                       <span>{vendor?.vendor_title}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-md font-medium">
//                     {vendor?.vendor_exams} Exams
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-md">
//                     <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
//                       {vendor?.certification_type || "General"}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 flex gap-1 whitespace-nowrap text-md">
//                     {/* {vendor?.status === "active" ? (
//                       <span className="text-green-600 font-semibold">Active</span>
//                     ) : (
//                       <span className="text-red-600 font-semibold">Inactive</span>
//                     )} */}
//                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#fdd835" d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"/><path fill="#ffff8d" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"/><path fill="#f4b400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"/></svg>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#fdd835" d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"/><path fill="#ffff8d" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"/><path fill="#f4b400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"/></svg>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#fdd835" d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"/><path fill="#ffff8d" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"/><path fill="#f4b400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"/></svg>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#fdd835" d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"/><path fill="#ffff8d" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"/><path fill="#f4b400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"/></svg>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#fdd835" d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"/><path fill="#ffff8d" d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"/><path fill="#f4b400" d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"/></svg>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-md">
//                     <a
//                       href={`/exam-providers/${vendor?.vendor_perma}`}
//                       className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
//                     >
//                       View Details
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//               {filteredVendors?.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan="5"
//                     className="px-6 py-4 text-center text-gray-500 text-sm"
//                   >
//                     No vendors found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExamProvider;

// Idea 2

// "use client";
// import React, { useState } from "react";
// import { FaRegCheckCircle, FaStar, FaStarHalfAlt } from "react-icons/fa"; // React icons for checkmark and stars

// const ExamProvider = ({ vendors }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredVendors = searchTerm.trim()
//     ? vendors?.filter((vendor) =>
//         vendor?.vendor_title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : vendors;

//   // Function to generate a random number of ratings between 300 and 500
//   const getRandomRatingCount = () => Math.floor(Math.random() * 200) + 300;

//   return (
//     <div className="container mx-auto p-6 mt-10 font-[lato]">
//       <div className="bg-gradient-to-br from-white to-white">
//         <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight leading-tight">
//           Explore Exam Providers
//         </h2>

//         <div className="flex justify-center mb-8">
//           <div className="relative w-full max-w-lg">
//             <input
//               type="text"
//               placeholder="Search for a Vendor"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-6 py-3 rounded-full text-gray-700 bg-gradient-to-r from-gray-200 to-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none placeholder-gray-500 transition duration-300 ease-in-out"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute right-4 top-3 h-6 w-6 text-gray-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M8 4a8 8 0 015.29 13.71l5.6 5.6a1 1 0 01-1.42 1.42l-5.6-5.6A8 8 0 118 4z"
//               />
//             </svg>
//           </div>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto overflow-hidden">
//             <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
//               <tr>
//                 <th className="px-6 py-5 text-left text-md font-extrabold uppercase tracking-wider">
//                   Vendor Name
//                 </th>
//                 <th className="px-6 py-5 text-left text-md font-extrabold uppercase tracking-wider">
//                   Exams Available
//                 </th>
//                 <th className="px-6 py-5 text-left text-md font-extrabold uppercase tracking-wider">
//                   Exam Type
//                 </th>
//                 <th className="px-6 py-5 text-left text-md font-extrabold uppercase tracking-wider">
//                   Rating
//                 </th>
//                 <th className="px-6 py-5 text-left text-md font-extrabold uppercase tracking-wider">
//                   User Ratings
//                 </th>
//                 <th className="px-6 py-5 text-left text-md font-extrabold uppercase tracking-wider">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700">
//               {filteredVendors?.map((vendor, index) => (
//                 <tr
//                   key={vendor?.vendor_id}
//                   className={`hover:bg-gray-100 border-b`}
//                 >
//                   <td className="px-6 py-6 whitespace-nowrap text-md font-medium">
//                     <div className="flex items-center space-x-2">
//                       <FaRegCheckCircle className="text-green-500" />
//                       <span>{vendor?.vendor_title}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-6 whitespace-nowrap text-md font-medium">
//                     {vendor?.vendor_exams} Exams
//                   </td>
//                   <td className="px-6 py-6 whitespace-nowrap text-md">
//                     <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
//                       {vendor?.certification_type || "General"}
//                     </span>
//                   </td>
//                   <td className="px-6 py-6 flex items-center space-x-1 whitespace-nowrap text-md">
//                     <div className="flex items-center">
//                       <FaStar className="text-yellow-400" />
//                       <FaStar className="text-yellow-400" />
//                       <FaStar className="text-yellow-400" />
//                       <FaStar className="text-yellow-400" />
//                       <FaStarHalfAlt className="text-yellow-400" />
//                     </div>
//                     <span className="ml-2 text-gray-600">
//                       (4.5)
//                     </span>
//                   </td>
//                   <td className="px-6 py-6 whitespace-nowrap text-md font-medium text-gray-600">
//                     {getRandomRatingCount()} ratings
//                   </td>
//                   <td className="px-6 py-6 whitespace-nowrap text-md">
//                     <a
//                       href={`/exam-providers/${vendor?.vendor_perma}`}
//                       className="text-blue-600 border border-blue-600 hover:bg-blue-500 hover:text-white hover:border-0 px-4 py-2 rounded-full font-semibold transition-colors duration-300"
//                     >
//                       View Details
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//               {filteredVendors?.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="px-6 py-4 text-center text-gray-500 text-sm"
//                   >
//                     No vendors found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExamProvider;

// Idea 3

"use client";
import React, { useState } from "react";
import Link from "next/link";

const ExamProvider = ({ vendors }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredVendors = searchTerm.trim()
    ? vendors?.filter((vendor) =>
        vendor?.vendor_title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : vendors;

  return (
    <div className="container mx-auto p-6 mt-10 font-[lato]">
      <div className=" relative text-white">
        <h2 className="text-4xl font-extrabold text-gray-700 text-center mb-16 tracking-tight leading-tight relative z-10">
          Explore Exam Providers
        </h2>

        <div className="flex justify-center mb-12 relative z-10">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for a Vendor"
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
          {filteredVendors?.map((vendor) => (
            <Link
              key={vendor?.vendor_id}
              href={`/exam-providers/${vendor?.vendor_perma}`}
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
                    {vendor?.vendor_title}
                  </h2>
                  {/* <p className="text-lg font-medium flex items-center justify-center gap-3 text-black group-hover:text-gray-100 transition-colors duration-300">
                    <span> {vendor?.vendor_exams} Exams </span>
                  </p> */}
                  <div className="flex justify-end items-center gap-1 mt-6 transition-colors duration-300">
                    {/* <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M108 84a16 16 0 1 1 16 16a16 16 0 0 1-16-16m128 44A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84m-72 36.68V132a20 20 0 0 0-20-20a12 12 0 0 0-4 23.32V168a20 20 0 0 0 20 20a12 12 0 0 0 4-23.32"/></svg> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 256 256"><path fill="currentColor" d="M142 176a6 6 0 0 1-6 6a14 14 0 0 1-14-14v-40a2 2 0 0 0-2-2a6 6 0 0 1 0-12a14 14 0 0 1 14 14v40a2 2 0 0 0 2 2a6 6 0 0 1 6 6m-18-82a10 10 0 1 0-10-10a10 10 0 0 0 10 10m106 34A102 102 0 1 1 128 26a102.12 102.12 0 0 1 102 102m-12 0a90 90 0 1 0-90 90a90.1 90.1 0 0 0 90-90"/></svg> */}
                    <span className="text-lg font-semibold text-blue-500">
                      {/* View Details */}
                      <span> {vendor?.vendor_exams} Exams </span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2 text-blue-500"
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

export default ExamProvider;

// "use client";
// import React, { useState } from "react";

// import Link from "next/link";

// const ExamProvider = ({ vendors }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredVendors = searchTerm.trim()
//     ? vendors?.filter((vendor) =>
//         vendor?.vendor_title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : vendors;
//   return (
//     <div className="container p-6 mx-auto font-[Lato] mt-10">
//       <div>
//         <h2 className="bg-blue-500 text-white p-5 mb-5 text-3xl font-bold text-center">
//           Vendors
//         </h2>
//         <div className="flex justify-between items-center mb-10">
//           <h1 className="text-3xl mb-5 font-bold">Select the Exam Provider</h1>
//           <div className="flex flex-col items-center justify-center">
//             <div className="w-full max-w-md">
//               <input
//                 id="customInput"
//                 type="email"
//                 placeholder="Enter the Vendor Name"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full px-4 py-2 border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 rounded-lg shadow transition-shadow duration-300 ease-in-out focus:shadow-lg placeholder-gray-500 text-gray-700"
//                 style={{
//                   background: "rgba(255, 255, 255, 0.65)",
//                   backdropFilter: "blur(10px)",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//         {/* </div> */}
//         <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
//           {filteredVendors?.map((vendor) => (
//             <div key={vendor?.vendor_id}>
//               <Link
//                 href={`/exam-providers/${vendor?.vendor_perma}`}
//                 // className="flex flex-col p-3 border border-gray-200 clip-polygon-exam-provider"
//                 className="flex flex-col p-3 border border-gray-200"
//               >
//                  <div
//                   className="relative bg-white rounded-lg p-6 flex-1 min-w-[calc(33.333%-20px)] shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:before:top-[-30%] hover:before:left-[-30%]"
//                 >
//                   <div className="absolute left-[65%] w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 z-0 transition-all duration-300 ease-in-out transform rotate-45 rounded-full before:content-[''] before:absolute before:top-0 before:left-0"></div>
//                   <div className="relative z-10 text-gray-800">
//                     <h2 className="text-xl font-semibold mb-2 text-blue-500">
//                       {vendor?.vendor_title}
//                     </h2>
//                     <p className="text-lg font-medium text-gray-600">
//                       Exams ({vendor?.vendor_exams})
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

// export default ExamProvider;
