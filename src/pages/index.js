import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroHero from '../components/intro-hero';
import BlogPost from "../components/blog-post";
import Divider from "../components/divider"



const IndexPage = () => {

  return (
      <Layout>
        <SEO title="Home" />
        <IntroHero />
        <Divider />
        <BlogPost />
        <Divider />
      </Layout>
  )
}

export default IndexPage