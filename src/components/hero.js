import React from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro';
import GlitchText from './glitch-text';

const HeroContainer = styled.div`
  ${tw`container lg:mx-auto mb-16`}

  h1 {
    ${tw`text-6xl text-white text-center font-black`}
  }

  p {
    ${tw`text-white text-center text-base`}
  }
`;
const Hero = ( { text, dataText, content  } ) => (
    <HeroContainer>
        <GlitchText text={text} data-text={dataText} />
        <p>{content}</p>
    </HeroContainer>
)

export default Hero