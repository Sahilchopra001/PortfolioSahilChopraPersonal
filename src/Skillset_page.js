import React,{Component} from "react";
import './Skillset_page.css';
import Skillset_page_left from "./Skillset_page_left";
import Skillset_page_right from "./Skillset_page_right";
import { useNavigate } from "react-router-dom";
import home_icon from './home_in_blue.png';
import back_icon from './back_in_blue.png';

function Skillset_page(){
    const navigate = useNavigate();
        return(
            <div className="Main-Skillset_page">
                
                <div style={{textAlign : "left", cursor:"pointer", marginLeft:"1%"}}>
                        <img src={home_icon} width="2.5%" onClick={()=>{navigate("/")}}/>
                        <img src={back_icon} width="2.5%" onClick={()=>{navigate("/")}}/>
                    </div>

                <h1>MY SKILLS</h1>
                <h5 style={{marginTop : "-0.5%"}}>I like to craft beautiful and scalable web products</h5>
                <div className="Skillset_page_content">
                    <Skillset_page_left />
                    <Skillset_page_right />
                </div>
            </div>
        )
    }

export default Skillset_page; 