const withImages = require('next-images')
module.exports = withImages({
  images: {
    domains: ['cdn.pokko.io'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      use: [
        {
          loader: "graphql-tag/loader",
        },
      ],
    });

    return config;
  }
});