import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Tasks } from './features/tasks/TasksPage/index';
import { Author } from './features/author/index'
import { Nav } from './common/Nav';
import { SingleTaskPage } from './features/tasks/SingleTaskPage';


export default () => {
    return (
    <HashRouter>
        <Nav/>
        <Switch>
            <Route path="/zadania/:id">
                <SingleTaskPage />
            </Route>
            <Route path="/zadania">
                <Tasks />
            </Route>
            <Route path="/autor">
                <Author />
            </Route>
            <Route exact path="/">
                <Redirect to="/zadania"/>
            </Route>
        </Switch>
    </HashRouter>
    )
    
};
