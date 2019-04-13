import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
                    </Switch>

                </div>
            </BrowserRouter>

        );
    }
}

export default App;
