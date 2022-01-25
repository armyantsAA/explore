module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/shops",
        permanent: true,
      },
    ];
  },
};
