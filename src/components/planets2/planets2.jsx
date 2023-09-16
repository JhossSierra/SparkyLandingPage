import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import planeta2 from '../../img/planeta2.png'

import './planets2.css'

export const Planets2 = () => {
  return (<>
    
    <Parallax speed={-10}>
    <img className='planet2' src={planeta2} alt="" />
    </Parallax>
    </>
  )
}
