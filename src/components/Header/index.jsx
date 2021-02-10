import React, { useState } from 'react';
import './style.scss';
import Logo from '../../img/logo.png';
import LogoMobile from '../../img/logo-mobile.png';
import Menu from '../../img/menu.png';

const Header = () => {
    const [active, setActive] = useState(false);
    return (
        <div className={`header-container ${active ? 'active' : ''}`}>
            <header className="main-header">
                <div className="content">
                    <div className="header-wrapper">
                        <div className="title">
                            <img className="logo main" src={Logo} />
                            <img className="logo mobile" src={LogoMobile} />
                            <div>
                                <span>Research Professional</span>
                                <span>Platform</span>
                            </div>
                        </div>
                        <nav className={`main-nav ${active ? 'active' : ''}`}>
                            <div className="web">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Insights</a></li>
                                    <li><a href="#">Events</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="mobile">
                                <button type="button" onClick={() => setActive(!active)}><img src={Menu} alt="" /></button>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="collapse-menu">
                <h1>Site Links</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Insights</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
