import Axios from "axios";

import { BACKEND_SERVER } from "../../../shared/globals/ServerAddress";
import {
  fetchAuthFailed,
  recieveAuthData,
  recieveUserData,
  requestAuthData,
} from "./actions";

export const fetchLoginRequest = (authData) => {
  return (dispatch) => {
    dispatch(requestAuthData());
console.log(authData);
    return Axios.post(`${BACKEND_SERVER}/api/users/login`, {
      email: authData.email,
      password: authData.password,
      idRole: authData.role
    })
      .then((res) => {
        dispatch(recieveUserData(res.data.user));
        const response = res.data.responseCode;
        if(response != 200) throw new Error(`error ${response}`);
        dispatch(recieveAuthData(true));
      })
      .catch((err) => {
        const error = err.response ? err.response.data.message : err.message;
        dispatch(fetchAuthFailed(error));
      });
  };
};

export const fetchRegisterRequest = (authData) => {
  return (dispatch) => {
    dispatch(requestAuthData());
    return Axios.post(`${BACKEND_SERVER}/api/registerUser`, {
      email: authData.email,
      idRole: authData.role,
      name: authData.name,
      password: authData.password,
    })
      .then((res) => {
        dispatch(recieveUserData(res.data.user));
        const response = res.data.responseCode;
        if(response != 200) throw new Error(`error ${response}`);
        dispatch(recieveAuthData(true));
      })
      .catch((err) => {
        const error = err.response ? err.response.data.message : err.message;
        dispatch(fetchAuthFailed(error));
      });
  };
};
