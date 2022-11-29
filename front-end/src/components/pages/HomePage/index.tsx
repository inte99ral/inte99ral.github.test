// API & Library
import React from 'react';

export const HomePage = () => {
  // Init
  const version: string = process.env.REACT_APP_VERSION || '0.00v';

  // Return
  return (
    <>
      <div>홈</div>
      <div>{version}</div>
    </>
  );
};
