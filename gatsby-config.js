require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Corinna Laabs Portfolio"
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Corinna Laabs Portfolio",
        short_name: "CL Portfolio",
        start_url: "/",
        icon: "src/resources/logo.png"
      }
    }
  ]
};
