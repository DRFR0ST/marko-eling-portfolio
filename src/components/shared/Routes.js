import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Home, ErrorPage } from "components/pages"

const Routes = () => {
  return (
    <Router basename="/">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={ErrorPage} />
        </Switch>
    </Router>
  );
}

export default Routes;
