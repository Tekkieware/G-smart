/** @type {import('next').NextConfig} */
import 'dotenv/config'
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
    env:{
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        APP_ID: process.env.APP_ID,
        NEXT_PUBLIC_CLOUDINARY_API_KEY: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        NEXT_PUBLIC_CLOUDINARY_API_SECRET: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
        NEXT_PUBLIC_CLOUDINARY_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
      },
      webpack: (config) => {
        config.resolve = {
          ...config.resolve,
          fallback: {
            fs: false,
          },
        };
        return config;
      },
     
};

export default nextConfig;
