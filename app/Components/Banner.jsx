"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      const response = await fetch(
        `${process?.env?.NEXT_PUBLIC_API_BASE_URL}/v1/banner`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      const data = await response.json();
      setBannerData(data);
    };

    fetchBannerData();
  }, []);

  return (
    <div className="container mx-auto mt-5 px-6">
      {bannerData ? (
        <Link href={bannerData.banner_link}>
          <img
            src={bannerData.banner_src}
            alt={bannerData.banner_website}
            className="w-full h-auto flex justify-center"
          />
        </Link>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Banner;
