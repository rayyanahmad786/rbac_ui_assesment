import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {
  users: [],
  roles: [],
  loading: false,
  error: null,
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;