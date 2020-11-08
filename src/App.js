import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Tasks } from './features/tasks/TasksPage/index';
import { Author } from './features/author/index'
import { Nav } from './common/Nav';
import { SingleTaskPage } from './features/tasks/SingleTaskPage';


export default () => {
    return <HashRouter>
        <Nav/>
        <Switch>
            <Route exact path="/">
                <Tasks />
            </Route>
            <Route path="/zadania/:id">
                <SingleTaskPage />
            </Route>
            <Route path="/zadania">
                <Tasks />
            </Route>
            <Route path="/autor">
                <Author />
            </Route>

        </Switch>
    </HashRouter>
};
