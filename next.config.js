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
      {
        source: '/wtyczki-gniazda/:slug*',
        destination: '/przemyslowe-wtyczki-i-gniazda/:slug*',
        // source: '/kategorie-produktow/*',
        // destination: '/produkty/*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
