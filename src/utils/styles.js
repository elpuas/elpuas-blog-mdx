import tw, { styled } from 'twin.macro'

// About Styles
export const AboutStyles = styled.div`

    ${ tw`grid-cols-3 grid gap-16 m-auto`}

    @media (max-width: 56.25rem) {
        ${ tw`grid-cols-1 mt-12`}
    }

    div:last-of-type {

        ${tw`col-span-2`}

        @media (max-width: 56.25rem) {

        ${tw`col-span-1`}
        }
    }

    figure {

        position: relative;

        @media (max-width: 56.25rem) {

        ${tw`mt-12 pl-6 pr-6`}
    }

    .gatsby-image-wrapper {
        z-index: 40;
    }

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

        @media ( max-width: 56.25rem ) {

                width: 86%;
                top: -1.25rem;
                right: 0.313rem;
        }
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

        @media ( max-width: 56.25rem ) {
            width: 86%;
            bottom: -1.438rem;
            left: 0.188rem;
        }
    }
}
`

// What I Do Styles
export const WhatIDoStyles = styled.div`
    ${ tw`grid grid-cols-2 grid-rows-6 gap-16 mt-20`}

    @media screen and ( max-width: 29.063rem ) {
        ${tw`grid-cols-1 mt-12`}
    }

    div {
        ${tw`flex flex-col justify-center p-4`}
    }

    figure {
        position: relative;
        max-width: 32.313rem;
        @media ( max-width: 29.063rem ) {
            ${tw`pl-6 pr-6`}
        }

    .gatsby-image-wrapper {
        z-index: 40;
    }

    &::before {
        content: '';
        width: 100%;
        height: 401px;
        border: solid 1px var(--color-limegreen);
        top: -1.25rem;
        right: -1.25rem;
        z-index: 1;
        position: absolute;
        animation: blogpost-before .2s cubic-bezier(0.4, 0, 0.6, 1);
        @media ( max-width: 29.063rem ) {
        width: 86%;
        top: -1.25rem;
        right: 0.313rem;
        }
    }

    &::after {
        content: '';
        width: 100%;
        height: 401px;
        border: solid 1px var(--color-limegreen);
        bottom: -1.25rem;
        left: -1.25rem;
        z-index: 1;
        position: absolute;
        animation: blogpost-after .2s cubic-bezier(0.4, 0, 0.6, 1);
        @media ( max-width: 29.063rem ) {
            width: 86%;
            bottom: -1.438rem;
            left: 0.188rem;
        }
    }
}
`

export const H2 = styled.h2`
    ${tw`mt-12`}
`

export const VideoContainer = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 gap-6 mt-8`}

    .video {
        width: 100%;
    }

    iframe {

        ${tw`w-full p-4`}

        border: solid 1px var(--color-limegreen);
        height: 360px;
        object-fit: cover;
        width: 100%;

        @media ( max-width: 26.75rem ) {

            height: 211px;
        }
    }
`

// Footer Styles
export const FooterStyles = styled.div`

    margin-top: 11.625rem;
    padding-bottom: 6.250rem;
`

export const Icons = styled.ul`
    ${tw`text-center mt-5`}

    li {
        ${tw`mr-3 inline-flex`}
        &:last-child {
            ${tw`mr-0`}
        }
    }

`

export const Copyright = styled.div`
    ${tw`text-center`}

    color: var(--color-blue);

    a {
        color: var(--color-blue);
    }
`