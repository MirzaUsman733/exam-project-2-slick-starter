const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-white p-6">
      <div className="bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-10 w-full max-w-3xl shadow-lg">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-serif text-blue-400 font-bold mb-3">
            Contact Us
          </h1>
          <p className="text-gray-700 text-lg">
            We are here to assist you. Please fill out the form below, and we
            will get back to you shortly.
          </p>
        </header>

        <section className="form-section">
          <form>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-800 text-base mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-gray-700 bg-opacity-20 text-gray-900 placeholder-gray-900 placeholder-opacity-60 outline-none focus:bg-opacity-30 focus:shadow-md transition-all duration-300"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-800 text-base mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-gray-700 bg-opacity-20 text-gray-900 placeholder-gray-900 placeholder-opacity-60 outline-none focus:bg-opacity-30 focus:shadow-md transition-all duration-300"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-base mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What’s the subject?"
                className="w-full p-3 rounded-lg bg-gray-700 bg-opacity-20 text-gray-900 placeholder-gray-900 placeholder-opacity-60 outline-none focus:bg-opacity-30 focus:shadow-md transition-all duration-300"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-white text-base mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="6"
                className="w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-60 outline-none focus:bg-opacity-30 focus:shadow-md transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
