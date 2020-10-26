import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'
import Hero from './hero'

import tw, { styled } from 'twin.macro';

const CardsContainer = styled.div`
${tw`flex flex-wrap -m-4`}
> div {
  ${tw`flex p-4 md:w-1/2`}
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
        const { title, author } = node.frontmatter
        return (
          <div key={node.id}>
            <div>
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