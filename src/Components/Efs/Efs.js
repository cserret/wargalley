import React, { Component } from 'react';
import './Efs.scss';
import { Route, Switch } from 'react-router-dom';
import EfsHome from './EfsHome/EfsHome';
import Overview from './Overview/Overview';
import Units from './Units/Units';
import Sop from './Sop/Sop';
import Supply from './Supply/Supply';
import Movement from './Movement/Movement';
import Combat from './Combat/Combat';
import Airpower from './Airpower/Airpower';
import Headquarters from './Headquarters/Headquarters';
import Special from './Special/Special';
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
                    <Route path='/efs/overview' render={(props) => <Overview {...props} language={this.state.language}/>} />
                    <Route path='/efs/units' render={(props) => <Units {...props} language={this.state.language}/>} />
                    <Route path='/efs/sop' render={(props) => <Sop {...props} language={this.state.language}/>} />
                    <Route path='/efs/supply' render={(props) => <Supply {...props} language={this.state.language}/>} />
                    <Route path='/efs/movement' render={(props) => <Movement {...props} language={this.state.language}/>} />
                    <Route path='/efs/combat' render={(props) => <Combat {...props} language={this.state.language}/>} />
                    <Route path='/efs/airpower' render={(props) => <Airpower {...props} language={this.state.language}/>} />
                    <Route path='/efs/headquarters' render={(props) => <Headquarters {...props} language={this.state.language}/>} />
                    <Route path='/efs/special' render={(props) => <Special {...props} language={this.state.language}/>} />
                    <Route path='/efs/weather' render={(props) => <Weather {...props} language={this.state.language}/>} />
                </Switch>
                <Footer  language={this.state.language}/>
            </div>
        );
    }
}