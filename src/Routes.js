import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Auth from './Auth';
import Home from './Home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/app" component={App} />
      </Switch>
    </Router>
  );
}

export default Routes
