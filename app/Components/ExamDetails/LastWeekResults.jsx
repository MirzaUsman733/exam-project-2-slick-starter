const LastWeekResults = ({
  exam_last_week_passed,
  exam_last_week_average_score,
  exam_last_week_word_to_word,
  examVendorTitle,
  examCode,
}) => {
  return (
    <div className="backgroundResultBlue text-black text-center mb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-gray-900 font-bold text-4xl mb-10 mt-10">
          {examVendorTitle} {examCode} Last Week Results!
        </h1>
        <div className="stats grid md:grid-cols-3">
          <div className="stat p-5 border border-gray-700">
            <span className="text-gray-900 inline-block font-extrabold border-b-8 font-[lato] border-blue-500 text-5xl mb-2.5">
              {exam_last_week_passed}.0
            </span>
            <p className="text-gray-800 m-0 leading-6">
              Customers Passed
              <br />
              {examVendorTitle} {examCode}
            </p>
          </div>
          <div className="stat p-5 border  border-gray-700">
            <h2 className="text-gray-900 inline-block font-extrabold border-b-8 border-blue-500 font-[lato] text-5xl mb-2.5">
              {exam_last_week_average_score}%
            </h2>
            <p className="text-gray-800 m-0 leading-6">
              Average Score In Real
              <br />
              Exam At Testing Centre
            </p>
          </div>
          <div className="stat p-5 border  border-gray-700">
            <h2 className="text-gray-900 inline-block font-extrabold border-b-8 font-[lato] border-blue-500 text-5xl  mb-2.5">
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
