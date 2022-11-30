// API & Library
import React, { useEffect } from 'react';
import { AppRouter } from 'AppRouter';

// Components
import { SideBar } from 'components/commons/SideBar';

const App = () => {
  // LifeCycle
  useEffect(() => {
    console.log('[VERSION]: ', process.env.REACT_APP_VERSION);
  }, []);

  // Return
  return (
    <div className="app">
      <SideBar />
      <AppRouter />
    </div>
  );
};

export default App;
