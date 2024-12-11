import { format } from "date-fns";
import Link from "next/link";
export default function BlogDisplay({ data }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full mx-auto bg-white shadow rounded-lg blog-content">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <div className="w-8/12">
              <h1 className="text-4xl font-bold mb-2">
                {data.blog_title || "Untitled Blog"}
              </h1>
              <p className="text-lg text-gray-500">
                {data.blog_summary || "No summary available"}
              </p>
            </div>
            {data.blog_image && (
              <div className="relative w-4/12 ms-auto rounded-lg overflow-hidden">
                <img
                  src={data.blog_image}
                  alt={data.blog_title || "Blog image"}
                  className="max-w-96 ms-auto"
                />
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.blog_vendors_list?.length > 0 ? (
              data.blog_vendors_list.map((vendor, index) => (
                <Link
                  href={`/mock-exam-provider/${vendor?.vendor_perma}`}
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {vendor.vendor_title}
                </Link>
              ))
            ) : (
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                No vendors
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
                ></path>
              </svg>
              Published:{" "}
              {data.blog_publish_date
                ? format(new Date(data.blog_publish_date), "PPP")
                : "Unknown"}
            </span>
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
                ></path>
              </svg>
              Updated:{" "}
              {data.blog_update_date
                ? format(new Date(data.blog_update_date), "PPP")
                : "Unknown"}
            </span>
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="currentColor"
                    d="M12 4c2.787 0 5.263 1.257 7.026 2.813c.885.781 1.614 1.658 2.128 2.531c.505.857.846 1.786.846 2.656s-.34 1.799-.846 2.656c-.514.873-1.243 1.75-2.128 2.531C17.263 18.743 14.786 20 12 20c-2.787 0-5.263-1.257-7.026-2.813c-.885-.781-1.614-1.658-2.128-2.531C2.34 13.799 2 12.87 2 12s.34-1.799.846-2.656c.514-.873 1.243-1.75 2.128-2.531C6.737 5.257 9.214 4 12 4m0 2c-2.184 0-4.208.993-5.702 2.312c-.744.656-1.332 1.373-1.729 2.047C4.163 11.049 4 11.62 4 12s.163.951.569 1.641c.397.674.985 1.39 1.729 2.047C7.792 17.007 9.816 18 12 18s4.208-.993 5.702-2.312c.744-.657 1.332-1.373 1.729-2.047c.406-.69.569-1.261.569-1.641s-.163-.951-.569-1.641c-.397-.674-.985-1.39-1.729-2.047C16.208 6.993 14.184 6 12 6m0 3q.132 0 .261.011a2 2 0 0 0 2.728 2.728A3 3 0 1 1 12 9"
                  ></path>
                </g>
              </svg>
              {data.blog_views || 0} views
            </span>
            {data.blog_perma && (
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth={1.5}
                  >
                    <path d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305s1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062"></path>
                    <path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305s-1.37-4.1.303-5.78l2.424-2.433"></path>
                  </g>
                </svg>
                <Link
                  href={`/${data.blog_perma}`}
                  className="text-blue-600 hover:underline"
                >
                  Permalink
                </Link>
              </span>
            )}
          </div>
        </div>
        <div className="border-t border-gray-200 p-6">
          <div className="blog-content prose blog">
            {data.decodedContent ? (
              <div dangerouslySetInnerHTML={{ __html: data.decodedContent }} />
            ) : (
              <p>No content available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
