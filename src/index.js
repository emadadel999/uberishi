import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import GlobalStyle from "./shared/globals/GlobalStyle";
import rootReducer from "./shared/redux/reducers/index";
import { getAuthState, setAuthState } from "./shared/globals/MyLocalStorage";

const loggerMiddleware = createLogger();

const persistentState = getAuthState();

const store = createStore(
  rootReducer,
  persistentState,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.subscribe(() => {
  setAuthState({
    authReducer: store.getState().authReducer,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
