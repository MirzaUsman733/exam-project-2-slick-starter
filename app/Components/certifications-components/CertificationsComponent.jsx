"use client";
import Link from "next/link";
import React, { useState } from "react";

const CertificationsComponent = ({ certifications }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCertifications = searchTerm.trim()
    ? certifications?.filter((certification) =>
        certification?.vendor_title
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : certifications;
  return (
    <div className="container p-6 mx-auto font-[Lato] mt-10">
      <div>
        <div>
          <h2 className="bg-blue-500 text-white p-5 mb-5 text-3xl font-bold text-center">
            Certifications
          </h2>
        </div>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl mb-5 font-bold">Select the Certifications</h1>
          <div className="flex flex-col items-center justify-center w-1/4">
            <div className="w-full">
              <input
                id="customInput"
                type="email"
                placeholder="Enter the Certification Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 active:border-blue-500 rounded-lg shadow transition-shadow duration-300 ease-in-out focus:shadow-lg placeholder-gray-500 text-gray-700"
                style={{
                  background: "rgba(255, 255, 255, 0.65)",
                  backdropFilter: "blur(10px)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {filteredCertifications?.map((certification) => (
            <div key={certification?.vendor_id}>
              <Link
                href={`/exam-providers/${certification?.vendor_perma}`}
                // className="flex flex-col p-3 border border-gray-200 clip-polygon-exam-provider"
                className="flex flex-col p-3 border border-gray-200"
              >
                <div
                  className="relative bg-white rounded-lg p-6 flex-1 min-w-[calc(33.333%-20px)] shadow-lg transition-all duration-300 ease-in-out overflow-hidden hover:before:top-[-30%] hover:before:left-[-30%]"
                >
                  <div className="absolute left-[65%] w-full h-full bg-gradient-to-br from-blue-500 to-teal-500 z-0 transition-all duration-300 ease-in-out transform rotate-45 rounded-full before:content-[''] before:absolute before:top-0 before:left-0"></div>
                  <div className="relative z-10 text-gray-800">
                    <h2 className="text-xl font-semibold mb-2 text-blue-500">
                      {certification?.vendor_title}
                    </h2>
                    <p className="text-lg font-medium text-gray-600">
                      Certifications ({certification?.vendor_certs})
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsComponent;
