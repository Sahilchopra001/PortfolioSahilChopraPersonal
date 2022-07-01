import React from "react";
import './ContactTextDiv.css';
import linkedin from './linkedin_icon.png';
import mail from './mail_icon.png';
import instagram from './instagram_icon.png';
import facebook from './facebook_icon.png';
import twitter from './twitter_icon.png';
import phone from './phone_icon.png';
import home_icon from './home_in_blue.png';
import back_icon from './back_in_blue.png';
import { useNavigate } from "react-router-dom";

function ContactTextDiv() {
    const navigate = useNavigate ();
    return(
        <div className="Main-ContactTextDiv">
            
            <div style={{textAlign : "left", cursor:"pointer", margin:"-1% 0 0 1%"}}>
                        <img src={home_icon} width="2.5%" onClick={()=>{navigate("/")}}/>
                        <img src={back_icon} width="2.5%" onClick={()=>{navigate("/")}}/>
                    </div>
            <div>GET IN TOUCH WITH US TO GET THE BALL ROLLING</div>
            <div style={{borderTop : "2px solid rgba(255, 255, 255, 0.671)", margin : "2% 47% 0% 47%",}}></div>
            <h1 style={{
    fontFamily: "'Prompt', sans-serif", marginTop : "3%", color : "white"}}>CONTACT SAHIL, We're waiting for you !</h1>

    <div style={{marginTop : "1.5%", fontSize : "90%",}}>Got a project you're excited about and think we can help you ? Contact Us</div>

    <div className="Contact_icons">
                    <a href="tel:+919888081843"><img src={phone} width="40px" /><h5>PHONE</h5><h6>+91 9888081843</h6></a>
                    
                    <a href="mailto:sahil.chopra025@gmail.com"><img src={mail} width="40px" /><h5>EMAIL</h5><h6>sahil.chopra025</h6></a>

                    <a href="https://www.linkedin.com/in/sahil-chopra-op/"><img src={linkedin} width="40px"/><h5>LINKEDIN</h5><h6>sahil-chopra-op</h6></a>
                    
                    
                    <a href="https://www.facebook.com/sahil.chopra.1291421/"><img src={facebook} width="40px"/><h5>FACEBOOK</h5><h6>Sahil Chopra</h6></a>

                    <a href="https://www.instagram.com/sahilchopra.op/"><img src={instagram} width="40px" /><h5>INSTAGRAM</h5><h6>sahilchopra.op</h6></a>
                    
                    <a href="https://twitter.com/sahilch99405779"><img src={twitter} width="40px"/><h5>TWITTER</h5><h6>sahilch99405779</h6></a></div>
            </div>
    );
}

export default ContactTextDiv;