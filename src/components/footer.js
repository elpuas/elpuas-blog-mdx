import React from 'react'
import Github from '../images/github.svg'
import WP from '../images/wordpress.svg'
import Twitter from '../images/twitter.svg'
import styled from '@emotion/styled';
import tw from 'twin.macro';

const FooterStyles = styled.div`
    margin-top: 11.625rem;
    padding-bottom: 6.250rem;
`

const Icons = styled.ul`
${tw`text-center mt-5`}

li {
    ${tw`mr-3 inline-flex`}
    &:last-child {
        ${tw`mr-0`}
    }
}

`

const Copyright = styled.div`
    ${tw`text-center`}
    color: var(--color-blue);
    a {
        color: var(--color-blue);
    }
`

export default function Footer() {
    return (
        <FooterStyles>
            <Copyright>© {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> by El.Puas</Copyright>
            <Icons>
                <li>
                    <a href="https://github.com/elpuas" target="_blank" rel="noreferrer">
                        <img src={Github} alt="github icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://profiles.wordpress.org/elpuas/" target="_blank" rel="noreferrer">
                        <img src={WP} alt="wordpress icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/3LPU4S" target="_blank" rel="noreferrer">
                        <img src={Twitter} alt="twitter icon" />
                    </a>
                </li>
            </Icons>
        </FooterStyles>
    )
}