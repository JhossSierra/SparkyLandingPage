import { animation } from 'react-reveal/globals';
import './links.css'
import Fade from 'react-reveal/Fade';
import {Link} from 'react'

function Links() {
    return (
        <Fade left cascade>
        <div className="linkContainer">
            <div className='Intlinks' > <a href="#artPrices" className="links">Art Prices</a></div>
            <div className='Intlinks' > <a href="/" className="links">Artist Information</a></div>
            <div className='Intlinks' > <a href="/" className="links">Social Media</a></div>
            <div className='Intlinks' > <a href="/" className="links">Ko-fi</a></div>
        </div>
        </Fade>
    );
}

export default Links;