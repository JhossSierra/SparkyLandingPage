import React from 'react'
import './artPrices.css'
import { Parallax } from 'react-scroll-parallax'

export const ArtPrices = () => {
  return (
   
    <Parallax translateX={['600px', '0px']}>
    <h2 id='artPrices'> Art Prices </h2>
    </Parallax>

  )
}
