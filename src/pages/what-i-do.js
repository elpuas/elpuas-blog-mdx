import React from 'react'
import tw, { styled } from 'twin.macro'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import BlogPost from '../components/blog-post'
import Video from '../components/video'

const WhatIDoStyles = styled.div`
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

const H2 = styled.h2`
    ${tw`mt-12`}
`

const VideoContainer = styled.div`
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
    }
`

const WhatIDo = () => (
    <Layout>
        <SEO
        title="What I Do"
        description={"I always been attractive to all forms of expression, and all my life has turn into that, this is a selection of my works from my early stages to more recent time."}
        keywords={['Comix', 'Web Development', 'Necrotica', 'front-end']}
        />
        <H2>I always been attracted to all forms of art, or expression, and all my life has turn into that, this is a selection of my works from my early stages to more recent time.</H2>
        <WhatIDoStyles>
            <div>
                <h3>Let’s called the beginning…</h3>
                <p>I always like to draw, first comics big fan of dark characters like Wolverine, HellBoy, Spawn…at some point a group of illustrator made the first comic book in Costa Rica, Named Camaleon Comix, I create this character name Necrotica, at that time start experimenting with some street art (early graffiti ) and more lately when I get into tattoos I made occasionally flash art for my friends.</p>
            </div>
            <Image fileName="necrotica.png" style={{ width: '100%', height: '401px' }} alt="necrotica" />
            <Image fileName="tattoo-flash.png" style={{ width: '100%', height: '401px' }} alt="tattoo-flash" />
            <Image fileName="grafitty.png" style={{ width: '100%', height: '401px' }} alt="tagging" />
            <div>
                <h3>The Advertising Years…</h3>
                <p>I spend some time doing print artwork, brochures, ads, magazines… you named,&nbsp; Working with an agency on the earlies of Y2K, when a designer was also brand designer,&nbsp; prepress, image correction, color correction, using a lot the path tool, Adobe Package and CMYK was my playground, and still is! #GraphicDesign&nbsp; #ProductDesign</p>
            </div>
            <Image fileName="press-1.png" style={{ width: '100%', height: '401px' }} alt="brochure" />
            <Image fileName="press-2.png" style={{ width: '100%', height: '401px' }} alt="flyers" />
            <Image fileName="press-3.png" style={{ width: '100%', height: '401px' }} alt="logo" />
            <Image fileName="press-4.png" style={{ width: '100%', height: '401px' }} alt="magazine" />
            <div>
                <h3>Design &amp; Code for the Web</h3>
                <p>When Pencil meets Pixels, and Pixels meet Code, once I made the transition for graphic designer to web designer when the web was made of Netscape, Macromedia and Alta Vista, currently I enjoy coding a PSD or design and code my own. Sketch, Photoshop, Figma meets VSCode.</p>
            </div>
            <Image fileName="web-design.png" style={{ width: '100%', height: '401px' }}  alt="web-design.png" />
            <Image fileName="web-development.png" style={{ width: '100%', height: '401px' }}  alt="web-development" />
            <div>
                <h3>Other Cool Stuffs I Do</h3>
                <p>I also spend some time, with my other passion WordPress, I’m Speaker and Co-Organizer of my local community….don’t tell anybody I love to do street art, so occasionally I do some.</p>
            </div>
            <Image fileName="wordcamp-mexico.png" style={{ width: '100%', height: '401px' }}  alt="wordcamp-mexico" />
            <Image fileName="wordcamp-sanjose.png" style={{ width: '100%', height: '401px' }} alt="wordcamp-sanjose" />
        </WhatIDoStyles>
        <H2>Videos</H2>
        <VideoContainer>
        <Video
                videoSrcURL="https://www.youtube.com/embed/B33I2bvt6TQ"
                videoTitle="Gatsby Conf 2021"
            />

            <Video
                videoSrcURL="https://www.youtube.com/embed/W4cx5L12ewI"
                videoTitle="Codigo con Juan"
            />

            <Video
                videoSrcURL="https://www.youtube.com/embed/Df2AkeSS1PQ"
                videoTitle="JavaScript for WordPress Conference"
            />

            <Video
                videoSrcURL="https://www.youtube.com/embed/hmVb8i4VYpY"
                videoTitle="Karla Campos Show"
            />
        </VideoContainer>
        <BlogPost />

    </Layout>
);

export default WhatIDo