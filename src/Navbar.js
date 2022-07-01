import React, {Component} from "react";
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import pdf from './SahilChopraResume.pdf';
 
function Navbar(){

    const navigate = useNavigate();
    
    function handleClickAbout() {
        navigate("/About")
    }
    function handleClickProjects() {
        navigate("/Projects_page")
    }
    function handleClickContact() {
        navigate("/Contact")
    }
    function handleClickSkillset_page() {
        navigate("/Skillset_page")
    }
        return (
            <div className="main">
            <nav className="nav">
                <h3 className="heading" onClick={()=>{navigate("/")}}>MyPortfolio</h3>
                {/* <ul>  */}<div className="full_list_nav">
                    <li className="nav_list"> 
                         <a className="about-btn" onClick={handleClickAbout}><b>About Me </b></a>
                    </li>
                    <li className="nav_list">
                        <a onClick={handleClickProjects}><b>Projects</b></a>
                        </li>
                    <li className="nav_list">
                        <a style={{color : "black"}} onClick={()=>{navigate("/")}}><b>Portfolio</b></a>
                    </li>

                    <li className="nav_list">
                        <a onClick={handleClickSkillset_page}><b>Skillset</b></a>
                    </li>

                    <li className="nav_list">
                        <a onClick={handleClickContact}><b>Contact Me</b></a>
                    </li>
                    </div>
                {/* </ul> */}
                <h4 className="resume-btn"><a href={pdf}>MyResume</a></h4>
            </nav>
            </div>
        );
    }
export default Navbar;