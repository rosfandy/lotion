/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.aceternity.com'],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            const path = require('path');
            config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs');
        }
        return config;
    },
}

module.exports = nextConfig;
