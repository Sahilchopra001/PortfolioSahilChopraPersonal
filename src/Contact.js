import React,{Component} from "react";
import './Contact.css';
import contact_pic from './my_contact_pic.jpg';
import ContactTextDiv from "./ContactTextDiv";

class Contact extends Component {
    render() {
        return(
            <div className="Main-Contact">
                <div className="ContactPicDiv">
                <img src={contact_pic} alt="Contact_pic_here" width={"65%"}/>
                </div>
                <ContactTextDiv />
            </div>
        )
    }
}
export default Contact;