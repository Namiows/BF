import React, {useState, useEffect } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { 
  Login,
  Register,
  Home,
} from './pages'

import Provider from './context/Provider'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Switch>
          <Route exact path="/" component={ Home} />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/signup" component={ Register } />          
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
