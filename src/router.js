import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// components
import Room1 from './modules/room1/room1.component';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Room1} />
      </Switch>
    </BrowserRouter>
  );
}
