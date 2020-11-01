const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
    {
      allMicrocmsQiita {
        edges {
          node {
            body
            slug
            title
          }
        }
      }
    }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMicrocmsQiita.edges.forEach((post, index) => {
    createPage({
      path: post.node.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        post: post.node,
      },
    });
  });
};