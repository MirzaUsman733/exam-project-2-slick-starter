import React from "react";

const TopicsCovered = ({ examTopics, examVendorTitle, examCode }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-blue-600 text-4xl font-bold mb-10">
        NEW {examVendorTitle} {examCode} Exam has the Following topics covered
        as:
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {examTopics.map((topic, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-blue-600 p-4 last:border-b-0"
            >
              <div className="bg-blue-600 text-white px-5 py-2 rounded-md mr-4 text-lg font-bold">
                {index + 1}
              </div>
              <div className="flex-grow text-lg">{topic.topic}</div>
              <div className="bg-gray-200 px-5 py-2 rounded-md text-lg font-bold">
                {topic.topic_questions} Questions
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1">
          <img
            src="/exam-topics.jpg"
            alt="ExamTopics"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TopicsCovered;
