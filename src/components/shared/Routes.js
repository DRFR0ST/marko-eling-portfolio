import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, ErrorPage } from "components/pages"

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={ErrorPage} />
        </Switch>
    </Router>
  );
}

export default Routes;
