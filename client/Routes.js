import React from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import { Loading } from "./components/molecules";

const HomeLoadable = Loadable({
  loader: () =>
    import("./components/pages/home" /* webpackChunkName: 'page__home' */),
  loading: Loading
});

const ProfileLoadable = Loadable({
  loader: () =>
    import("./components/pages/profile" /* webpackChunkName: 'page__profiles' */),
  loading: Loading
});

const Routes = () => (
  <React.Fragment>
    <Route path="/" exact component={HomeLoadable} />
    <Route path="/tabs/" component={TabsLoadable} />
    <Route path="/profile/" component={ProfileLoadable} />
  </React.Fragment>
);

export default Routes;
