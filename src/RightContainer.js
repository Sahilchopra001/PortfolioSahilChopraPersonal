import React, {Component} from "react";
import './RightContainer.css';
import img from './my_pic2.jpg'

class RightContainer extends Component {
    render(){
        return(
            <div className="right-contain">
                <img src={img} alt="my_pic_here" className="my_pic2" />
            </div>
        );
    }
}

export default RightContainer;