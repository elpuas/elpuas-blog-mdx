import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import tw, { styled } from 'twin.macro';

function BlogPost ( ) {
    // Styles
    const BlogPostStyles = styled.div`
    ${ tw`grid grid-flow-col sm:grid-flow-row md:grid-flow-col-dense lg:grid-flow-row-dense xl:grid-flow-col gap-5`}
    margin-top: 6.25rem;
    @media screen and ( max-width: 29.063rem ) {
        grid-auto-flow: row;
    }
    `

    // Query
    const { allMdx } = useStaticQuery( graphql`
            query blogPost {
                allMdx(sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
                    edges {
                        node {
                            frontmatter {
                                title
                                date
                                thumbnail {
                                    childImageSharp {
                                        id
                                        fluid(maxWidth: 800, maxHeight: 300) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                            id
                            slug
                            excerpt
                        }
                    }
                }
            }
        `
    )

    const { edges: posts } = allMdx;

    return (
        <BlogPostStyles>
            { Array.isArray && posts.map( ( { node } ) => {
                const { title, thumbnail } =  node.frontmatter
                const { slug, excerpt, id } = node

                return (
                    <div key={id}>
                        { thumbnail ? <Img fluid={thumbnail.childImageSharp.fluid} alt={`post-image-${slug}`} /> : null }
                        <h3>
                            <Link
                            to={`/${slug}`}
                            >
                                {title}
                            </Link>
                        </h3>
                        <p>{excerpt}</p>
                    </div>
                )
            } )
            }
        </BlogPostStyles>
    )
}

export default BlogPost