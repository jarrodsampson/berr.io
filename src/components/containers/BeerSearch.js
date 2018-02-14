import React, { Component }     from 'react';
import { connect }              from 'react-redux';
import DocumentTitle            from 'react-document-title';
import                               '../../css/build/BeerList.css';
import * as APIService          from '../../api/APIService';
import BeerSearchListResults    from '../views/search/BeerSearchListResults';
import SearchLayout             from '../layouts/SearchLayout';

class BeerSearch extends Component {

    getContent(search) {
        APIService.searchByName(search);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.searchTerm);
    }

    render() {
        return (
            <div className="max-width">
                <DocumentTitle title={(this.props.match.params.searchTerm || "Search") + " - Berr.IO"} />
                <div className="pushDown col s12"></div>
                <div className="row">
                    <div className="col s12">
                        <SearchLayout onSubmit={this.submit} />
                        <p>Results for {this.props.match.params.searchTerm} - {this.props.beerSearchByName.length} found.</p>
                    </div>
                </div>
                <BeerSearchListResults beers={this.props.beerSearchByName} />
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    return {
        beerSearchByName: store.api.beerSearchByName
    };
};

export default connect(mapStateToProps)(BeerSearch);
