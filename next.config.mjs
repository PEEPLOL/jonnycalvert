/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    images: {
        domains: ['images.unsplash.com','cdn.discordapp.com'],
    },
};

export default nextConfig;
