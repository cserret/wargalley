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

    changeRoute = () => {
    
    }

    render() {
        return (
            <div className="efs">
                <Header />
                <Switch>
                    <Route exact path='/efs' render={(props) => <EfsHome {...props} />} />
                    <Route path='/efs/overview' render={(props) => <Overview {...props}  />} />
                    <Route path='/efs/units' render={(props) => <Units {...props} />} />
                    <Route path='/efs/sop' render={(props) => <Sop {...props} />} />
                    <Route path='/efs/supply' render={(props) => <Supply {...props} />} />
                    <Route path='/efs/movement' render={(props) => <Movement {...props} />} />
                    <Route path='/efs/combat' render={(props) => <Combat {...props} />} />
                    <Route path='/efs/airpower' render={(props) => <Airpower {...props} />} />
                    <Route path='/efs/headquarters' render={(props) => <Headquarters {...props} />} />
                    <Route path='/efs/special' render={(props) => <Special {...props} />} />
                    <Route path='/efs/weather' render={(props) => <Weather {...props} />} />
                </Switch>
                <Footer/>
            </div>
        );
    }
}