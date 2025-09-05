import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
        
      },
      {
        protocol: 'https',
        hostname: "dvgktacwufauyqfilnyi.supabase.co",
      }
    ],
  },
  devIndicators: false,
};

export default nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'dvgktacwufauyqfilnyi.supabase.co',
//         port: '',
//         pathname: '/account123/**',
//         search: '',
//       },
//     ],
//   },
// }
