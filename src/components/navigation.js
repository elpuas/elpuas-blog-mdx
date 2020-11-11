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
    }
`;

const Navigation = ( { open } ) => {
    return (
        <Ul open={open} >
            <li>
                <MenuLinks paintDrip color="#000106" to="/" duration={0.5} activeClassName="active">
                Home
                </MenuLinks>
            </li>
            <li>
                <MenuLinks paintDrip color="#000106" duration={0.5} to="/about" activeClassName="active">
                About
                </MenuLinks>
            </li>
            <li>
                <MenuLinks paintDrip color="#000106" duration={0.5} to="/what-i-do" activeClassName="active">
                What I Do
                </MenuLinks>
            </li>
            <li>
                <MenuLinks paintDrip color="#000106" duration={0.5} to="/blog/1" activeClassName="active">
                Blog
                </MenuLinks>
            </li>
        </Ul>
    );
};

export default Navigation;
