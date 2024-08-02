import Link from "next/link";
import React from "react";

function CertificationDetails({ certData, vendorPerma }) {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <div className="px-6 py-6 bg-blue-500 rounded-lg text-white">
            <h1 className="text-4xl font-extrabold text-center">
              {certData?.cert_title} Certification Details
            </h1>
          </div>
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg text-gray-800">
                  <strong>Certification Title:</strong>{" "}
                  <span className="italic">{certData?.cert_full_name}</span>
                </p>
                <p className="text-lg text-gray-800 mt-4">
                  <strong>Exam Provider:</strong>{" "}
                  <span className="uppercase italic">{vendorPerma}</span>
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end my-2 gap-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#fdd835"
                      d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                    />
                    <path
                      fill="#ffff8d"
                      d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                    />
                    <path
                      fill="#f4b400"
                      d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#fdd835"
                      d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                    />
                    <path
                      fill="#ffff8d"
                      d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                    />
                    <path
                      fill="#f4b400"
                      d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#fdd835"
                      d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                    />
                    <path
                      fill="#ffff8d"
                      d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                    />
                    <path
                      fill="#f4b400"
                      d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#fdd835"
                      d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                    />
                    <path
                      fill="#ffff8d"
                      d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                    />
                    <path
                      fill="#f4b400"
                      d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1em"
                    height="1.1em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="#FDD835">
                      <path
                        d="M128 24v165.09l-54.72 33.65a8.4 8.4 0 0 1-12.52-9.17l14.88-62.79l-48.7-42A8.46 8.46 0 0 1 31.73 94l63.91-5.2l24.62-59.6A8.26 8.26 0 0 1 128 24"
                        opacity="1"
                      />
                      <path d="M239.18 97.26A16.38 16.38 0 0 0 224.92 86l-59-4.76l-22.78-55.09a16.36 16.36 0 0 0-30.27 0L90.11 81.23L31.08 86a16.46 16.46 0 0 0-9.37 28.86l45 38.83L53 211.75a16.4 16.4 0 0 0 24.5 17.82l50.5-31.08l50.53 31.08A16.4 16.4 0 0 0 203 211.75l-13.76-58.07l45-38.83a16.43 16.43 0 0 0 4.94-17.59M69.09 215.94c-.15.09-.2.12-.38 0a.37.37 0 0 1-.17-.48l14.88-62.8a8 8 0 0 0-2.56-7.91l-48.7-42a.39.39 0 0 1-.13-.51c.09-.27.18-.27.33-.29l63.92-5.16a8 8 0 0 0 6.72-4.93l17-41.08v133.85Zm154.75-113.21l-48.7 42a8 8 0 0 0-2.56 7.91l14.88 62.8a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0L136 184.63V50.78l17 41.08a8 8 0 0 0 6.75 4.92l63.91 5.16c.16 0 .25 0 .34.29s0 .4-.16.5" />
                    </g>
                  </svg>{" "}
                  &nbsp; <span className="text-md"> 4.7 </span>
                  &nbsp;{" "}
                  <span className="text-md text-blue-900 font-bold">
                    {" "}
                    (4055){" "}
                  </span>
                </div>
                <Link
                  href={`/certifications/${vendorPerma}/${certData?.cert_perma}`}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-[25%] text-center py-3 rounded-lg transition duration-300 shadow-lg"
                >
                  Take Exam
                </Link>
              </div>
            </div>
          </div>
          <div className=" bg-blue-50 py-6 px-6">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              Exams for {certData?.cert_title} Certification :
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certData?.cert_multiple_exams?.map((certification) => (
                <div
                  key={certification?.exam_id}
                  className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg transition duration-300"
                >
                  <div className="p-6">
                    {/* <div>
                      <img
                        src="https://dumpsarena.com/media/package-small-min_optimized.png"
                        alt="Exam Image"
                        className="h-32"
                      />
                    </div> */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {certification?.exam_title}
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                      Vendor:{" "}
                      <span className="uppercase">
                        {certification?.exam_vendor_title}
                      </span>
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          // <svg
                          //   key={star}
                          //   xmlns="http://www.w3.org/2000/svg"
                          //   className="h-8 w-4 text-yellow-400"
                          //   viewBox="0 0 20 20"
                          //   fill="currentColor"
                          // >
                          //   <path
                          //     fillRule="evenodd"
                          //     d="M10 2a.75.75 0 0 0-.723.55L7.075 8.932l-5.32.78a.75.75 0 0 0-.416 1.284l3.855 3.763-.912 5.315a.75.75 0 0 0 1.088.791L10 16.317l4.78 2.514a.75.75 0 0 0 1.088-.79l-.912-5.316 3.855-3.762a.75.75 0 0 0-.416-1.284l-5.32-.78L13.723 2.55A.75.75 0 0 0 13.277 2H10z"
                          //   />
                          // </svg>
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 128 128"
                          >
                            <path
                              fill="#fdd835"
                              d="m68.05 7.23l13.46 30.7a7.047 7.047 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.033 7.033 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.047 7.047 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                            />
                            <path
                              fill="#ffff8d"
                              d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                            />
                            <path
                              fill="#f4b400"
                              d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                            />
                          </svg>
                        ))}{" "}
                        &nbsp; (4.5)
                      </div>
                      <div>
                        <Link
                          href={`/exam-details/${certification?.exam_vendor_perma}/${certification?.exam_perma}`}
                          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationDetails;
