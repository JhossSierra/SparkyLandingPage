import React from 'react'
import './background.css'



import bgImg2 from '../../img/sky2.jpg'
import Particle from '../particles/particles'

export const Background = () => {
  return (
  <>
    <Particle></Particle>
    
    <img className='backgroundImg' src={bgImg2} alt=""  />
  </>
)}
