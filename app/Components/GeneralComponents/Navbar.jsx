import Link from "next/link";
import AccountDropdown from "./NavbarComponents/AccountDropdown";
import DropdownCertificationMenu from "./NavbarComponents/DropdownCertificationMenu";
import DropdownVendorMenu from "./NavbarComponents/DropdownVendorMenu";
import ToggleButton from "./NavbarComponents/ToggleButton";
import SearchCard from "./NavbarComponents/SearchCard";
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
          <Link href="/">
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
                href="/"
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
                href="/video-courses"
              >
                Video Courses
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-700 hover:text-blue-500 header-link font-medium"
                href="/unlimited-access"
              >
                Unlimited Access
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-8">
            <div className="ml-auto flex items-center">
              {/* <a
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
              </a> */}
              <div className="mr-5 mt-1">
              <SearchCard />

              </div>
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
                  <span className="text-xs font-bold hover:text-white">3</span>
                </span>
              </a>
              <AccountDropdown />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile View */}
      <div className="md:hidden">
        <nav className="md:hidden relative px-6 py-5 bg-white flex items-center justify-between">
          <Link href="/">
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
          <div className="bg-white h-full overflow-y-auto ">
            <div className="px-6 py-6">
              <ul className="flex flex-col space-y-2">
                <DropdownVendorMenu title="Vendors" vendors={vendors} />
                <DropdownCertificationMenu
                  title="Certifications"
                  certifications={certifications}
                />
                <Link
                  className="block font-medium text-black hover:bg-gray-50"
                  href="/video-courses"
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
          </div>
        </div>
      </div>
    </section>
  );
}
