import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"


const IndexPage = () => {

  return (
      <Layout>
        <SEO title="Home" />
         <Hero title="Home" content="Estoy en el Index" />
      </Layout>
  )
}

export default IndexPage