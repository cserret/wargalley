import React from 'react';
import { Link } from 'react-router-dom';
import './Index.scss';
import logo from "../../images/easternfrontseries.png";
import hex from "../../images/snaphex.png";

const Index = (props) => {
    return (
        <div className="index">
            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height="99999">
                <defs>
                    <pattern patternUnits='userSpaceOnUse' id='c' width='124.05000000000001' height='82.7' x='0' y='0' viewBox='0 0 30 20'>
                        <path d='M0,10h5l5,-10h10l5,10h5m-5,0l-5,10h-10l-5,-10' stroke='#2f2fa1' strokeWidth='0.6' strokeOpacity='0.1' fillOpacity='0' />
                    </pattern>

                </defs>
                <rect width='100%' height='100%' fill='url(#c)' />
                <rect width='120%' x='-10%' y='-10%' height='120%' fill='url(#g)' />
            </svg>
            <div className="overlay">
                <div className="index-title">WARGALLEY.COM, some links:</div>
                <div className="links">
                    <Link to="/efs">
                        <div className="link">
                            <img src={logo} alt="logo" width="109" height="150" />
                            <div><span>Fan site for GMT's East Front Series</span></div>
                        </div>
                    </Link>
                    <a href="https://hyenasofwar.com" target="_blank" rel="noopener noreferrer">
                        <div className="link">
                            <img className="hex-logo" src={hex} alt="logo" width="109" height="150" />
                            <div><span>Hex grid map generator</span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Index;