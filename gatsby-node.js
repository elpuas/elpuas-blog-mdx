const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
// Here we're adding extra stuff to the "node" (like the slug)
// so we can query later for all blogs and get their slug
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: 'slug',
      // Generated value based on filepath with "blog" prefix
      value: `${value}`
    })
  }
}

// Programmatically create the pages for browsing blog posts
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postEn =  await graphql(`
    query {
      allMdx(filter: {frontmatter: {language: {eq: "EN"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              title
              author
              language
              thumbnail {
                childImageSharp {
                    id
                    fluid(fit: COVER, maxWidth: 287, maxHeight: 446) {
                      base64
                      src
                      srcSet
                      sizes
                    }
                }
              }
            }
          }
        }
      }
    }
  `).then((results, errors) => {
    if (errors) return Promise.reject(errors)

    const posts = results.data.allMdx.edges
    // This little algo takes the array of posts and groups
    // them based on this `size`:
    let size = 9
    let start = 0
    // Premake the grouped array to the correct length. new Array
    // wasn't working with map so don't @ me :)
    let groupedPosts = Array.from(Array(Math.ceil(posts.length / size)))
    groupedPosts = groupedPosts.map(() => {
      const group = posts.slice(start, start + size)
      start += size
      return group
    })

    // Here's the basic idea of what the grouping is doing if the
    // size variable was 2:
    // posts: [post1, post2, post3]
    // groupedPosts: [[post1, post2], [post3]]

    groupedPosts.forEach((group, index) => {
      const page = index + 1

      createPage({
        path: `/blog/${page}`,
        component: path.resolve('./src/components/browse-blog-posts.js'),
        context: { groupedPosts, group, page }
      })
    })
  })

  const postEs =  await graphql(`
    query {
      allMdx(filter: {frontmatter: {language: {eq: "ES"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              title
              author
              language
              thumbnail {
                childImageSharp {
                    id
                    fluid(fit: COVER, maxWidth: 287, maxHeight: 446) {
                      base64
                      src
                      srcSet
                      sizes
                    }
                }
              }
            }
          }
        }
      }
    }
  `).then((results, errors) => {
    if (errors) return Promise.reject(errors)

    const posts = results.data.allMdx.edges
    // This little algo takes the array of posts and groups
    // them based on this `size`:
    let size = 9
    let start = 0
    // Premake the grouped array to the correct length. new Array
    // wasn't working with map so don't @ me :)
    let groupedPosts = Array.from(Array(Math.ceil(posts.length / size)))
    groupedPosts = groupedPosts.map(() => {
      const group = posts.slice(start, start + size)
      start += size
      return group
    })

    // Here's the basic idea of what the grouping is doing if the
    // size variable was 2:
    // posts: [post1, post2, post3]
    // groupedPosts: [[post1, post2], [post3]]

    groupedPosts.forEach((group, index) => {
      const page = index + 1

      createPage({
        path: `/es/blog/${page}`,
        component: path.resolve('./src/components/browse-blog-posts.es.js'),
        context: { groupedPosts, group, page }
      })
    })
  })

  return [postEn, postEs]
}
