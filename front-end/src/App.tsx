// API & Library
import React, { useEffect } from 'react';
import { AppRouter } from 'AppRouter';

const App = () => {
  // LifeCycle
  useEffect(() => {
    console.log('[VERSION]: ', process.env.REACT_APP_VERSION);
  }, []);

  // Return
  return (
    <div className="App">
      <header className="App-header"></header>
      <AppRouter />
    </div>
  );
};

export default App;
