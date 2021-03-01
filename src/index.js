import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux store imports
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';




// Create Store
const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }), // Redux logger
  applyMiddleware(logger)

); // End Store

ReactDOM.render(
  <Provider store = {storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
