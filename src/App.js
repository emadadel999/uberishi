import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Auth from "./pages/Auth";
import PrivateRoute from "./shared/globals/PrivateRoute";
import AvailableTrips from "./pages/AvailableTrips";
import ReservedTrips from "./pages/ReservedTrips";
import MyProfile from "./pages/MyProfile";
import MyNav from "./components/styling/MyNav";
import Trips from "./pages/Trips";
import CreateTrips from "./pages/CreateTrips";

function App() {
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const { currentUser } = useSelector((state) => state.userReducer);
  const role = currentUser ? currentUser.idRole : 0;

  return (
    <>
      {isLoggedIn && <MyNav/>}
      <Switch>
        <PrivateRoute
          exact
          path="/trips"
          condition={isLoggedIn}
          redirectRoute="/auth"
        >
          {role === 1 ? <Trips /> : <AvailableTrips /> }
        </PrivateRoute>
        <PrivateRoute
          exact
          path="/yourtrips"
          condition={isLoggedIn}
          redirectRoute="/auth"
        >
          {role === 1 ? <CreateTrips /> : <ReservedTrips /> }
        </PrivateRoute>
        <PrivateRoute
          exact
          path="/profile"
          condition={isLoggedIn}
          redirectRoute="/auth"
        >
          <MyProfile />
        </PrivateRoute>
        <PrivateRoute
          exact
          path="/auth"
          condition={!isLoggedIn}
          redirectRoute="/home"
        >
          <Auth />
        </PrivateRoute>
        <Redirect from="/" to="/trips" />
      </Switch>
    </>
  );
}

export default App;
