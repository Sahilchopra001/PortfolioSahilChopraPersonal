import React, {Component} from "react";
import './FrontPage.css'
import LeftContainer from "./LeftContainer";
import MiddleContainer from "./MiddleContainer";
import RightContainer from "./RightContainer";

class FrontPage extends Component {
    render() {
        return (
            <div className="Main-Container">
                <LeftContainer />
                <MiddleContainer />
                <RightContainer />
 
                <div className={[ "circles", "yellow-big"].join(' ')}></div>
                <div className={[ "circles", "pink-small"].join(' ')}></div>
                <div className={["circles", "pink-big"].join(' ')}></div>
                <div className={["circles", "blue-small"].join(' ')}></div>
                <div className={["circles","purple-half"].join(' ')}></div>
                <div className={["circles", "red-big"].join(' ')}></div>
            </div>
        );
    }
}

export default FrontPage;