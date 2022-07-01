import React,{ Component} from "react";
import './Footer.css';
import Footer_part_one from "./Footer_part_one";
import Footer_part_two from "./Footer_part_two";
import Footer_part_three from "./Footer_part_three";

class Footer extends Component {
    render() {
        return(
            <div className="Main_Footer">
                <Footer_part_one />
                <Footer_part_two />
                <Footer_part_three />
            </div>
        );
    }
}

export default Footer;