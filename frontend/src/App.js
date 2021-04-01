import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { LoginPage, SignupPage } from './pages'

import Provider from './context/Provider'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <Switch>
            <Route exact path="/login" component={ LoginPage } />
            <Route exact path="/signup" component={ SignupPage } />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
