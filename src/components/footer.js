import React from 'react'
import Github from '../images/github.svg'
import WP from '../images/wordpress.svg'
import Twitter from '../images/twitter.svg'
import { FooterStyles, Icons, Copyright} from '../utils/styles'

export default function Footer() {
    return (
        <FooterStyles>
            <Copyright>© {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> by El.Puas</Copyright>
            <Icons>
                <li>
                    <a href="https://github.com/elpuas" target="_blank" rel="noreferrer">
                        <img src={Github} alt="github icon" width="24" height="24"/>
                    </a>
                </li>
                <li>
                    <a href="https://profiles.wordpress.org/elpuas/" target="_blank" rel="noreferrer">
                        <img src={WP} alt="wordpress icon" width="24" height="24"/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/3LPU4S" target="_blank" rel="noreferrer">
                        <img src={Twitter} alt="twitter icon" width="24" height="24" />
                    </a>
                </li>
            </Icons>
        </FooterStyles>
    )
}