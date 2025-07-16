// context/counterProvider.js

import React, { useReducer } from 'react';
import CounterContext from './counterContext';
import counterReducer, { initialState } from '../reducers/counterReducer';

export default function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}



