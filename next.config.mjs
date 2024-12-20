/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sstmazfgfcprjxrytthn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
};

export default nextConfig;
