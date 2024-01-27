import React from "react";
import  './MyProfile.css';
import me from "../ressources/me.png";

class MyProfile extends React.Component {

    render() {
        return (
            <div className="flex-row profile-container">
                <div className="flex-column profile">
                    <h1 className="name">
                        <p>Hey !</p>
                        <p>I am <span>Bastien</span>,</p>
                        <p>Full-stack web developer</p>
                    </h1>
                    <div className="flex-column contact">Contact</div>
                </div>
                <div className="flex-column picture">
                    <img src={me} alt="Bastien GOUZERCH"/>
                </div>
            </div>
        );
    }

}

export default MyProfile;