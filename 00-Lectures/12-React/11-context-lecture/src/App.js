// App.js

import React from 'react';
import CounterProvider from './context/counterProvider';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;


