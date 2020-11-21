import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Form from './Form'

const Routes = () => {
  return (
    <Router>
      {/* <Route path="/" component={Home} /> */}
      <Route path="/globe" component={App} />
      <Route path="/:form" component={Form} />
    </Router>
  );
}

export default Routes
