import React from 'react'
import PropTypes from 'prop-types'
import tw, { styled } from 'twin.macro';

const HeroContainer = styled.div`
  ${tw`container lg:mx-auto`}

  h1 {
    ${tw`text-6xl text-white text-center font-black`}
  }
`;
const Hero = ( { title, content } ) => (
    <HeroContainer>
        <h1>{title}</h1>
        <p>{content}</p>
    </HeroContainer>
)

  Hero.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
  }

  Hero.defaultProps = {
    title: 'Hero Title',
    content: 'Hero Content'
  }

export default Hero