import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

export default function BlogList({ data }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-gray-700 text-center mb-4 tracking-tight leading-tight relative z-10">
        Blogs
      </h2>
      <p className="text-gray-700 mb-10 text-center">
        Ensure you rely on the latest and accurate resources to stay updated
        with current information in your studies.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data?.blogs?.map((blog) => (
          <div
            key={blog.blog_id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Link href={`/blog/${blog.blog_perma}`}>
              <img
                src={blog.blog_image}
                alt={blog.blog_title}
                className="w-full object-cover"
              />
            </Link>
            <div className="p-6">
              <Link href={`/blog/${blog.blog_perma}`}>
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                  <span className="hover:border-b hover:border-blue-500 hover:text-blue-500">
                    {" "}
                    {blog.blog_title}{" "}
                  </span>
                </h2>
              </Link>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.blog_summary}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>
                  Published{" "}
                  {formatDistanceToNow(new Date(blog.blog_publish_date))} ago
                </span>
                <span>{blog.blog_views} views</span>
              </div>
              <div className="mt-4 flex justify-between items-center flex-wrap gap-2">
                <div>
                  {blog.blog_vendors_list.map((vendor) => (
                    <Link
                      href={`/mock-exam-provider/${vendor?.vendor_perma}`}
                      key={vendor?.vendor_perma}
                      className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-1 rounded"
                    >
                      {vendor.vendor_title}
                    </Link>
                  ))}
                </div>
                <div>
                  <Link
                    className="border border-blue-500 px-2 py-1 rounded-xl hover:bg-blue-500 hover:text-white"
                    href={`/blog/${blog.blog_perma}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-gray-600">
        Page {data?.current_page} of {data?.total_pages}
      </div>
    </div>
  );
}
