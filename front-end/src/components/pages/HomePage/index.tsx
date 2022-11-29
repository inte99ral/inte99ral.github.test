// API & Library
import React from 'react';
import { useParams } from 'react-router-dom';

export const HomePage = () => {
  // Init
  const version: string = process.env.REACT_APP_VERSION || '0.00v';
  const { p } = useParams();

  // Return
  return (
    <>
      <div>홈</div>
      <div>version: {version}</div>
      <div>p: {p}</div>
    </>
  );
};
