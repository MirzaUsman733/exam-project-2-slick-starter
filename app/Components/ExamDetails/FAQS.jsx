const FAQS = ({ exam_faqs }) => {
  //   const [expanded, setExpanded] = useState(null);

  //   const toggleFAQ = (id) => {
  //     setExpanded((prev) => (prev === id ? null : id));
  //   };

  //   const filteredFAQs = exam_faqs.filter((faq) =>
  //     // (faq.category === selectedCategory || selectedCategory === 'all') &&
  //     faq.faq_q.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-5 w-full">
          <h2 className="text-center text-4xl font-semibold text-blue-500 mb-10">
            Frequently Asked Questions
          </h2>
          {/* <input
            type="text"
            className="w-full p-2.5 mb-5 rounded border border-gray-300"
            placeholder="Search FAQs..."
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}

          {/* <div className="text-center mb-5">
            <button
              className="m-1 px-5 py-2.5 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            <button
              className="m-1 px-5 py-2.5 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setSelectedCategory("general")}
            >
              General
            </button>
            <button
              className="m-1 px-5 py-2.5 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setSelectedCategory("account")}
            >
              Account
            </button>
            <button
              className="m-1 px-5 py-2.5 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setSelectedCategory("courses")}
            >
              Courses
            </button>
          </div> */}

          {exam_faqs.map((faq) => (
            <div
              key={faq.faq_q}
              className="border-b border-gray-200 last:border-b-0 mb-3 pb-3"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                // onClick={() => toggleFAQ(faq.faq_q)}
              >
                <h3 className="text-xl font-semibold font-[lato] text-blue-500">
                  {faq.faq_q}
                </h3>
                {/* <span className="text-2xl font-bold text-blue-500">
                  {expanded === faq.faq_q ? "-" : "+"}
                </span> */}
              </div>
              {/* {expanded === faq.faq_q && ( */}
              <div className="pt-2.5 text-gray-600">
                <p className="text-base leading-relaxed">{faq.faq_a}</p>
              </div>
              {/* )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
