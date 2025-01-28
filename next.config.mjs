/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fdac*-*.fna.fbcdn.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api.welltea.zeroplace.co",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
