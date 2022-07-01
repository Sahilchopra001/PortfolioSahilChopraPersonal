import React,{Component} from "react";
import Footer from "./Footer";
import './Footer_part_three.css';
import linkedin from './linkedin_icon.png';
import mail from './mail_icon.png';
import instagram from './instagram_icon.png';
import facebook from './facebook_icon.png';
import twitter from './twitter_icon.png';

class Footer_part_three extends Component {
    render() {
        return(
            <div className="Main_Footer_part_three">
                <div className="Content_here">
                    <b>@ 2022 MyPortfolioHere All Rights Reserved</b>
                    <a style={{
                        margin : "0 0 0 47%"
                    }} href="https://www.linkedin.com/in/sahil-chopra-op/"><img src={linkedin} width="1.8%"/></a>
                    <a href="mailto:sahil.chopra025@gmail.com"><img src={mail} width="1.8%" /></a>
                    <a href="https://www.instagram.com/sahilchopra.op/"><img src={instagram} width="1.8%" /></a>
                    <a href="https://www.facebook.com/sahil.chopra.1291421/"><img src={facebook} width="1.8%"/></a>
                    <a href="https://twitter.com/sahilch99405779"><img src={twitter} width="1.8%"/></a>
                </div>
            </div>
        );
    }
}
 
export default Footer_part_three;