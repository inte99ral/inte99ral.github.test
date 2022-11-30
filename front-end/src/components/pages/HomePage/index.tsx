// API & Library
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQueryString } from 'api/queryStringLibrary';

export const HomePage = () => {
  // Init
  const version: string = process.env.REACT_APP_VERSION || '0.00v';
  const location = useLocation();
  const queryString = useQueryString(location.search);

  // Return
  return (
    <>
      <div>홈</div>
      <div>version: {version}</div>
      <div>p: {queryString.get('p')}</div>
    </>
  );
};
