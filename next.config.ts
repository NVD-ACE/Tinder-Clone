import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dvgktacwufauyqfilnyi.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'assets.example.com',
//         port: '',
//         pathname: '/account123/**',
//         search: '',
//       },
//     ],
//   },
// }
