import React from 'react'

const HowItWorks = () => {
    return (
        <div>
          <section className="py-12 md:py-24 bg-green-600">
  <div className="container px-4 mx-auto">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-4xl mb-24">
        <span className="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-medium text-white bg-green-800 rounded-full">HOW IT WORKS</span>
        <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold text-white mb-4">We revolutionized the way we manage digital content</h1>
        <p className="text-lg text-gray-200">Using our platform is easy and straightforward. Here is how it works:</p>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/3 md:pr-4 mb-4 md:mb-0">
          <div className="md:flex items-center">
            <div className="w-full max-w-xs mx-auto md:max-w-none md:mr-4 p-px rounded-xl bg-gradient-to-br from-cyanGreen-800 to-cyan-800">
              <div className="p-4 rounded-xl bg-green-900">
                <div className="flex-shrink-0 inline-flex w-10 h-10 mb-4 items-center justify-center font-bold text-white bg-green-800 rounded-full transition duration-200">1</div>
                <p className="max-w-xs font-medium text-white">Create an account by setting up your email and password.</p>
              </div>
            </div>
            <span className="hidden md:inline-block text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
            <div className="flex items justify-center transform rotate-90 mt-4 md:hidden text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:pr-4 mb-4 md:mb-0">
          <div className="md:flex items-center">
            <div className="w-full max-w-xs mx-auto md:max-w-none md:mr-4 p-px rounded-xl border border-green-800">
              <div className="p-4 rounded-xl bg-green-900">
                <div className="flex-shrink-0 inline-flex w-10 h-10 mb-4 items-center justify-center font-bold text-white bg-green-800 rounded-full transition duration-200">2</div>
                <p className="max-w-xs font-medium text-gray-400">Browse through our intuitive interface to discover the features.</p>
              </div>
            </div>
            <span className="hidden md:inline-block text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
            <div className="flex items justify-center transform rotate-90 mt-4 md:hidden text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 xl:pr-8">
          <div className="w-full max-w-xs mx-auto md:max-w-none p-px rounded-xl border border-green-800">
            <div className="p-4 rounded-xl bg-gray-200">
              <div className="flex-shrink-0 inline-flex w-10 h-10 mb-4 items-center justify-center font-bold text-black border-black border-2 bg-gray-200 rounded-full transition duration-200">3</div>
              <p className="max-w-xs font-medium text-gray-900">Drag & drop your assets, organize it into collections to keep it neat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default HowItWorks;