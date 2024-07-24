import React from 'react'

const HowItWorks = () => {
    return (
        <div>
            <section class="py-12 md:py-24">
                <div class="container px-4 mx-auto">
                    <div class="max-w-6xl mx-auto">
                        <div class="max-w-4xl mb-24">
                            <span class="inline-flex items-center h-6 mb-4 px-2 text-xs uppercase font-bold text-gray-900 bg-gray-300 rounded-full">HOW IT WORKS</span>
                            <h1 class="font-heading tracking-tight text-4xl sm:text-5xl font-bold text-gray-900 mb-4">We revolutionized the way we manage digital content</h1>
                            <p class="text-lg text-gray-400">Using our platform is easy and straightforward. Here's how it works:</p>
                        </div>
                        <div class="flex flex-wrap items-center">
                            <div class="w-full md:w-1/3 md:pr-4 mb-4 md:mb-0">
                                <div class="md:flex items-center">
                                    <div class="w-full max-w-xs mx-auto md:max-w-none md:mr-4 p-px rounded-xl bg-gradient-to-br from-cyanGreen-800 to-cyan-800">
                                        <div class="p-4 rounded-xl bg-gray-100">
                                            <div class="flex-shrink-0 inline-flex w-10 h-10 mb-4 items-center justify-center font-bold text-gray-800 bg-gray-200 rounded-full transition duration-200">1</div>
                                            <p class="max-w-xs font-medium text-gray-700">Create an account by setting up your email and password.</p>
                                        </div>
                                    </div>
                                    <span class="hidden md:inline-block">
                                        <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 4L10 8L6 12" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                    <div class="flex items justify-center transform rotate-90 mt-4 md:hidden">
                                        <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 4L10 8L6 12" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/3 md:pr-4 mb-4 md:mb-0">
                                <div class="md:flex items-center">
                                    <div class="w-full max-w-xs mx-auto md:max-w-none md:mr-4 rounded-xl shadow-md">
                                        <div class="p-4 rounded-xl bg-gray-100 shadow-md">
                                            <div class="flex-shrink-0 inline-flex w-10 h-10 mb-4 items-center justify-center font-bold text-gray-800 bg-gray-200 rounded-full transition duration-200">2</div>
                                            <p class="max-w-xs font-medium text-gray-700">Browse through our intuitive interface to discover the features.</p>
                                        </div>
                                    </div>
                                    <span class="hidden md:inline-block">
                                        <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 4L10 8L6 12" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                    <div class="flex items justify-center transform rotate-90 mt-4 md:hidden">
                                        <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 4L10 8L6 12" stroke="#9CABA2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/3 xl:pr-8">
                                <div class="w-full max-w-xs mx-auto md:max-w-none rounded-xl shadow-xl">
                                    <div class="p-4 rounded-xl bg-gray-100">
                                        <div class="flex-shrink-0 inline-flex w-10 h-10 mb-4 items-center justify-center font-bold text-gray-800 bg-gray-200 rounded-full transition duration-200">3</div>
                                        <p class="max-w-xs font-medium text-gray-700">Drag & drop your assets, organize it into collections to keep it neat.</p>
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