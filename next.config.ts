import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  reactCompiler: true,
  
};

module.exports = {
  allowedDevOrigins: ['10.0.0.101'],
}



export default nextConfig;
