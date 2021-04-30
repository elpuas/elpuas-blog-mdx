import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Layout from './layout'
import Helmet from 'react-helmet'
import Seo from './seo'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

const BlogPostLayout = ({ children, pageContext }) => {
  deckDeckGoHighlightElement();
  const { title, author } = pageContext.frontmatter

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Seo
        title={title}
        description={title}
      />
      <article>
        <header>
          <h2>{title}</h2>
          <div>
            <p>Author: {author} </p>
          </div>
        </header>
        <MDXProvider>{children}</MDXProvider>
      </article>
    </Layout>
  )
}

export default BlogPostLayout