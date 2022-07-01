import React,{Component} from "react";
import './Project_three.css';
import img from './Event_O_Maniass.png';
import { useNavigate } from "react-router-dom";

function Project_three(){
    const navigate = useNavigate();
        return(
            <div className="Main-Project_three">
                <img src={img} alt="Elite Homes_ss_here" width={"85%"} height={"65%"} onClick={()=>{navigate("/Projects_page")}}/>
                <div className="Project_three_text">
                <h1 onClick={()=>{navigate("/Projects_page")}}>Event-O-Mania</h1>
                <p>Event-O-Mania is a website created with the help of HTML, CSS and Vanilla Javascript, Which is developed for the purpose of planning Events like weddings, parties.</p></div>
            </div>
        )
    }


export default Project_three;