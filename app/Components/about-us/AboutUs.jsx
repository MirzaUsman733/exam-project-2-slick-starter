"use client";
import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    const updateLinks = () => {
      const documentUrl = document.location.href.replace(/#.*$/, "");
      const linkEls = document.getElementsByTagName("A");
      for (let linkIndex = 0; linkIndex < linkEls.length; linkIndex++) {
        const linkEl = linkEls[linkIndex];
        if (!linkEl.getAttribute("href").match(/^#/)) {
          continue;
        }
        linkEl.setAttribute("href", documentUrl + linkEl.getAttribute("href"));
      }
    };

    document.addEventListener("DOMContentLoaded", updateLinks);

    return () => {
      document.removeEventListener("DOMContentLoaded", updateLinks);
    };
  }, []);

  return (
    <div>
      <div className="text-5xl font-bold text-center my-10">
        <span className="border-b-8">About Exam-Collections.com</span>
      </div>

      <section id="about" className="about">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-5/12 lg:w-6/12 flex justify-center items-center relative">
              <iframe
                width="600"
                height="480"
                src="https://www.youtube.com/embed/S7T0cYNKLIk"
                title="DumpsArena Test Engine Install and File Activate Method 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="w-full xl:w-7/12 lg:w-6/12 flex flex-col justify-center py-5 px-5 lg:px-10">
              <h3 className="text-2xl font-bold">
                Exam-Collections.com Decade of Expertise in IT Certification
                Preparation
              </h3>
              <p className="mt-4">
                ExamCollections.com was created with the mission to help IT
                professionals prepare for their certification exams stress-free.
                This website is the product of over decades hard work and
                certification achievements. Developed for Administrators and
                Engineers by Administrators and Engineers in the daily grind,
                our materials help certification exam candidates avoid mistakes
                and challenges on their road to certification.
              </p>

              <div className="mt-6">
                <div className="flex items-start">
                  <div className="icon text-2xl">
                    <i className="bx bx-share-alt"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold">
                      Master Your Tech Certs: The Ultimate Practice Exam
                      Destination
                    </h4>
                    <p className="mt-2 text-gray-600">
                      ExamCollections.com unites technology gurus to create the
                      single best location online to find your practice exams
                      and to study for your next test, whether it be Microsoft,
                      Cisco, Amazon, CompTIA or any other industry standard
                      technology.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-start">
                  <div className="icon text-2xl">
                    <i className="bx bx-happy-alt"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold">
                      Empowering Certification Success: Why ExamCollections.com
                      is the Top Choice
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Our success is built on the success of those who have been
                      in your shoes and got certified before you.
                      ExamCollections.com continued success is the result of
                      phenomenal word-of-mouth and friendly referrals. It is our
                      famous study guides, test engines and training courses
                      that will grab your attention - but all roads lead to the
                      ExamCollecions.com practice exams and Mock Questions - the
                      ultimate training resource.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-start">
                  <div className="icon text-2xl">
                    <i className="bx bx-user-voice"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold">
                      Community-Driven Expertise: The Foundation of
                      ExamCollections.com
                    </h4>
                    <p className="mt-2 text-gray-600">
                      ExamCollections.com is built on the core knowledge from
                      our technical training staff and through community and the
                      natural infrastructure of social networking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
