import { Link, link } from 'react-router-dom'
import Proptypes from 'prop-types'
import { useState, useEffect } from 'react';
import './Navbar'

import CardWidget from '../CartWidget';
import NavbarInput from '../NavbarInput';

const Navbar = ({menus, children}) => {

    function toggleAnimation() {
        setTimeout(() => {
            const navbar__togglecontainer = document.getElementById("navbar__togglecontainer");
            const navbar__toggle = document.getElementById("navbar__toggle");

            navbar__togglecontainer.classList.toggle("active");
            navbar__toggle.classList.toggle("active");
        },100)
    }

    return (
        <div className="navbar">
            <div className='navbar__container'>
                <div className="navbar__logo">
                    <Link to='/'>
                        <a className='navbar__home'>HOME</a>
                    </Link>
            </div>
                <button id='navbar__toggle' onClick={toggleAnimation}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
                <div id='navbar__togglecontainer' className="navbar__menu">
                    <ul>
                        { menus && menus.map((menu, index) => {
                            const newKey = `${menu}-${index}`
                            return (
                                <li key={newKey}>
                                    <Link to={menu.href} onClick={toggleAnimation}>{menu.name}</Link>  
                                </li>
                            )      
                        })
                        }
                    </ul>
                </div>
            <div className="navbar__abajo">
                <NavbarInput />
                <CardWidget />
            </div>
        </div>
    )

}

Navbar.proptype = {
    menus: Proptypes.array.isRequired,
    children: Proptypes.element
}

export default Navbar;