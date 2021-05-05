import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Layout from './layout'
import LayoutEs from './layout.es'
import Helmet from 'react-helmet'
import BuyMeACoffee from './buy-me-a-coffee'
import Seo from './seo'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

const BlogPostLayout = ({ children, pageContext }) => {
  deckDeckGoHighlightElement();
  const { title, author, language } = pageContext.frontmatter

  if (language && language === 'ES') {
    return (
    <LayoutEs>
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
          <BuyMeACoffee text='Si te gusto lo que escribí y lo encuentras de alguna manera util, yo consumo grandes cantidades de cafe' />
        </article>
      </LayoutEs>
    )
  } else {
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
          <BuyMeACoffee text='If you liked what I wrote and find it useful in some way, I consume large amounts of coffee.' />
        </article>
      </Layout>
    )
  }


}

export default BlogPostLayout