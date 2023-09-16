import React from 'react'
import './background.css'
import { Parallax } from 'react-scroll-parallax'



import bgImg2 from '../../img/sky1.jpg'

export const Background = () => {
  return (
  <>
    <img className='backgroundImg' src={bgImg2} alt="" />
    
    <Parallax speed={0}>
    </Parallax>
    
    
      
    

</>
)}
