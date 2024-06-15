/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'stoic-platypus-757.convex.cloud'
        },
        {
          protocol: 'https',
          hostname: 'stoic-platypus-757.convex.cloud'
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com'
        },
      ]
    }
  };
  
  export default nextConfig;