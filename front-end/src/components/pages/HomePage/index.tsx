// API & Library
import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { useQueryString } from 'api/queryStringLibrary';

// Styles
import { StyledPage } from './style';

export const HomePage = () => {
  // Init
  // const version: string = process.env.REACT_APP_VERSION || '0.00v';
  // const location = useLocation();
  // const queryString = useQueryString(location.search);

  // Return
  return (
    <>
      <StyledPage className="home-page"></StyledPage>
    </>
  );
};
