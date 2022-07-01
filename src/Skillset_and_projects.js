import React,{Component} from "react";
import './Skillset_and_projects.css';
import Skillset from "./Skillset";
import Projects from "./Projects";

class Skillset_and_projects extends Component {
    render() {
        return (
            <div className="Main-Skillset_and_projects">
                <Skillset />
                <Projects />
            </div>
        );

    } 
}

export default Skillset_and_projects;