import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'redux-infinite-scroll';
import '../../css/Home.css';
import * as APIService from '../../api/APIService';
import {
    NavLink
} from 'react-router-dom'
import BeerList from '../views/BeerList';

var page = 1;
var limit = 80;

class Home extends Component {

    getContent() {
        APIService.getAllBeers(1, 80);
    }

    _loadMore() {
        page += 1;
        //APIService.getMoreBeers(page, limit);
        //this.props.dispatch(APIService.getMoreBeers(page, limit))
    }

    componentDidMount() {
        this.getContent();
    }

    _renderMessages() {
        return this.props.beerList.map((beer, i) =>  {
            return(
                <div key={beer.id}>
                    <NavLink to={"/beer/" + beer.id}>
                        {beer.name}
                    </NavLink>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="container">

                <InfiniteScroll
                    items={this._renderMessages()}
                    loadMore={this._loadMore.bind(this)}
                />

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    console.log("Store", store.api);
    return {
        beerList: store.api.beerList
    };
};

export default connect(mapStateToProps)(Home);
