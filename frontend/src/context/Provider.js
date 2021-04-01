import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import { saveStorage, loadStorage } from '../services/localStorageFunctions';

function Provider({ children }) {
  const [user, setUser] = useState(loadStorage('user', {}));
  
  useEffect(() => {
    saveStorage('user', user)
  }, [user]);

  const contextValue = {
      //aqui vai os globalstates
      user,
      setUser,
  };

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