import React from 'react'
import Layout from '../components/layout'
import tw, { styled } from 'twin.macro';
import SEO from '../components/seo'
import Image from '../components/image'
import BlogPost from "../components/blog-post";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const AboutStyles = styled.div`
${ tw`grid-cols-3 grid gap-16 m-auto`}
@media ( max-width: 29.063rem ) {
  ${ tw`grid-cols-1 mt-12`}
}

div:last-of-type {
  ${tw`col-span-2`}
    @media ( max-width: 29.063rem ) {
      ${tw`col-span-1`}
    }
}

figure {
  position: relative;
  @media ( max-width: 29.063rem ) {
      ${tw`mt-12 pl-6 pr-6`}
  }

  .gatsby-image-wrapper {
    z-index: 40;
  }

  &::before {
    content: '';
    width: 100%;
    height: 446px;
    border: solid 1px var(--color-limegreen);
    top: -1.25rem;
    right: -1.25rem;
    z-index: 1;
    position: absolute;
    animation: blogpost-before .2s cubic-bezier(0.4, 0, 0.6, 1);
    @media ( max-width: 29.063rem ) {
        width: 86%;
        top: -1.25rem;
        right: 0.313rem;
      }
    }

    &::after {
      content: '';
      width: 100%;
      height: 446px;
      border: solid 1px var(--color-limegreen);
      bottom: -1.25rem;
      left: -1.25rem;
      z-index: 1;
      position: absolute;
      animation: blogpost-after .2s cubic-bezier(0.4, 0, 0.6, 1);
      @media ( max-width: 29.063rem ) {
        width: 86%;
        bottom: -1.438rem;
        left: 0.188rem;
      }
    }
}
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutStyles>
      <div>
        <Image fileName="placeholder.jpg" style={{ width: '100%', height: '450px' }} alt="about placeholder" />
      </div>
      <div>
        <h2>Hi, my name is Alfredo Navas, better known as <strong> el.puas </strong> and I am a Web Artisan based in the beautiful Costa Rica.</h2>
        <p>I run a small workshop of Web Design &amp; Development, I specialize in custom WordPress Development, The JAMStack with GatsbyJS.</p>
        <p>I also help my local WordPress community as a organizer/speaker of the <a href="https://www.meetup.com/Costa-Rica-WordPress-Meetup/"> MeetUp Group </a> , organizer and speaker of WordCamp San Jose, volunteer and speaker of several camps that include WordCamp US, WordCamp MIA, WordCamp Managua, WordCamp CDMX and WordPress Rome MeetUp.</p>
        <p>Occasional Writer, I like to write about latest trends, new tech, mostly related to WordPress. Take a look at my <AniLink paintDrip color="#000106" duration={0.5} to="/blog/1">recent posts here</AniLink>.</p>
      </div>
    </AboutStyles>
    <BlogPost />
  </Layout>
)

export default About