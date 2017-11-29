import React from 'react';
import { render } from 'react-dom';
import {articles} from './fixtures';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

render(
    <Provider store={store}>
        <App articles={articles} />
    </Provider>,
    document.getElementById('container'));