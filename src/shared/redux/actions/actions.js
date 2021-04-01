import {
  REQUEST_AUTH,
  RECIEVE_AUTH,
  FETCH_AUTH_FAILED,
  RECIEVE_USER_DATA,
  SIGN_OUT
} from "./actionTypes";

export const requestAuthData = () => {
  return {
    type: REQUEST_AUTH,
  };
};
export const fetchAuthFailed = (error) => {
  return {
    type: FETCH_AUTH_FAILED,
    payload: error,
  };
};

export const recieveAuthData = (isAuth) => {
  return {
    type: RECIEVE_AUTH,
    payload: isAuth,
  };
};

export const recieveUserData = (currentUser) => {
  return {
    type: RECIEVE_USER_DATA,
    payload: currentUser,
  };
};

export const signUserOut = () => {
  return {
    type: SIGN_OUT,
  }
}


