import React, {Component} from "react";
import './ReactDev1.css';
import img from './React_icon_here.png';

class ReactDev1 extends Component {
    render(){
        return(
            <div className="ReactDev-Main">
                <div className="React_padding_div">
                <img src={img} alt="React_image_here" width={'35%'} className="React_img"/>
                <h2 className="React_heading">React JS </h2><h2 className="React_heading">Web <h2></h2>Developer</h2> 
                </div>
                <h1>80%</h1>
            </div>
        )
    }
}

export default ReactDev1;