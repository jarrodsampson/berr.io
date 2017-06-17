import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'redux-infinite-scroll';
import '../../css/Home.css';
import * as APIService from '../../api/APIService';
import RandomBeerDetails from '../views/RandomBeerDetails';

class RandomBeer extends Component {

    getContent() {
        APIService.getRandomBeer();
    }

    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <div className="container">

                <RandomBeerDetails {...this.props.randomBeer} goBack={APIService.goBack} />

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    console.log("Store", store.api);
    return {
        randomBeer: store.api.randomBeer
    };
};

export default connect(mapStateToProps)(RandomBeer);
