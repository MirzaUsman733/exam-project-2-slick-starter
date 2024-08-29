/* eslint-disable @next/next/no-img-element */
const ScPriceCard = ({ data }) => {
  return (
    <div className="py-8 px-4 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 mb-10 text-white rounded-3xl shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:flex-auto lg:mr-8">
          <h3 className="text-3xl font-extrabold tracking-tight mb-4">
            {data?.title}
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Get ready for your exam by enrolling in our comprehensive training
            course. This course includes a full set of instructional videos
            designed to equip you with in-depth knowledge essential for passing
            the certification exam with flying colors.
          </p>
          <div className="border-t border-gray-300 pt-4 mb-4">
            <h4 className="text-xl font-semibold mb-2">What is included</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center">
                <div className="bg-white text-blue-700 p-2 rounded-full shadow-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.8em"
                    height="1.8em"
                    viewBox="0 0 48 48"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4m.5 10.3v-3c0-2.2-1.8-4-4-4h-5"></path>
                      <path d="m32.5 24l-15 8.6V15.4zM8.7 36.5v2.1c0 .5.4.8.8.8h2.9"></path>
                    </g>
                  </svg>
                </div>
                <span className="text-lg font-bold">
                  {data?.lectures} : Lectures
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-white text-blue-700 p-2 rounded-full shadow-lg mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 23c-3.7 0-7.4.1-11.1.27l.8 17.98c3.4-.16 6.8-.25 10.3-.25c118.8 0 215 96.2 215 215s-96.2 215-215 215c-89.6 0-166.35-54.7-198.65-132.6l27.63-8.3l-48.43-34.3l-19.05 54.5l22.55-6.7C74.68 428.8 158.4 489 256 489c128.6 0 233-104.4 233-233S384.6 23 256 23m-30.8 2.04c-13.3 1.75-26.1 4.6-38.6 8.48l5.6 17.09c11.4-3.54 23.3-6.15 35.4-7.75zm-57 15.12c-12.4 5.05-24.2 11.12-35.4 18.12l9.5 15.21c10.3-6.44 21.2-12.03 32.6-16.67zM116.4 69.5a234 234 0 0 0-29.35 26.12l13.05 12.28c8.3-8.77 17.4-16.81 27-24.06l-4.8-6.57zm69.5 8.58l-4.4 17.44l217 55.48l4.4-17.4zM74.07 110.5c-8.19 10.2-15.54 21.2-21.94 32.7l15.65 8.8c5.91-10.7 12.69-20.8 20.26-30.3zm127.63 8.8c-3.9 26 2.8 55.2 14.2 79.2c6.4 13.4 14.2 25.2 21.9 33.8c4.2 4.7 8.4 8.3 12.2 10.9l-5.4 21.2c-4.6.4-10 1.6-16 3.7c-10.9 3.8-23.4 10.4-35.4 19.1c-21.6 15.6-41.4 37.9-50.4 62.6l167.5 42.9c3.9-26-2.8-55.2-14.2-79.2c-6.4-13.4-14.2-25.2-21.9-33.8c-4.2-4.7-8.4-8.3-12.2-10.9l5.4-21.2c4.5-.5 10-1.6 16-3.7c10.9-3.8 23.4-10.4 35.4-19.1c21.6-15.6 41.4-37.9 50.4-62.6zM43.24 160.9c-5.33 12-9.7 24.4-13 37.3l17.48 4.2c3.03-11.8 7.04-23.2 11.95-34.2zM26.2 217.5C24.11 230 23 242.9 23 256v.9l18-.2v-.7c0-12.1 1.02-24 2.95-35.6zM113.5 361l-4.4 17.4l217 55.5l4.4-17.4z"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg font-bold">
                  {data?.duration} : Duration
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/3 flex flex-col items-center bg-blue-600 rounded-2xl p-6 shadow-lg border-t-4 border-indigo-500">
          <img
            src="/video-file-formats.svg"
            alt="video-file-formats"
            className="mb-6 rounded-lg"
          />
          <a
            href="#"
            className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white text-center font-semibold py-3 rounded-md transition-all duration-300"
          >
            <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9"></path><path d="m12 15l3.4 5.89l1.598-3.233l3.598.232l-3.4-5.889M6.802 12l-3.4 5.89L7 17.657l1.598 3.232l3.4-5.889"></path></g></svg>
              <span className="ml-2">BEST SELLER</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScPriceCard;
