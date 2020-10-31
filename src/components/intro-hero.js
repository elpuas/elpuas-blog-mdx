import React from 'react'
import Particles from 'react-particles-js';
import GlitchText from './glitch-text';
import tw, { styled } from 'twin.macro';

const ParticlesStyles = styled.div`
    ${tw`grid max-w-4xl overflow-hidden`}
    margin:auto;
    .skull-background {
        margin-top: -15.625rem;
    }

    p {
        text-align: center;
        color: #4285f4;
    }
`;

const IntroHero = () => (
    <ParticlesStyles>
        <Particles
        width={500}
        height={600}
        className="skull-background"
        params={{
            "fps_limit": 28,
            "particles": {
                "collisions": {
                    "enable": false
                },
                "number": {
                "value": 200,
                "density": {
                    "enable": false
                }
            },

            "line_linked": {
                "enable": true,
                "distance": 40,
                "opacity": 0.4,
                "color": {
                    "value": "#4285f4"
                }
            },
            "move": {
                "speed": 0.3
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "opacity_min": 0.05,
                    "speed": 0.3,
                    "sync": false
                },
                "value": 0.4
            }
        },
        "polygon": {
            "enable": true,
            "scale": 1.5,
            "type": "inside",
            "move": {
                "radius": 10
            },
            "url": "/skull-icon.svg",
            // "inline": {
            //     "arrangement": "random-length"
            // },
            "draw": {
                "enable": false,
            },
            "color": {
                "value": "#4285f4",
            },
        },
        "retina_detect": false,
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                }
            },
            "modes": {
                "bubble": {
                    "size": 6,
                    "distance": 40
                }
            }
        },
    }} />
        <GlitchText text="ElPuas." dataText="ElPuas." />
        <p>Web Artisan, Works with WordPress - React - Gatsby & is an Open Source Advocate.</p>
    </ParticlesStyles>
)

export default IntroHero