const RelatedAndPremium = ({ questionTypes, examCode }) => {
  return (
    <div>
      <h1 className="text-center text-blue-600 text-4xl font-bold mb-20">
        What is in Premium File
      </h1>
      <div className="py-5 border rounded-lg col-span-1 transform hover:scale-105 transition-transform duration-500">
        <h2 className="mt-0 text-2xl font-extrabold text-gray-700 text-center pb-2 font-[lato]">
          {" "}
          {examCode} Premium Detail
        </h2>
        <hr className="border-4 border-blue-500 mb-7 w-[40%] rounded-xl mx-auto" />
        <ul className="list-none p-0">
          {questionTypes?.map((questionType, index) => (
            <li
              className={`flex px-5 items-center py-2 border-b last:border-b-0`}
              key={questionType?.question_type}
            >
              <div className="flex justify-between items-center gap-1 w-full">
                <div className="text-blue-500 font-bold">
                  {" "}
                  {questionType?.question_type}:{" "}
                </div>
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
