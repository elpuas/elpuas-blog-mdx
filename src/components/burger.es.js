
import React, { useState } from 'react';
import Navigation from './navigation.es'
import tw, { styled } from 'twin.macro'

const StyledBurger = styled.div`
    ${tw`w-8 h-4 fixed justify-around mt-5`}
    display: none;
    right: 20px;
    top: 15px;
    z-index: 300;
    @media (max-width: 56.25rem) {
    ${tw`flex justify-around`}
    flex-flow: column nowrap;
    }
    div {
        ${tw`w-6`}
        background-color: ${({ open }) => open ? 'var(--color-dark-blue)' : 'var(--color-limegreen)'};
        height: 2px;
        transform-origin: 0.313rem;
        transition: all 0.2s linear;
        z-index: 300;
        &:nth-of-type(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-of-type(2) {
            opacity: ${({ open }) => open ? 0 : 1};
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        }
        &:nth-of-type(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
    <>
        <StyledBurger open={open} onClick={() => setOpen(!open)} className="burger">
            <div />
            <div />
            <div />
        </StyledBurger>
        <Navigation open={open}/>
    </>
    )
};

export default Burger