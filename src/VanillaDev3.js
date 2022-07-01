import React, {Component} from "react";
import './VanillaDev3.css';
import img from './Css_icon_here.png';

class VanillaDev3 extends Component {
    render(){
        return(
            <div className="Vanilla-Main">
                <div className="Vanilla_coding_div"> 
                <img src={img} alt="Visual_image_here" width={'35%'} className="Vanilla_img"/>
                <h2 className="Vanilla_heading">HTML, CSS</h2><h2 className="Vanilla_heading">Vanilla JS Web<h2 className="Vanilla_heading"></h2>Developer</h2> 
                </div>
                <h1>78%</h1>
</div>
        )
    }
}

export default VanillaDev3;