require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: '0ebe4ba1-6fd5-4bd7-b703-ffbaf11078b5',
        serviceId: 'gatsby',
        apis: [{
          endpoint: 'qiita',
        }],
      },
    },
  ],
};