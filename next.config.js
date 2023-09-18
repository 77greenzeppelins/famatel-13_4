/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/kategorie-produktow/:slug*',
        destination: '/produkty/:slug*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
