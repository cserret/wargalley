import React from 'react';
import { Link } from 'react-router-dom';
import './Index.scss';
import logo from "../../images/easternfrontseries.png";
import hex from "../../images/snaphex.png";
import snapcounter from "../../images/snapcounter.png";
import snapcounterv2 from "../../images/snapappcounter.png";
import snapcounterv3 from "../../images/snapcounterv3.png";

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
                <div className="index-title">WARGALLEY.COM</div>
                <div className="links">
                    <Link to="/efs">
                        <div className="link">
                            <img src={logo} alt="logo" width="109" height="150" />
                            <div><span>Fan site for GMT's East Front Series</span></div>
                        </div>
                    </Link>
                    <a href="https://snaphex.com">
                        <div className="link">
                            <img className="hex-logo" src={hex} alt="logo" width="118" height="105" />
                            <div><span>Snap Map - hex grid map generator</span></div>
                        </div>
                    </a>
                    <a href="https://snaphex.com">
                        <div className="link">
                            <img className="counter-logo" src={snapcounter} alt="logo" width="118" height="118" />
                            <div><span>Snap Counter v1 (deprecated)</span></div>
                        </div>
                    </a>
                    <a href="https://snapcounter.site">
                        <div className="link">
                            <img className="counter-logo" src={snapcounterv2} alt="logo" width="118" height="118" />
                            <div><span>Snap Counter v2 (deprecated)</span></div>
                        </div>
                    </a>
                    <a href="https://snapcounter.app">
                        <div className="link">
                            <img className="counter-logo" src={snapcounterv3} alt="logo" width="118" height="118" />
                            <div><span>Snap Counter v3</span></div>
                        </div>
                    </a>
                    {/* 
                    <a href="https://snaphex.com/snap_counter">
                        <div className="link">
                            <img className="counter-logo" src={snapcounter} alt="logo" width="118" height="118" />
                            <div><span>Counter designer v1 (will soon be removed)</span></div>
                        </div>
                    </a>
                    <a href="https://snapcounter.app">
                        <div className="link">
                            <img className="counter-logo" src={snapcounter} alt="logo" width="118" height="118" />
                            <div><span>Snap App counter designer v2</span></div>
                        </div>
                    </a>
                    <a href="https://snaphex.app">
                        <div className="link">
                            <img className="counter-logo" src={snapcounterv3} alt="logo" width="118" height="118" />
                            <div><span>Snap Counter v3 (beta)</span></div>
                        </div>
                    </a> */}
                </div>
            </div>
        </div>
    );
}

export default Index;