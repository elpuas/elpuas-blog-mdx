import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'
import BlogPost from '../components/blog-post'
import Video from '../components/video'
import { comics, web, pics, press } from '../utils/images'
import { WhatIDoStyles, H2, VideoContainer } from '../utils/styles'
import { graphql } from 'gatsby'


const WhatIDo = ( { data } ) => {

    const videos = data.googleSheet.videos;

    return (
        <Layout>
            <SEO
            title="What I Do"
            description={"I always been attracted to all forms of expression, and all my life has turn into that, this is a selection of my works from my early stages to more recent time."}
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
                            videoSrcURL={ video.uRL }
                            videoTitle={ video.title }
                        />
                    )
                })
            }

            </VideoContainer>
            <BlogPost />

        </Layout>
    );
}

export const query = graphql`
    query VideosQuery {
        googleSheet {
            videos {
                uRL
                title
                id
            }
        }
    }
`

export default WhatIDo