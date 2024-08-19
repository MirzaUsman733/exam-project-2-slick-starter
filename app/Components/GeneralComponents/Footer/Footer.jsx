const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto p-6">
        <div className="pt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="w-full mb-12">
              <div className="mb-3">
                <a href="index.html">
                  <img
                    src="/Dumps-Collections-logo.png"
                    className="w-40"
                    alt="logo"
                  />
                </a>
              </div>
              <p className="text-gray-700 text-xs leading-6">
                ExamCollection does not provide genuine Microsoft exam
                questions. Similarly, ExamCollection does not offer authentic
                Amazon exam questions. The materials provided by ExamCollection
                do not contain actual questions and answers from certification
                exams. The CFA Institute does not endorse or confirm the
                accuracy or quality of ExamCollection content. CFA® and
                Chartered Financial Analyst® are registered trademarks owned by
                the CFA Institute.
              </p>
              <div className="mt-5">
                <span className="text-black text-lg font-semibold block mb-5">
                  Follow us
                </span>
                <a
                  href="#"
                  className="text-white text-lg mr-4 bg-[#3B5998] h-10 w-10 text-center leading-10 rounded-full inline-block"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg mr-4 bg-[#55ACEE] h-10 w-10 text-center leading-10 rounded-full inline-block"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-white text-lg bg-[#DD4B39] h-10 w-10 text-center leading-10 rounded-full inline-block"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </div>
            </div>
            <div className="w-full mb-12">
              <div className="mb-10 text-center">
                <h3 className="text-black text-xl font-semibold mb-10 relative">
                  Useful Links
                </h3>
              </div>
              <div className="flex justify-center gap-16 w-full">
                <ul className="list-none m-0 p-0">
                  <li className="mb-3">
                    <a href="/" className="text-gray-700 hover:text-blue-500">
                      Home
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/mock-exam-providers"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      Vendors
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/mock-certifications-providers"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      Certifications
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      Unlimited Access
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/video-courses"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      Video Courses
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="mb-3">
                    <a
                      href="/test"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      Test Engine Player
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/faq"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="refund-policy"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      Refund Exam
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full mb-12">
              <div className="mb-6">
                <h3 className="text-black text-xl font-semibold mb-6">
                  Subscribe
                </h3>
                <p className="text-gray-700 mb-6">
                  Do not miss to subscribe to our new feeds, kindly fill the
                  form below.
                </p>

              </div>
              <div className="relative">
                <form action="#" className="flex">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full py-3 px-5 bg-white border border-gray-200 text-black focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 py-3 px-5 border border-blue-500 absolute right-0 top-0"
                  >
                    <i className="fab fa-telegram-plane text-white text-xl"></i>
                  </button>
                </form>
              </div>
              <div className="flex justify-center mt-5">
                <img src="/safe_checkout_optimized.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="bg-white py-6">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="text-center lg:text-left">
            <p className="text-gray-700 text-base">
              Copyright &copy; 2024, All Right Reserved
            </p>
          </div>
          <div className="hidden lg:block">
            <ul className="flex">
              <li className="ml-5">
                <a
                  href="/"
                  className="text-gray-700 hover:text-blue-500 text-base"
                >
                  Home
                </a>
              </li>
              <li className="ml-5">
                <a
                  href="/terms"
                  className="text-gray-700 hover:text-blue-500 text-base"
                >
                  Terms
                </a>
              </li>
              <li className="ml-5">
                <a
                  href="/privacy-policy"
                  className="text-gray-700 hover:text-blue-500 text-base"
                >
                  Privacy
                </a>
              </li>
              <li className="ml-5">
                <a
                  href="refund-policy"
                  className="text-gray-700 hover:text-blue-500 text-base"
                >
                  Refund
                </a>
              </li>
              <li className="ml-5">
                <a
                  href="/contact-us"
                  className="text-gray-700 hover:text-blue-500 text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
