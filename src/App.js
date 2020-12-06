import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Index from './Components/Index/Index';
import Efs from './Components/Efs/Efs';
import './App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">

                    <Switch>
                        <Route exact path='/' component={Index} />
                        <Route exact path='/efs' component={Efs} />
                        <Route exact path='/efs/overview' component={Efs} />
                        <Route exact path='/efs/units' component={Efs} />
                        <Route exact path='/efs/sop' component={Efs} />
                        <Route exact path='/efs/supply' component={Efs} />
                        <Route exact path='/efs/movement' component={Efs} />
                        <Route exact path='/efs/combat' component={Efs} />
                        <Route exact path='/efs/airpower' component={Efs} />
                        <Route exact path='/efs/headquarters' component={Efs} />
                        <Route exact path='/efs/special' component={Efs} />
                        <Route exact path='/efs/weather' component={Efs} />
                        <Redirect from="/efs/efs/overview" to="/efs/overview" />
                        <Redirect from="/efs/efs/units" to="/efs/units" />
                        <Redirect from="/efs/efs/sop" to="/efs/sop" />
                        <Redirect from="/efs/efs/supply" to="/efs/supply" />
                        <Redirect from="/efs/efs/movement" to="/efs/movement" />
                        <Redirect from="/efs/efs/combat" to="/efs/combat" />
                        <Redirect from="/efs/efs/airpower" to="/efs/airpower" />
                        <Redirect from="/efs/efs/headquarters" to="/efs/headquarters" />
                        <Redirect from="/efs/efs/special" to="/efs/special" />
                        <Redirect from="/efs/efs/weather" to="/efs/weather" />
                    </Switch>

                </div>
            </BrowserRouter>

        );
    }
}

export default App;
