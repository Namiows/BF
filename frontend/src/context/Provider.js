import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import AppContext from './AppContext';

function Provider({ children }) {

  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });
  
  useEffect(() => {
    const checkLoggedIn = async () => {

      let token = localStorage.getItem("auth-token");
      if(token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:3001/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
      
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:3001/users/", {
        headers: { "x-auth-token": token },
        });

        setUserData({
          token,
          user: userRes.data,
        });
      }
    }
    
    checkLoggedIn();
    }, []);

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}

export default Provider;