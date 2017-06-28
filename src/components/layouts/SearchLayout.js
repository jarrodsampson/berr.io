
import React, {PropTypes, Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button, Icon} from 'react-materialize';
import serialize from 'form-serialize';

import * as APIService from '../../api/APIService';

class SearchForm extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func
    };

    getContent(search) {
            APIService.searchByParams(search);
    }

    handleSubmit(e) {
        let form = serialize(document.querySelector('#searchData'));
        console.log(form);
        APIService.searchByParams(form);
        //window.location.replace("/search/" + e.searchText);
    }

    render() {
        const {fields: {beer_name, abvmmin, abvmax, ibumin, ibumax, ebcmin, ebcmax, yeast, hops, malt, beforeBrew, afterBrew, food}, handleSubmit, reset, pristine} = this.props;

        return (
            <form id="searchData" onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="col s12 m6">
                    <Field name="beer_name" component="input" type="text" {...beer_name} placeholder="Name" />
                </div>
                <div className="col s12 m6">
                    <Field name="yeast" component="input" type="text" {...yeast} placeholder="Yeast" />
                </div>
                <div className="col s12 m2">
                    <Field name="abv_gt" component="input" type="text" {...abvmax} placeholder="ABV Minimum" />
                </div>
                <div className="col s12 m2">
                    <Field name="abv_lt" component="input" type="text" {...abvmmin} placeholder="ABV Maximum" />
                </div>
                <div className="col s12 m2">
                    <Field name="ibu_gt" component="input" type="text" {...ibumax} placeholder="IBU Minimum" />
                </div>
                <div className="col s12 m2">
                    <Field name="ibu_lt" component="input" type="text" {...ibumin} placeholder="IBU Maximum" />
                </div>
                <div className="col s12 m2">
                    <Field name="ebc_gt" component="input" type="text" {...ebcmax} placeholder="EBC Minimum" />
                </div>
                <div className="col s12 m2">
                    <Field name="ebc_lt" component="input" type="text" {...ebcmin} placeholder="EBC Maximum" />
                </div>
                <div className="col s12 m6">
                    <Field name="hops" component="input" type="text" {...hops} placeholder="Hop" />
                </div>
                <div className="col s12 m6">
                    <Field name="malt" component="input" type="text" {...malt} placeholder="Malt" />
                </div>
                {/*<div className="col s12 m6">
                    <Field name="brewed_before" component="input" type="text" {...beforeBrew} placeholder="Brew Start Range">
                </div>
                <div className="col s12 m6">
                    <Field name="brewed_after" component="input" type="text" {...afterBrew} placeholder="Brew End Range" />
                </div>*/}
                <div className="col s12">
                    <Field name="food" component="input" type="text" {...food} placeholder="Complimenting Food" />
                </div>
                <div className="col s12 m12">
                    <Button className="red" disabled={pristine} type="submit"><Icon>search</Icon></Button>
                    <Button className="red" disabled={pristine} onClick={reset}>Clear</Button>
                </div>
            </form>

        );
    }
}

SearchForm = reduxForm({
    // a unique name for the form
    form: 'searchData',
    fields: ['beer_name','abvmmin','abvmax','ibumin','ibumax','ebcmin','ebcmax','yeast','hops','malt','beforeBrew','afterBrew','food']
})(SearchForm);

export default SearchForm;
