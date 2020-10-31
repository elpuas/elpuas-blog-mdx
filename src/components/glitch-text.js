import React from 'react'
import '../utils/glitch.css'

const GlitchText = ( {text, dataText } ) => (
    <div className="glitch" data-text={dataText}>
        {text}
    </div>
)

export default GlitchText