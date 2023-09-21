import React from 'react'
import './GoUpButton.css'
import { useState } from 'react'



export const GoUpButton = () => {

const [scroll,setScroll] = useState(0)
const []=useState()

window.addEventListener('scroll',()=>{
    setScroll(window.scrollY)  
})

if (scroll>0){
    return (
        <a className='' href="#title"><button>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
    </svg>
    
    </button></a>)}
}
