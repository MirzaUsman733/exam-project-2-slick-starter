// import React from "react";

// const RelatedAndPremium = ({ questionTypes }) => {
//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-3 gap-10">
//         <div className="bg-blue-100 border-blue-200 p-5 rounded-lg col-span-1">
//           <h2 className="mt-0 text-3xl font-bold mb-5">200-301 Q&A's Detail</h2>
//           <ul className="list-none p-0">
//             <li className="mb-2">
//               <strong>Exam Code:</strong> 200-301
//             </li>
//             <li className="mb-2">
//               <strong>Total Questions:</strong> 970 Q&A's
//             </li>
//             {questionTypes?.map((questionType) => (
//               <li
//                 className="flex items-center py-2"
//                 key={questionType?.question_type}
//               >
//                 {questionType?.question_type == "Single Choices" && (
//                   <svg
//                     className="h-6 w-6 text-gray-500 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm10 3a1 1 0 00-1 1v6a1 1 0 102 0V6a1 1 0 00-1-1zm-4 0a1 1 0 00-1 1v6a1 1 0 102 0V6a1 1 0 00-1-1zm-4 0a1 1 0 00-1 1v6a1 1 0 102 0V6a1 1 0 00-1-1z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 )}
//                 {questionType?.question_type == "Multiple Choices" && (
//                   <svg
//                     className="h-6 w-6 text-gray-500 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 48 48"
//                   >
//                     <g fill="none">
//                       <g
//                         fill="currentColor"
//                         clipPath="url(#healthiconsIExamMultipleChoiceNegative0)"
//                       >
//                         <path d="M21 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1" />
//                         <path
//                           fillRule="evenodd"
//                           d="M16 26h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-4 5v-3h3v3z"
//                           clipRule="evenodd"
//                         />
//                         <path d="M17.707 14.293a1 1 0 0 1 0 1.414L13 20.414l-2.707-2.707a1 1 0 1 1 1.414-1.414L13 17.586l3.293-3.293a1 1 0 0 1 1.414 0" />
//                         <path
//                           fillRule="evenodd"
//                           d="M0 0h48v48H0zm39 13a3 3 0 0 0-3 3v2h6v-2a3 3 0 0 0-3-3m-3 7v16.5l3 4.5l3-4.5V20zM6 39V9a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3"
//                           clipRule="evenodd"
//                         />
//                       </g>
//                       <defs>
//                         <clipPath id="healthiconsIExamMultipleChoiceNegative0">
//                           <path d="M0 0h48v48H0z" />
//                         </clipPath>
//                       </defs>
//                     </g>
//                   </svg>
//                 )}
//                 {questionType?.question_type == "Drag Drops" && (
//                   <svg
//                     className="h-6 w-6 text-gray-500 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 2048 2048"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="m1043 1395l90 90l-173 174l-173-174l90-90l83 83zM877 526l-90-91l173-173l173 173l-90 91l-83-83zM269 877l-82 83l82 83l-90 90L6 960l173-173zm1645 83l-173 173l-90-90l83-83l-83-83l90-90zM384 640h1152v128H384zm0 256h1152v128H384zm0 256h1152v128H384z"
//                     />
//                   </svg>
//                 )}
//                 {questionType?.question_type == "Hotspots" && (
//                   <svg
//                     className="h-6 w-6 text-gray-500 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 24 24"
//                   >
//                     <g
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       color="currentColor"
//                     >
//                       <circle cx="12" cy="14" r="2" />
//                       <path d="M4 20.001A9.96 9.96 0 0 1 2 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001" />
//                       <path d="M7.528 18a6 6 0 1 1 8.944 0" />
//                     </g>
//                   </svg>
//                 )}
//                 {questionType?.question_type == "Fill in Blanks" && (
//                   <svg
//                     className="h-6 w-6 text-gray-500 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="1em"
//                     height="1em"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="M8 20h8v-3q0-1.65-1.175-2.825T12 13t-2.825 1.175T8 17zm4-9q1.65 0 2.825-1.175T16 7V4H8v3q0 1.65 1.175 2.825T12 11M5 22q-.425 0-.712-.288T4 21t.288-.712T5 20h1v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H5q-.425 0-.712-.288T4 3t.288-.712T5 2h14q.425 0 .713.288T20 3t-.288.713T19 4h-1v3q0 1.525-.712 2.863T15.3 12q1.275.8 1.988 2.138T18 17v3h1q.425 0 .713.288T20 21t-.288.713T19 22z"
//                     />
//                   </svg>
//                 )}
//                 <div className="flex justify-between items-center gap-1">
//                   <div> {questionType?.question_type}: </div>
//                   <div className="italic underline block text-end">
//                     {questionType?.question_type_count} Questions
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* <div className="bg-cyan-100 p-5 rounded-lg col-span-2">
//           <h2 className="mt-0">Top Cisco Certifications</h2>
//           <div className="grid grid-cols-4">
//             <div>
//               <img
//                 src="/relatedExamPage.png"
//                 alt="CCIE Enterprise Infrastructure"
//               />
//             </div>
//             <div>
//               <img src="/relatedExamPage.png" alt="CCIE Security" />
//             </div>
//             <div>
//               <img src="/relatedExamPage.png" alt="CCNP Enterprise" />
//             </div>
//             <div>
//               <img src="/relatedExamPage.png" alt="CCNP Security" />
//             </div>
//             <div>
//               <img src="/relatedExamPage.png" alt="DevNet Associate" />
//             </div>
//             <div>
//               <img src="/relatedExamPage.png" alt="DevNet Professional" />
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default RelatedAndPremium;




import React from "react";

const RelatedAndPremium = ({ questionTypes,examCode }) => {
  return (
      <div>
        <div className="py-5 border rounded-lg col-span-1 transform hover:scale-105 transition-transform duration-500">
          <h2 className="mt-0 text-2xl font-extrabold text-gray-700 text-center pb-2 font-[lato]"> {examCode} Premium Detail</h2>
          <hr className="border-4 border-blue-500 mb-7 w-[40%] rounded-xl mx-auto"/>
          <ul className="list-none p-0">
            {questionTypes?.map((questionType, index) => (
              <li
                className={`flex px-5 items-center py-2 border-b last:border-b-0`}
                key={questionType?.question_type}
              >
                <div className="flex justify-between items-center gap-1 w-full">
                  <div className="text-blue-500 font-bold"> {questionType?.question_type}: </div>
                  <div className="italic text-gray-800 block text-end">
                    {questionType?.question_type_count} Questions And Answers
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default RelatedAndPremium;
