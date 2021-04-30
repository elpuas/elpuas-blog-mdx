import React from 'react'
import  Twitter from './icons/twitter'
import Github from './icons/github'
import WordPress from './icons/wordpress'
import { FooterStyles, Icons, Copyright} from '../utils/styles'

export default function Footer() {
    return (
        <FooterStyles>
            <Copyright>© {new Date().getFullYear()}, Hecho con
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> por El.Puas</Copyright>
            <Icons>
                <li>
                    <a href="https://github.com/elpuas" target="_blank" rel="noreferrer">
                        <Github />
                    </a>
                </li>
                <li>
                    <a href="https://profiles.wordpress.org/elpuas/" target="_blank" rel="noreferrer">
                        <WordPress />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/3LPU4S" target="_blank" rel="noreferrer">
                        <Twitter />
                    </a>
                </li>
            </Icons>
        </FooterStyles>
    )
}