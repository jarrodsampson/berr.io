import * as types from './action-types';

export function getBeerSuccess(beerList) {
    return {
        type: types.GET_BEER_SUCCESS,
        beerList
    };
}

export function getMoreBeerSuccess(beerListMore) {
    return {
        type: types.GET_MORE_BEER_SUCCESS,
        beerListMore
    };
}

export function getRandomBeerSuccess(randomBeer) {
    return {
        type: types.GET_RANDOM_BEER_SUCCESS,
        randomBeer
    };
}

export function getSingleBeerSuccess(singleBeer) {
    return {
        type: types.GET_SINGLE_BEER_SUCCESS,
        singleBeer
    };
}