const TopicsCovered = ({ examTopics, examVendorTitle, examCode }) => {
  return (
    <div>
      <h1 className="text-center text-blue-600 text-xl md:text-4xl font-bold mb-10">
        NEW {examVendorTitle} {examCode} Exam has the Following topics covered
        as:
      </h1>
      <div>
        <div className="col-span-2">
          {examTopics.map((topic, index) => (
            <div
              key={index}
              className="flex justify-normal md:justify-between items-center border-b py-4 last:border-b-0"
            >
              <div className="bg-blue-100 border border-blue-500 text-blue-600 px-1.5 md:px-5 py-1 rounded-md mr-2 md:mr-4 text-xs md:text-lg font-bold">
                {index + 1}
              </div>
              <div className="flex-grow text-xs md:text-lg w-[20vw] md:w-auto ">{topic.topic}</div>
              <div className="bg-gray-200 px-2 md:px-5 py-2 rounded-md text-xs md:text-lg font-medium md:font-bold italic text-gray-700">
                {topic.topic_questions} Questions
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicsCovered;
