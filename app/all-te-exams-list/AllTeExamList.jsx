"use client";
import { useState } from "react";
import AlphabetPagination from "./AlphabetPagination";

const AllTeExamList = ({ data, onLetterSelect }) => {
  const [selectedExam, setSelectedExam] = useState(null);

  const handleItemClick = (examId) => {
    setSelectedExam(examId);
  };

  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Discover Your Next Mock Exam
        </h1>
        <p className="text-lg text-gray-700">
          Browse through a diverse range of mock exams to find the perfect match
          for your preparation needs.
        </p>
      </header>

      <AlphabetPagination onSelect={onLetterSelect} />

      <div className="mt-8">
        {data?.map((item, index) => {
          const { vendor_title, vendor_perma, exams } = item;

          return (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-800 mb-6">
                {vendor_title}
              </h2>
              <div className="divide-y divide-gray-200">
                {exams?.map((exam) => {
                  const {
                    exam_code,
                    exam_perma,
                    exam_id,
                    exam_name,
                    exam_questions,
                  } = exam;

                  return (
                    <div
                      key={exam_id}
                      className="py-4 cursor-pointer transition-colors duration-300 hover:bg-gray-100"
                      onClick={() => handleItemClick(exam_id)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-xl font-bold text-gray-700">
                            {exam_code} - {exam_name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {exam_questions} Questions And Answers
                          </p>
                        </div>
                        <div>
                          <button className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default AllTeExamList;
