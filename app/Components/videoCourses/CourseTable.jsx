"use client";
import Link from "next/link";
import { useState } from "react";

const CourseTable = ({ videoData }) => {
  const [selectedVendor, setSelectedVendor] = useState(
    videoData.length > 0 ? videoData[0].vendor_perma : null
  );

  const handleTabClick = (vendorPerma) => {
    setSelectedVendor(vendorPerma);
  };

  return (
    <div className="flex flex-col items-center container p-4 ">
      <div className="tabs-container grid grid-cols-2 md:flex flex-wrap justify-center mb-4 gap-2">
        {videoData.map((vendor) => (
          <button
            key={vendor?.vendor_perma}
            className={`tab-item px-2 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-medium text-center uppercase transition-colors border border-blue-500 duration-300 ease-in-out ${
              selectedVendor === vendor?.vendor_perma
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-600 hover:text-white"
            } rounded-lg`}
            onClick={() => handleTabClick(vendor?.vendor_perma)}
          >
            <div className="flex justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 64 64"
              >
                <path
                  fill="currentColor"
                  d="M0 8.8c16.3 11.8 10.7 33.9 19.9 49c2.7-1.8 5.3-3.5 8-5.3c1.7 2.7 3.9 5.2 6.8 7.4l23.7-18.3c-3.8-2.8-6-6.3-7.4-10.2C47.2 20.8 49 7.5 38.5 0C25.7 2.9 12.8 5.9 0 8.8"
                />
                <path
                  fill="#7d8b91"
                  d="M11 14.1c.5.7 1 1.5 1.4 2.3c9.1-2.8 18.3-5.6 27.4-8.5c-.3-.6-.7-1.2-1.1-1.8c-9.2 2.7-18.4 5.4-27.7 8m4.3 9.1c8.9-3.3 17.9-6.6 26.8-9.9c-.2-.7-.4-1.3-.7-2c-9 3.1-18 6.2-27 9.4c.3.9.6 1.7.9 2.5m1.8 7.4l26.4-11.4c-.1-.7-.3-1.4-.4-2.1c-8.8 3.6-17.7 7.2-26.5 10.9c.1.8.3 1.7.5 2.6"
                />
                <path
                  fill="#d9e3e8"
                  d="M16.8 51c1.4 4.2 3.5 8.2 6.7 11.6c1.8 1.9 5.4 1.9 7.4.3c2.1-1.6 2-4.1.3-5.9c-3-3.2-5-6.9-6.3-10.8c-2.7 1.5-5.4 3.2-8.1 4.8"
                />
                <path
                  fill="#333"
                  d="M18.9 49c.1 5.4 1.3 10.2 4.6 13.6c1.8 1.9 5.4 1.9 7.4.3c2.1-1.6 2-4.1.3-5.9c-3-3.2 20.3-24.1 18.9-28c-2.6 1.5-21.3 12.9-31.2 20"
                  opacity="0.5"
                />
                <path
                  fill="#b0bdc6"
                  d="M24.2 43.7c1.3 4.7 3.2 9.1 6.6 12.8c1.8 2 2.2 4.8.1 6.4c10.4-8 20.8-16.1 31.2-24.1c2.1-1.6 2.3-3.9 1-5.4c-2.4-2.6-3.8-5.8-4.7-9.1c-15.9 9-27.2 15.4-34.2 19.4"
                />
              </svg>
              {vendor?.vendor_title}
            </div>
          </button>
        ))}
      </div>
      <div className="courses-container">
        {selectedVendor ? (
          <VendorCourses
            courses={
              videoData.find((v) => v.vendor_perma === selectedVendor)
                ?.training_courses
            }
          />
        ) : (
          <p className="text-center text-gray-600 mt-4">
            No courses found for the selected vendor.
          </p>
        )}
      </div>
    </div>
  );
};

const VendorCourses = ({ courses }) => {
  if (!courses?.length)
    return (
      <p className="text-center text-gray-600 mt-4">No courses available.</p>
    );
  const uniqueCourses = new Set();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {courses?.map((course) => {
        if (uniqueCourses.has(course?.exam_id)) {
          return null;
        }
        uniqueCourses.add(course?.exam_id);
        return (
          <Link
            href={`/video-courses/${course?.perma}`}
            key={course?.exam_id}
            className="bg-white p-4 shadow rounded-lg"
          >
            <img
              src={`https://video.dumpsarena.com/img/${course?.image}`}
              alt={course?.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <div className="course-info">
              <h3 className="text-lg text-gray-800 font-semibold my-2">
                {course?.title}
              </h3>
              <div className="flex justify-between">
                <div className="text-sm text-gray-500">
                  Duration: {course?.duration}
                </div>
                <div className="text-sm text-gray-500">
                  Videos: {course?.videos}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CourseTable;
