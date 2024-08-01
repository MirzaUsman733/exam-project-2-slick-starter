import Link from "next/link";
import React from "react";
import HotExam from "../homePageComponents/hotExams/HotExam";

const Certifications = ({ certifications }) => {
  return (
    <div className="container p-6 mx-auto font-[Lato] mt-10">
      <div>
        <div>
          <h2 className="bg-blue-500 text-white p-5 mb-5 text-3xl font-bold text-center">
          Certifications
          </h2>
        </div>
        <div>
          <h1 className="text-3xl mb-10 font-bold">Select the Certifications</h1>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {certifications?.map((certification) => (
            <div key={certification?.vendor_id}>
              <Link
                href={`/exam-providers/${certification?.vendor_perma}`}
                className="flex flex-col p-3 border border-gray-200 clip-polygon-exam-provider"
              >
                <p className="font-bold">{certification?.vendor_title}</p>
                <p className="text-end text-white">Certifications ({certification?.vendor_certs})</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <HotExam />
      </div>
    </div>
  );
};

export default Certifications;
