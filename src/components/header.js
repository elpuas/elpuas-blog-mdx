import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/skull-icon.svg'
import styled from '@emotion/styled'
import tw from 'twin.macro';
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
    <HeaderLogo>
        <Link
          to="/"
        >
          <img src={ Logo } alt={ siteTitle } />
        </Link>
    </HeaderLogo>
    <Burger />
  </Nav>
)

export default Header
