import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import tw, { styled } from 'twin.macro'
import gifMaker from '../images/404-pic.gif'

const Styles404 = styled.div`

  ${tw`flex justify-evenly flex-row`}

  @media ( max-width: 56.25rem ) {
      ${tw`flex-col justify-center`}

      img {
        ${tw`mb-16`}
      }

      iframe {
        ${tw`mx-auto`}
      }
    }
`

const H2 = styled.h2`
  ${tw`text-center`}
`

const P = styled.p `
  ${tw`text-center`}
`


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <H2>Page Not Found </H2>
    <P>You just hit a route that doesn&#39;t exist... the sadness.  <span role="img" aria-label="emoji">🔊</span>  &nbsp;Enjoy my favorite playlist or <a href="/">click here</a> to go to the homepage</P>
    <Styles404>
      <img src={gifMaker} alt="Otter dancing with a fish" />
      <iframe
        src="https://open.spotify.com/embed/playlist/6WkG1vLY6na3aJTcCEOCCo"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="EBM-Industrial Playlist">
      </iframe>
    </Styles404>
  </Layout>
)

export default NotFoundPage
