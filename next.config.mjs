/** @type {import('next').NextConfig} */
import 'dotenv/config'
const nextConfig = {
    env:{
        API_KEY: process.env.API_KEY
      }
};

export default nextConfig;
