import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import flag_en from "../../../images/language_us.png";
import flag_fr from "../../../images/language_fr.png";

export default class Header extends Component {
    state = {
    }

    componentDidMount = () => {

    }

    componentWillReceiveProps(nextProps) {
       
    }

    componentDidUpdate = () => {

    }

    scrollToTop = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    }

    render() {
        return (

            <div className="header">
                <div className="logo-container"></div>
                <div className="subheader">
                    <div className="intro"><span className="intro-span" onClick={this.scrollToTop}>EAST FRONT SERIES<span className="tm">™</span></span></div>
                    <div className="intro2">WAR ON THE EASTERN FRONT, 1941</div>
                    <div className="flags">
                    </div>

                    <div className="appmenu">
                        <div className="line1">
                            <NavLink exact={true} activeStyle={{ color: '#DDDD01' }} to="/efs">HOME</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/overview">OVERVIEW</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/units">UNITS</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/sop">SEQUENCE OF PLAY</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/supply">SUPPLY</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/movement">MOVEMENT</NavLink>
                        </div>    
                        <div className="line2">
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/combat">COMBAT</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/airpower">AIRPOWER</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/headquarters">HEADQUARTERS</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/special">SPECIAL UNITS</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/weather">WEATHER</NavLink>
                        </div> 
                    </div>

                </div>
            </div>
        );
    }
}