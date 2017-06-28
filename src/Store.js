import { createStore, applyMiddleware } from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import reducers from './reducers/reducers';

const store = createStore(reducers, applyMiddleware(loadingBarMiddleware() ));
export default store;