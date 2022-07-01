import React,{Component} from "react";
import './Project_one.css';
import img from './portfolioss.png';
import { useNavigate } from "react-router-dom";

function Project_one(){
    const navigate = useNavigate();
        return(
            <div className="Main-Project_one">
                <img src={img} alt="Portfolio_ss_here" width={"85%"} height={"65%"} onClick={()=>{navigate("/Projects_page")}}/>
                <div className="Project_one_text">
                <h1 onClick={()=>{navigate("/Projects_page")}}>My Portfolio</h1>
                <p>Portfolio is a piece of design that speaks for me. It is created with the help of languages like React JS, CSS etc.</p></div>
            </div>
        )
    }


export default Project_one;