/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://trib-hub-website.vercel.app/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
