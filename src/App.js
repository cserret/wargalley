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
                        <Route exact path='/efs/weather' component={Efs} />
                    </Switch>

                </div>
            </BrowserRouter>

        );
    }
}

export default App;
