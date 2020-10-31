import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Layout from './layout'
import Helmet from 'react-helmet'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

const BlogPostLayout = ({ children, pageContext }) => {
  deckDeckGoHighlightElement();
  const { title, author, date } = pageContext.frontmatter
  console.log( pageContext.frontmatter );
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
          <div>
            <p>Author: {author} </p>
            <time>Date: {date.split('T')[0]}</time>
          </div>
        </header>
        <MDXProvider>{children}</MDXProvider>
      </article>
    </Layout>
  )
}

export default BlogPostLayout