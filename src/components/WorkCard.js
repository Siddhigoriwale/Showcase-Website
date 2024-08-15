import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";
import React from "react";
import pro1 from "../assets/project1.png.jpg";

const WorkCard = (props) => {
    return (
        <div className="project-card"> 
           <img src={props.imgsrc} alt="image"/>
            <h2 className="project-title"> {props.title}
            </h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.View} className="btn"> View </NavLink>
                </div>

            </div>
            </div>
     
    );
   
};
export default WorkCard;