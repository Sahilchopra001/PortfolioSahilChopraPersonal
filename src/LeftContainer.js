import React, {Component} from "react";
import './LeftContainer.css';
import img from './my_pic4.jpg';

class LeftContainer extends Component {
    render() {
        return(
            <div className="left-contain">
                <img src={img} alt="my_pic" className="my-pic1"/>
            </div>
        );
    }
}

export default LeftContainer;