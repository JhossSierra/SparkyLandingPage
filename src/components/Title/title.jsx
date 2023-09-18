// import React from 'react';
import './../Title/title.css'
import Bounce from 'react-reveal/Bounce';
import sparkicito from '../../img/sparkycito.png'

function Title() {
    return (
        <>
         <div className='space'></div> 
        <div className='mainTitle'>
           
            <img src={sparkicito} className='sparkicito' alt="" />
            <Bounce>
            <h1 id='title' >Sparky <span className='Small'>art</span></h1>
            {/* <span className='duplic'>Sparky <span className='Small'>art</span></span> */}
            </Bounce>


        </div>
       {/*  <div className='space'></div> */}
        </>
    );
}

export default Title;