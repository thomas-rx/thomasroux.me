const production = process.env.NODE_ENV === 'production';

module.exports = {
  url: `https://www.xrths.fr`,
  logo: `src/images/ressources/logo.png`,
  defaultTitle: `Thomas ROUX - Portfolio`,
  shortName: `Thomas R.`,
  author: `Thomas ROUX`,
  keywords: ['test', 'keyword'],
  username: `@xrths`,
  email: `contact@xrths.fr`,
  description: `Développeur web indépendant sur Perpignan.
    Réalisation de projets, site internet, optimisation de notoriété numérique (SEO).`,

  socialLinks: {
    linkedin: `https://www.linkedin.com/in/xrths`,
    github: `https://github.com/xrths`,
    twitter: `https://twitter.com/xrths`,
    malt: `https://www.malt.fr/profile/xrths`,
  },

  projectLinks: {
    wordly: 'https://wordly.xrths.fr',
  },

  matomo: {
    siteId: 3,
    urlBase: 'https://analytics.xrths.cloud/',
    trackerUrl: 'https://analytics.xrths.cloud/matomo.php',
  },
};
