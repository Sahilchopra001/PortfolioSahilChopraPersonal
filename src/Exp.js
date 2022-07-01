import React, {Component} from "react";
import './Exp.css';
import Years from "./Years";
import ReactDev1 from "./ReactDev1";
import Coding2 from "./Coding2";
import VanillaDev3 from "./VanillaDev3";

class Exp extends Component {
    render() {
        return (
            <div className="Main_exp">
                <Years />
                <ReactDev1 />
                <Coding2 />
                <VanillaDev3 />
            </div>
        );
    }
}

export default Exp;