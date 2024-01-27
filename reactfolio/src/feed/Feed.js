import React from "react";
import './Feed.css';
import ProjectTile from "../projectTile/ProjectTile";
import MyProfile from "../myprofile/MyProfile";
import Header from "../header/Header";

class Feed extends React.Component {
    view =
        <div>
            <Header />
            <div className="feed-container">
                <MyProfile />
                <ProjectTile />
            </div>
        </div>;


    render() {
        return this.view;
    }
}


export default Feed;