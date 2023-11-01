const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "back.valentingrenier.fr",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/static/(.*)", // Adjust the pattern to match your static assets
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000", // Set an appropriate max-age value
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
