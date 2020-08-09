module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Jewelry Store`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `grid-images`,
        path: `${__dirname}/src/images/grid-images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
