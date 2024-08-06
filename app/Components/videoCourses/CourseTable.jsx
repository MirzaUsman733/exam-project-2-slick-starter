// "use client";
// import React, { useState } from "react";

// const CourseTable = ({ videoData }) => {
//   const [selectedVendor, setSelectedVendor] = useState(
//     videoData.length > 0 ? videoData[0].vendor_perma : null
//   );

//   const handleTabClick = (vendorPerma) => {
//     setSelectedVendor(vendorPerma);
//   };

//   return (
//     <div className="flex justify-center items-center bg-gray-100 p-5">
//       <div className="overflow-x-auto w-full">
//         <div className="flex justify-center mb-4 space-x-4">
//           {videoData?.map((vendor) => (
//             <button
//               key={vendor?.vendor_perma}
//               className={`px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center gap-1 text-white uppercase font-semibold border border-blue-600 rounded-full focus:outline-none hover:shadow-lg transform hover:scale-105 transition duration-300 ${
//                 selectedVendor === vendor?.vendor_perma
//                   ? "bg-gray-900"
//                   : "bg-gray-900"
//               }`}
//               onClick={() => handleTabClick(vendor?.vendor_perma)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="1em"
//                 height="1em"
//                 viewBox="0 0 32 32"
//               >
//                 <g fill="none">
//                   <g filter="url(#f2280id6)">
//                     <path
//                       fill="url(#f2280id0)"
//                       d="m18.605 3.744l2.203 4.62c.34.686.963 1.169 1.685 1.276l4.928.696c2.538.376 3.496 3.101 1.527 5.086l-3.453 3.562a2.49 2.49 0 0 0-.682 2.187l.776 5.063c.441 2.626-1.77 4.49-4.008 3.29l-4.536-2.413a2.144 2.144 0 0 0-2.006 0l-4.536 2.412c-2.238 1.19-4.586-.617-3.93-3.351l.766-4.953a2.49 2.49 0 0 0-.682-2.187l-3.521-3.688c-1.985-1.961-1.011-4.632 1.527-5.007L9.41 9.64c.723-.107 1.552-.579 1.883-1.276l2.248-4.62c1.144-2.325 3.93-2.325 5.065 0"
//                     />
//                     <path
//                       fill="url(#f2280id1)"
//                       d="m18.605 3.744l2.203 4.62c.34.686.963 1.169 1.685 1.276l4.928.696c2.538.376 3.496 3.101 1.527 5.086l-3.453 3.562a2.49 2.49 0 0 0-.682 2.187l.776 5.063c.441 2.626-1.77 4.49-4.008 3.29l-4.536-2.413a2.144 2.144 0 0 0-2.006 0l-4.536 2.412c-2.238 1.19-4.586-.617-3.93-3.351l.766-4.953a2.49 2.49 0 0 0-.682-2.187l-3.521-3.688c-1.985-1.961-1.011-4.632 1.527-5.007L9.41 9.64c.723-.107 1.552-.579 1.883-1.276l2.248-4.62c1.144-2.325 3.93-2.325 5.065 0"
//                     />
//                   </g>
//                   <path
//                     fill="url(#f2280id2)"
//                     d="m18.605 3.744l2.203 4.62c.34.686.963 1.169 1.685 1.276l4.928.696c2.538.376 3.496 3.101 1.527 5.086l-3.453 3.562a2.49 2.49 0 0 0-.682 2.187l.776 5.063c.441 2.626-1.77 4.49-4.008 3.29l-4.536-2.413a2.144 2.144 0 0 0-2.006 0l-4.536 2.412c-2.238 1.19-4.586-.617-3.93-3.351l.766-4.953a2.49 2.49 0 0 0-.682-2.187l-3.521-3.688c-1.985-1.961-1.011-4.632 1.527-5.007L9.41 9.64c.723-.107 1.552-.579 1.883-1.276l2.248-4.62c1.144-2.325 3.93-2.325 5.065 0"
//                   />
//                   <path
//                     fill="url(#f2280id3)"
//                     d="m18.605 3.744l2.203 4.62c.34.686.963 1.169 1.685 1.276l4.928.696c2.538.376 3.496 3.101 1.527 5.086l-3.453 3.562a2.49 2.49 0 0 0-.682 2.187l.776 5.063c.441 2.626-1.77 4.49-4.008 3.29l-4.536-2.413a2.144 2.144 0 0 0-2.006 0l-4.536 2.412c-2.238 1.19-4.586-.617-3.93-3.351l.766-4.953a2.49 2.49 0 0 0-.682-2.187l-3.521-3.688c-1.985-1.961-1.011-4.632 1.527-5.007L9.41 9.64c.723-.107 1.552-.579 1.883-1.276l2.248-4.62c1.144-2.325 3.93-2.325 5.065 0"
//                   />
//                   <path
//                     fill="url(#f2280id4)"
//                     d="m18.605 3.744l2.203 4.62c.34.686.963 1.169 1.685 1.276l4.928.696c2.538.376 3.496 3.101 1.527 5.086l-3.453 3.562a2.49 2.49 0 0 0-.682 2.187l.776 5.063c.441 2.626-1.77 4.49-4.008 3.29l-4.536-2.413a2.144 2.144 0 0 0-2.006 0l-4.536 2.412c-2.238 1.19-4.586-.617-3.93-3.351l.766-4.953a2.49 2.49 0 0 0-.682-2.187l-3.521-3.688c-1.985-1.961-1.011-4.632 1.527-5.007L9.41 9.64c.723-.107 1.552-.579 1.883-1.276l2.248-4.62c1.144-2.325 3.93-2.325 5.065 0"
//                   />
//                   <path
//                     fill="url(#f2280id5)"
//                     d="m18.605 3.744l2.203 4.62c.34.686.963 1.169 1.685 1.276l4.928.696c2.538.376 3.496 3.101 1.527 5.086l-3.453 3.562a2.49 2.49 0 0 0-.682 2.187l.776 5.063c.441 2.626-1.77 4.49-4.008 3.29l-4.536-2.413a2.144 2.144 0 0 0-2.006 0l-4.536 2.412c-2.238 1.19-4.586-.617-3.93-3.351l.766-4.953a2.49 2.49 0 0 0-.682-2.187l-3.521-3.688c-1.985-1.961-1.011-4.632 1.527-5.007L9.41 9.64c.723-.107 1.552-.579 1.883-1.276l2.248-4.62c1.144-2.325 3.93-2.325 5.065 0"
//                   />
//                   <defs>
//                     <radialGradient
//                       id="f2280id0"
//                       cx="0"
//                       cy="0"
//                       r="1"
//                       gradientTransform="rotate(132.939 10.318 9.828)scale(19.9803 19.7731)"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#fac632" />
//                       <stop offset="1" stop-color="#f7c632" />
//                     </radialGradient>
//                     <radialGradient
//                       id="f2280id1"
//                       cx="0"
//                       cy="0"
//                       r="1"
//                       gradientTransform="matrix(0 13.9478 -13.9614 0 16.039 15.948)"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#ddba38" />
//                       <stop offset="1" stop-color="#ddba38" stop-opacity="0" />
//                     </radialGradient>
//                     <radialGradient
//                       id="f2280id2"
//                       cx="0"
//                       cy="0"
//                       r="1"
//                       gradientTransform="matrix(.62228 2.178 -7.26854 2.07673 7.06 10.082)"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#ddba38" />
//                       <stop offset="1" stop-color="#ddba38" stop-opacity="0" />
//                     </radialGradient>
//                     <radialGradient
//                       id="f2280id3"
//                       cx="0"
//                       cy="0"
//                       r="1"
//                       gradientTransform="matrix(3.77717 1.089 -1.09006 3.78086 2.077 11.52)"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#b5953a" />
//                       <stop offset="1" stop-color="#b5953a" stop-opacity="0" />
//                     </radialGradient>
//                     <radialGradient
//                       id="f2280id4"
//                       cx="0"
//                       cy="0"
//                       r="1"
//                       gradientTransform="matrix(1.47791 -2.41136 2.41371 1.47936 8.888 30.811)"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#c47e42" />
//                       <stop offset="1" stop-color="#c47e42" stop-opacity="0" />
//                     </radialGradient>
//                     <radialGradient
//                       id="f2280id5"
//                       cx="0"
//                       cy="0"
//                       r="1"
//                       gradientTransform="rotate(150.751 14.005 9.89)scale(2.2288 2.93061)"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#fff246" />
//                       <stop offset="1" stop-color="#fff246" stop-opacity="0" />
//                     </radialGradient>
//                     <filter
//                       id="f2280id6"
//                       width="30.673"
//                       height="29.645"
//                       x=".827"
//                       y="1.5"
//                       color-interpolation-filters="sRGB"
//                       filterUnits="userSpaceOnUse"
//                     >
//                       <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                       <feBlend
//                         in="SourceGraphic"
//                         in2="BackgroundImageFix"
//                         result="shape"
//                       />
//                       <feColorMatrix
//                         in="SourceAlpha"
//                         result="hardAlpha"
//                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                       />
//                       <feOffset dy="-.5" />
//                       <feGaussianBlur stdDeviation="1.5" />
//                       <feComposite
//                         in2="hardAlpha"
//                         k2="-1"
//                         k3="1"
//                         operator="arithmetic"
//                       />
//                       <feColorMatrix values="0 0 0 0 0.772549 0 0 0 0 0.494118 0 0 0 0 0.282353 0 0 0 1 0" />
//                       <feBlend
//                         in2="shape"
//                         result="effect1_innerShadow_18_14837"
//                       />
//                       <feColorMatrix
//                         in="SourceAlpha"
//                         result="hardAlpha"
//                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                       />
//                       <feOffset dx="-1.25" dy="1.25" />
//                       <feGaussianBlur stdDeviation=".75" />
//                       <feComposite
//                         in2="hardAlpha"
//                         k2="-1"
//                         k3="1"
//                         operator="arithmetic"
//                       />
//                       <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.952941 0 0 0 0 0.286275 0 0 0 1 0" />
//                       <feBlend
//                         in2="effect1_innerShadow_18_14837"
//                         result="effect2_innerShadow_18_14837"
//                       />
//                       <feColorMatrix
//                         in="SourceAlpha"
//                         result="hardAlpha"
//                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                       />
//                       <feOffset dx="1.5" dy="-.5" />
//                       <feGaussianBlur stdDeviation=".75" />
//                       <feComposite
//                         in2="hardAlpha"
//                         k2="-1"
//                         k3="1"
//                         operator="arithmetic"
//                       />
//                       <feColorMatrix values="0 0 0 0 0.698039 0 0 0 0 0.537255 0 0 0 0 0.192157 0 0 0 1 0" />
//                       <feBlend
//                         in2="effect2_innerShadow_18_14837"
//                         result="effect3_innerShadow_18_14837"
//                       />
//                     </filter>
//                   </defs>
//                 </g>
//               </svg>
//               {vendor?.vendor_title}
//             </button>
//           ))}
//         </div>
//         {selectedVendor && (
//           <VendorCourses
//             courses={
//               videoData.find(
//                 (vendor) => vendor?.vendor_perma === selectedVendor
//               )?.training_courses
//             }
//           />
//         )}
//         {!selectedVendor && (
//           <p className="text-center text-gray-600 mt-4">
//             No courses found for the selected vendor.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// const VendorCourses = ({ courses }) => {
//   if (!courses || courses?.length === 0) {
//     return (
//       <p className="text-center text-gray-600 mt-4">
//         No courses found for the selected vendor.
//       </p>
//     );
//   }

