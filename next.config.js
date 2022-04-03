/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/cs",
        destination: "https://www.hynekfisera.cz",
        permanent: true,
        locale: false,
      },
      {
        source: "/cs/:slug*",
        destination: "https://www.hynekfisera.cz/:slug*",
        permanent: true,
        locale: false,
      },
      {
        source: "/en",
        destination: "https://www.hynekfisera.com",
        permanent: true,
        locale: false,
      },
      {
        source: "/en/:slug*",
        destination: "https://www.hynekfisera.com/:slug*",
        permanent: true,
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
