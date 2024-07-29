// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  module: {
    exports: {
      images: {
        unoptimized: true,
      },
    },
  },
};

export default nextConfig;
