// Include environement variables (.env.development)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}),

module.exports = {
  siteMetadata: {
    siteUrl: "https://artfulbytes.com/",
    title: "Artful Bytes",
    image: "",
    author: {
      name: `Niklas Nilsson`,
      summary: `I'm an embedded systems engineer from Sweden currently working at <a href=https://www.hasselblad.com/">Hasselblad</a>`,
    },
    description: `A blog about building and programming hardware.`,
    social: {
      instagram: `artfulbytescom`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `devenv`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`, // Required to find and  process images in mdx post
            options: {
              quality: 80,
              showCaptions: false,
              maxWidth: 1000,
              disableBgImageOnAlpha: true, // To remov blur from transparent pngs
              linkImagesToOriginal: false,
              backgroundColor: `transparent`,
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`, // Adds ids to headers (for table of contents links)
            options: {
              offsetY: 104,
              icon: false, // Remove the header icon
            }
          },
          { // Needed for including gifs, mp4, avc, etc...
            resolve: `gatsby-remark-copy-linked-files`
          }
        ]
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: 'gatsby-plugin-mailchimp', // Newsletter signup
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT
      }
    },
    `react-gist`, // TODO: Replace since it relies on legacy react version
    {
      resolve: `gatsby-plugin-typography`, // Handles the overall typographic theme of the site
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `typography-theme-github`, // The typography theme used
    `prism-react-renderer`, // Code highlighting
    `disqus-react`, // Disqus comments
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Artful Bytes`,
        short_name: `Artful Bytes`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
    `gatsby-plugin-react-helmet`, // Seo information
    `react-helmet`, // Seo information
  ],
};
