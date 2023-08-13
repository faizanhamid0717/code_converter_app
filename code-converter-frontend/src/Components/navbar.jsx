import React, { useState } from 'react';
import './navbar.css';
import localImage from './images/Fazu pic.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <Link to='/'>
            <div className="logo">
                <span className="logo-code">Code</span>
                <span className="logo-morpher">Swap</span>
            </div>
            </Link>
            <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
                <div className="profile-image"><img src={localImage}/></div>
                <div className="auth-buttons">
                   <span className="logo-code">Developer</span>
                   <span className="logo-morpher">Faizan Hamid</span>
                </div>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
        </nav>
    );
}

export default Navbar;
