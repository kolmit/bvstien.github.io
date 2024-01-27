import React from "react";
import { Link } from "react-router-dom";

import './ProjectTile.css';
  
class ProjectTile extends React.Component {
    view = 
        <div className="flex-column tile-container">
            <span className="section-title">Projets</span>
            <div className="tile">
                <div className="flex-column tile-desc">
                    <h1>Télécommande</h1>
                    <p>
                        Commander son PC à distance depuis un smartphone (ou n'importe quel terminal).
                    </p>
                    <Link to="/telecommande" className="flex-column view-project-button">Voir le projet</Link>
                </div>
                <div className="tile-img telecommande">

                </div>           
            </div>   
            <div className="tile">
                <div className="tile-img fitnessperfs">

                </div>
                <div className="flex-column tile-desc">
                    <h1 className="fitnessperfs-font">FitnessPerfs</h1>
                    <p>
                        Enregistrer & planifier mes entraînements, suivre ma progression...
                    </p>
                    <Link to="/fitnessperfs" className="flex-column view-project-button">Voir le projet</Link>
                </div>

            </div>
        </div>


    render() {
        return this.view; 
    }

}

export default ProjectTile;