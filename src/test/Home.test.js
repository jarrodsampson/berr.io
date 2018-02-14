import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/containers/Home';
import store from '../Store';
import { Provider } from 'react-redux';

import { connect } from 'react-redux';
import * as APIService from '../api/APIService';
import RedditListAuthors from '../components/views/RedditListAuthors';

it('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Home /></Provider>, div);
});
