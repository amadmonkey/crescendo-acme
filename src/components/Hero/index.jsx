import React from 'react';
import './style.scss';
import HeroImg1 from '../../img/hero1.png';

const Hero = () => {
    return (
        <div className="hero">
            <img className="banner" src={HeroImg1} alt="" />
            <div className="content">
                <div>
                    <h1>ACME Wealth Management Platforms</h1>
                    <p>Investment excellence.</p>
                    <p>Diversity of thought.</p>
                    <p>Organizational strength.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
