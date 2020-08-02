import { Home } from "App/Pages/Home";
import { NotFound } from "App/Pages/NotFound";
import { HOME, NOT_FOUND } from "constants/routes";
import React from "react";
import { Redirect, Route, Switch } from "react-router";

export const Routes = () => (
  <Switch>
    <Route path={HOME} component={Home} exact />
    <Route path={NOT_FOUND} component={NotFound} />
    <Redirect to={NOT_FOUND} />
  </Switch>
);
