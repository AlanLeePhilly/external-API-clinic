import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Dashboard from './containers/dashboard'

const Routes = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute  component={Dashboard}/>
        </Route>
      </Router>
    </div>
  );
};

export default Routes;