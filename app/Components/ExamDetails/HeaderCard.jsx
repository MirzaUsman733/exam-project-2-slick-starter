import Link from "next/link";

const HeaderCard = ({
  examTitle,
  examCode,
  lastUpdate,
  examQuestions,
  examVendorTitle,
  examVendorPerma,
  examPrices,
  examCerts,
}) => {
  console.log(examTitle, examCode, lastUpdate, examQuestions);
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex justify-center mb-4">
            <img
              src="https://exam-hero.netlify.app/product2.png"
              alt="Marks4Sure"
              className="w-80 h-96"
            />
          </div>

          <p className="text-center text-lg font-bold mb-5">
            {examQuestions} Questions Answers with Explanation
          </p>
          <div className="flex justify-center mb-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
              <span className="mr-2">DOWNLOAD DEMO</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.75 9.75l7.5 7.5 7.5-7.5M12 2.25v15.75"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="col-span-3">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold mb-5">
              {/* Cisco 200-301 Dumps Questions Answers */}
              {examTitle} - ({examCode}) - Questions Answers
            </h1>
            <div className="border-b text-lg flex py-2">
              <div className="w-1/2">
                <span> Exam Code: </span>
              </div>{" "}
              <div className="w-1/2">
                {" "}
                <span className="font-semibold text-start">{examCode}</span>
              </div>
            </div>
            <div className="border-b text-lg flex py-2">
              <div className="w-1/2">
                <span> Exam Provider Name: </span>{" "}
              </div>
              <div className="w-1/2">
                <span className="font-semibold">
                  <Link
                    href={examVendorPerma}
                    className="text-blue-600 underline"
                  >
                    {examVendorTitle}
                  </Link>
                </span>
              </div>
            </div>
            <div className="border-b text-lg flex py-2">
              <div className="w-1/2">Last Update: </div>{" "}
              <div className="w-1/2 font-semibold"> {lastUpdate} </div>{" "}
            </div>
            <div className="border-b text-lg flex py-2">
              <div className="w-1/2">Exam Certifications:</div>
              <div className="w-1/2">
                {examCerts?.map((cert) => (
                  <span key={cert?.cert_id}>{cert.cert_name}, </span>
                ))}
              </div>
            </div>
            {/* <p className="border-b text-lg flex py-2">
              <div className="w-1/2">Questions Answers with Explanation</div>
              <div className="w-1/2">{examQuestions}</div>
            </p> */}
          </div>

          <div className="bg-white border shadow-md rounded-md p-5">
            {examPrices?.map((item) => (
              <div
                key={item.type}
                className="flex items-center justify-between border-b py-2 text-lg"
              >
                <div className="flex gap-3">
                  <p className="font-semibold">{item.title}</p>
                  <div className="bg-gray-100 px-3 py-1 text-xs">
                    {item.off}% Off
                  </div>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label className="mr-4">Include Study Guide</label>
                  <p className="text-red-600 line-through mr-2">
                    ${item.full_price}
                  </p>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                  <button className="bg-blue-600 text-white text-xs px-4 py-2 ml-4 rounded">
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
