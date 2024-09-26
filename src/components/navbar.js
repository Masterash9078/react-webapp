import React from 'react';
import './navbar.css';

function Navbar({ username = 'Ashik Raj' }) {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <p className="navbar-title">Production Dashboard</p>
                <p className="navbar-welcome">Welcome, {username}</p>
                <img 
                    className='navbar-logo' 
                    src="https://c0.klipartz.com/pngpicture/377/700/gratis-png-graficos-escalables-iconos-de-computadora-graficos-de-red-portatiles-icono-de-salida.png" 
                    alt="Exit" 
                />
            </div>
        </nav>
    );
}

export default Navbar; 