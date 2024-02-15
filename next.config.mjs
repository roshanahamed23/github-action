/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        // level: 'info', // Set the logging level to 'info'
        fetches: {
            fullUrl: true, // Log the full URL of fetch requests
        },
    },
};

export default nextConfig;
