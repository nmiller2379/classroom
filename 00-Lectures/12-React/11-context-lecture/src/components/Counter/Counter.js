// components/Counter.js

import React, { useContext } from 'react';
import CounterContext from '../../context/counterContext';
import Button from '../Button/Button';
import Display from '../Display/Display';

export default function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <Display count={state.count} />
      <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
    </div>
  );
}

