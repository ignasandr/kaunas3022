module.exports = {
  siteMetadata: {
    title: "Kaunas3022",
  },
  plugins: ["@chakra-ui/gatsby-plugin",
              "gatsby-plugin-image",
              "gatsby-plugin-sharp",
              "gatsby-transformer-sharp",
              "gatsby-plugin-mdx",
            {
             resolve: `gatsby-source-filesystem`,
             options: {
                name: `images`,
                path: `${__dirname}/src/images/`
             }
            },
            {
             resolve: `gatsby-source-filesystem`,
             options: {
                name: `content`,
                path: `${__dirname}/content/`
             }
            },
            {
              resolve: `gatsby-plugin-mdx`,
              options: {
                extensions: [`.mdx`, `.md`]
              }
            },
            {
              resolve: `gatsby-plugin-manifest`,
              options: {
                name: `Kaunas3022`,
                start_url: `/`,
                background_color: `#000`,
                icon: `src/images/logos/favicon.png`, 
              },
            }
           ],
};
