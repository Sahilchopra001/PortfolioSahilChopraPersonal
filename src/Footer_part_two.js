import React,{Component} from "react";
import Footer from "./Footer";
import './Footer_part_two.css';
import home from './home_icon.png';
import about from './about_icon.png';
import contact from './contact_icon.png';
import resume from './resume_icon.png';
import { useNavigate } from "react-router-dom";
import pdf from './SahilChopraResume.pdf';


function Footer_part_two(){
    const navigate = useNavigate();
        return(
            <div className="Main_Footer_part_two">
                <a onClick={()=>{navigate("/")}}><img src={home} width="1.5%"/> <b>HOME</b></a>
                <a onClick={()=>{navigate("/About")}}><img src={about} width="1.5%"/> <b>ABOUT ME</b></a>
                <a onClick={()=>{navigate("/Contact")}}><img src={contact} width="1.5%"/> <b>CONTACT US</b></a>
                <a href={pdf}><img src={resume} width="1.5%"/> <b>MyResume</b></a>
            </div>
        );
    }


export default Footer_part_two;