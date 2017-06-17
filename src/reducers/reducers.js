import { combineReducers } from 'redux';

// Reducers
import APIReducer from './API-reducer';

// Combine Reducers
var reducers = combineReducers({
    api: APIReducer
});

export default reducers;