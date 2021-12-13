import React from 'react'

import { StyledBackground } from './StyledBG'

export default function Background({children}) {
    return (
        <StyledBackground>
         {children}
        </StyledBackground>
    )
}
