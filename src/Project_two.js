import React,{Component} from "react";
import './Project_two.css';
import img from './Elite_Homes_ss.png';
import { useNavigate } from "react-router-dom";

function Project_two(){
    const navigate = useNavigate();
        return(
            <div className="Main-Project_two">
                <img src={img} alt="Elite Homes_ss_here" width={"85%"} height={"65%"} onClick={()=>{navigate("/Projects_page")}}/>
                <div className="Project_two_text">
                <h1 onClick={()=>{navigate("/Projects_page")}}>Elite Homes</h1>
                <p>Elite Homes is a website created with the help of HTML, CSS and some basic Javascript, Which helps the user for buying required items for building his home from first brick to final touch.</p></div>
            </div>
        )
    }

export default Project_two;