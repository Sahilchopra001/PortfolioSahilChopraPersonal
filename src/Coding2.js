import React, {Component} from "react";
import './Coding2.css';
import img from './Coding_icon_here.png';

class Coding2 extends Component {
    render(){
        return(
            <div className="Coding-Main">
                <div className="Coding_padding_div">
                <img src={img} alt="Programming_image_here" width={'35%'} className="Coding_img"/>
                <h2 className="Coding_heading">Coding</h2><h2 className="Coding_heading">and<h2></h2>Programming</h2> 
                </div>
                <h1>78%</h1>
                </div>
        )
    }
}

export default Coding2;