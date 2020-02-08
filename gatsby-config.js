/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 // require path to sucessfully route packages to desired directory.


const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Camper Party',
    author: 'Martin Chammah',
    siteUrl: `https://www.camperparty.com`
  },
   pathPrefix: '/camper-party',
   plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: path.join(__dirname, `src`, `icons`),
      },
      
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
   ]
}
