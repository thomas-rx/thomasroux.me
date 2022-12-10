const config = require('./portfolio');
const siteUrl = "https://www.xrths.fr";

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.description,
    keywords: config.keywords,
    username: config.username,
    email: config.email,

    canonicalUrl: config.url,
    siteUrl: config.url,

    wordlyUrl: config.projectLinks.wordly,
    linkedinUrl: config.socialLinks.linkedin,
    githubUrl: config.socialLinks.github,
    twitterUrl: config.socialLinks.twitter,
    maltUrl: config.socialLinks.malt,

    matomo: {
      siteId: config.matomo.siteId,
      urlBase: config.matomo.urlBase,
      trackerUrl: config.matomo.trackerUrl,
      srcUrl: config.matomo.srcUrl,
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-sitemap',
      exclude: ['/404*', '/*/404*'],
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.shortName,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: config.logo,
      },
    },
  ],
};
