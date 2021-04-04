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
// Move all this data objects as arrays bellow to google sheets.
const videos = [
    {
        url: 'https://www.youtube.com/embed/2FIubs9rAxA',
        title: 'WordPress Mexico',
        id: '2FIubs9rAxA',
    },
    {
        url: 'https://www.youtube.com/embed/B33I2bvt6TQ',
        title: 'GatsbyConf 2021',
        id: 'B33I2bvt6TQ',
    },
    {
        url: 'https://www.youtube.com/embed/W4cx5L12ewI',
        title: 'Codigo con Juan',
        id:'W4cx5L12ewI',
    },
    {
        url: 'https://www.youtube.com/embed/Df2AkeSS1PQ',
        title: 'JavaScript for WordPress',
        id:'Df2AkeSS1PQ',
    },
    {
        url: 'https://www.youtube.com/embed/hmVb8i4VYpY',
        title: 'Karla Campos Show',
        id:'hmVb8i4VYpY',
    },
]

const comics = [

    {
        filename: 'necrotica.png',
        alt: 'necrotica',
        id: 'comix-necrotica',
    },
    {
        filename: 'tattoo-flash.png',
        alt: 'tattoo-flash',
        id: 'tattoo-flash',
    },
    {
        filename: 'grafitty.png',
        alt: 'graffiti',
        id: 'graffiti',
    }
]

const press = [
    {
        filename: 'press-1.png',
        alt: 'brochure',
        id: 'brochure',
    },
    {
        filename: 'press-2.png',
        alt: 'flyers',
        id: 'flyers',
    },
    {
        filename: 'press-3.png',
        alt: 'logo',
        id: 'logo',
    },
    {
        filename: 'press-4.png',
        alt: 'magazine',
        id: 'magazine',
    },
]

const web = [
    {
        filename: 'web-design.png',
        alt: 'web-design',
        id: 'web-design',
    },
    {
        filename: 'web-development.png',
        alt: 'web-development',
        id: 'web-development',
    },
]

const pics = [
    {
        filename: 'wordcamp-mexico.png',
        alt: 'wordcamp-mexico',
        id: 'wordcamp-mexico',
    },
    {
        filename: 'wordcamp-sanjose.png',
        alt: 'wordcamp-sanjose',
        id: 'wordcamp-sanjose',
    },
]

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
            {
                Array.isArray( comics ) && comics.map( ( img ) => {
                    return (
                        <Image
                        key={ img.id }
                        fileName={ img.filename }
                        style={{ width: '100%', height: '401px' }}
                        alt={ img.alt}
                        />
                    )
                })
            }
            <div>
                <h3>The Advertising Years…</h3>
                <p>I spend some time doing print artwork, brochures, ads, magazines… you named,&nbsp; Working with an agency on the earlies of Y2K, when a designer was also brand designer,&nbsp; prepress, image correction, color correction, using a lot the path tool, Adobe Package and CMYK was my playground, and still is! #GraphicDesign&nbsp; #ProductDesign</p>
            </div>
            {
                Array.isArray( press ) && press.map( ( img ) => {
                    return (
                        <Image
                        key={ img.id }
                        fileName={ img.filename }
                        style={{ width: '100%', height: '401px' }}
                        alt={ img.alt}
                        />
                    )
                })
            }
            <div>
                <h3>Design &amp; Code for the Web</h3>
                <p>When Pencil meets Pixels, and Pixels meet Code, once I made the transition for graphic designer to web designer when the web was made of Netscape, Macromedia and Alta Vista, currently I enjoy coding a PSD or design and code my own. Sketch, Photoshop, Figma meets VSCode.</p>
            </div>
                {
                    Array.isArray( web ) && web.map( ( img ) => {
                        return (
                            <Image
                            key={ img.id }
                            fileName={ img.filename }
                            style={{ width: '100%', height: '401px' }}
                            alt={ img.alt}
                            />
                        )
                    })
                }
            <div>
                <h3>Other Cool Stuffs I Do</h3>
                <p>I also spend some time, with my other passion WordPress, I’m Speaker and Co-Organizer of my local community….don’t tell anybody I love to do street art, so occasionally I do some.</p>
            </div>
            {
                    Array.isArray( pics ) && pics.map( ( img ) => {
                        return (
                            <Image
                            key={ img.id }
                            fileName={ img.filename }
                            style={{ width: '100%', height: '401px' }}
                            alt={ img.alt}
                            />
                        )
                    })
                }
        </WhatIDoStyles>
        <H2>Videos</H2>
        <VideoContainer>
        {
            Array.isArray( videos ) && videos.map( ( video ) => {
                return (
                    <Video
                        key={ video.id }
                        videoSrcURL={ video.url }
                        videoTitle={ video.src }
                    />
                )
            })
        }

        </VideoContainer>
        <BlogPost />

    </Layout>
);

export default WhatIDo