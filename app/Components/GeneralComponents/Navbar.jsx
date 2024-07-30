// import Link from 'next/link';
// import DropdownMenu from './DropdownMenu';

// const Navbar = () => {
//   return (
//     <section x-data="{ dropdown: false, mobileNavOpen: false }">
//       {/* Laptop View */}
//       <nav className="hidden lg:flex relative px-6 lg:px-16 py-9 bg-black">
//         <div className="flex items-center">
//           <Link href="#">
//             <a className="inline-block text-lg font-bold">
//               <img className="h-6" src="vendia-assets/logos/vendia.svg" alt="Vendia Logo" width="auto" />
//             </a>
//           </Link>
//           <ul className="ml-16 lg:w-auto lg:space-x-12">
//             <li className="relative group" x-data="{ dropdown: false }" @mouseover="dropdown = true" @mouseleave="dropdown = false">
//               <a className="inline-flex items-center text-blue-500 font-medium" href="#">
//                 <span className="mr-3">Why Vendia?</span>
//                 <span :className="{'rotate-180': !dropdown, 'rotate-0': dropdown}" className="block transform rotate-180 transition-transform duration-200">
//                   <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M10.6667 6L6.00001 1.33333L1.33334 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
//                   </svg>
//                 </span>
//               </a>
//               <DropdownMenu />
//             </li>
//             <li><a className="inline-block text-gray-50 hover:text-blue-500 font-medium" href="#">Browse</a></li>
//             <li><a className="inline-block text-gray-50 hover:text-blue-500 font-medium" href="#">Resources</a></li>
//             <li><a className="inline-block text-gray-50 hover:text-blue-500 font-medium" href="#">Brands</a></li>
//           </ul>
//           <div className="ml-auto flex items-center">
//             <a className="inline-block mr-8 text-white hover:text-blue-500" href="#">
//               <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M16.5 16.5L11.5 11.5M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//               </svg>
//             </a>
//             <a className="mr-8 group inline-flex items-center" href="#">
//               <span className="text-white group-hover:text-blue-500">
//                 <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M11.3334 8.16667V4.83333C11.3334 2.99238 9.84099 1.5 8.00004 1.5C6.15909 1.5 4.66671 2.99238 4.66671 4.83333V8.16667M2.16671 6.5H13.8334L14.6667 16.5H1.33337L2.16671 6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//                 </svg>
//               </span>
//               <span className="-ml-2 flex items-center justify-center h-6 w-6 border-2 border-blueGray-800 bg-yellow-500 group-hover:bg-yellow-400 rounded-full">
//                 <span className="text-xs font-bold text-black">3</span>
//               </span>
//             </a>
//             <a className="inline-flex items-center font-medium text-white hover:text-blue-500" href="#">
//               <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M7 6C8.65685 6 10 4.65685 10 3C10 1.34315 8.65685 0 7 0C5.34315 0 4 1.34315 4 3C4 4.65685 5.34315 6 7 6Z" fill="currentColor"></path>
//                 <path d="M0 15C0 11.134 3.13401 8 7 8C10.866 8 14 11.134 14 15H0Z" fill="currentColor"></path>
//               </svg>
//               <span className="mx-3">My Account</span>
//               <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M10.6667 1L6.00004 5.66667L1.33337 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile View */}
//       <nav className="lg:hidden relative px-6 py-9 bg-black">
//         <div className="flex items-center">
//           <Link href="#">
//             <a className="inline-block text-lg font-bold">
//               <img className="h-6" src="vendia-assets/logos/vendia.svg" alt="Vendia Logo" width="auto" />
//             </a>
//           </Link>
//           <div className="ml-auto">
//             <button @click="mobileNavOpen = !mobileNavOpen" className="flex items-center p-3 text-white hover:text-blue-500">
//               <svg className="block h-4 w-4" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <title>Mobile menu</title>
//                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div :className="{'block': mobileNavOpen, 'hidden': !mobileNavOpen}" className="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
//           <div @click="mobileNavOpen = !mobileNavOpen" className="fixed inset-0 bg-gray-800 opacity-25"></div>
//           <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
//             <div className="flex items-center mb-8">
//               <Link href="#">
//                 <a className="mr-auto text-2xl font-medium leading-none">
//                   <img className="h-6" src="vendia-assets/logos/vendia-dark.svg" alt="Vendia Logo" width="auto" />
//                 </a>
//               </Link>
//               <button @click="mobileNavOpen = !mobileNavOpen">
//                 <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               </button>
//             </div>
//             <ul>
//               <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#">Why Vendia?</a></li>
//               <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#">Browse</a></li>
//               <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#">Resources</a></li>
//               <li className="mb-1"><a className="block p-4 font-medium text-black hover:bg-gray-50" href="#">Brands</a></li>
//             </ul>
//             <div className="mt-auto">
//               <div className="pt-6">
//                 <a className="block mb-2 py-3 text-sm text-center border border-gray-200 hover:border-gray-400 font-bold" href="#">Login</a>
//                 <a className="block py-3 text-sm text-center text-black bg-yellow-500 hover:bg-yellow-600 font-bold transition duration-200" href="#">Sign In</a>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default Navbar;

