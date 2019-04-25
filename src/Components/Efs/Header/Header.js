import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import flag_en from "../../../images/language_us.png";
import flag_fr from "../../../images/language_fr.png";
import flag_ru from "../../../images/language_ru.png";

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

    changeLanguage = (language) => {
        this.props.changeLanguage(language);
    }

    render() {
        return (

            <div className="header">
                <div className="logo-container"></div>
                <div className="subheader">
                    <div className="intro"><span className="intro-span" onClick={this.scrollToTop}>EAST FRONT SERIES<span className="tm">™</span></span></div>
                    <div className="intro2">WAR ON THE EASTERN FRONT, 1941</div>
                    <div className="flags">
                        <img src={flag_en} alt="english" onClick={() => this.changeLanguage('en')} />
                        <img src={flag_fr} alt="french" onClick={() => this.changeLanguage('fr')} />
                        
                    </div>
                    <span className={this.props.language === 'fr' ? 'translation-attrib' : 'block-hidden'}>
                        Traduction française fournie par Noél Haubry, nhaubry@netcourrier.com
                    </span>
                    <span className={this.props.language === 'ru' ? 'translation-attrib' : 'block-hidden'}>
                        Russian translation by Лукьянов Игорь, luckych73@gmail.com
                    </span>

                    <div className={this.props.language === 'en' ? 'appmenu' : 'block-hidden'}>
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

                    <div className={this.props.language === 'fr' ? 'appmenu' : 'block-hidden'}>
                        <div className="line1">
                            <NavLink exact={true} activeStyle={{ color: '#DDDD01' }} to="/efs">HOME</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/overview">APERÇU</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/units">UNITÉS</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/sop">SÉQUENCE DE JEU</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/supply">RAVITAILLEMENT</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/movement">MOUVEMENT</NavLink>
                        </div>    
                        <div className="line2">
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/combat">COMBAT</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/airpower">AVIATION</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/headquarters">QUARTIERS GÉNÉRAUX</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/special">UNITÉS SPECIALES</NavLink>
                            <NavLink activeStyle={{ color: '#DDDD01' }} to="/efs/weather">METEO</NavLink>
                        </div> 
                    </div>




                    <div className={this.props.language === 'ru' ? 'appmenu' : 'block-hidden'}>
                        <div className="line1">
                            <Link to="/efs">HOME</Link>
                            <Link to="/efs/overview">Обзор</Link>
                            <Link to="/efs/units">Части</Link>
                            <Link to="/efs/sop">Последовательность игры</Link>
                            <Link to="/efs/supply">Снабжение</Link>
                            <Link to="/efs/movement">Движение</Link>
                        </div>    
                        <div className="line2">
                            <Link to="/efs/combat">Бой</Link>
                            <Link to="/efs/airpower">Авиация</Link>
                            <Link to="/efs/headquarters">Штабы</Link>
                            <Link to="/efs/special">Специальные части</Link>
                            <Link to="/efs/weather">Погода</Link>
                        </div> 
                    </div>

                </div>
            </div>
        );
    }
}