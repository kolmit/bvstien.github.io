import React from 'react';
import'./Header.css';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="logo"></div>
                <ul>
                    <li>Profil</li>
                    <li>Compétences</li>
                    <li>Projets</li>
                    <li>Contact</li>
                </ul>
            </nav>

        );
    }
}

export default Header;