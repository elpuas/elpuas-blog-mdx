import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ( { fileName, alt, style  } ) => {
  const { allImageSharp } = useStaticQuery( graphql`
    query {
      allImageSharp {
        nodes {
          fluid(fit: COVER, maxWidth: 1024, maxHeight: 800) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
)

  const fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName).fluid

  return (
    <figure>
      <Img fluid={fluid} alt={alt} style={style} />
    </figure>
  )
}

export default Image
