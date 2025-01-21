const path = require("path");
const pathPrefix = "/my-foam-wiki-test";
// Change me
const siteMetadata = {
  title: "Foam Template for Gatsby Theme Primer Wiki",
  shortName: "Wiki",
  description:
    "Another Foam template that use gatsby-theme-primer-wiki, Welcome to your new Foam Knowledge Base!",
  imageUrl: "/graph-visualisation.jpg",
  siteUrl: "https://fcdimitr.github.io",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-theme-primer-wiki",
      // Change me
      options: {
        icon: "./static/logo.png",
        sidebarComponents: ["latest", "tag"],
        nav: [
          {
            title: "Github",
            url: "https://fcdimitr.github.io/my-foam-wiki-test",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/theowenyoung",
          },
        ],
        editUrl:
          "https://fcdimitr.github.io/my-foam-wiki-test/tree/main/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
