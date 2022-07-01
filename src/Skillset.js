import React,{Component} from "react";
import './Skillset.css';
import Skillset_img from "./Skillset_img";
import Skillset_text from "./Skillset_text";

class Skillset extends Component {
    render() {
        return( 
            <div className="Main-Skillset">
                <Skillset_text />
                <Skillset_img />
            </div>
        );
    }
}

export default Skillset;