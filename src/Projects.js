import React,{Component} from "react";
import './Projects.css'; 
import Project_one from "./Project_one";
import Project_two from "./Project_two";
import Project_three from "./Project_three";
import { useNavigate } from "react-router-dom";

function Projects(){
    const navigate = useNavigate();
        return(
            <div className="Main-Projects">
                <h1 onClick={()=>{navigate("/Projects_page")}}>MY RECENT PROJECTS</h1>
                <div className="super-div">
                    <Project_one />
                    <Project_two />
                    <Project_three />
                </div>
            </div>
        );
    }

export default Projects;