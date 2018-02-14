import { combineReducers }          from 'redux';
import { reducer as formReducer }   from 'redux-form';
import { loadingBarReducer }        from 'react-redux-loading-bar'

// Reducers
import APIReducer from './API-reducer';
// Combine Reducers
var reducers = combineReducers({
    api: APIReducer,
    form: formReducer,
    loadingBar: loadingBarReducer
});

export default reducers;