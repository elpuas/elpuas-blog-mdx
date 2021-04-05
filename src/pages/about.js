import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import BlogPost from "../components/blog-post";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { AboutStyles } from '../utils/styles'

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutStyles>
      <div>
        <Image fileName="family-2.png" style={{ width: '100%', height: '450px' }} alt="about placeholder" />
      </div>
      <div>
        <h2>Hi, my name is Alfredo Navas, better known as <strong> el.puas </strong>, I am a Web Artisan based in the beautiful Costa Rica.</h2>
        <p>I run a small workshop of Web Design &amp; Development, I specialize in custom WordPress Development &amp; The JAMStack with GatsbyJS.</p>
        <p>I also help my local community as a organizer/speaker of the <a href="https://www.meetup.com/Costa-Rica-WordPress-Meetup/"> MeetUp Group </a> and Gatsby Latinamerica <a href="https://www.facebook.com/groups/gatsbyjsla" >Facebook Group</a>, organizer and speaker of WordCamp San Jose, volunteer and speaker of several camps and conference across the globe,  that include WordCamp US, WordCamp MIA, WordCamp Managua, WordCamp CDMX, WordPress Rome MeetUp, JavaScript for WordPress, GatsbyConf to mention a few. 🔥 </p>
        <p>Occasional Writer, I like to write about latest trends, new tech, mostly related to WordPress, GatsbyJS or JavaScript. Take a look at my <AniLink paintDrip color="#000106" duration={0.5} to="/blog/1">Blog here</AniLink>.</p>
      </div>
    </AboutStyles>
    <BlogPost />
  </Layout>
)

export default About