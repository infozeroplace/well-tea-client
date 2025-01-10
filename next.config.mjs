/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.welltea.zeroplace.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "instagram.fdac19-1.fna.fbcdn.net",
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
