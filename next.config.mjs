/** @type {import('next').NextConfig} */
const nextConfig = {
 
  images: {
    formats: ["image/avif", "image/webp"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api.welltea.bikolpo.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
    ],
  },

  // Enable React strict mode for better performance in development
  reactStrictMode: true,
  
  // Configure webpack for better performance
  webpack: (config, { dev, isServer }) => {
    // Split chunks for better caching
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      minSize: 20000
    }
    
    return config
  }
};

export default nextConfig;
