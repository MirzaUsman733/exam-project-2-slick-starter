"use client";
import React, { useState } from "react";

import Link from "next/link";

const ExamProvider = ({ vendors }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredVendors = searchTerm.trim()
    ? vendors?.filter((vendor) =>
        vendor?.vendor_title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : vendors;
  return (
    <div className="container p-6 mx-auto font-[Lato] mt-10">
      <div>
        <h2 className="bg-blue-500 text-white p-5 mb-5 text-3xl font-bold text-center">
          Vendors
        </h2>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl mb-5 font-bold">Select the Exam Provider</h1>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md">
              <input
                id="customInput"
                type="email"
                placeholder="Enter the Vendor Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 rounded-lg shadow transition-shadow duration-300 ease-in-out focus:shadow-lg placeholder-gray-500 text-gray-700"
                style={{
                  background: "rgba(255, 255, 255, 0.65)",
                  backdropFilter: "blur(10px)",
                }}
              />
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {filteredVendors?.map((vendor) => (
            <div key={vendor?.vendor_id}>
              <Link
                href={`/exam-providers/${vendor?.vendor_perma}`}
                className="flex flex-col p-3 border border-gray-200 clip-polygon-exam-provider"
              >
                <p className="font-bold">{vendor?.vendor_title}</p>
                <p className="text-end text-white">
                  Exams ({vendor?.vendor_exams})
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamProvider;
