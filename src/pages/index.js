import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import ReactTypingEffect from 'react-typing-effect';
import SEO from "../components/seo"
import tw, { styled } from 'twin.macro';
import Skull from '../components/skull-particles';

const IntroHero = styled.h1`
  ${tw`mt-56`}
  text-shadow: 2px 2px #00a6ff, -2px -2px #ff00d2;
  text-align: center;
`;


const IndexPage = () => {

  return (
      <Layout>
        <Helmet>
          <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
        </Helmet>
        <SEO title="Home" />
        <Skull />
        <IntroHero>
            <ReactTypingEffect text={['Welcome to my Personal Site.', 'I\'m Alfredo Navas better know as elPuas']} speed={200} eraseSpeed={100} />
        </IntroHero>
      </Layout>
  )
}

export default IndexPage