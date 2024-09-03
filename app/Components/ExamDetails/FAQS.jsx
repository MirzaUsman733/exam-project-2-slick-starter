const FAQS = ({ exam_faqs }) => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-2 py-5 md:pe-5 w-full">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-blue-700">
            Frequently Asked Questions
          </h2>
          <hr className="border-4 my-5 w-1/4 mx-auto" />
          {exam_faqs.map((faq) => (
            <div
              key={faq?.faq_q}
              className="border-b border-gray-200 last:border-b-0 mb-3 pb-3"
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-md md:text-xl font-semibold font-[lato] text-blue-500">
                  {faq?.faq_q}
                </h3>
              </div>
              <div className="pt-2.5 text-gray-600">
                <p className="text-sm md:text-base leading-relaxed">{faq?.faq_a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
