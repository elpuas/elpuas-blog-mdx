import React from "react"
import Layout from "../components/layout.es"
import SEO from "../components/seo"
import IntroHero from '../components/intro-hero.es';
import BlogPost from "../components/blog-post.es";

const IndexPage = () => {

  return (
      <Layout>
        <SEO title="Home" />
        <IntroHero />
        <BlogPost />
      </Layout>
  )
}

export default IndexPage