import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import planeta1 from '../../img/planeta1.png'
import planeta2 from '../../img/planeta2.png'
import planeta3 from '../../img/planeta3.png'
import meteoritos from '../../img/meteoritos.png'
import './planets.css'

export const Planets1 = () => {
  return (<>
    <Parallax speed={-100} translateX={['0px', '-50px']} >   
    <img className='planets smllPlanet' src={planeta3} alt="" />
    </Parallax> 
  
    <Parallax speed={-50} translateX={['0px', '300px']}  >   
    <img className='planets meteorite' src={meteoritos} alt="" />
    </Parallax> 
    
    <Parallax speed={-20}>
    <img className='planet' src={planeta1} alt="" />  
    </Parallax>

  </>
  )
}
