import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthForm from "../components/authForm/index";
import { fetchLoginRequest, fetchRegisterRequest } from "../shared/redux/actions/actionCreators";

const Auth = () => {
  const { isFetching, serverError } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const login = (values) => {
    console.log(values);
    dispatch(fetchLoginRequest(values));
  };

  const register = (values) => {
    console.log(values);
    dispatch(fetchRegisterRequest(values));
  };
  return <AuthForm onSignIn={login} onSignUp={register} loading={isFetching} serverError={serverError} />;
};

export default Auth;
