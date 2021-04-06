import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import BlogPost from "../components/blog-post";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { AboutStyles } from '../utils/styles'
import { graphql } from 'gatsby'

const About = ( { data } ) => {

  const title = data.googleSheet.about_page[0].heading
  const content = data.googleSheet.about_page[0].content

  return (
    <Layout>
      <SEO title="About" />
      <AboutStyles>
        <div>
          <Image fileName="family-2.png" style={{ width: '100%', height: '450px' }} alt="about placeholder" />
        </div>
        <div>
        <div dangerouslySetInnerHTML={{ __html: title }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
          <p>Occasional Writer, I like to write about latest trends, new tech, mostly related to WordPress, GatsbyJS or JavaScript. Take a look at my <AniLink paintDrip color="#000106" duration={0.5} to="/blog/1">Blog here</AniLink>.</p>
        </div>
      </AboutStyles>
      <BlogPost />
    </Layout>
  )
}

export const query = graphql`
    query AboutQuery {
      googleSheet {
        about_page {
          heading
          content
        }
      }
    }
`

export default About