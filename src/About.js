import React, { Component} from "react";
import './About.css';
import MyPic from './middle_my_pic3.jpg';
import instagram from './black_instagram.png';
import twitter from './black_twitter.png';
import linkedin from './black_linkedin.png';
import mail from './black_email.png';
import pdf from './SahilChopraResume.pdf';
import { useNavigate } from "react-router-dom";

import home_icon from './home_icon_black.png';
import back_icon from './back_icon.png';

function About(){
    const navigate = useNavigate ();
        return(
            <div className="Main-About">
                <div className="pinkDiv">
                    <img src={home_icon} width={"8%"} onClick={()=>{navigate("/")}} style={{margin : "1%", cursor : "pointer"}}/>

                    <img src={back_icon} width={"8%"} onClick={()=>{navigate("/")}} style={{margin : "1% 1% 1% -1%", cursor : "pointer"}}/>
                    
                    </div>

                <div className="contentDiv">
                    <div className="picDiv">
                        <img src={MyPic} alt="MY_pIc_hErE" className="my_about_pic"/>
                        <h2 className="myNameHead" style={{marginTop : "7%"}}>Sahil</h2>
                        <h2 className="myNameHead" style={{marginTop : "2%",}}>Chopra</h2>

                        <div style={{borderTop : '2px solid royalblue', margin : '8% 43% 0 43%',}}></div>
                        <p style={{fontFamily : "'Space Mono', monospace", marginTop : "9%",}}>WEBSITE DEVELOPER</p>

                        <div className="linkDiv">
                        <a href="mailto:sahil.chopra025@gmail.com" className="social_link"><img src={mail} alt="email_icon" width="7.5%" style={{margin : "0 4% 0 4%"}}/></a>
                        <a href="https://www.linkedin.com/in/sahil-chopra-op/"><img src={linkedin} alt="linkedin_icon" width="7.5%" style={{margin : "0 4% 0 4%"}}/></a>
                        <a href="https://twitter.com/sahilch99405779"><img src={twitter} alt="twitter_icon" width="7.5%" style={{margin : "0 4% 0 4%"}}/></a>
                        <a href="https://www.instagram.com/sahilchopra.op/"><img src={instagram} alt="instagram_icon" width="7.5%" style={{margin : "0 4% 0 4%"}}/></a>
                        </div>
                    </div>






                    <div className="shortAbout">
                        <h1 className="shortHead">Hello</h1>
                        <h3 className="shortH3">Here's who I am and what I do</h3>
                        <div className="buttonDiv">
                        <a className={[ "btn", "resumebtn"].join(' ')} href={pdf}>RESUME</a>
                        <button className={[ "btn", "projectsbtn"].join(' ')} onClick={()=>{navigate("/Projects_page")}}>PROJECTS</button>
                        </div>
                        <div style={{textAlign : "left", margin : "7% 7% 3% 7%"}}>
                        <h4 style={{marginBottom : "3%",}}>The Short :</h4>
                        <h5 className="short-text-about">I am happy you stopped by ! See what i can do for you. Sahil Chopra is a Web developer with HTML, CSS, Javascript and React JS. He is a 3rd year Computer Science Engineering student who is really very interested in learning and exploring new things.</h5>
                        </div>
                    </div>









                    <div className="longAbout">
                        <div style={{margin : "5% 2% 3% 3%"}}>
                    <h4 style={{marginBottom : "4%",}}>The Long : </h4> 
                        <p style={{fontSize : "80.35%",}}>I was born in Abohar, Punjab. I studied till 12th there. I got <b>89% in 10th standard in 2018</b> and <b>96% in 12th standard in 2020</b>  then i turn 18 and started to exploring new things after my 12th standard and then i move on to Chandigarh University to do Computer Science Engineering. I started to learning and exploring new technologies like C, C++, HTML, CSS, Javascript, React JS, Wordpress,SQL and many more. My hobies are Travelling, playing video games. I believe in enjoying life rather than living it.  </p>
                        <p style={{fontSize : "86%", marginTop : "3%"}}>Now i am a <b>React website developer</b> and created many college projects and my personal portfolio by myself.</p>
                        <p style={{fontSize : "86%", marginTop : "3%"}}> <b>If you are interested in working with me then click the button for direct mail me :</b> </p>
                        <div style={{textAlign : "center"}}>
                        <button className={["btn", "Hirebtn"].join(' ')} onClick={()=>window.location="mailto:sahil.chopra025@gmail.com"}>HIRE ME</button></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default About;