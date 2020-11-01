require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.GATSBY_MICROCMS_API_KEY,
        serviceId: 'gatsby',
        apis: [{
          endpoint: 'qiita',
        }],
      },
    },
  ],
};