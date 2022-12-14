import { Route } from "react-router-dom";
import PageWrapper from "../layout/PageWrapper";
import appRoutes from "./appRoutes";

const generateRoute = (routes) => {
  return routes.map((route, index) => {
    console.log("route", route.index);
    return route.index ? (
      <Route
        index
        path={route.path}
        element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
        key={index}
      />
    ) : (
      <Route
        path={route.path}
        element={
          <PageWrapper state={route.child ? undefined : route.state}>
            {route.element}
          </PageWrapper>
        }
        key={index}
      >
        {route.child && generateRoute(route.child)}
      </Route>
    );
  });
};

export const routes = generateRoute(appRoutes);
