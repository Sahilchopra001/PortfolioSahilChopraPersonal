import React,{Component} from "react";
import './Footer_part_one.css';
import img from './React_icon_here.png';
import img1 from './CSS_icon.png';
import { useNavigate } from "react-router-dom";
 
function Footer_part_one(){
    const navigate = useNavigate();
        return(
            <div className="Main_Footer_part_one">
                <div className="Main_Footer_part_one_one">
                    <h2 onClick={()=>{navigate("/About")}}>About Me</h2>
                    <p>Hey there, I am sahil ,I like to define myself as a 19 year old motivational and consistent hard working youth. I am a react website developer who believes in writing clean, elegant and useful code which describes itself. I am currently  doing B.E in computer science at chandigarh university. i Love to exploring and learning new things and really very eager to do so. I am happy you stopped by! See what i can do for you. </p>
                    
                </div>

                <div className="Main_Footer_part_one_two">
                    <h2 onClick={()=>{navigate("/Skillset_page")}}>Technologies Used</h2>
                        <p><img src={img}  width="6%"/> React Javascript</p>
                        <p><img src={img1}  width="6%"/> CSS</p>
                </div>
            </div>
        );
    }


export default Footer_part_one;