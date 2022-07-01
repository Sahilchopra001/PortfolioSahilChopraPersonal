import React, {Component} from "react";
import './MiddleContainer.css';
import img from './middle_my_pic3.jpg';
import { useNavigate } from "react-router-dom";

function MiddleContainer(){
    const navigate = useNavigate ();
        return(
            <div className="middle-contain">
                <img src={img} alt="my_pic" className="my_pic3" onClick={()=>{navigate("/About")}}/>
                <span className="itsme">
                <p className="hey" onClick={()=>{navigate("/About")}}>Hi, I'm <b>Sahil Chopra</b></p>
                
                <p className="dev">I'm a <b>react website developer.</b></p></span>

                <h3 className="middle-head">There are three responses to a piece of design - yes, no, and WOW! Wow is the one to aim for.</h3>
                
                <div className="ending-front-page">
                    <span className="quote">
                <p className="animp">Willing to create websites that inspires.</p></span>
                <button className="front-contact-btn" onClick={()=>{navigate("/Contact")}}>Contact Us</button>
                </div>
                </div>
        );
    }

export default MiddleContainer;