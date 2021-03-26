import React, { useState } from 'react'
import styled from '@emotion/styled';
import tw from 'twin.macro';

const BoxHover = ( {children} ) => {

    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    const HoverStyles = styled.div`
        ${tw`relative`}

        &.blog-hover {

            &::before {
                content: '';
                width: 100%;
                height: 446px;
                border: solid 1px var(--color-limegreen);
                top: -1.25rem;
                right: -1.25rem;
                z-index: 1;
                position: absolute;
                animation: blogpost-before .2s cubic-bezier(0.4, 0, 0.6, 1);
            }
            &::after {
                content: '';
                width: 100%;
                height: 446px;
                border: solid 1px var(--color-limegreen);
                bottom: -1.25rem;
                left: -1.25rem;
                z-index: 1;
                position: absolute;
                animation: blogpost-after .2s cubic-bezier(0.4, 0, 0.6, 1);
            }
        }
    `

    return (
        <HoverStyles
            className={ hovered ? 'blog-hover' : '' }
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            {children}
        </HoverStyles>
    )
}

export default BoxHover