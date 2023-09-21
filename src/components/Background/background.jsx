import React from 'react'
import './background.css'



import bgImg2 from '../../img/sky2.jpg'
import Particle from '../particles/particles'

export const Background = () => {
  return (
  <>
    {/* <Particle></Particle>
    <div className='rotated'>
    <Particle></Particle>
    </div> */}
    <img className='backgroundImg' src={bgImg2} alt=""  />
  </>
)}
