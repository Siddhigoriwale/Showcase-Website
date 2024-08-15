import { Link } from "react-router-dom";
import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/intro-bg1.jpg";

const HeroImg = () => {
    return(
     <div className="hero"> 
        <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
         <p> HI, I'M A SIDDHI</p>
         <h1>Web Full Stack Developer</h1>
         <div>
           <Link to="/project" className="btn">Projects</Link>
           <Link to="/contact" className="btn btn-light">Contact</Link>
         </div>
        </div>
    </div>
    );

};
export default HeroImg;