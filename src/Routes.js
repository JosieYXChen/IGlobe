import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Auth from './Auth';
import Home from './Home';

const Routes = () => {
  return (
    <Router>
      <Route path="/auth" component={Auth} />
      <Route path="/home" component={Home} />
      <Route path="/app" component={App} />
    </Router>
  );
}

export default Routes
