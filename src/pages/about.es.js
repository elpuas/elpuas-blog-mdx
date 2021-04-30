import React from 'react'
import Layout from '../components/layout.es'
import SEO from '../components/seo'
import Image from '../components/image'
import BlogPost from "../components/blog-post.es";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { AboutStyles } from '../utils/styles'
import { graphql } from 'gatsby'

const About = ( { data } ) => {

  console.log({data})

  const title = data.googleSheet.about_es_page[0].heading
  const content = data.googleSheet.about_es_page[0].content

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
          <p>Escritor ocasional, me gusta escribir sobre las últimas tendencias, nuevas tecnologías, principalmente relacionadas con WordPress, GatsbyJS o JavaScript. Echa un vistazo a mi <AniLink paintDrip color="#000106" duration={0.5} to="/blog/1">Blog aqui</AniLink>.</p>
        </div>
      </AboutStyles>
      <BlogPost />
    </Layout>
  )
}

export const query = graphql`
    query AboutQueryEs {
      googleSheet {
        about_es_page {
          heading
          content
        }
      }
    }
`

export default About