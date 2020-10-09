require("dotenv").config()
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Aharon's Jewelry`,
    description: `A description of the store`,
    author: `Lior Cohen <liorco7079@gmail.com>`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carousel-images`,
        path: `${__dirname}/src/images/carousel-images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,

        // The storefront access token
        accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
    },
  ],
}
