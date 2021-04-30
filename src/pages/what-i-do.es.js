import React from 'react'
import Layout from '../components/layout.es'
import SEO from '../components/seo'
import Image from '../components/image'
import BlogPost from '../components/blog-post.es'
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
            <H2>Siempre me han atraído todas las formas de arte o expresión, y toda mi vida a girado en torno a ello, esta es una selección de mis trabajos desde mis primeras etapas hasta la época más reciente.</H2>
            <WhatIDoStyles>
                <div>
                <h3> Llamemolo el principio ... </h3>
                    <p> Siempre me ha gustado dibujar, gran fan de personajes oscuros como Wolverine, HellBoy, Spawn… en algún momento un grupo de ilustradores nos reunimos y lanzamos el primer cómic en Costa Rica, llamado Camaleon Comix, donde cree mi mas querido personaje... Necrotica, en ese momento tambien comencé a experimentar con algo de arte callejero (mis primeros grafitis) y más recientemente, cuando me entro en el mundo de los tatuajes, ocasionalmente hice flash art para mis amigos. </p>
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
                <h3> Mis años en el mundo de la publicidad... </h3>
                    <p> Dedique el inicio de mi carrera a hacer arte impreso, folletos, anuncios, revistas ... todo lo que se le pueda ocurrir, &nbsp; Trabaje con una agencia a principios del año 2000, en los tiempos en que uno también era diseñador de marca, &nbsp; preimpresión, corrección de imagen, corrección de color, use mucho el Path Tool, Adobe Package y CMYK era mi campo de juego, ¡y todavía lo es! #DiseñoGráfico &nbsp; #ProductDesign </p>
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
                <h3> Diseño y Código para la Web </h3>
                    <p> Cuando el lápiz se encuentra con los píxeles y los píxeles se encuentran con el código, una vez que hice la transición de diseñador gráfico a diseñador web y cuando la web estaba hecha de Netscape, Macromedia y Alta Vista, actualmente disfruto codear un PSD o diseñando y codificando el mío. Sketch, Photoshop, Figma se encuentra con HTML, CSS y JavaScript.</p>
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
                <h3> Otras cosas interesantes que hago </h3>
                    <p> También paso algo de tiempo, con mi otra pasión WordPress, soy conferencista y co-organizador de mi comunidad local… aun disfruto hacer arte callejero, así que de vez en cuando hago algo. </ p >
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
    query VideosQueryEs {
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