import React from "react";
import { Redirect, Switch } from 'react-router-dom';
import { useSelector } from "react-redux";

import HomeRouter from './pages/HomeRouter';
import Auth from './pages/Auth';
import PrivateRoute from './shared/globals/PrivateRoute';


function App() {
  const { isLoggedIn } = useSelector((state) => state.authReducer);

  return (
    <Switch>
      <PrivateRoute path="/home" condition={isLoggedIn} redirectRoute="/auth">
        <HomeRouter/>
      </PrivateRoute>
      <PrivateRoute exact path="/auth" condition={!isLoggedIn} redirectRoute="/home">
        <Auth/>
      </PrivateRoute>
      <Redirect from="/" to="/home" />
    </Switch>
  );
}



export default App;