//   const uniqueCourses = new Set();

//   return (
//     <table className="min-w-full bg-white overflow-hidden border border-gray-300">
//       <thead className="bg-blue-600 text-white">
//         <tr>
//           <th className="w-24 p-4 text-left border uppercase tracking-wide border-b border-gray-300">
//             Image
//           </th>
//           <th className="p-4 text-left border uppercase tracking-wide border-b border-gray-300">
//             Title
//           </th>
//           <th className="p-4 text-left border uppercase tracking-wide border-b border-gray-300">
//             Duration
//           </th>
//           <th className="p-4 text-left border uppercase tracking-wide border-b border-gray-300">
//             Videos
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {courses.map((course, index) => {
//           if (uniqueCourses.has(course.exam_id)) {
//             return null;
//           }
//           uniqueCourses.add(course.exam_id);

//           return (
//             <tr
//               key={course.exam_id}
//               className={`${
//                 index % 2 === 0 ? "bg-gray-50" : "bg-white"
//               } hover:bg-blue-100 transition-colors`}
//             >
//               <td className="p-2 border border-gray-300">
//                 <img
//                   src={`https://video.dumpsarena.com/img/${course.image}`}
//                   alt={course.title}
//                   className="w-20 h-16"
//                 />
//               </td>
//               <td className="p-2 border border-gray-300">{course.title}</td>
//               <td className="p-2 border border-gray-300">
//                 <div className="flex items-center">
//                   <svg
//                     className="text-gray-500 mr-1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1.5em"
//                     height="1.5em"
//                     viewBox="0 0 512 512"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="M256 23c-3.7 0-7.4.1-11.1.27l.8 17.98c3.4-.16 6.8-.25 10.3-.25c118.8 0 215 96.2 215 215s-96.2 215-215 215c-89.6 0-166.35-54.7-198.65-132.6l27.63-8.3l-48.43-34.3l-19.05 54.5l22.55-6.7C74.68 428.8 158.4 489 256 489c128.6 0 233-104.4 233-233S384.6 23 256 23m-30.8 2.04c-13.3 1.75-26.1 4.6-38.6 8.48l5.6 17.09c11.4-3.54 23.3-6.15 35.4-7.75zm-57 15.12c-12.4 5.05-24.2 11.12-35.4 18.12l9.5 15.21c10.3-6.44 21.2-12.03 32.6-16.67zM116.4 69.5a234 234 0 0 0-29.35 26.12l13.05 12.28c8.3-8.77 17.4-16.81 27-24.06l-4.8-6.57zm69.5 8.58l-4.4 17.44l217 55.48l4.4-17.4zM74.07 110.5c-8.19 10.2-15.54 21.2-21.94 32.7l15.65 8.8c5.91-10.7 12.69-20.8 20.26-30.3zm127.63 8.8c-3.9 26 2.8 55.2 14.2 79.2c6.4 13.4 14.2 25.2 21.9 33.8c4.2 4.7 8.4 8.3 12.2 10.9l-5.4 21.2c-4.6.4-10 1.6-16 3.7c-10.9 3.8-23.4 10.4-35.4 19.1c-21.6 15.6-41.4 37.9-50.4 62.6l167.5 42.9c3.9-26-2.8-55.2-14.2-79.2c-6.4-13.4-14.2-25.2-21.9-33.8c-4.2-4.7-8.4-8.3-12.2-10.9l5.4-21.2c4.5-.5 10-1.6 16-3.7c10.9-3.8 23.4-10.4 35.4-19.1c21.6-15.6 41.4-37.9 50.4-62.6zM43.24 160.9c-5.33 12-9.7 24.4-13 37.3l17.48 4.2c3.03-11.8 7.04-23.2 11.95-34.2zM26.2 217.5C24.11 230 23 242.9 23 256v.9l18-.2v-.7c0-12.1 1.02-24 2.95-35.6zM113.5 361l-4.4 17.4l217 55.5l4.4-17.4z"
//                     />
//                   </svg>
//                   {course.duration}
//                 </div>
//               </td>
//               <td className="p-2 border border-gray-300">
//                 <div className="flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1.5em"
//                     height="1.5em"
//                     viewBox="0 0 48 48"
//                   >
//                     <path
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="m16.02 8.045l15.764-.076c6.546-.032 11.536 5.853 11.71 12.954c.278 11.424-7.968 16.485-14.287 19.108v-8.13H16.02c-6.79 0-11.52-4.634-11.52-10.978c0-7.722 3.898-12.841 11.52-12.878"
//                     />
//                     <path
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M20.34 14.997v11.51l9.966-5.755z"
//                     />
//                   </svg>
//                   {course.videos}
//                 </div>
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default CourseTable;

"use client";
import Link from "next/link";
import React, { useState } from "react";

const CourseTable = ({ videoData }) => {
  const [selectedVendor, setSelectedVendor] = useState(
    videoData.length > 0 ? videoData[0].vendor_perma : null
  );

  const handleTabClick = (vendorPerma) => {
    setSelectedVendor(vendorPerma);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="tabs-container flex flex-wrap justify-center gap-3 mb-4 space-x-2">
        {videoData.map((vendor) => (
          <button
            key={vendor.vendor_perma}
            className={`tab-item px-5 py-2.5 text-sm font-medium text-center uppercase transition-colors border border-blue-500 duration-300 ease-in-out ${
              selectedVendor === vendor.vendor_perma
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-600 hover:text-white"
            } rounded-lg`}
            onClick={() => handleTabClick(vendor.vendor_perma)}
          >
            <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 64 64"><path fill="currentColor" d="M0 8.8c16.3 11.8 10.7 33.9 19.9 49c2.7-1.8 5.3-3.5 8-5.3c1.7 2.7 3.9 5.2 6.8 7.4l23.7-18.3c-3.8-2.8-6-6.3-7.4-10.2C47.2 20.8 49 7.5 38.5 0C25.7 2.9 12.8 5.9 0 8.8"/><path fill="#7d8b91" d="M11 14.1c.5.7 1 1.5 1.4 2.3c9.1-2.8 18.3-5.6 27.4-8.5c-.3-.6-.7-1.2-1.1-1.8c-9.2 2.7-18.4 5.4-27.7 8m4.3 9.1c8.9-3.3 17.9-6.6 26.8-9.9c-.2-.7-.4-1.3-.7-2c-9 3.1-18 6.2-27 9.4c.3.9.6 1.7.9 2.5m1.8 7.4l26.4-11.4c-.1-.7-.3-1.4-.4-2.1c-8.8 3.6-17.7 7.2-26.5 10.9c.1.8.3 1.7.5 2.6"/><path fill="#d9e3e8" d="M16.8 51c1.4 4.2 3.5 8.2 6.7 11.6c1.8 1.9 5.4 1.9 7.4.3c2.1-1.6 2-4.1.3-5.9c-3-3.2-5-6.9-6.3-10.8c-2.7 1.5-5.4 3.2-8.1 4.8"/><path fill="#333" d="M18.9 49c.1 5.4 1.3 10.2 4.6 13.6c1.8 1.9 5.4 1.9 7.4.3c2.1-1.6 2-4.1.3-5.9c-3-3.2 20.3-24.1 18.9-28c-2.6 1.5-21.3 12.9-31.2 20" opacity="0.5"/><path fill="#b0bdc6" d="M24.2 43.7c1.3 4.7 3.2 9.1 6.6 12.8c1.8 2 2.2 4.8.1 6.4c10.4-8 20.8-16.1 31.2-24.1c2.1-1.6 2.3-3.9 1-5.4c-2.4-2.6-3.8-5.8-4.7-9.1c-15.9 9-27.2 15.4-34.2 19.4"/></svg>
            {vendor.vendor_title}
            </div>
          </button>
        ))}
      </div>
      <div className="courses-container">
        {selectedVendor ? (
          <VendorCourses
            courses={
              videoData.find((v) => v.vendor_perma === selectedVendor)
                ?.training_courses
            }
          />
        ) : (
          <p className="text-center text-gray-600 mt-4">
            No courses found for the selected vendor.
          </p>
        )}
      </div>
    </div>
  );
};

const VendorCourses = ({ courses }) => {
  if (!courses?.length)
    return (
      <p className="text-center text-gray-600 mt-4">No courses available.</p>
    );
  const uniqueCourses = new Set();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {courses?.map((course) => {
        if (uniqueCourses.has(course?.exam_id)) {
          return null;
        }
        uniqueCourses.add(course?.exam_id);
        return (
          <Link href={`/video-courses/${course?.perma}`} key={course?.exam_id} className="bg-white p-4 shadow rounded-lg">
            <img
              src={`https://video.dumpsarena.com/img/${course?.image}`}
              alt={course?.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="course-info">
              <h3 className="text-lg text-gray-800 font-semibold my-2">
                {course?.title}
              </h3>
              <div className="flex justify-between">
                <div className="text-sm text-gray-500">
                  Duration: {course?.duration}
                </div>
                <div className="text-sm text-gray-500">
                  Videos: {course?.videos}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CourseTable;
