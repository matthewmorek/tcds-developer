// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "http://localhost:8080",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const webpack = require("webpack");
const tailwind = require("tailwindcss");

module.exports = {
  siteName: "Developers",
  siteDescription: "Documentation for Toyota Connected Data Solutions",
  siteUrl: siteUrl,
  metadata: {},
  permalinks: {
    trailingSlash: false,
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "ContentPage",
        baseDir: "./content/general",
        pathPrefix: "/general",
        path: "**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "ApiRoot",
        baseDir: "./content",
        path: "**/_index.md",
        index: ["_index"],
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "ApiPage",
        baseDir: "./content",
        path: "**/docs/*.md",
        refs: {
          api: "ApiRoot",
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 86400,
      },
    },
    {
      use: "gridsome-plugin-robots",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind()],
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        SwaggerUI: "swagger-ui",
      }),
    ],
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
};
