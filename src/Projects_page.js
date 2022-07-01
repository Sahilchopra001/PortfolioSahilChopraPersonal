import React, { Component} from "react";
import './Projects_page.css';
import Portfolio from './portfolioss.png';
import Event_O_Mania from './Event_O_Maniass.png';
import Elite_Homes from './Elite_Homes_ss.png';
import github from './github_icon.png';
import { useNavigate } from "react-router-dom";
import home_icon from './home_icon_black.png';
import back_icon from './back_icon.png';

function Projects_page(){
    const navigate = useNavigate();
        return(
            <div className="Main-Projects_page">
                <div className="Projects_page_content">

                    <div style={{textAlign : "left", cursor:"pointer"}}>
                        <img src={home_icon} width="3%" onClick={()=>{navigate("/")}}/>
                        <img src={back_icon} width="3%" onClick={()=>{navigate("/")}}/>
                    </div>
                    
                <h1>My Projects</h1>
                <h6>Expect the best, plan for the worst, and prepare to be surprised</h6>
                <div className="Projects_pic_div">

                    <div style={{flex : "1", backgroundColor : "white", marginRight : "1.5%"}}>
                        <img src={Portfolio} alt="portfolio_pic" width={"95%"}/>
                        <h2 className="project_pic_head">My Portfolio</h2>
                        <h6 className="language_text">React Javascript, HTML, CSS.</h6>
                <h5>Portfolio is a piece of design that speaks for me.</h5>
                <div className="link_div_project">
                    <div className="link_btn_project" style={{borderRight : "1px solid grey"}}>
                        <h4>Try It</h4>
                    </div>

                    <div className="link_btn_project">
                        <img src={github} alt="github pic"  width={"12%"}/>
                    </div>
                </div>
                    </div>

                    <div style={{flex : "1", backgroundColor : "white", marginRight : "1.5%"}}>
                    <img src={Elite_Homes} alt="portfolio_pic" width={"95%"}/>
                    <h2 className="project_pic_head">Elite Homes</h2>
                    <h6 className="language_text">HTML, CSS, Javascript, NOSQL, PHP.</h6>
                <h5>Elite Homes is a website which helps the user for buying required items for building his home from first brick to final touch.</h5><div className="link_div_project">
                    <div className="link_btn_project" style={{borderRight : "1px solid grey"}}>
                        <h4>Try It</h4>
                    </div>

                    <div className="link_btn_project">
                        <img src={github} alt="github pic"  width={"12%"}/>
                    </div>
                </div>
                    </div>

                    <div style={{flex : "1", backgroundColor : "white"}}>
                    <img src={Event_O_Mania} alt="portfolio_pic" width={"95%"}/>
                    <h2 className="project_pic_head">Event-O-Mania</h2>
                    <h6 className="language_text">HTML, CSS, Javascript.</h6>
                <h5>Event-O-Mania is a website which is developed for the purpose of planning Events like weddings, parties.</h5><div className="link_div_project">
                    <div className="link_btn_project" style={{borderRight : "1px solid grey"}}>
                        <h4>Try It</h4>
                    </div>

                    <div className="link_btn_project">
                        <img src={github} alt="github pic"  width={"12%"}/>
                    </div>
                </div>
                    </div>
                    

                </div>
                </div>
            </div>
        )
    }


export default Projects_page;