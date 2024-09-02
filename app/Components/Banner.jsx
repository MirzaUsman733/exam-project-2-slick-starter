import Link from "next/link";

const Banner = async () => {
  const response = await fetch(
    `${process?.env?.NEXT_PUBLIC_API_BASE_URL}/v1/banner`,
    {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
      }
  );
  const data = await response.json();

  return (
    <div className="container mx-auto mt-5">
      {" "}
      {/* Tailwind CSS for centering */}
      {data ? (
        <Link href={data?.banner_link} className="w-full flex justify-center" >
        <img src={data?.banner_src} alt={data?.banner_website} className=" h-auto" />
        </Link>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Banner;
