import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import tw, { styled } from 'twin.macro'
import Dark from '../images/moon.svg'
import Light from '../images/sun.svg'

const Label = styled.label`
    ${tw`relative block`}

    height: 25px;
    user-select: none;
    width: 25px;

    span {

    background-image: url(${Dark});
    background-size: contain;
    display: block;
    height: 25px;
    left: 0;
    position: absolute;
    top: 0;
    width: 25px;
    }
`
const Input = styled.input`

    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;

    :checked ~ span {

        background-image: url(${Light});
    }
`

export default function DarkModeSwitcher() {
    return (
        <div>
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                <Label>
                    <Input
                    type="checkbox"
                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                    />{' '}
                    <span className="dark-mode-icon"></span>
                </Label>
                )}
            </ThemeToggler>
        </div>
    )
}
