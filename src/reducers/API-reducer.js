import * as types from '../actions/action-types';

const initialState = {
    beerList: [],
    popularBeers: [],
    randomBeer: {
        method: {
            fermentation: {
                temp: {}
            },
            mash_temp: []
        },
        food_pairing: [],
        boil_volume: {},
        volume: "",
        ingredients: {
            hops: [],
            malt: [],
            yeast: ""
        }
    },
    singleBeer: {
        method: {
            fermentation: {
                temp: {}
            },
            mash_temp: []
        },
        food_pairing: [],
        boil_volume: {},
        volume: "",
        ingredients: {
            hops: [],
            malt: [],
            yeast: ""
        }
    }
};


const APIReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_BEER_SUCCESS:
            return Object.assign({}, state, { beerList: action.beerList });
        case types.GET_POPULAR_BEER_SUCCESS:
            return Object.assign({}, state, { popularBeers: action.popularBeerList });
        case types.GET_RANDOM_BEER_SUCCESS:
            return Object.assign({}, state, { randomBeer: action.randomBeer });
        case types.GET_SINGLE_BEER_SUCCESS:
            return Object.assign({}, state, { singleBeer: action.singleBeer });
        default:

    }

    return state;

};

export default APIReducer;