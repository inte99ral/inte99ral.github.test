// API & Library
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Components
import { HomePage } from 'components/pages/HomePage';
import { ErrorPage } from 'components/pages/ErrorPage';

export const AppRouter = () => {
  // Return
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home*" element={<HomePage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/*" element={<Navigate replace to="/error" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
