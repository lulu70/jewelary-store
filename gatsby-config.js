/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
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
