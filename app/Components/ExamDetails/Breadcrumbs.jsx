import Link from "next/link";

const Breadcrumbs = ({ breadcrumbData }) => {
  return (
    <nav className="px-5 text-md container mx-auto mt-10">
      <div className="w-full px-3 py-2 bg-gray-100 text-gray-500">

      <ul className="flex">
        {breadcrumbData?.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2">/</span>}
            <Link className="hover:text-blue-500 text-xs md:text-base" href={crumb.path}>
              {crumb.label}
            </Link>
          </li>
        ))}
      </ul>
        </div>
    </nav>
  );
};

export default Breadcrumbs;
