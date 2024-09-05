import Link from "next/link";
import CartIcon from "../add-to-cart/CartIcon";
import AccountDropdown from "./NavbarComponents/AccountDropdown";
import DropdownCertificationMenu from "./NavbarComponents/DropdownCertificationMenu";
import DropdownVendorMenu from "./NavbarComponents/DropdownVendorMenu";
import SearchCard from "./NavbarComponents/SearchCard";
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
      <nav className="relative px-6 py-0 xl:px-16 xl:py-5">
        {/* Desktop View */}
        <div className="hidden xl:flex items-center justify-between">
          <Link href="/">
            <img
              className="w-32 my-0 py-0"
              src="/logo.png"
              alt="Logo"
              width="auto"
            />
          </Link>
          <ul className="flex space-x-12">
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
              <div className="mr-5 mt-1">
                <SearchCard />
              </div>
              <CartIcon />
              <AccountDropdown />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile View */}
      <div className="xl:hidden">
        <nav className="xl:hidden relative px-3 md:px-6 py-5 bg-white flex items-center justify-between">
          <a href="/">
            <img
              className="h-8 my-0 py-0"
              src="/logo.png"
              alt="Logo"
              width="auto"
            />
          </a>
          <div className="flex items-center">
           
            <CartIcon />
            <ToggleButton />
          </div>
        </nav>
        <div id="drawer" className="hidden xl:hidden">
          <div className="bg-white h-full overflow-y-auto ">
            <div className="px-6 py-6">
              <ul className="flex flex-col space-y-2">
                <li>
                  <a
                    className="text-gray-700 hover:text-blue-500 header-link font-medium"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <DropdownVendorMenu title="Vendors" vendors={vendors} />
                <DropdownCertificationMenu
                  title="Certifications"
                  certifications={certifications}
                />

                <a
                  className="block font-medium text-black hover:bg-gray-50"
                  href="/video-courses"
                >
                  Video Courses
                </a>
                <a
                  className="block font-medium text-black hover:bg-gray-50"
                  href="/unlimited-access"
                >
                  Unlimited Access
                </a>
                <div className="pt-5">
                  <AccountDropdown />
                </div>
              </ul>
            </div>
          </div>
        </div>
          <div className="mx-3 mt-1">
              <SearchCard />
            </div>
      </div>
    </section>
  );
}
