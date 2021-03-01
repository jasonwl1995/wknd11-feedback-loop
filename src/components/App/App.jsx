import React from 'react';
// import axios from 'axios';
import './App.css';

// New imports
import { HashRouter as Router, Route} from 'react-router-dom';

import FeedbackFeeling from '../FeedbackFeeling/FeedbackFeeling';
import FeedbackUnderstanding from '../FeedbackUnderstanding/FeedbackUnderstanding';
import FeedbackSupported from '../FeedbackSupported/FeedbackSupported';
import FeedbackComments from '../FeedbackComments/FeedbackComments';
import FeedbackReview from '../FeedbackReview/FeedbackReview';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path= "/">
          <FeedbackFeeling />
        </Route>

        <Route path= "/understanding">
          <FeedbackFeeling />
        </Route>

        <Route path= "/support">
          <FeedbackFeeling />
        </Route>

        <Route path= "/comment">
          <FeedbackFeeling />
        </Route>

        <Route path= "/review">
          <FeedbackFeeling />
        </Route>

      </Router>

    </div>
  );
}

export default App;
