import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from './AuthRoute';
import { MainRoute } from '../types/Screen.routes.enum';
import { ExchangeRoute } from './ExchangeRoute';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path={`${MainRoute.AUTH}/*`}
        element={<AuthRoute />}
      />
      <Route
        path={`${MainRoute.EXCHANGE}/*`}
        element={<ExchangeRoute />}
      />
    </Routes>
  );
};