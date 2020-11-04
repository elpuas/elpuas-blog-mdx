import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/skull-icon.svg'

import tw, { styled } from 'twin.macro';

const HeaderContainer = styled.div`
  ${tw`flex justify-between pt-2 pb-2 pl-4 pr-4 max-w-screen-xl mx-auto`}
  > nav {
    ${tw`relative flex items-center justify-between sm:h-10 lg:justify-start`}
  }

  ul {
    ${tw`flex inline-flex`}

    li {
      ${tw`mr-6`}
      a {

      }
    }
  }
`;

const HeaderLogo = styled.div`
  ${tw`flex items-center`}
  a {
    img {
      width: 6.25rem;
    }
  }
`;

const MenuLinks = styled(AniLink)`
  ${tw`block px-3 py-2 text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
  color: var(--color-limegreen);
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderLogo>
        <Link
          to="/"
        >
          <img src={ Logo } alt={ siteTitle } />
        </Link>
    </HeaderLogo>
    <nav>
      <ul>
          <li>
            <MenuLinks paintDrip color="#000106" to="/" duration={0.5}>
              Home
            </MenuLinks>
          </li>
          <li>
            <MenuLinks paintDrip color="#000106" duration={0.5} to="/about" >
              About
            </MenuLinks>
          </li>
          <li>
            <MenuLinks paintDrip color="#000106" duration={0.5} to="/what-i-do">
              What I Do
            </MenuLinks>
          </li>
          <li>
            <MenuLinks paintDrip color="#000106" duration={0.5} to="/blog/1">
              Blog
            </MenuLinks>
          </li>
      </ul>
    </nav>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
