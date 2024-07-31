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
              {examTitle} - ({examCode}) - Questions Answers
            </h1>
            <div className="text-lg flex py-1">
              <span className="mr-3"> Exam Code: </span>{" "}
              <span className="font-semibold text-start">{examCode}</span>
            </div>
            <div className="text-lg flex py-1">
              <span className="mr-3"> Exam Provider Name: </span>
              <span className="font-semibold">
                <Link
                  href={examVendorPerma}
                  className="text-blue-600 underline"
                >
                  {examVendorTitle}
                </Link>
              </span>
            </div>
            <div className="text-lg flex py-1">
              <div className="mr-3">Last Update: </div>{" "}
              <div> {lastUpdate} </div>{" "}
            </div>
            <div className="text-lg flex py-1">
              <div className="mr-3">Exam Certifications:</div>
              <div>
                {examCerts?.map((cert) => (
                  <span key={cert?.cert_id}>{cert.cert_name}, </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border rounded-2xl p-5">
            {examPrices?.map((item, index) => (
              <div
                key={item.type}
                className={`flex items-center justify-between py-2 text-lg 
                   ${
                     index !== examPrices.length - 1
                       ? //  "border-b border-blue-300"
                         ""
                       : ""
                   }
                `}
              >
                <div className="flex gap-3">
                  <p className="font-semibold">{item.title}</p>
                  <div
                    className={`bg-gray-100 py-1 text-sm font-bold ${
                      item.off >= 70
                        ? "text-red-800 bg-red-200 rounded-3xl px-2"
                        : "text-blue-500 bg-blue-200 rounded-3xl px-2"
                    } `}
                  >
                    {item.off}% Off
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-blue-600 font-bold mr-2">${item.price}</p>
                  <p className="text-red-600 text-sm line-through">
                    ${item.full_price}
                  </p>
                  <button className="bg-green-500 text-white text-xs px-4 py-2 ml-4 rounded">
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
