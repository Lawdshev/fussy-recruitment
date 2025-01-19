/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/magnaibra/image/upload/**",
              },
        ]
    }
};

export default nextConfig;
