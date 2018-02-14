import React, { Component } from 'react'
import { connect }          from 'react-redux'
import                           '../../css/build/BeerDetails.css'
import                           '../../css/libs/Animate.css'
import * as APIService      from '../../api/APIService'
import BeerDetails          from '../views/BeerDetails'

class BeerDetail extends Component {

    getContent(id) {
        APIService.getBeerDetail(id);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <div className="pushDown col s12"></div>
                <div className="container">

                    <BeerDetails {...this.props.singleBeer} goBack={APIService.goBack} />

                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    return {
        singleBeer: store.api.singleBeer
    };
};

export default connect(mapStateToProps)(BeerDetail);
