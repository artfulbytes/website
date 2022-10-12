const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        blog: allMdx(filter: {fileAbsolutePath: {regex: "/content/blog/"}},
                     sort: { fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                slug
              }
              id
            }
          }
        }
        projects: allMdx(filter: {fileAbsolutePath: {regex: "/content\/projects\/.+about.mdx$/"}}) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            id
            fileAbsolutePath
          }
        }
      }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  // Create several pages for the blog post grid (pagination)
  const postPerPage = 30
  const numPages = Math.ceil(result.data.blog.edges.length / postPerPage)
  Array.from({ length: numPages }).forEach((_, idx) => {
    actions.createPage({
      path: idx === 0 ? `/` : `/${idx + 1}`,
      component: require.resolve("./src/templates/all-posts.js"),
      context: {
        limit: postPerPage,
        skip: idx * postPerPage,
        numPages,
        currentPage: idx + 1,
      }
    })
  })

  // Create blog post pages
  result.data.blog.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { id, slug },
    })
  })

  // Create project-about pages
  result.data.projects.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPage({
      path: slug.concat("-about"),
      component: require.resolve(`./src/templates/project-about.js`),
      context: { id, slug },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

