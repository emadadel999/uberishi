import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

import AvailableTrips from "./AvailableTrips";
import ReservedTrips from "./ReservedTrips";
import NavBar from "../components/styling/MyNav";
import MyProfile from "./MyProfile";


const HomeRouter = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path={`${path}/trips`}>
          <AvailableTrips />
        </Route>
        <Route path={`${path}/yourtrips`}>
          <ReservedTrips />
        </Route>
        <Route path={`${path}/profile`}>
          <MyProfile />
        </Route>
        <Redirect from={`${path}`} to={`${path}/trips`} />
      </Switch>
    </>
  );
};

export default HomeRouter;
