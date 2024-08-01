import Link from "next/link";
import React from "react";
import HotExam from "../homePageComponents/hotExams/HotExam";

const ExamProvider = ({ vendors }) => {
  return (
    <div className="container p-6 mx-auto font-[Lato] mt-10">
      <div>
        <div>
          <h2 className="bg-blue-500 text-white p-5 mb-5 text-3xl font-bold text-center">
            Vendors
          </h2>
        </div>
        <div>
          <h1 className="text-3xl mb-10 font-bold">Select the Exam Provider</h1>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {vendors?.map((vendor) => (
            <div key={vendor?.vendor_id}>
              <Link
                href={`/exam-providers/${vendor?.vendor_perma}`}
                className="flex flex-col p-3 border border-gray-200 clip-polygon-exam-provider"
              >
                <p className="font-bold">{vendor?.vendor_title}</p>
                <p className="text-end text-white">Exams ({vendor?.vendor_exams})</p>
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

export default ExamProvider;
