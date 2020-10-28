import React from 'react'
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';
import tw, { styled } from 'twin.macro';

const IntroHero = styled.h1`
    ${tw`mt-6`}
    text-align: center;
`;

const ParticlesStyles = styled.div`

`;

const Skull = () => (
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
                    "value": ["#4285f4", "#34A853", "#FBBC05", "#EA4335"]
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
    <IntroHero>
        <ReactTypingEffect text={['Welcome to my Personal Site.', 'I\'m Alfredo Navas better know as elPuas']} speed={200} eraseSpeed={100} />
    </IntroHero>
    <p>Web Artisan, Works with WordPress - React - Gatsby & is an Open Source Advocate.</p>
    </ParticlesStyles>
)

export default Skull