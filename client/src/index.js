import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppContainer from './containers/app_container';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';

const main = (
    <Provider store={store}>
        <AppContainer />
    </Provider>
)

ReactDOM.render(main, document.getElementById('root'));
registerServiceWorker();
