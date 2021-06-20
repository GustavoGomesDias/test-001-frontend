import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Sales from '../pages/Sales';
import Acquisitions from '../pages/Acquisitions';
import Page404 from '../pages/Page404';
import RegisterAcquisition from '../pages/RegisterAcquisition';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sales" component={Sales} />
      <Route exact path="/acquisitions" component={Acquisitions} />
      <Route
        exact
        path="/register/acquisition"
        component={RegisterAcquisition}
      />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
