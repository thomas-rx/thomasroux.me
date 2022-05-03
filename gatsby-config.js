module.exports = {
    siteMetadata: {
        title: `Thomas ROUX - Portfolio`,

        description: `Développeur web indépendant sur Perpignan.
        Réalisation de projets, site internet, optimisation de notoriété numérique (SEO).`,

        keywords: ['test', 'keyword'],
        username: `@xrths`,
        canonicalUrl: `https://www.xrths.fr`,
        siteUrl: `https://www.xrths.fr`,
        linkedinLink: `https://www.linkedin.com/in/xrths/`,
        githubLink: `https://github.com/xrths`,
        twitterLink: `https://twitter.com/xrths`,
        maltLink: `https://www.malt.fr/profile/xrths`,
        email: `contact@xrths.fr`,
        wordlyLink: 'https://wordly.xrths.fr',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/images/portfolio/logo.png`,
            },
        },
    ],
}
