import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import * as serviceWorker from "./serviceWorker";
import solarisTheme from "./materialComponents/solarisTheme";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const configureStore = store();

ReactDOM.render(
  <Provider store={configureStore}>
    <MuiThemeProvider theme={solarisTheme}>
      <Router>
        <Routes />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
