import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Home from './components/containers/Home';
import RandomBeer from './components/containers/RandomBeer';
import BeerDetail from './components/containers/BeerDetail';
import Navigation from './components/layouts/Navigation';
export default (
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                <Navigation>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/beer/:id" component={BeerDetail}/>
                        <Route exact path="/beer-of-the-day" component={RandomBeer}/>
                        <Redirect from="*" to="/" />
                    </Switch>
                </Navigation>
            </Router>
);