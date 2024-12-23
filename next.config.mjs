/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.welltea.zeroplace.co',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;

