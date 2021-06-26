import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sales from '../pages/Sales';
import Acquisitions from '../pages/Acquisitions';
import Income from '../pages/Income';
import Page404 from '../pages/Page404';
import FormAcquisition from '../pages/FormAcquisition';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Acquisitions} />
      <Route exact path="/sales" component={Sales} />
      <Route exact path="/acquisitions" component={Acquisitions} />
      <Route exact path="/income" component={Income} />
      <Route exact path="/register/acquisition" component={FormAcquisition} />
      <Route exact path="/edit/acquisition" component={FormAcquisition} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
