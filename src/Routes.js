import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import App from './App';
import Form from './Form'
import Search from './Search'

const Routes = () => {
  return (
    <Router>
      {/* <Route path="/" component={Home} /> */}
      <Route path="/" component={Search} />
      <Route path="/" component={App} />
    </Router>
  );
}

export default Routes
