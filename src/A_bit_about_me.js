import React, {Component} from "react";
import './A_bit_about_me.css';
import img from './About_me_img.png';
import img1 from './man_in_blue.png';
import { useNavigate } from "react-router-dom";

function A_bit_about_me(){
    const navigate = useNavigate();
        return (
            <div className="Main_about">
                <div className="About_phone_pic">
                    <img src={img} alt="phone_pic_here" width={"76%"} className="phone_pic"/>
                </div>
                <div className="About_text">
                    <h6>WHO IS SAHIL CHOPRA ?</h6>
                <h1><img src={img1} alt="about_me_pic" width={"7%"}/>A Bit About Me</h1>
                <p className="about_para">I would like to define me as Motivational, Inspirational, a 18 years youth front-end web developer who is very progressive, consistent and undertands today's generation demands, requirements and solutions.</p>
                <p className="about_para">My main goal doing any work is to learn and exploring new things. I am a 2nd year computer science engineering student and a front-end web development with HTML, CSS, Javascript and React JS. I focuses on writing clean, elegant and effiecient code that speaks.</p>
                <button className="LearnMorebtn" onClick={()=>{navigate("/About")}}><h4>Learn More About me . . . .</h4></button>
                </div>
            </div>
        );
    }

export default A_bit_about_me;