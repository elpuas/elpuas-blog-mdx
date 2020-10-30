import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'
import Hero from './hero'

import tw, { styled } from 'twin.macro';

const CardsContainer = styled.div`
${ tw`grid grid-flow-col grid-cols-3 grid-rows-3 sm:grid-flow-row md:grid-flow-col-dense lg:grid-flow-row-dense xl:grid-flow-col gap-5`}
    @media screen and ( max-width: 465px ) {
        grid-auto-flow: row;
    }
`

const CardHeader = styled.header`

`

function BrowseBlogPosts({ pageContext }) {
  const { groupedPosts, group, page } = pageContext
  return (
    <Layout>
      <Hero title="Blog" content="Some stuffs..." />
      <CardsContainer>
      {group.map(({ node }) => {
        const { title, author, thumbnail } = node.frontmatter
        return (
          <div key={node.id}>
            <div>
              {console.log({ thumbnail })}
              {thumbnail ? <img src={thumbnail.childImageSharp.fluid.src} width="100%" data-src={thumbnail.childImageSharp.fluid.src} data-srcset={thumbnail.childImageSharp.fluid.srcSet} data-sizes={thumbnail.childImageSharp.fluid.sizes} className="lazyload" alt={title}/> : null }
              <CardHeader>
                <h3>{title}</h3>
                <p>Posting By: {author}</p>
              </CardHeader>
              <p>{node.excerpt}</p>
              <Link to={node.fields.slug}>View Article</Link>
            </div>
          </div>
        )
      })}
      </CardsContainer>
      <footer>
        Pages:{' '}
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
      </footer>
    </Layout>
  )
}

export default BrowseBlogPosts