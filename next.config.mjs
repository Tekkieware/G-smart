/** @type {import('next').NextConfig} */
import 'dotenv/config'
const nextConfig = {
    env:{
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        APP_ID: process.env.APP_ID,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
        CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
      }
};

export default nextConfig;
