import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import tw, { styled } from 'twin.macro';
import '../utils/globals.css'

const LayoutStyle = styled.div`
${tw`max-w-screen-xl mx-auto pl-5 pr-5`}
background-color: var(--color-dark-blue);
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <LayoutStyle>
          {children}
          <Footer />
        </LayoutStyle>
      </>
    )}
  />
)

export default Layout
