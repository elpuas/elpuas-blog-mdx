import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from './layout.es'
import tw, { styled } from 'twin.macro';
import BoxHover from './hover-box';
import ArrowForward from '../images/arrow_forward_24px.svg'

const CardsContainer = styled.div`
${ tw`grid grid-cols-3 grid-rows-3 gap-16 mt-20`}
    @media ( max-width: 56.25rem ) {
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
            color:var(--color-blue);
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
  width: 100%;
  @media ( max-width: 56.25rem ) {
      ${tw`items-center mt-12`}
    }
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

const H2 = styled.h2`
    ${tw`mt-12`}
`

function BrowseBlogPosts({ pageContext }) {
  const { groupedPosts, group, page } = pageContext
  return (
    <Layout>
      <H2>Todos los niños, excepto uno, crecen...</H2>
      <CardsContainer>
      {group.map(({ node }) => {
        const { title, thumbnail } = node.frontmatter
        return (
          <div key={node.id}>
            <BoxHover>
                <figure className="post-image">
                  {thumbnail ? <img src={thumbnail.childImageSharp.fluid.src} width="100%" height="100%" data-src={thumbnail.childImageSharp.fluid.src} data-srcset={thumbnail.childImageSharp.fluid.srcSet} data-sizes={thumbnail.childImageSharp.fluid.sizes} className="lazyload" alt={`post-${title}`}/> : null }
                </figure>
                <div className="post-content">
                <AniLink
                    to={node.fields.slug}
                    className="post-title"
                    paintDrip color="#000106"
                    duration={0.5}
                    >
                    <h3>{title}</h3>
                </AniLink>
                <p>{node.excerpt}</p>
                <AniLink
                    to={node.fields.slug}
                    paintDrip color="#000106"
                    duration={0.5}
                    >
                    <img src={ArrowForward} alt={`post-${node.fields.slug}`} width="24" />
                </AniLink>
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
              <AniLink
                key={index}
                to={`/es/blog/${currentPage}`}
                className={currentPage === page ? 'active' : null}
                paintDrip color="#000106"
                duration={0.5}
              >
                {index + 1}
              </AniLink>
            )
          })}
        </div>
      </Pagination>
    </Layout>
  )
}

export default BrowseBlogPosts