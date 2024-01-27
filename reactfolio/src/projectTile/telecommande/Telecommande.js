import React from "react";
import "./Telecommande.css";
import ScrollToTop from "../../utils/ScrollToTop";

import telecommandepng from "../../ressources/projects/telecommande/telecommande.png";
import shutdown from "../../ressources/projects/telecommande/shutdown.png";
import shutdown_timer from "../../ressources/projects/telecommande/shutdown_timer.png";
import volumeslider from "../../ressources/projects/telecommande/volumeslider.png";
import volumeslider_win from "../../ressources/projects/telecommande/volumeslider_win.png";
import volumemute_win from "../../ressources/projects/telecommande/volumemute_win.png";

class Telecommande extends React.Component {
    render() {
        return (
            <div className="project-container">
                <ScrollToTop />
                <div className="flex-row card">
                    <div className="left-panel">
                        <img className="project-img" src={telecommandepng} alt="Télécommande" />
                    </div>
                    <div className="flex-column right-panel">
                        <div className="title">Objectif</div>
                        <div className="separator"></div>
                        <p>
                            Commander son PC à distance depuis son smartphone.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="flex-column double-img-header">
                        <div className="title2">Eteindre son PC ou le mettre en veille</div>
                    </div>
                    <div className="flex-row double-img">
                        <div>
                            <img className="project-img" src={shutdown} alt="Shutdown" />
                        </div>
                        <div className="arrow"></div>
                        <div>
                            <img className="project-img" src={shutdown_timer} alt="Windows notification" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="flex-column double-img-header">
                        <div className="title2">Contrôler le volume !</div>
                    </div>
                    <div className="flex-row double-img">
                        <div>
                            <img className="project-img" src={volumeslider} alt="Changer le volume !" />
                        </div>
                        <div className="arrow"></div>
                        <div>
                            <img className="project-img" src={volumeslider_win}  style={{margin: "2vh 0 2vh 0"}} alt="Windows volume" />
                            <img className="project-img" src={volumemute_win} style={{margin: "2vh 0 2vh 0"}} alt="Windows mute" />
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Telecommande;