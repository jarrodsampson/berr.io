import React, { Component } from 'react';
import { connect }          from 'react-redux';
import DocumentTitle        from 'react-document-title';
import                           '../../css/build/Home.css';
import                           '../../css/build/BeerFocus.css';
import                           '../../css/libs/Owl.carousel.min.css';
import                           '../../css/libs/Owl.theme.default.min.css';
import * as APIService      from '../../api/APIService';
import PopularBeerList      from '../views/PopularBeerList';
import TrendingBeerList     from '../views/TrendingBeerList';
import BeerFocus            from '../views/BeerFocus';
import { Parallax }         from 'react-parallax';

import SearchForm           from '../layouts/SearchForm';

class Home extends Component {

    getContent() {
        APIService.getAllBeers(1, 20);
        APIService.getRecentBeers(3, 20);
        APIService.getRandomBeer();
    }

    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <div className="">
                <DocumentTitle title={"Berr.IO"} />
                <div className="searchHolder">
                    <Parallax className="banner" bgImage="assets/images/beerBg.jpg" strength={400} />
                    <div className="searchBox">
                        <h4 className="searchTextHeader">Search for What You Love</h4>
                        <SearchForm onSubmit={this.submit} />
                    </div>
                </div>
                <h2 className="left-padding">Popular/ Trending</h2>
                <PopularBeerList beers={this.props.popularBeers} />
                <h2 className="left-padding">Beer Focus</h2>
                <BeerFocus {...this.props.randomBeer} />
                <h2 className="left-padding">New Releases</h2>
                <TrendingBeerList beers={this.props.recentBeers} />
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    return {
        popularBeers: store.api.popularBeers,
        recentBeers: store.api.recentBeers,
        randomBeer: store.api.randomBeer
    };
};

export default connect(mapStateToProps)(Home);
