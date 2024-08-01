import Link from "next/link";
import React from "react";
import HotExam from "../homePageComponents/hotExams/HotExam";

const VendorDetails = ({ vendorData, vendorPerma }) => {
  return (
    <div>
      <div className="container mx-auto font-[Lato] p-6 mt-10">
        {/* <div className="mb-10">
          <img src="/Upto.png" alt="Banner" className="w-full h-auto" />
        </div> */}
        <div className="grid grid-cols-2 border">
          {/* Grid 1 */}
          <div className=" border-b-2 md:border-b-0 md:border-e-2">
            <h2 className="bg-gray-600 text-white p-5 mb-3 text-center text-3xl font-semibold">
              Exams
            </h2>
            {vendorData?.vendor_exams?.map((vendor) => (
              <div key={vendor?.exam_id} className="mx-3">
                <Link
                  href={`/exam-providers/${vendor?.exam_perma}`}
                  className="flex justify-between my-4 border-b hover:border-b-2"
                >
                  <p className="text-sm font-semibold text-gray-800">
                    {vendor?.exam_code}-{vendor?.exam_title}
                  </p>
                  <p className="text-xs">
                    Questions ({vendor?.exam_questions})
                  </p>
                </Link>
              </div>
            ))}
          </div>
          {/* Grid 2 */}
          <div>
            <h2 className="bg-gray-600 text-white p-5 mb-3 text-center text-3xl font-semibold">
              Certifications
            </h2>
            {[
              ...new Map(
                vendorData?.vendor_certs?.map((certs) => [certs.cert_id, certs])
              ).values(),
            ].map((certs) => (
              <div key={certs.cert_id} className="mx-3">
                <Link
                  href={`/vendor-exam-questions/${vendorPerma}/${certs.cert_perma}`}
                  className="flex my-4 border-b hover:border-b-2"
                >
                  <span className="font-semibold text-gray-800 text-sm">
                    {certs.cert_title}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <HotExam />
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
