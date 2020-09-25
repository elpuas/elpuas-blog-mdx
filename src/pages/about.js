import React from 'react'
import tw, { styled } from 'twin.macro';

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="About" />
    <Hero title="About Me" content="Brief Bio" />
    <p>Hi, my name is Alfredo Navas, better known as <strong> el.puas </strong> and I am a Web Artisan based in the beautiful Costa Rica.</p>
    <p>I run a small workshop of Web Design &amp; Development, I specialize in custom WordPress Development, The JAMStack with GatsbyJS.</p>
    <p>I also help my local WordPress community as a organizer/speaker of the <a href="https://www.meetup.com/Costa-Rica-WordPress-Meetup/"> MeetUp Group </a> , organizer and speaker of WordCamp San Jose, volunteer and speaker of several camps that include WordCamp US, WordCamp MIA, WordCamp Managua, WordCamp CDMX and WordPress Rome MeetUp.</p>
    <p>Occasional Writer, I like to write about latest trends, new tech, mostly related to WordPress. Take a look at my <a href="/blogpost">recent posts here</a>.</p>

  </Layout>
)

export default About