import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/logon'
import Register from './pages/register'
import Profile from './pages/profile'
import NewIncident from './pages/newIncident'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/cadastro" component={Register} />
                <Route path="/perfil" component={Profile} />
                <Route path="/casos/novo" component={NewIncident} />
            </Switch>
        </BrowserRouter>);
}