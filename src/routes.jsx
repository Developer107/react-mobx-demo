import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Login from './pages/Login';


class Routes extends React.PureComponent {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/profile" component={Profile} />
        </Router>
      </div>
    );
  }
}

export default Routes;