import Link from "next/link";
import DropdownVendorMenu from "./NavbarComponents/DropdownVendorMenu";
import DropdownCertificationMenu from "./NavbarComponents/DropdownCertificationMenu";
import AccountDropdown from "./NavbarComponents/AccountDropdown";
import ToggleButton from "./NavbarComponents/ToggleButton";
export default async function Navbar() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(`${apiUrl}/v1/vendors`, {
    headers: {
      "x-api-key": apiKey,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }
  const vendors = await res.json();
  const certRes = await fetch(`${apiUrl}/v1/certifications`, {
    headers: {
      "x-api-key": apiKey,
    },
  });
  if (!certRes.ok) {
    throw new Error(`Failed to fetch data: ${certRes.status}`);
  }
  const certifications = await certRes.json();
  return (
    <section>
      <nav className="relative px-6 py-0 lg:px-16 lg:py-9">
        
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between">
          <Link href="#">
            <img
              className="h-6"
              src="/examprince_dark_svg.svg"
              alt="Logo"
              width="auto"
            />
          </Link>
          <ul className="flex space-x-12">
            <li>
              <Link
                className="text-gray-700 hover:text-blue-500 header-link font-medium"
                href="#"
              >
                Home
              </Link>
            </li>
            <DropdownVendorMenu title="Vendors" vendors={vendors} />
            <DropdownCertificationMenu
              title="Certifications"
              certifications={certifications}
            />
            <li>
              <Link
                className="text-gray-700 hover:text-blue-500 header-link font-medium"
                href="#"
              >
                Video Courses
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-blue-500 header-link font-medium"
                href="#"
              >
                Unlimited Access
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-8">
            <div className="ml-auto flex items-center">
              <a
                className="inline-block mr-8 text-gray-700 hover:text-blue-500 header-link"
                href="#"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 16.5L11.5 11.5M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <a className="mr-8 group inline-flex items-center" href="#">
                <span className="text-gray-700 group-hover:text-blue-500">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 8.16667V4.83333C11.3334 2.99238 9.84099 1.5 8.00004 1.5C6.15909 1.5 4.66671 2.99238 4.66671 4.83333V8.16667M2.16671 6.5H13.8334L14.6667 16.5H1.33337L2.16671 6.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span className="-ml-2 flex items-center justify-center h-5 w-5 border-2 border-blueGray-800 bg-blue-500 group-hover:bg-blue-500 rounded-full">
                  <span className="text-xs font-bold text-black">3</span>
                </span>
              </a>
              <AccountDropdown />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile View */}
      <div className="md:hidden">
        {/* Mobile Menu */}
        <nav className="md:hidden relative px-6 py-5 bg-white flex items-center justify-between">
          <Link href="#">
            <img
              className="h-6"
              src="/examprince_dark_svg.svg"
              alt="Logo"
              width="auto"
            />
          </Link>
          <ToggleButton />
        </nav>
        <div id="drawer">
          <div className="bg-white h-full overflow-y-auto">
            <div className="px-6 py-6">
              <ul className="flex flex-col space-y-2">
                <DropdownVendorMenu title="Vendors" vendors={vendors} />
                <DropdownCertificationMenu
                  title="Certifications"
                  certifications={certifications}
                />
                <Link
                  className="block font-medium text-black hover:bg-gray-50"
                  href="#"
                >
                  Video Courses
                </Link>
                <Link
                  className="block font-medium text-black hover:bg-gray-50"
                  href="#"
                >
                  Unlimited Access
                </Link>
                <AccountDropdown />
              </ul>
            </div>
            {/* <div className="px-6 py-6 border-t border-gray-200 mt-auto">
              <Link
                className="block py-3 text-center text-black bg-yellow-500 hover:bg-yellow-600 font-bold transition duration-200"
                href="#"
              >
                Sign In
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
