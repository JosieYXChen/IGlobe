import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Auth from './Auth';

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Auth} />
      <Route path="/home" component={App} />
    </Router>
  );
}

export default Routes
