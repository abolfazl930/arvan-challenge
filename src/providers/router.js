import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

function Router(props) {
  const { routes } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component()}
            {...props}
          />
        ))}
      </Switch>
    </Suspense>
  );
}

export default Router;
