import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Skull from '../components/skull-particles';
import BlogPost from "../components/blog-post";


const IndexPage = () => {

  return (
      <Layout>
        <Helmet>
          <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        </Helmet>
        <SEO title="Home" />
        <Skull />
        <BlogPost />
      </Layout>
  )
}

export default IndexPage