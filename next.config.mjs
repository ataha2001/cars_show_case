/** @type {import('next').NextConfig} */
const nextConfig = {
   
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: "cdn.imagin.studio",
              // port: '',
              // pathname: '/account123/**',
            },
          ],
        },
        typescript:{
          ignoreBuildErrors: true,
        }
      
};

export default nextConfig;
