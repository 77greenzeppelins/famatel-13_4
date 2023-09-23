/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/kategorie-produktow/:slug*',
        destination: '/produkty/:slug*',
        // source: '/kategorie-produktow/*',
        // destination: '/produkty/*',
        permanent: true,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/produkty/wtyczki-gniazda/:slug*',
        destination: '/produkty/przemyslowe-wtyczki-i-gniazda/:slug*',
        // source: '/kategorie-produktow/*',
        // destination: '/produkty/*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
