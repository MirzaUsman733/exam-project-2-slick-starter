import React from "react";

const HeaderCard = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-10">
        <div className="col-span-1">
          <div className="flex justify-center mb-4">
            <img
              src="https://www.marks4sure.com/img/demo-image1.png"
              alt="Marks4Sure"
              className="w-40 h-auto"
            />
          </div>

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
            <h1 className="text-4xl font-semibold mb-5">
              Cisco 200-301 Dumps Questions Answers
            </h1>
            <p className="border-b text-md">
                <div className="w-1/2 flex justify-between">
              <span> Exam Code: </span> <span className="font-semibold">200-301</span>
                </div>
            </p>
            <p>
              Exam Name:
              <a href="#" className="text-blue-600 underline">
                Cisco Certified Network Associate
              </a>
            </p>
            <p>Last Update: Jul 22, 2024</p>
            <p>
              970 Questions Answers with Explanation
              <a href="#" className="text-blue-600 underline">
                Detail
              </a>
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-4">
            {[
              {
                type: "PDF + Testing Engine",
                price: 70,
                originalPrice: 174.99,
              },
              {
                type: "Testing Engine (only)",
                price: 54,
                originalPrice: 134.99,
              },
              { type: "PDF (only)", price: 48, originalPrice: 119.99 },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b py-2"
              >
                <div>
                  <p className="font-semibold">{item.type}</p>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label className="mr-4">Include Study Guide</label>
                  <p className="text-red-600 line-through mr-2">
                    ${item.originalPrice.toFixed(2)}
                  </p>
                  <p className="text-blue-600 font-bold">
                    ${item.price.toFixed(2)}
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 ml-4 rounded">
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
