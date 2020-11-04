import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroHero from '../components/intro-hero';
import BlogPost from "../components/blog-post";

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