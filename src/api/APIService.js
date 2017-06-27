import store from '../Store';
import * as APIFunction from '../actions/API-data';

export function getAllBeers(page, limit) {
    return fetch("https://api.punkapi.com/v2/beers?page=" + page + "&per_page=" + limit)
        .then(response => response.json())
        .then(json => {
            console.log("Beers", json);
            store.dispatch(APIFunction.getBeerSuccess(json));
            store.dispatch(APIFunction.getPopularBeerSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getRecentBeers(page, limit) {
    return fetch("https://api.punkapi.com/v2/beers?page=" + page + "&per_page=" + limit)
        .then(response => response.json())
        .then(json => {
            console.log("Recent Beers", json);
            store.dispatch(APIFunction.getRecentBeerSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getMoreBeers(page, limit) {
    return fetch("https://api.punkapi.com/v2/beers?page=" + page + "&per_page=" + limit)
        .then(response => response.json())
        .then(json => {
            console.log("More Beers", json);
            store.dispatch(APIFunction.getMoreBeerSuccess(json));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getRandomBeer() {
    return fetch("https://api.punkapi.com/v2/beers/random")
        .then(response => response.json())
        .then(json => {
            console.log("Random Beer", json[0]);
            store.dispatch(APIFunction.getRandomBeerSuccess(json[0]));
            return json;
        })
        .catch((err) => console.log(''));
}

export function getBeerDetail(id) {
    return fetch("https://api.punkapi.com/v2/beers/" + id)
        .then(response => response.json())
        .then(json => {
            console.log("Beer Detail", json[0]);
            store.dispatch(APIFunction.getSingleBeerSuccess(json[0]));
            return json;
        })
        .catch((err) => console.log(''));
}

export function goBack() {
    window.history.back();
}
