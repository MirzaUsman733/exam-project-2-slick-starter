// const ExamCard = ({ recentlyUpdated }) => {
//   console.log("Title", recentlyUpdated);
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
//       {recentlyUpdated?.map((recentlyUpdatedExam) => {
//         const formattedDate = recentlyUpdatedExam?.exam_update_date?.substring(
//           0,
//           10
//         );
//         return (
//         //   <div
//         //     key={recentlyUpdatedExam?.exam_code}
//         //     className="bg-white shadow-lg rounded-lg p-4 relative flex items-center"
//         //   >
//         //     <div className="flex items-center space-x-3">
//         //       <img
//         //         src={recentlyUpdatedExam?.exam_vendor_img}
//         //         alt={recentlyUpdatedExam?.exam_title}
//         //         width={40}
//         //         height={40}
//         //       />
//         //       <div>
//         //         <h3 className="text-lg font-semibold">
//         //           {recentlyUpdatedExam?.exam_title} -{" "}
//         //           {recentlyUpdatedExam?.exam_code}
//         //         </h3>
//         //         <p className="text-sm text-gray-500">{formattedDate}</p>
//         //       </div>
//         //     </div>
//         //     <span className="absolute top-0 right-0 transform translate-y-[-50%] bg-green-200 text-green-800 rounded-full px-3 py-1 text-xs font-semibold">
//         //       Official
//         //     </span>
//         //   </div>

//         <div>
//             <div className="bg-[url('/updatedExamBackground.jpg')] bg-cover text-center p-8 text-black">
//       <h1 className="text-3xl font-[lato] font-bold mb-1">Microsoft</h1>
//       <img src="/updatedExamMid.png" alt="" className="mx-auto mb-1" />
//       <p className="mb-1">Join Us for the Launch of Latest Exam</p>
//       <p className="font-bold text-lg mb-1">Sunday, 13 May 2023</p>
//       <button className="bg-yellow-400 text-black font-bold py-1 px-3 mt-2 rounded uppercase tracking-wide">REGISTER NOW</button>
//     </div>
//         </div>
//         );
//     })}
//     </div>
//   );
// };

// export default ExamCard;

// import React from 'react';

// const ExamCard = ({ recentlyUpdated }) => {
//     console.log("Exam Data:", recentlyUpdated);
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
//             {recentlyUpdated?.map((exam) => {
//                 const formattedDate = exam?.exam_update_date?.substring(0, 10);

//                 return (
//                     <div key={exam?.exam_code} className="flex flex-col bg-[url('/updatedExamBackground.png')] bg-cover text-center px-10 pt-8 pb-4 text-black h-full relative hover:shadow-2xl">
//                         <h1 className="text-3xl font-lato font-bold mb-4">{exam?.exam_vendor_title}</h1>
//                         <img src="/updatedExamMid.png" alt={exam?.exam_title} className="mx-auto mb-4" />
//                         <p className="h-20 overflow-hidden">{exam?.exam_title}</p>
//                         <p className="font-bold text-md mb-2">{formattedDate}</p>
//                         <div className="mt-auto">
//                             <button className="bg-yellow-400 text-black font-bold py-1 px-3 rounded uppercase tracking-wide">BUY NOW</button>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default ExamCard;

// import React from 'react';

// const ExamCard = ({ recentlyUpdated }) => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
//             {recentlyUpdated?.map((exam) => {
//                 const formattedDate = exam?.exam_update_date?.substring(0, 10);

//                 return (
//                     <div key={exam?.exam_code} className="flex flex-col bg-[url('/image.png')] bg-no-repeat bg-cover bg-center text-center px-10 pt-8 pb-4 text-white h-full relative hover:shadow-2xl rounded-lg">
//                         <div className="flex flex-col h-full justify-between">
//                             <div>
//                                 <h1 className="text-3xl font-bold mt-4">{exam?.exam_vendor_title}</h1>
//                                 {/* <p className="text-xl mt-2">{exam?.exam_title}</p> */}
//                                 <p className="text-lg">{exam?.exam_code}</p>
//                                 <p className="text-md mt-2 mb-4">{formattedDate}</p>
//                             </div>
//                             <button className="bg-yellow-400 text-black font-bold py-1 px-3 rounded uppercase tracking-wide self-center mb-4">REGISTER NOW</button>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default ExamCard;

import React from "react";

const ExamCard = ({ recentlyUpdated }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {recentlyUpdated?.map((exam) => {
        //   const formattedDate = exam?.exam_update_date?.substring(0, 10);
          return (
            <div key={exam?.exam_code} className="bg-white shadow-lg rounded-lg overflow-hidden my-5 hover:translate-y-[-5px] transition-transform duration-300">
            <div className="p-4 bg-green-500 clip-path-polygon">
              <h3 className="text-white text-lg font-semibold">{exam.exam_title}</h3>
              <p className="text-white mt-2">Code: {exam.exam_code}</p>
            </div>
            <div className="flex items-center p-4">
              <img src={exam.exam_vendor_img} alt={exam.exam_vendor_title} className="h-12 w-12 rounded-full mr-4"/>
              <div>
                <p className="text-gray-800 font-semibold">{exam.exam_vendor_title}</p>
                <p className="text-gray-600">Updated: {new Date(exam.exam_update_date).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExamCard;
