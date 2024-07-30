import React from "react";

const LastWeekResults = ({
  exam_last_week_passed,
  exam_last_week_average_score,
  exam_last_week_word_to_word,
  examVendorTitle,
  examCode,
}) => {
  return (
    <div className="backgroundResultBlue text-black text-center pb-10 mb-20">
      <div className="container mx-auto">
        <h1 className="text-gray-900 font-bold text-2xl mb-5">
          {examVendorTitle} {examCode} Last Week Results!
        </h1>
        <div className="stats flex justify-around">
          <div className="stat p-5 border border-dashed border-black w-1/3">
            <h2 className="text-black font-bold text-4xl mb-2.5">
              {exam_last_week_passed}
            </h2>
            <p className="text-gray-800 m-0 leading-6">
              Customers Passed
              <br />
              {examVendorTitle} {examCode}
            </p>
          </div>
          <div className="stat p-5 border border-dashed border-black w-1/3">
            <h2 className="text-black font-bold text-4xl mb-2.5">
              {exam_last_week_average_score}%
            </h2>
            <p className="text-gray-800 m-0 leading-6">
              Average Score In Real
              <br />
              Exam At Testing Centre
            </p>
          </div>
          <div className="stat p-5 border border-dashed border-black w-1/3">
            <h2 className="text-black font-bold text-4xl mb-2.5">
              {exam_last_week_word_to_word}%
            </h2>
            <p className="text-gray-800 m-0 leading-6">
              Questions came word by
              <br />
              word from this dump
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default LastWeekResults;
