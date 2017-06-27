import React, { Component } from 'react';
import { connect } from 'react-redux';
//import InfiniteScroll from 'redux-infinite-scroll';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import PopularBeerList from '../views/PopularBeerList';
import BeerFocus from '../views/BeerFocus';
import { Parallax } from 'react-parallax';

class Home extends Component {

    getContent() {
        APIService.getAllBeers(1, 20);
        APIService.getRandomBeer();
    }

    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <div className="">
                <DocumentTitle title={"Berr.IO"} />
                <Parallax className="banner" bgImage="assets/images/homeBg.jpg" strength={400} />
                <h2>Popular Beers</h2>
                <PopularBeerList beers={this.props.popularBeers} />
                <h2>Beer Focus</h2>
                <BeerFocus {...this.props.randomBeer} />
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        popularBeers: store.api.popularBeers,
        randomBeer: store.api.randomBeer
    };
};

export default connect(mapStateToProps)(Home);
