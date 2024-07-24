import React from "react";

const LogoCloud = () => {
  return (
    <div>
      <section className="bg-yellowGray-500">
        <div className="container lg:max-w-[80%] mx-auto">
          <div className="flex flex-wrap pt-10 pb-0 px-8 md:px-16 bg-white rounded-3xl">
            <div className="w-full lg:w-1/2 px-4 my-auto">
              <h4 className="sm:max-w-xs text-4xl font-extrabold leading-snug mb-10">
                Trusted by 400+ global brands
              </h4>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="grid grid-cols-3 gap-5 items-center justify-center">
                <div className="bg-gray-100">
                  <img
                    className="block mx-auto h-28 p-5"
                    src="/google.png"
                    alt="Google"
                  />
                </div>
                <div className="bg-gray-100">
                  <img
                    className="block mx-auto h-28 p-5"
                    src="/apple.png"
                    alt="Apple"
                  />
                </div>
                <div className="bg-gray-100">
                  <img
                    className="block mx-auto h-28 p-5"
                    src="/cisco.png"
                    alt="Cisco"
                  />
                </div>
                <div className="bg-gray-100">
                  <img
                    className="block mx-auto h-28 p-5"
                    src="/amazon.png"
                    alt="Amazon"
                  />
                </div>
                <div className="bg-gray-100">
                  <img
                    className="block mx-auto h-28 p-5"
                    src="/microsoft.png"
                    alt="Microsoft"
                  />
                </div>
                <div className="bg-gray-100">
                  <img
                    className="block mx-auto h-28 p-5"
                    src="/pmi.png"
                    alt="PMI"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoCloud;
