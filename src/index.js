import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux store imports
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = {}, action) => {
  switch (action.type) {
      case 'UPDATE_FEELING':
        console.log('state', state);
        return {...state, feelingInput: action.payload};
        break;
      case 'UPDATE_UNDERSTANDING':
        return {...state, understandingInput: action.payload};
        break;
      case 'UPDATE_SUPPORT':
        return {...state, supportedInput: action.payload};
        break;
      case 'UPDATE_COMMENTS':
        return {...state, comments: action.payload};
        break;
      case 'CLEAR_FEEDBACK_INPUT':
        return {};
        break;
      default:
        return state;
  }

};
// End feedbackReducer


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
