import React, { Component } from 'react'
import { connect }          from 'react-redux'
import                           '../../css/build/Home.css'
import * as APIService      from '../../api/APIService'
import BeerDetails          from '../views/BeerDetails'

class RandomBeer extends Component {

    getContent() {
        APIService.getRandomBeer();
    }

    componentDidMount() {
        this.getContent();
    }

    render() {
        return (
            <div>
                <div className="pushDown col s12"></div>
                <div className="container">
                    <BeerDetails {...this.props.randomBeer} goBack={APIService.goBack} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    return {
        randomBeer: store.api.randomBeer
    };
};

export default connect(mapStateToProps)(RandomBeer);
