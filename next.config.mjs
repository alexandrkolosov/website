/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '**',
            },
        ],
    },
    // Add this if you need to specify a base path for GitHub Pages
    // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;