import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import tw, { styled } from 'twin.macro';

const HeaderContainer = styled.div`
  ${tw`flex justify-between`}
  > nav {
    ${tw`relative flex items-center justify-between sm:h-10 lg:justify-start`}
  }

  ul {
    ${tw`flex inline-flex`}

    li {
      ${tw`mr-6`}
    }
  }
`;

const HeaderLogo = styled.div`
  ${tw`flex items-center`}
  a {
    ${tw`text-white`}
  }
`;

const MenuLinks = styled(Link)`
  ${tw`block px-3 py-2 text-base font-medium text-white hover:text-gray-200 focus:outline-none focus:text-gray-200 transition duration-150 ease-in-out`}
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderLogo>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
    </HeaderLogo>
    <nav>
      <ul>
          <li>
            <MenuLinks to="/">
              Home
            </MenuLinks>
          </li>
          <li>
            <MenuLinks to="/about">
              About
            </MenuLinks>
          </li>
          <li>
            <MenuLinks to="/portfolio">
              Portfolio
            </MenuLinks>
          </li>
          <li>
            <MenuLinks to="/blog/1">
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
