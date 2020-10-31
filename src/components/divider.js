import React from 'react'
import tw, { styled } from 'twin.macro';

const DividerStyles = styled.div`
    ${tw`w-3/4 pt-6 pb-6 ml-auto mr-auto`}
    border-bottom: 1px solid #4285f4;
`

export default function Divider() {
    return(
        <DividerStyles>&nbsp;</DividerStyles>
    )
}