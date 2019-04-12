import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                        <img src={flag_ru} alt="russian" onClick={() => this.changeLanguage('ru')} />
                    </div>
                    <span className={this.props.language === 'fr' ? 'translation-attrib' : 'block-hidden'}>
                        Traduction française fournie par Noél Haubry, nhaubry@netcourrier.com
                    </span>
                    <span className={this.props.language === 'ru' ? 'translation-attrib' : 'block-hidden'}>
                        Russian translation by Лукьянов Игорь, luckych73@gmail.com
                    </span>

                    <div className={this.props.language === 'en' ? 'appmenu' : 'block-hidden'}>
                        <div className="line1">
                            <Link to="/efs">HOME</Link>
                            <Link to="/efs/overview">OVERVIEW</Link>
                            <Link to="/efs/units">UNITS</Link>
                            <Link id="/efs/sop" to="/">SEQUENCE OF PLAY</Link>
                            <Link to="/efs/supply">SUPPLY</Link>
                            <Link to="/efs/movement">MOVEMENT</Link>
                        </div>    
                        <div className="line2">
                            <Link id="/efs/combat" to="/combat">COMBAT</Link>
                            <Link to="/efs/airpower">AIRPOWER</Link>
                            <Link to="/efs/headquarters">HEADQUARTERS</Link>
                            <Link id="/efs/sop" to="/special">SPECIAL UNITS</Link>
                            <Link to="/efs/weather">WEATHER</Link>
                        </div> 
                    </div>

                    <div className={this.props.language === 'fr' ? 'appmenu' : 'block-hidden'}>
                        <div className="line1">
                            <Link id="/efs" to="/">HOME</Link>
                            <Link to="/efs/overview">APERÇU</Link>
                            <Link to="/efs/units">UNITÉS</Link>
                            <Link id="/efs/sop" to="/">SÉQUENCE DE JEU</Link>
                            <Link to="/efs/supply">RAVITAILLEMENT</Link>
                            <Link to="/efs/movement">MOUVEMENT</Link>
                        </div>    
                        <div className="line2">
                            <Link id="/efs/combat" to="/combat">COMBAT</Link>
                            <Link to="/efs/airpower">AVIATION</Link>
                            <Link to="/efs/headquarters">QUARTIERS GÉNÉRAUX</Link>
                            <Link id="/efs/sop" to="/special">UNITÉS SPECIALES</Link>
                            <Link to="/efs/weather">METEO</Link>
                        </div> 
                    </div>




                    <div className={this.props.language === 'ru' ? 'appmenu' : 'block-hidden'}>
                        <div className="line1">
                            <Link id="/efs" to="/">HOME</Link>
                            <Link to="/efs/overview">Обзор</Link>
                            <Link to="/efs/units">Части</Link>
                            <Link id="/efs/sop" to="/">Последовательность игры</Link>
                            <Link to="/efs/supply">Снабжение</Link>
                            <Link to="/efs/movement">Движение</Link>
                        </div>    
                        <div className="line2">
                            <Link id="/efs/combat" to="/combat">Бой</Link>
                            <Link to="/efs/airpower">Авиация</Link>
                            <Link to="/efs/headquarters">Штабы</Link>
                            <Link id="/efs/sop" to="/special">Специальные части</Link>
                            <Link to="/efs/weather">Погода</Link>
                        </div> 
                    </div>

                </div>
            </div>
        );
    }
}