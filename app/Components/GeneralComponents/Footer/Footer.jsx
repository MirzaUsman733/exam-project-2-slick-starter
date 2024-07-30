import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container mx-auto">
               
                <div className="py-16">
                    <div className="grid grid-cols-3 gap-10">
                        <div className="w-full mb-12">
                            <div className="mb-8">
                                <a href="index.html">
                                    <img src="/examprince_dark_svg.svg" className="w-72" alt="logo" />
                                </a>
                            </div>
                            <p className="text-[#7e7e7e] text-base leading-7">
                                Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.
                            </p>
                            <div className='mt-5'>
                                <span className="text-black text-lg font-semibold block mb-5">Follow us</span>
                                <a href="#" className="text-white text-lg mr-4 bg-[#3B5998] h-10 w-10 text-center leading-10 rounded-full inline-block"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-white text-lg mr-4 bg-[#55ACEE] h-10 w-10 text-center leading-10 rounded-full inline-block"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-white text-lg bg-[#DD4B39] h-10 w-10 text-center leading-10 rounded-full inline-block"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                        </div>
                        <div className="w-full mb-12">
                            <div className="mb-10 text-center">
                                <h3 className="text-black text-xl font-semibold mb-10 relative">Useful Links</h3>
                            </div>
                            <div className='flex justify-center gap-10'>
                            <ul className="list-none m-0 p-0">
                                <li className="mb-3"><a href="#" className="text-[#878787] hover:text-blue-500">Home</a></li>
                                <li className="mb-3"><a href="#" className="text-[#878787] hover:text-blue-500">Vendors</a></li>
                                <li className="mb-3"><a href="#" className="text-[#878787] hover:text-blue-500">Certifications</a></li>
                                <li className="mb-3"><a href="#" className="text-[#878787] hover:text-blue-500">Unlimited Access</a></li>
                                <li className="mb-3"><a href="#" className="text-[#878787] hover:text-blue-500">Video Courses</a></li>
                           </ul>
                           <ul>
                           <li className="mb-3"><a href="#" className="text-[#878787] hover:text-blue-500">Test Engine Player</a></li>
                                <li className="mb-3"><a href="#" className="text-[#878787] hover:text-blue-500">FAQ</a></li>
                                <li className="mb-3"><a href="#" className="text-[#878787] hover:text-blue-500">Refund Exam</a></li>
                                {/* <li className="mb-3"><a href="#" className="text-[#878787] hover:text-blue-500">Latest News</a></li> */}
                          
                           </ul>
                           </div>
                        </div>
                        <div className="w-full mb-12">
                            <div className="mb-6">
                                <h3 className="text-black text-xl font-semibold mb-6">Subscribe</h3>
                                <p className="text-[#7e7e7e] mb-6">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="relative">
                                <form action="#" className="flex">
                                    <input type="text" placeholder="Email Address" className="w-full py-3 px-5 bg-white border border-gray-200 text-black focus:outline-none" />
                                    <button type="submit" className="bg-blue-500 py-3 px-5 border border-blue-500 absolute right-0 top-0"><i className="fab fa-telegram-plane text-white text-xl"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#202020] py-6">
                <div className="container mx-auto flex justify-between items-center flex-wrap">
                    <div className="text-center lg:text-left">
                        <p className="text-[#878787] text-base">
                            Copyright &copy; 2024, All Right Reserved
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex">
                            <li className="ml-5"><a href="#" className="text-[#878787] hover:text-blue-500 text-base">Home</a></li>
                            <li className="ml-5"><a href="#" className="text-[#878787] hover:text-blue-500 text-base">Terms</a></li>
                            <li className="ml-5"><a href="#" className="text-[#878787] hover:text-blue-500 text-base">Privacy</a></li>
                            <li className="ml-5"><a href="#" className="text-[#878787] hover:text-blue-500 text-base">Policy</a></li>
                            <li className="ml-5"><a href="#" className="text-[#878787] hover:text-blue-500 text-base">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
