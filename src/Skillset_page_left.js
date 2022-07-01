import React from "react";
import './Skillset_page_left.css';
import brush from './brush_pic.png';
import Bluecoding from './coding_icon_blue.png';
import responsive from './responsive_icon.png';

function Skillset_page_left () {
    return(
        <div className="Main-Skillset_page_left">
            <div style={{flex : "0.4",}}>
            <div><img src={brush} width={"30%"}/></div>
            <div style={{marginTop : "11%",}}><img src={Bluecoding} width={"30%"}/></div>
            <div style={{marginTop : "11%",}}><img src={responsive} width={"30%"}/></div>
            </div>

            <div style={{flex : "0.8", textAlign : "left"}}>
                <div>
                    <h2 style={{fontFamily: "'Prompt', sans-serif"}}>Design + Development</h2>
                    <h5 style={{opacity : "0.7"}}>Clean, modern designs - optimized for performance and converting users to costumers.</h5>
                </div>

                <div style={{marginTop : "7.5%",}}>
                    <h2 style={{fontFamily: "'Prompt', sans-serif"}}>Technology</h2>
                    <h5 style={{opacity : "0.7"}}>Combined all the latest technologies into progressive website.</h5>
                </div>

                <div style={{marginTop : "7.5%",}}>
                    <h2 style={{fontFamily: "'Prompt', sans-serif"}}>Always Responsive</h2>
                    <h5 style={{opacity : "0.7"}}>A responsive design makes your website accessible to all users, regardless of their device.</h5>
                </div>
            </div>
        </div>
    );
}

export default Skillset_page_left;