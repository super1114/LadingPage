import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import { Providers } from "./providers";
const Router = () => {
  return (
    <Providers>
      <Suspense fallback={null}>
        <Styles />
        <Header />
        
          <Switch>
            {routes.map((routeItem) => {
              return (
                <Route
                  key={routeItem.component}
                  path={routeItem.path}
                  exact={routeItem.exact}
                  component={lazy(() => import(`../pages/${routeItem.component}`))}
                />
              );
            })}
          </Switch>
      </Suspense>
    </Providers>
  );
};

export default Router;
