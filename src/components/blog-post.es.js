import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import tw, { styled } from 'twin.macro'
import BoxHover from './hover-box'
import ArrowForward from '../images/arrow_forward_24px.svg'

function BlogPost ( ) {
    // Styles
    const BlogPostStyles = styled.div`
    ${ tw`grid-cols-3 grid gap-16 m-auto`}
    margin-top: 10.813rem;
    max-width: 62.063rem;
    @media ( max-width: 56.25rem ) {
        ${tw`grid-cols-1`}

        > div:nth-of-type(n+2) {
            display: none;
        }
    }

    .post-content {
        position: absolute;
        top: 10px;
        z-index: 100;
        padding: 15px;
        display: flex;
        flex-direction: column;
        bottom: 0;
        justify-content: flex-end;

        p {
            ${tw`mb-5`}
            color:var(--color-blue);
        }

        h2 {
            font-family: 'Heebo', sans-serif;
            color: var(--color-limegreen);
            font-size: 28px;
        }

        a {
            align-self: flex-end;
        }
    }

    .post-image {

        &::after {
        content: "";
        position: absolute;
        background-color: var(--color-dark-blue);
        opacity: .75;
        width: 100%;
        height: 100%;
        top: 0;
        }

    }

    .blog-hover {
        .post-image {
            &::after {
                opacity: 0;
            }
        }
    }


    .gatsby-image-wrapper {
        height: 27.875rem !important;
        z-index: 10;
    }
    `

    // Query
    const { allMdx } = useStaticQuery( graphql`
            query blogPostEs {
                allMdx(filter: {frontmatter: {language: {eq: "ES"}}}, sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
                    edges {
                        node {
                            frontmatter {
                                title
                                date
                                thumbnail {
                                    childImageSharp {
                                        id
                                        fluid(fit: COVER, maxWidth: 287, maxHeight: 446) {
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
        <BlogPostStyles
        >
            { Array.isArray && posts.map( ( { node }, index ) => {
                const { title, thumbnail } =  node.frontmatter
                const { slug, excerpt, id } = node

                return (
                    <BoxHover
                        key={id}
                    >
                        { thumbnail ? <Img fluid={thumbnail.childImageSharp.fluid} alt={`post-${slug}`} width="100%" height="401" className="post-image" /> : null }
                        <div className="post-content">
                            <h2>
                                <Link
                                to={`/${slug}`}
                                >
                                    {title}
                                </Link>
                            </h2>
                            <p>{excerpt}</p>
                            <Link
                                to={`/${slug}`}
                                >
                                <img src={ArrowForward} alt={`post-${slug}`} width="24" height="24" />
                            </Link>
                        </div>
                    </BoxHover>
                )
            } )
            }
        </BlogPostStyles>
    )
}

export default BlogPost