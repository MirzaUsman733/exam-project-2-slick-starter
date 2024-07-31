const FAQS = ({ exam_faqs }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-5 w-full">
          <h2 className="text-center text-4xl font-semibold text-blue-500 mb-10">
            Frequently Asked Questions
          </h2>
          {exam_faqs.map((faq) => (
            <div
              key={faq.faq_q}
              className="border-b border-gray-200 last:border-b-0 mb-3 pb-3"
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-xl font-semibold font-[lato] text-blue-500">
                  {faq.faq_q}
                </h3>
              </div>
              <div className="pt-2.5 text-gray-600">
                <p className="text-base leading-relaxed">{faq.faq_a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
