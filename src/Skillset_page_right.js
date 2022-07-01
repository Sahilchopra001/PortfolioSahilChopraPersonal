import React from "react";
import './Skillset_page_right.css';
function Skillset_page_right(){
    return(
        <div className="Main-Skillset_page_right">
            <div style={{marginRight : "30%"}}>
            <h5 className="skills_bar">
            <label>HTML Skills : </label>
            <progress value="90" max="100"></progress> 90%
            </h5>


            <h5 className="skills_bar">
            <label>CSS Skills : </label>
            <progress value="95" max="100"></progress> 95%
            </h5>

            <h5 className="skills_bar">
            <label>Bootstrap : </label>
            <progress value="90" max="100"></progress> 90%
            </h5>

            <h5 className="skills_bar">
            <label>Javascript Skills : </label>
            <progress value="85" max="100"></progress> 85%
            </h5>

            <h5 className="skills_bar">
            <label>React JS Skills : </label>
            <progress value="80" max="100"></progress> 80%
            </h5>

            <h5 className="skills_bar">
            <label>C Skills : </label>
            <progress value="75" max="100"></progress> 75%
            </h5>

            <h5 className="skills_bar">
            <label>C++ Skills : </label>
            <progress value="75" max="100"></progress> 75%
            </h5>



            </div>
        </div>
    )
}

export default Skillset_page_right;