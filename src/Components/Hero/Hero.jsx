import React from "react";
import './Hero.css'
import { Link } from 'react-router-dom'
import Iphone from "../../assets/iphone3.png"
const Hero = () => {
    return ( 
        <div className="hero p-5">
        <div className="details">
            <h4>Buy and Sell <br /><span>Cryptocurrency</span><br />Easily with Bank Transfer </h4>
            <button><Link to='/login' >Trade Crypto</Link></button>
        </div>
         <div className="images">
            <img src={Iphone} alt="/" className="img-fluid"/>
        </div> 
        </div>
     );
}
 
export default Hero;