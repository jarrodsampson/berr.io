import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'redux-infinite-scroll';
import '../../css/Home.css';
import * as APIService from '../../api/APIService';
import BeerDetails from '../views/BeerDetails';

class RandomBeer extends Component {

    getContent(id) {
        APIService.getBeerDetail(id);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id);
    }

    render() {
        return (
            <div className="container">

                <BeerDetails {...this.props.singleBeer} goBack={APIService.goBack} />

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    console.log("Store", store.api);
    return {
        singleBeer: store.api.singleBeer
    };
};

export default connect(mapStateToProps)(RandomBeer);
