import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import tw, { styled } from "twin.macro";

const MenuLinks = styled(AniLink)`
    ${tw`block px-3 py-2 text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
    color: var(--color-limegreen);
`;

    const Ul = styled.ul`
    ${tw`list-none flex items-start`}
    flex-flow: row nowrap;
    z-index: 200;

    li {
        ${tw`px-3 pb-5`}
    }
    @media ( max-width: 56.25rem ) {
        flex-flow: column nowrap;
        background-color: white;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            ${tw`m-auto`}
            a {
                color: var(--color-dark-blue)
            }
        }
    }
`;

const Navigation = ( { open } ) => {
    return (
        <Ul open={open} >
            <li>
                <MenuLinks paintDrip color="#000106" to="/" duration={0.5}>
                Home
                </MenuLinks>
            </li>
            <li>
                <MenuLinks paintDrip color="#000106" duration={0.5} to="/about">
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
        </Ul>
    );
};

export default Navigation;
