import React        from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
}                   from 'react-router-dom';
import Home         from './components/containers/Home';
import BeerListC    from './components/containers/BeerListC';
import RandomBeer   from './components/containers/RandomBeer';
import BeerDetail   from './components/containers/BeerDetail';
import BeerSearch   from './components/containers/BeerSearch';
import Navigation   from './components/layouts/Navigation';
import ScrollToTop  from './components/containers/ScrollToTop';

export default (
            <Router>
                <ScrollToTop>
                    <Navigation>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/list" component={BeerListC}/>
                            <Route exact path="/beer/:id" component={BeerDetail}/>
                            <Route exact path="/search" component={BeerSearch}/>
                            <Route exact path="/search/:searchTerm" component={BeerSearch}/>
                            <Route exact path="/beer-of-the-day" component={RandomBeer}/>
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Navigation>
                </ScrollToTop>
            </Router>
);