import React, { Component } from 'react';
import './Efs.scss';
import { Route, Switch } from 'react-router-dom';
import EfsHome from './EfsHome/EfsHome';
import Weather from './Weather/Weather';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default class Efs extends Component {

    state = {
        language: 'en'
    }

    componentDidMount = () => {
        let currentLanguage = localStorage.getItem('language');
        if( currentLanguage ) {
            this.setState({language: currentLanguage});
        }
    }

    changeLanguage = (language) => {
        this.setState({language: language});
        window.document.documentElement.lang = language;
        localStorage.setItem('language',language);
    }

    render() {
        return (
            <div className="efs">
                <Header language={this.state.language} changeLanguage={this.changeLanguage} />
                <Switch>
                    <Route exact path='/efs' render={(props) => <EfsHome {...props} language={this.state.language}/>} />
                    <Route path='/efs/weather' render={(props) => <Weather {...props} language={this.state.language}/>} />
                </Switch>
                <Footer  language={this.state.language}/>
            </div>
        );
    }
}