/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://whyankush.wtf',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.8,
  sitemapSize: 5000,
  exclude: [],

  additionalPaths: async (config) => [
    {
      loc: '/',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/testimonials',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/levelup',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/about',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/freelance',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/messages',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  ],
};
