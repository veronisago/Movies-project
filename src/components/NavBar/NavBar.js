import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Buscador from '../Buscador/Buscador';

import './Navbar.css';

export default function NavBar() {

    const [navbarBg, SetnavbarBgt] = useState("transparent")

    const handleScroll = () => {
        window.scrollY >= 200 ? SetnavbarBgt("#0b1228") : SetnavbarBgt("transparent")
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className='navbar' style={{ background: navbarBg }}>
            <div className='logo-container'>
                <img src='/veroLogo.png' className='navBar-logo' alt='logo'/>
                <h1>VeroniMovies</h1>
            </div>
            <ul className="list">
                <li className="list-item">
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/favs" >Favoritas</NavLink>
                </li>
            </ul>
            <Buscador />
        </nav>
    )
}