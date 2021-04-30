import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import tw, { styled } from "twin.macro";
import DarkModeSwitcher from "./darkmode-switcher";

const MenuLinks = styled(AniLink)`
    ${tw`block px-3 py-2 text-base font-medium focus:outline-none transition duration-150 ease-in-out`}
    color: var(--color-limegreen);
`;

    const Ul = styled.ul`
    ${tw`list-none flex items-center`}
    flex-flow: row nowrap;
    height: 50px;
    z-index: 200;

    li {
        ${tw`px-3 pb-5`}

        a {
            &.active {
                    color: var( --color-blue);
                    &::after {
                        content: '';
                        background-color: var( --color-blue);
                        height: 0.25rem;
                        width: 100%;
                        display: flex;
                    }
                }
        }
    }
    @media ( max-width: 56.25rem ) {
        ${tw`justify-center pt-12 fixed top-0 right-0 h-screen w-screen bg-white`}
        flex-flow: column nowrap;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
        li {
            ${tw`mx-auto`}
            a {
                ${tw`text-4xl`}
                color: var(--color-dark-blue);

                &.active {
                    color: var(--color-limegreen);
                    &::after {
                        content: '';
                        background-color: var(--color-limegreen);
                        height: 0.25rem;
                        width: 100%;
                        display: flex;
                    }
                }

            }
        }
    }
`;

const backgroundColor = "#000106";

const Navigation = ( { open } ) => {
    return (
        <Ul open={open} >
            <li>
                <MenuLinks paintDrip color={backgroundColor} to="/es/" duration={0.5} activeClassName="active">
                Inicio
                </MenuLinks>
            </li>
            <li>
                <MenuLinks paintDrip color={backgroundColor} duration={0.5} to="/es/about" activeClassName="active">
                Acerca
                </MenuLinks>
            </li>
            <li>
                <MenuLinks paintDrip color={backgroundColor} duration={0.5} to="/es/what-i-do" activeClassName="active">
               Que Hago
                </MenuLinks>
            </li>
            <li>
                <MenuLinks paintDrip color={backgroundColor} duration={0.5} to="/es/blog/1" activeClassName="active">
                Blog
                </MenuLinks>
            </li>
            <li>
                <MenuLinks swipe top="entry" entryOffset={80} direction="right" color={backgroundColor} to="/" activeClassName="active">
                EN
                </MenuLinks>
            </li>
            <li>
                <DarkModeSwitcher />
            </li>
        </Ul>
    );
};

export default Navigation;
