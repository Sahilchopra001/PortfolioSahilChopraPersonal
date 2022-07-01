import React,{Component} from "react";
import './Skillset_text.css';
import { useNavigate } from "react-router-dom";

function Skillset_text(){ 
    const navigate = useNavigate();
        return(
            <div className="Main-Skillset_text">
                 <div className="Skillset_text_heading"><h1 className="heading_here" onClick={()=>{navigate("Projects_page")}}>Tech Weapons I have</h1></div>
                <div className="Skillset_text_names">
                    <button style={
                        {background : 'rgba(209,237,242,1)'}
                        }>HTML</button>
                    <button style={{
                        background:'rgba(255, 87, 51,0.2)'
                    }}>CSS</button>
                    <button style={{
                        background : 'rgba(197,180,227,0.6)'
                    }}>Bootstrap</button>
                    <button style={{
                        background : 'rgba(146,210,147,0.5)'
                    }}>Javascript</button>
                    <button style={{
                        background : 'rgba(255,127,127,0.5)'
                    }}>React JS</button>
                    <button style={{
                        background : 'rgba(63,81,181,0.3)'
                    }}>C programming</button>
                    <button style={{
                        background : 'rgba(254,216,177,0.7)'
                    }}>C++ programming</button>
                    <button style={{
                        background : 'rgba(244,241,134,0.7)'
                    }}>Wordpress</button>
                    <button style={{
                        background : 'rgba(0,188,212,0.4)'
                    }}>SQL language</button>
                    <button style={{
                        background : 'rgba(154,205,50,0.4)'
                    }}>PHP programming</button>
                    <button style={{
                        background : 'rgba(144,238,144,0.5)'
                    }}>R programming</button>
                    <button style={{
                        background : 'rgba(197,180,227,0.6)'
                    }}>Python programming</button>
                    <button style={{
                        background : 'rgba(144,238,144,0.5)'
                    }}>JAVA programming</button>
                    <button style={{
                        background : 'rgba(244,67,54,0.4)'
                    }}>Linux Basics</button>
                    <button style={{
                        background : 'rgba(255, 87, 51,0.3)'
                    }}>Cyber Security</button>
                    <button style={{
                        background : 'rgba(255,127,127,0.6)'
                    }}>Data Structures in C++</button>
                    <button style={{
                        background : 'rgba(255,240,31,0.5)'
                    }}>Trading</button>
                    <button className="LearnMorebtn" style={{fontStyle : "normal"}} onClick={()=>{navigate("/Skillset_page")}}><h5>Learn More About my Skillset...</h5></button>
                </div>
            </div>
        )
    }


export default Skillset_text;