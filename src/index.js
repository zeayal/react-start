import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';


import { reducer } from './redux';
import { watcherSaga } from './sagas';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();
let store = createStore(
	reducer,
	compose(applyMiddleware(sagaMiddleware))
);
// run the saga
sagaMiddleware.run(watcherSaga)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
	 <Provider store={store}>
	 	<App />
	 </Provider>, 
	 document.getElementById('root')
);
registerServiceWorker();
