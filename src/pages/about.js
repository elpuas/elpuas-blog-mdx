import React from 'react'
import tw, { styled } from 'twin.macro';

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'

const Title = styled.h1`
    ${tw`
        bg-gray-200 text-xl w-1/2
    `}
    color:white
`;

const About = () => (
  <Layout>
    <SEO title="About" />
    <Hero title="la Pagina de About" content="Aqui meteria cualquier Content" />
    <Title>About</Title>
    <p>Hi, my name is Alfredo Navas, better known as <strong> el.puas </strong> and I am a Web Artisan based in the beautiful Costa Rica.</p>
    <p>I run a small workshop of Web Design &amp; Development, I specialize in custom WordPress Development, eCommerce and Hybrid Apps.</p>
    <p>I also help my local WordPress community as a organizer/speaker of the <a href="https://www.meetup.com/Costa-Rica-WordPress-Meetup/"> MeetUp Group </a> , organizer and speaker of WordCamp San Jose, volunteer and speaker of several camps that include WordCamp US, WordCamp MIA, WordCamp Managua and WordPress Rome Group.</p>
    <p>Occasional Writer, I like to write about latest trends, new tech, mostly related to WordPress. Take a look at my <a href="/blogpost">recent posts here</a>.</p>

  </Layout>
)

export default About