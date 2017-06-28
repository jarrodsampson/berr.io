
import React, {PropTypes, Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button, Icon} from 'react-materialize';
class SearchForm extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func
    };

    handleSubmit(e) {
        console.log(e.searchText);
        window.location.replace("/search/" + e.searchText);
    }

    render() {
        const {fields: {searchText}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Field name="searchText" component="input" type="text" {...searchText} />
                <Button className="red" type="submit"><Icon>search</Icon></Button>
            </form>

        );
    }
}

SearchForm = reduxForm({
    // a unique name for the form
    form: 'searchForm',
    fields: ['searchText']
})(SearchForm);

export default SearchForm;
