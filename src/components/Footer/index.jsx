import React from 'react';
import './style.scss';
import Twitter from '../../img/twitter.png';
import Facebook from '../../img/facebook.png';
import LinkedIn from '../../img/linkedin.png';
import Email from '../../img/email.png';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="content">
                <div>
                    Call us at 111-222-3333<br />for more information
                </div>
                <div>
                    Social Share
                    <ul>
                        <li><a><img src={Twitter} alt="Twitter" /></a></li>
                        <li><a><img src={Facebook} alt="Facebook" /></a></li>
                        <li><a><img src={LinkedIn} alt="LinkedIn" /></a></li>
                        <li><a><img src={Email} alt="Email" /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
