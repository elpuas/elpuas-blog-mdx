import React from 'react'
import tw, { styled } from 'twin.macro';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import BlogPost from "../components/blog-post";

const WhatIDoStyles = styled.div`
    ${ tw`grid grid-cols-2 grid-rows-6 gap-16 mt-20`}

    @media screen and ( max-width: 900px ) {
    }

    div {
        ${tw`flex flex-col justify-center p-4`}
    }

    figure {
        position: relative;
        max-width: 32.313rem;

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
    }
}
`

const WhatIDo = () => (
    <Layout>
        <SEO title="What I Do" meta="I always been attractive to all forms of expression, and all my life has turn into that, this is a selection of my works from my early stages to more recent time." />
        <h2>I always been attractive to all forms of expression, and all my life has turn into that, this is a selection of my works from my early stages to more recent time.</h2>
        <WhatIDoStyles>
            <div>
                <h3>Let’s called the beginning…</h3>
                <p>I always like to draw, first comics big fan of dark characters like Wolverine, HellBoy, Spawn…at some point a group of illustrator made the first comic book in Costa Rica, Named Camaleon Comix, I create this character name Necrotica, at that time start experimenting with some street art (early graffiti ) and more lately when I get into tattoos I made occasionally flash art for my friends.</p>
            </div>
            <Image fileName="placeholder.jpg" style={{ width: '100%', height: '401px' }} alt="about placeholder" />
            <Image fileName="placeholder.jpg" style={{ width: '100%', height: '401px' }} alt="about placeholder" />
            <div>
                <h3>The Advertising Years…</h3>
                <p>I spend some time doing print artwork, brochures, ads, magazines… you named,&nbsp; Working with an agency on the earlies of Y2K, when a designer was also brand designer,&nbsp; prepress, image correction, color correction, using a lot the path tool, Adobe Package and CMYK was my playground, and still is! #GraphicDesign&nbsp; #ProductDesign</p>
            </div>
            <Image fileName="placeholder.jpg" style={{ width: '100%', height: '401px' }} alt="about placeholder" />
            <Image fileName="placeholder.jpg" style={{ width: '100%', height: '401px' }} alt="about placeholder" />
            <div>
                <h3>Design &amp; Code for the Web</h3>
                <p>When Pencil meets Pixels, and Pixels meet Code, once I made the transition for graphic designer to web designer when the web was made of Netscape, Macromedia and Alta Vista, currently I enjoy coding a PSD or design and code my own. Sketch, Photoshop, InVision meets VSCode.</p>
            </div>
            <Image fileName="placeholder.jpg" style={{ width: '100%', height: '401px' }} alt="about placeholder" />
            <Image fileName="placeholder.jpg" style={{ width: '100%', height: '401px' }} alt="about placeholder" />
            <div>
                <h3>Other Cool Stuffs I Do</h3>
                <p>I also spend some time, with my other passion WordPress, I’m Speaker and Co-Organizer of my local community….don’t tell anybody I love to do street art, so occasionally I do some.</p>
            </div>
            <Image fileName="placeholder.jpg" style={{ width: '100%', height: '401px' }} alt="about placeholder" />
            <Image fileName="placeholder.jpg" style={{ width: '100%', height: '401px' }} alt="about placeholder" />
        </WhatIDoStyles>
        <BlogPost />
    </Layout>
);

export default WhatIDo