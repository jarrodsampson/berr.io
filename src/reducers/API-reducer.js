import * as types from '../actions/action-types';

const initialState = {
    beerList: [],
    randomBeer: {},
    singleBeer: {}
};


const APIReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_BEER_SUCCESS:
            return Object.assign({}, state, { beerList: action.beerList });
        case types.GET_RANDOM_BEER_SUCCESS:
            return Object.assign({}, state, { randomBeer: action.randomBeer });
        case types.GET_SINGLE_BEER_SUCCESS:
            return Object.assign({}, state, { singleBeer: action.singleBeer });
        default:

    }

    return state;

};

export default APIReducer;