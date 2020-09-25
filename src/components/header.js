import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import tw, { styled } from 'twin.macro';

const HeaderContainer = styled.div`
  ${tw`relative bg-white overflow-hidden`}
  > nav {
    ${tw`relative flex items-center justify-between sm:h-10 lg:justify-start bg-gray-200`}
  }

  ul {
    ${tw`flex inline-flex`}

    li {
      ${tw`mr-6`}
    }
  }
`;

const HeaderLogo = styled.div`
  ${tw`flex items-center flex-grow flex-shrink-0 lg:flex-grow-0`}
`;

const MenuLinks = styled(Link)`
  ${tw`block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 focus:bg-gray-500 transition duration-150 ease-in-out`}
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <nav>
      <HeaderLogo>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </HeaderLogo>
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
