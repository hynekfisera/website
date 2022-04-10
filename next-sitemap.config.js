/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.hynekfisera.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/en" },
      { userAgent: "*", disallow: "/cs" },
      { userAgent: "*", disallow: "/en/*" },
      { userAgent: "*", disallow: "/cs/*" },
      { userAgent: "*", allow: "/" },
    ],
  },
  alternateRefs: [
    {
      href: "https://www.hynekfisera.com",
      hreflang: "en",
    },
    {
      href: "https://www.hynekfisera.cz",
      hreflang: "cs",
    },
  ],
  exclude: ["/404", "/500", "/cs*"],
};
