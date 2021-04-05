import React from 'react'
import { Link } from 'gatsby'
import DarkLogo from '../images/skull-as-image.png'
import LightLogo from '../images/skull-glasses.png'
import tw, { styled } from 'twin.macro'
import Burger from './burger'

const HeaderLogo = styled.div`
  a {
    img {
      width: 6.25rem;
    }
  }
`;

const Nav = styled.nav`
  ${tw`flex justify-between p-5 max-w-screen-xl w-full mx-auto mb-24`}
  height: 3.438rem;
`

const Header = ({ siteTitle }) => (
  <Nav>
    <HeaderLogo className="header-logo">
        <Link
          to="/"
        >
          <img className="dark-logo" src={ DarkLogo } alt={ siteTitle } />
          <img className="light-logo" src={ LightLogo } alt={ siteTitle } />
        </Link>
    </HeaderLogo>
    <Burger />
  </Nav>
)

export default Header
