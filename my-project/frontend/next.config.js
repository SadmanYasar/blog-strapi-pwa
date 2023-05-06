const withPWA = require("next-pwa")({
  dest: "public",
})

module.exports = withPWA({
  // next.js config
  pwa: {
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  /**
   * @type {import('next').NextConfig}
   */
  images: {
    loader: "default",
    domains: ["localhost", "res.cloudinary.com"],
  },
})

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   images: {
//     loader: "default",
//     domains: ["localhost"],
//   },
// }

// module.exports = nextConfig
