import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './components/App';
import appReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
