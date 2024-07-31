import Link from "next/link";

const Breadcrumbs = ({ breadcrumbData }) => {
  return (
    <nav className="bg-gray-100 text-gray-500 px-5 py-5 text-md container mx-auto mt-20">
      <ul className="flex">
        {breadcrumbData?.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2">/</span>}
            <Link className="hover:text-blue-500" href={crumb.path}>
              {crumb.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
