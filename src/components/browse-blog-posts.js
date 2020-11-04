import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'
import tw, { styled } from 'twin.macro';
import BoxHover from './hover-box';
import ArrowForward from '../images/arrow_forward_24px.svg'

const CardsContainer = styled.div`
${ tw`grid grid-cols-3 grid-rows-3 gap-16 mt-20`}
    @media ( max-width: 900px ) {
      ${tw`grid-cols-1`}
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
            color:#4285f4;
        }

        h3 {
            font-family: 'Heebo', sans-serif;
            color: var(--color-limegreen);
        }

        a:not(.post-title) {
            align-self: flex-end;
        }
    }

    .post-image {
      position: relative;
      z-index: 10;

        &::after {
          content: "";
          position: absolute;
          background-color: var(--color-dark-blue);
          opacity: .75;
          width: 100%;
          height: 100%;
          top: 0;
        }

        img {
          z-index: 40;
          max-height: 446px;
          object-fit: cover;
    }

    }

    .blog-hover {
        .post-image {
            &::after {
                opacity: 0;
            }
        }
    }
`

const Pagination = styled.footer`
  ${tw`flex flex-col items-end mt-5`}
  width: 100%auto;
  a {
    ${tw`mr-5`}
    color: var(--color-blue);
    display: inline-flex;
    &.active {
      color: var(--color-limegreen);
    }
    &:last-of-type {
      ${tw`mr-0`}
    }
  }
`

function BrowseBlogPosts({ pageContext }) {
  const { groupedPosts, group, page } = pageContext
  return (
    <Layout>
      <h2>All children, except one, grow up...</h2>
      <CardsContainer>
      {group.map(({ node }) => {
        const { title, author, thumbnail } = node.frontmatter
        return (
          <div key={node.id}>
            <BoxHover>
                <figure className="post-image">
                  {thumbnail ? <img src={thumbnail.childImageSharp.fluid.src} width="100%" data-src={thumbnail.childImageSharp.fluid.src} data-srcset={thumbnail.childImageSharp.fluid.srcSet} data-sizes={thumbnail.childImageSharp.fluid.sizes} className="lazyload" alt={title}/> : null }
                </figure>
                <div className="post-content">
                <Link
                    to={node.fields.slug}
                    className="post-title"
                    >
                    <h3>{title}</h3>
                </Link>
                <p>{node.excerpt}</p>
                <Link
                    to={node.fields.slug}
                    >
                    <img src={ArrowForward} atl={`post-${node.fields.slug}`} width="24" />
                </Link>
              </div>
            </BoxHover>
          </div>
        )
      })}
      </CardsContainer>
      <Pagination>
        <div>
          {groupedPosts.map((x, index) => {
            const currentPage = index + 1
            return (
              <Link
                key={index}
                to={`/blog/${currentPage}`}
                className={currentPage === page ? 'active' : null}
              >
                {index + 1}
              </Link>
            )
          })}
        </div>
      </Pagination>
    </Layout>
  )
}

export default BrowseBlogPosts