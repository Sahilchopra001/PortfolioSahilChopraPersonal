import React,{Component} from "react";
import './Skillset_img.css';
import img from './Skillset_img.png';
import { useNavigate } from "react-router-dom";

function Skillset_img(){
    const navigate = useNavigate();
        return(
            <div className="Main-Skillset_img">
                <img src={img} alt="Skillset_pic_here" width={"100%"} onClick={()=>{navigate("/Contact")}} className="Skillset_img_here"/>
            </div>
        ) 
    }


export default Skillset_img;