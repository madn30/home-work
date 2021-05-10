/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from "layouts/Login"
import Signup from "layouts/Signup"
//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import UserReducer from './Reducer/userReducer'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import "assets/css/material-dashboard-react.css?v=1.8.0";
import rootReducer from './Reducer/userReducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const hist = createBrowserHistory();
let store = createStore(persistedReducer)
let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </PersistGate>

  </Provider>,
  document.getElementById("root")
);
