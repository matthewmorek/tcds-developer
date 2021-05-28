// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const crypto = require("crypto");
const slugify = require("@sindresorhus/slugify");
const moment = require("moment");

module.exports = function (api) {
  api.loadSource(({ getCollection, addCollection, addSchemaTypes }) => {
    addSchemaTypes(`
      type ApiRoot implements Node @infer {
        id: ID!
        title: String
        date: Date
        status: String
        description: String
      }
    `);
  });

  api.createPages(async ({ createPage, graphql }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`
      {
        allApiRoot {
          edges {
            node {
              id
              path
              reference
            }
          }
        }
      }
    `);

    if (data.errors) throw data.errors;

    const apiReferenceEdges = (data.allApiRoot || {}).edges || [];

    apiReferenceEdges.forEach(({ node }) => {
      const { id, path, reference = {} } = node;

      if (!reference) return;

      createPage({
        path: `${path}/reference`,
        component: "./src/templates/ApiReference.vue",
        context: { id },
      });
    });
  });
};
